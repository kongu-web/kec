import data from "./kongu.json";

/**
 * Calculates the similarity between two strings (0 to 1).
 * 1 means identical, 0 means completely different.
 * Uses Levenshtein Distance algorithm for robustness against typos.
 */
function getSimilarity(s1, s2) {
  let longer = s1;
  let shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  const longerLength = longer.length;
  if (longerLength === 0) {
    return 1.0;
  }
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
 * Checks if the user input loosely matches a keyword using fuzzy logic.
 * Threshold: 0.7 (70% similarity required)
 */
function isMatch(input, keyword) {
  const words = input.toLowerCase().split(" ");
  // Check if any word in the input matches the keyword closely
  return words.some(word => getSimilarity(word, keyword.toLowerCase()) > 0.75) || 
         input.toLowerCase().includes(keyword.toLowerCase());
}

export function getCollegeReply(input) {
  const text = input.toLowerCase().trim();

  // --- 0. GREETINGS ---
  if (isMatch(text, "hello") || isMatch(text, "hi") || isMatch(text, "hey")) {
    return "Hello! I am the KEC Assistant. You can ask me about **Admissions**, **Placements**, **Courses**, or **Fees**.";
  }

  // --- 1. COURSE LISTING (Robust) ---
  if (
    isMatch(text, "courses") || 
    isMatch(text, "programs") || 
    (isMatch(text, "list") && isMatch(text, "all"))
  ) {
    let response = "Here are the courses offered at Kongu Engineering College:\n\n";
    
    response += "**🎓 Undergraduate (B.E./B.Tech)**\n";
    response += data.courses.undergraduate.map(c => `• [${c.course_name}](chat:${c.course_name})`).join("\n");
    
    response += "\n\n**🎓 Postgraduate (M.E./MBA)**\n";
    response += data.courses.postgraduate.map(c => `• [${c.course_name}](chat:${c.course_name})`).join("\n");
    
    response += "\n\n**🔬 Applied Science**\n";
    response += data.courses.applied_science.map(c => `• [${c.course_name}](chat:${c.course_name})`).join("\n");

    return response;
  }

  // --- 2. INTENT DETECTION (Scoring System) ---
  // We check which category the user is most likely talking about
  const intents = {
    admission: ["admission", "apply", "joining", "eligibility", "process", "register", "seat"],
    placement: ["placement", "job", "recruit", "salary", "package", "offer", "company", "companies"],
    fees: ["fee", "cost", "money", "price", "structure", "payment", "bills"],
    hostel: ["hostel", "accommodation", "room", "mess", "stay", "dorm"],
    contact: ["contact", "phone", "email", "number", "address", "reach"]
  };

  let bestIntent = null;
  let maxScore = 0;

  for (const [intent, keywords] of Object.entries(intents)) {
    let score = 0;
    keywords.forEach(keyword => {
      if (isMatch(text, keyword)) score++;
    });
    if (score > maxScore) {
      maxScore = score;
      bestIntent = intent;
    }
  }

  // Execute based on Best Detected Intent
  if (maxScore > 0) {
    switch (bestIntent) {
      case "admission":
        if (isMatch(text, "eligibility") || isMatch(text, "criteria")) {
          const e = data.admissions.eligibility;
          return `**${e.title}**\n\n${e.ug}\n${e.pg}\n${e.mba}`;
        }
        if (isMatch(text, "process") || isMatch(text, "how")) {
          const p = data.admissions.process;
          return `**${p.title}**\n\n${p.steps.join("\n")}`;
        }
        return `Admissions are **${data.admissions.status}**. What specific details do you need?\n\n` +
               "• [Eligibility Criteria](chat:Eligibility)\n" +
               "• [Application Process](chat:Admission Process)\n" +
               "• [Contact Admission Cell](chat:Admission Contact)";

      case "placement":
        if (isMatch(text, "companies") || isMatch(text, "recruiters")) {
          const r = data.placements.recruiters;
          return `**${r.title}**\n${r.desc}\n\n${r.list.join(", ")}`;
        }
        const p = data.placements.highlights;
        return `**${p.title}**\n${p.desc}\n\n${p.stats.map(s => `• ${s}`).join("\n")}\n\nWant to see [Top Recruiters](chat:Top Recruiters)?`;

      case "fees":
        return `**Fee Structure:**\n${data.college_info.fees}\n\nFor exact details per course, please contact the admission office.`;

      case "hostel":
        return `**Hostel Facilities:**\n${data.hostel}`;

      case "contact":
        const c = data.college_info.contact;
        return `**Contact Us:**\n📞 Phone: ${c.phone}\n📧 Email: ${c.email}\n📍 Location: ${data.college_info.location}`;
    }
  }

  // --- 3. SMART COURSE SEARCH (Deep Search) ---
  // Flattens all courses into one list for searching
  const allCourses = [
    ...data.courses.undergraduate,
    ...data.courses.postgraduate,
    ...data.courses.applied_science,
    ...data.courses.doctorate
  ];

  // Find the best matching course
  let bestMatchCourse = null;
  let highestSim = 0;

  allCourses.forEach(course => {
    // Check match with Course Name (e.g., "Computer Science")
    const nameSim = getSimilarity(text, course.course_name);
    
    // Check match with ID (e.g., "cse", "ece")
    const idSim = getSimilarity(text, course.id);
    
    // Check match with Search Tags (e.g., "coding", "machinery")
    const tagSim = course.search_tags.reduce((max, tag) => Math.max(max, getSimilarity(text, tag)), 0);

    // Get the maximum similarity found for this course
    const currentMax = Math.max(nameSim, idSim, tagSim);

    if (currentMax > highestSim) {
      highestSim = currentMax;
      bestMatchCourse = course;
    }
  });

  // If we found a good match (Similarity > 0.5 means decent match)
  if (bestMatchCourse && highestSim > 0.5) {
    return `**${bestMatchCourse.course_name}**\n\n${bestMatchCourse.description}\n\n👉 [View Official Course Page](${bestMatchCourse.link})`;
  }

  // --- 4. FALLBACK ---
  return "I'm not sure I understood that. Could you check the spelling?\n\nYou can ask about:\n• [Admissions](chat:Admissions)\n• [Placements](chat:Placements)\n• [List of Courses](chat:Courses)";
}