import data from "./kongu.json";

// --- UTILITY FUNCTIONS ---

/**
 * Clean input: removes punctuation, extra spaces, and stop words.
 * Returns an array of significant keywords.
 */
function extractKeywords(input) {
  const stopWords = ["the", "is", "a", "an", "of", "in", "to", "for", "about", "tell", "me", "what", "are", "how", "details", "structure"];
  return input
    .toLowerCase()
    .replace(/[.,/#!$%^&*;:{}=_`~()]/g, "") // Remove punctuation
    .split(/\s+/) // Split by space
    .filter(word => !stopWords.includes(word) && word.length > 1); // Remove stop words & single chars
}

/**
 * Calculates similarity using Levenshtein distance (Fuzzy Matching).
 * Returns score 0.0 to 1.0
 */
function getSimilarity(s1, s2) {
  let longer = s1;
  let shorter = s2;
  if (s1.length < s2.length) { longer = s2; shorter = s1; }
  const longerLength = longer.length;
  if (longerLength === 0) return 1.0;
  return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();
  const costs = new Array();
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0) costs[j] = j;
      else {
        if (j > 0) {
          let newValue = costs[j - 1];
          if (s1.charAt(i - 1) !== s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}

/**
 * Robust Match: Checks if ANY keyword in user input loosely matches ANY keyword in the target list.
 * Threshold: 0.8 (High confidence required)
 */
function matchIntent(userKeywords, targetKeywords) {
  return userKeywords.some(uWord => 
    targetKeywords.some(tWord => getSimilarity(uWord, tWord) > 0.8)
  );
}

// --- MAIN LOGIC ---

export function getCollegeReply(input) {
  const rawText = input.toLowerCase().trim();
  const userKeywords = extractKeywords(rawText);

  // 1. GREETINGS (Immediate response)
  const greetingWords = ["hi", "hello", "hey", "greetings", "morning", "afternoon"];
  if (matchIntent(userKeywords, greetingWords)) {
    return "Hello! I am the KEC Assistant. I can help you with **Admissions**, **Placements**, **Fees**, or specific **Course Details**.";
  }

  // 2. IDENTIFY INTENT (What is the user asking about?)
  const intents = {
    fees: ["fee", "fees", "cost", "price", "payment", "tuition", "amount"],
    placement: ["placement", "job", "recruit", "salary", "package", "offer", "companies", "hiring"],
    admission: ["admission", "apply", "eligibility", "process", "register", "seat", "application", "joining", "join"],
    hostel: ["hostel", "accommodation", "room", "mess", "stay", "dorm"],
    contact: ["contact", "phone", "email", "number", "address", "reach", "location"],
    courses: ["course", "courses", "program", "degree", "branch", "list", "departments"]
  };

  let detectedIntent = null;
  for (const [key, words] of Object.entries(intents)) {
    if (matchIntent(userKeywords, words)) {
      detectedIntent = key;
      break; 
    }
  }

  // 3. IDENTIFY COURSE (Is the user talking about a specific dept?)
  const allCourses = [
    ...data.courses.undergraduate,
    ...data.courses.postgraduate,
    ...data.courses.applied_science,
    ...data.courses.doctorate
  ];

  let detectedCourse = null;
  let maxSim = 0;

  allCourses.forEach(course => {
    // Check against Course ID (e.g., "cse") OR Course Name keywords
    // We treat the ID as a very strong keyword.
    const courseKeywords = extractKeywords(course.course_name).concat(course.id);
    
    // Check if user keywords match course keywords
    const matchCount = userKeywords.reduce((count, uWord) => {
        return count + (courseKeywords.some(cWord => getSimilarity(uWord, cWord) > 0.85) ? 1 : 0);
    }, 0);

    // If matches found, pick the one with most keyword overlap
    if (matchCount > maxSim) {
      maxSim = matchCount;
      detectedCourse = course;
    }
  });

  // Strict Threshold for Course Detection: At least 1 strong keyword match needed
  if (maxSim === 0) detectedCourse = null;


  // --- 4. COMBINATION LOGIC (Intent + Course) ---
  
  if (detectedIntent === "fees" && detectedCourse) {
     return `**Fee Structure for ${detectedCourse.id.toUpperCase()}:**\n\nWhile the general fee range is ${data.college_info.fees}, the exact fee for **${detectedCourse.course_name}** depends on your quota (Government/Management).\n\n👉 Please use the **Enquiry Now** button for the official fee quote.`;
  }
  
  if (detectedIntent === "placement" && detectedCourse) {
    // If we had specific placement data per course in JSON, we'd return it here.
    // For now, return general highlights + specific encouragement.
    return `**Placements for ${detectedCourse.id.toUpperCase()}:**\n\nStudents from **${detectedCourse.course_name}** are eligible for top recruiters.\n\n${data.placements.highlights.desc}\n\n👉 **Highest Package:** 24.7 LPA\n👉 **Top Recruiters:** Zoho, Accenture, Infosys.`;
  }


  // --- 5. INTENT RESPONSES (General) ---
  
  if (detectedIntent) {
    switch (detectedIntent) {
      case "admission":
         return `**Admissions ${data.admissions.status}**\n\n**Eligibility:**\n${data.admissions.eligibility.ug}\n\n**Process:**\n1. Register online\n2. Fill Application\n3. Counseling/Merit Selection`;
      
      case "fees":
         return "For the most accurate **Fee Structure**, please fill out the **Enquiry Form** on this page.\n\nOr contact the office: **+91 94430 20583**.";
      
      case "placement":
         const p = data.placements.highlights;
         return `**${p.title}**\n\n${p.stats.map(s => `• ${s}`).join("\n")}\n\n**Top Recruiters:** ${data.placements.recruiters.list.slice(0,4).join(", ")}...`;
      
      case "hostel":
         return `**Hostel Facilities:**\n${data.hostel}\n\n• 24/7 Wi-Fi & Medical Support\n• Hygienic Mess (Veg/Non-Veg)\n• Gym & Recreation Centers`;
      
      case "contact":
         return `**Contact Us:**\n📞 ${data.college_info.contact.phone}\n📧 ${data.college_info.contact.email}\n📍 Perundurai, Erode.`;
         
      case "courses":
         // If they just asked for "courses" without a specific name
         if (!detectedCourse) {
            return "We offer **B.E./B.Tech**, **M.E./M.Tech**, **MBA**, **MCA**, and **B.Sc** programs.\n\nWhich department are you interested in? (e.g., 'CSE', 'Food Tech', 'Mechanical')";
         }
    }
  }


  // --- 6. COURSE DESCRIPTION (Only Course detected, no intent) ---
  
  if (detectedCourse) {
    return `**${detectedCourse.course_name}**\n\n${detectedCourse.description}\n\n👉 [View Official Course Page](${detectedCourse.link})`;
  }

  // --- 7. FALLBACK (Fault Tolerance) ---
  
  return "I didn't quite catch that. Could you rephrase?\n\nYou can ask about:\n• **Admissions**\n• **Placements**\n• **Fees**\n• **Hostel**\n• Or specific courses like **CSE**, **ECE**, **B.Sc**.";
}