import React, { useState, useEffect } from "react";
import "./HostelsandAccomodations.css";
import Spinner from "../../../Spinner";
import { 
  FaUserShield, FaUserTie, FaBuilding, FaPhoneAlt, FaHome, FaBed, FaUsers,
  FaClipboardList, FaChartPie, FaUserEdit, FaConciergeBell, FaGavel, FaRupeeSign
} from "react-icons/fa";

// Importing images
import guesthouse from "../../../../assets/images/HostelandAccomodation/guesthouse.webp";
import alumni from "../../../../assets/images/HostelandAccomodation/alumni.webp";
import kaveri from "../../../../assets/images/HostelandAccomodation/kaveri.webp";
import amaravathi from "../../../../assets/images/HostelandAccomodation/amaravathi.webp";
import bhavani from "../../../../assets/images/HostelandAccomodation/bhavani.webp";
import dheeran from "../../../../assets/images/HostelandAccomodation/dheeran.webp";
import valluvar from "../../../../assets/images/HostelandAccomodation/valluvar.webp";
import ilango from "../../../../assets/images/HostelandAccomodation/ilango.webp";
import bharathi from "../../../../assets/images/HostelandAccomodation/bharathi.webp";
import kamban from "../../../../assets/images/HostelandAccomodation/Kamban.webp";
import ponnar from "../../../../assets/images/HostelandAccomodation/ponnar.webp";
import sankar from "../../../../assets/images/HostelandAccomodation/sankar.webp";
import staff from "../../../../assets/images/HostelandAccomodation/staff.webp";
import Navbar from "../../../HomePage/navbar/Navbar";
import Footer from "../../../HomePage/Footer/Footer";

const hostels = {
  "Guest Houses": ["Guest House", "Alumni Guest House"],
  "Ladies Hostels": [
    "Kaveri Ladies Hostel",
    "Amaravathi Ladies Hostel",
    "Bhavani Ladies Hostel",
  ],
  "Men's Hostels": [
    "Dheeran Mens Hostel",
    "Valluvar Mens Hostel",
    "Ilango Mens Hostel",
    "Bharathi Mens Hostel",
    "Kamban Mens Hostel",
    "Ponnar Mens Hostel",
    "Sankar Mens Hostel",
  ],
  "Other Accommodations": ["Staff Quarters"],
};

const imageMap = {
  "Guest House": guesthouse,
  "Alumni Guest House": alumni,
  "Kaveri Ladies Hostel": kaveri,
  "Amaravathi Ladies Hostel": amaravathi,
  "Bhavani Ladies Hostel": bhavani,
  "Dheeran Mens Hostel": dheeran,
  "Valluvar Mens Hostel": valluvar,
  "Ilango Mens Hostel": ilango,
  "Bharathi Mens Hostel": bharathi,
  "Kamban Mens Hostel": kamban,
  "Ponnar Mens Hostel": ponnar,
  "Sankar Mens Hostel": sankar,
  "Staff Quarters": staff,
};

const contacts = [
  {
    role: "CHIEF WARDEN",
    name: "Dr. R. Parameshwaran",
    sub: "ADMINISTRATION",
    phone: "04294 - 226602",
    icon: <FaUserShield />
  },
  {
    role: "ASSOCIATE WARDEN",
    name: "Dr. K. Kannan",
    sub: "ALL HOSTELS",
    phone: "04294 - 226602",
    icon: <FaUserShield />
  },
  {
    role: "SENIOR DEPUTY WARDEN",
    name: "Dr. K. Manjularani",
    sub: "GIRLS HOSTELS",
    phone: "04294 - 226401",
    icon: <FaUserTie />
  },
  {
    role: "MANAGER",
    name: "Mr. K. M. Prakash",
    sub: "ADMINISTRATION",
    phone: "9965902006",
    icon: <FaBuilding />
  },
  {
    role: "ASST. MANAGER",
    name: "Ms. J. Balasaraswathi",
    sub: "ADMINISTRATION",
    phone: "9600162009",
    icon: <FaBuilding />
  }
];

const hostelIntakeDetails = [
  { sno: 1, name: "Valluvar", type: "Boys", roomType: ["3 Mem * 135", "3 Mem A/B * 9"], totalRooms: 144, capacity: 432, accommodated: 393, warden: "JEEVANANTHAM.A", phone: "7373222233", mail: "jeeva@kongu.ac.in" },
  { sno: 2, name: "Kamban", type: "Boys", roomType: ["1 Mem * 86", "2 Mem * 82", "2 Mem A/B * 5"], totalRooms: 173, capacity: 260, accommodated: 260, warden: "SELVAKARTHI.D", phone: "9789951541", mail: "selvakarthi.eie@kongu.ac.in" },
  { sno: 3, name: "Ilango", type: "Boys", roomType: ["3 Mem * 124", "3 Mem A/B * 10", "2 Mem A/B * 10"], totalRooms: 144, capacity: 422, accommodated: 380, warden: "SELVAKARTHI.D", phone: "9789951541", mail: "selvakarthi.eie@kongu.ac.in" },
  { sno: 4, name: "Ponnar", type: "Boys", roomType: ["4 Mem * 117", "3 Mem * 50", "2 Mem D/BA * 11"], totalRooms: 178, capacity: 640, accommodated: 590, warden: "BHUVANESHKUMAR.M", phone: "8667007051", mail: "bhuvanesh@kongu.ac.in" },
  { sno: 5, name: "Sankar", type: "Boys", roomType: ["4 Mem * 88", "2 Mem D/BA * 3"], totalRooms: 91, capacity: 358, accommodated: 315, warden: "SURENDAR.V", phone: "9952264648", mail: "surendar136@kongu.ac.in" },
  { sno: 6, name: "Dheeran", type: "Boys", roomType: ["3 Mem * 140", "2 Mem * 58", "2 Mem A/B * 4", "4 Mem * 1", "4 Mem A/B * 2"], totalRooms: 205, capacity: 556, accommodated: 619, warden: "MAHESWARAN.K", phone: "8973306570", mail: "maheshvarank@gmail.com" },
  { sno: 7, name: "Amaravathi", type: "Girls", roomType: ["Double A/B * 6", "Double * 4", "3 Member * 110"], totalRooms: 120, capacity: 350, accommodated: 342, warden: "RAMYA.D", phone: "9626233699", mail: "dramya@kongu.ac.in" },
  { sno: 8, name: "Kaveri", type: "Girls", roomType: ["Double A/B * 9", "Single * 4", "Double * 3", "Triple * 179"], totalRooms: 195, capacity: 565, accommodated: 552, warden: "MANJULARANI,K", phone: "9443087977", mail: "manjula@kongu.ac.in" },
  { sno: 9, name: "Bhavani", type: "Girls", roomType: ["Triple A/B * 40", "Triple * 125"], totalRooms: 165, capacity: 495, accommodated: 506, warden: "V.N.KOWSALYA", phone: "7010877103", mail: "kowsalya@kongu.ac.in" },
  { sno: 10, name: "KNYMCH", type: "Girls", roomType: ["Double A/B * 4", "Triple B/A * 4", "Triple * 34", "Four * 32"], totalRooms: 74, capacity: 250, accommodated: 250, warden: "K.SARASWATHI", phone: "9665304338", mail: "saraswathik@kongu.ac.in" },
];

const roomTypeSummary = [
  { type: "Single Room", boys: 86, girls: 4 },
  { type: "Double Room", boys: 140, girls: 13 },
  { type: "Double Room Bath Attached", boys: 33, girls: 9 },
  { type: "Three Room", boys: 449, girls: 448 },
  { type: "Three Room Bath Attached", boys: 19, girls: 44 },
  { type: "Four Room", boys: 206, girls: 36 },
  { type: "Four Room Bath Attached", boys: 2, girls: 0 },
];

const hostelWardensData = [
  {
    hostel: "KEC HOSTELS",
    staff: [
      { name: "Dr. R. PARAMESHWARAN (PRINCIPAL)", designation: "CHIEF WARDEN", phone: "9942820583" },
      { name: "Dr. K. KANNAN Prof / CHEM", designation: "ASSOCIATE WARDEN", phone: "9842823432" },
      { name: "Dr. K. MANJULA RANI ASP / CHEMISTRY", designation: "SENIOR DEPUTY WARDEN (Ladies Hostel)", phone: "9443087977" },
    ]
  },
  {
    hostel: "AMARAVATHI",
    staff: [
      { name: "Ms. D RAMYA AP / ENGLISH", designation: "DEPUTY WARDEN", phone: "9626233699" },
      { name: "Ms. KAVITHRA S / IT", designation: "ASSISTANT WARDEN", phone: "9489657063" },
      { name: "Ms. N. KAYA / CT - UG", designation: "ASSISTANT WARDEN", phone: "8122253359" },
    ]
  },
  {
    hostel: "KAVERI",
    staff: [
      { name: "Ms. K. SUVALAKSHMI AP / CSE", designation: "ASSISTANT WARDEN", phone: "9384538700" },
      { name: "Ms. G. DEEPIKA AP/CT UG", designation: "ASSISTANT WARDEN", phone: "8870110280" },
      { name: "Ms. S. SHOBANA / ENGLISH", designation: "ASSISTANT WARDEN", phone: "9360038345" },
    ]
  },
  {
    hostel: "BHAVANI",
    staff: [
      { name: "Ms. V.N. KOWSALYA AP (Sr.G) / CHEMISTRY", designation: "DEPUTY WARDEN", phone: "7010877103" },
      { name: "Ms. D. PAVITHRA (Asst PED)", designation: "ASSISTANT WARDEN", phone: "6383289403" },
      { name: "Ms. RAGAVI M / Phd Scholar (Chemistry)", designation: "ASSISTANT WARDEN", phone: "9500928696" },
      { name: "Ms. N. RENUKA / AI", designation: "ASSISTANT WARDEN", phone: "8610949712" },
    ]
  },
  {
    hostel: "NATUROPATHY HOSTEL (IV - BE)",
    staff: [
      { name: "Dr. K. SARASWATHI CT / UG", designation: "DEPUTY WARDEN", phone: "9665304338" },
      { name: "Ms. S. KOKILA / ENGLISH", designation: "ASSISTANT WARDEN", phone: "9976185091" },
    ]
  },
  {
    hostel: "VALLUVAR",
    staff: [
      { name: "Fly. Off. JEEVANANTHAM AP / IT", designation: "DEPUTY WARDEN", phone: "7373222233" },
      { name: "Mr. N. KANNAN / AI", designation: "ASSISTANT WARDEN", phone: "8870766648" },
      { name: "Mr. SELVARAJ S / CSD", designation: "ASSISTANT WARDEN", phone: "9994284106" },
      { name: "Mr. S. ARUN PRAKASH / JRF // Mtrs", designation: "ASSISTANT WARDEN", phone: "8637435768" },
    ]
  },
  {
    hostel: "KAMBAN",
    staff: [
      { name: "Mr. SELVA KARTHI AP / EIE", designation: "DEPUTY WARDEN", phone: "9789951541" },
      { name: "Mr. MANIKANDAN C / Physical Training Instructor", designation: "ASSISTANT WARDEN", phone: "9095390690" },
      { name: "Mr. S. YUVARAJ AP / CHEMICAL", designation: "ASSISTANT WARDEN", phone: "9626651594" },
    ]
  },
  {
    hostel: "ILANGO",
    staff: [
      { name: "Mr. V. ARUN JOSHY AP / FT", designation: "ASSISTANT WARDEN", phone: "9360860428" },
      { name: "Mr. T. SURENDRAN / Mtrs", designation: "ASSISTANT WARDEN", phone: "7358761043" },
      { name: "Mr. M. VIGNESH / ECE", designation: "ASSISTANT WARDEN", phone: "8608606344" },
    ]
  },
  {
    hostel: "PONNAR",
    staff: [
      { name: "Dr. M. BHUVANESHKUMAR / MECHANICAL", designation: "DEPUTY WARDEN", phone: "8667007051" },
      { name: "Mr. M. NEELAMEGAN AP / AI", designation: "ASSISTANT WARDEN", phone: "9788590654" },
      { name: "Mr. R. ARAVINDH / EEE", designation: "ASSISTANT WARDEN", phone: "9715495369" },
      { name: "Mr. D. SARATHKUMAR AP / EEE", designation: "ASSISTANT WARDEN", phone: "9688427208" },
    ]
  },
  {
    hostel: "SANKAR",
    staff: [
      { name: "Dr. SURENDAR V / EEE", designation: "DEPUTY WARDEN", phone: "9952264648" },
      { name: "Mr. B. RAVISANKAR AP / CTUG", designation: "ASSISTANT WARDEN", phone: "9791409475" },
      { name: "Mr. R. GOWTHAM / Automobile", designation: "ASSISTANT WARDEN", phone: "9629702739" },
    ]
  },
  {
    hostel: "DHEERAN",
    staff: [
      { name: "Dr. K. MAHESVARAN AP / PHYSICS", designation: "DEPUTY WARDEN", phone: "8973306570" },
      { name: "Mr. V. PARTHIBARAJ AP / PHYSICS", designation: "ASSISTANT WARDEN", phone: "9080554215" },
      { name: "Mr. THIRUMALAIRAJAN AP / ENG", designation: "ASSISTANT WARDEN", phone: "7904544862" },
      { name: "Mr. CHANDRU S Research Scholar (Physics)", designation: "ASSISTANT WARDEN", phone: "7598926469" },
      { name: "Mr. S. MARIMUTHU / English", designation: "ASSISTANT WARDEN", phone: "9384902267" },
    ]
  },
];

const boysHostelRulesTamil = [
  "மாணவர்கள் தங்கள் விடுதி அறையை சுத்தமாகவும், சுகாதாரமான முறையிலும் வைத்திருக்க வேண்டும்.",
  "அறையை விட்டு வெளியே செல்லும்போது விளக்குகள் மற்றும் மின்விசிறியை தவறாமல் அணைத்துவிட்டு, அறையை பூட்டிச்செல்ல வேண்டும். தவறினால் அபராதம் விதிக்கப்படும்.",
  "அறைக்குள் புகைப்பிடித்தல், மதுபானம் அருந்துதல் போன்ற தவறான செயல்களில் ஈடுபட்டால் எவ்வித முன் அறிவிப்புமின்றி விடுதியை விட்டு உடனே வெளியேற்றப்படுவர்.",
  "விடுதி பொருட்களுக்கு ஏதாவது சேதம் விளைவித்தால் அபராதமாக இருமடங்கு தொகை வசூலிக்கப்படும். விடுதி பணியாளர்களிடம் எந்தவித தகராறும் செய்யக்கூடாது. அவசியமிருப்பின் விடுதி காப்பாளரிடம் புகார் செய்யவும்.",
  "மாணவர்கள் சகமாணவர்களை துன்புறுத்துதல் சம்பந்தமான நடவடிக்கையில் ஈடுபட்டால் உடனே விடுதியை விட்டு வெளியேற்றப்படுவார்கள்.",
  "விடுதி அறைக்கும், உணவு அருந்துமிடத்திற்கும் விடுதியில் தங்காத மாணவர்களை முன் அனுமதியின்றி அழைத்துவரக்கூடாது. தவறினால் அபராதம் வசூலிக்கப்படும்.",
  "உணவு அருந்த உரிய நேரத்தை கடைபிடிக்க வேண்டும்.",
  "அனைத்து நாட்களிலும் 7.30 pm மணிக்குள் விடுதியை வந்தடைய வேண்டும்.",
  "மாணவர்கள் தினசரி இரவு 8.00 pm மணியிலிருந்து 9.30 pm மணிக்குள் தங்களது வருகை விவரத்தினை \"பயோ மெட்ரிக் சிஸ்டத்தில்\" (Bio Metric System) பதிவு செய்தல் வேண்டும்.",
  "விடுமுறை நாட்களில் விடுதியை விட்டு வெளியே செல்லும் போதும், அதேபோல் உள்ளே வரும்போதும் அதற்குரிய காரணத்தை அதற்கென வைக்கப்பட்டுள்ள பதிவேட்டில் குறிப்பிட வேண்டும்.",
  "விடுதி விதிமுறைகளுக்கு புறம்பாக மாணவர்கள் வெளியே சென்று தகாத நிகழ்வுகளில் ஈடுபடவேண்டாம் என்று அறிவுறுத்தப்படுகிறது. அவ்வாறு நிகழ்வுகளினால் ஏற்படும் விளைவுகளுக்கு நிர்வாகம் பொறுப்பேற்காது.",
  "தக்க காரணம் இன்றி வகுப்பிற்கு செல்லாமல் விடுதியில் தங்கி இருத்தல் கூடாது. தகுந்த காரணத்துடன் விடுதிக்காப்பாளரின் முன் அனுமதி பெற்றே கல்லூரி வேலைநாட்களில் விடுதியில் தங்கியிருத்தல் வேண்டும்.",
  "துணிகளை அதற்கென ஒதுக்கப்பட்டுள்ள இடத்தில் மட்டுமே துவைக்கவேண்டும். குளியல் அறைகளில் துணி துவைக்கக்கூடாது.",
  "இருசக்கர மோட்டார் வாகனம் மற்றும் கார் உபயோகிக்கவோ, வைத்துக்கொள்ளவோ அனுமதி இல்லை.",
  "விடுதிக்காப்பாளரின் அனுமதியின்றி தாங்கள் தங்கும் அறைகளை மாற்றக்கூடாது. மீறுபவர்கள் விடுதியிலிருந்து வெளியேற்றப்படுவர்.",
  "அனுமதியின்றி உணவுப்பொருட்களை தங்களது அறைக்குள் எடுத்துச் செல்லக்கூடாது.",
  "உணவுப்பொருட்களையும், தண்ணீரையும் வீணாக்கக்கூடாது.",
  "விடுதியில் தங்களது பிறந்தநாளை இரவில் கொண்டாடுதல் கூடாது.",
  "தங்களது உடைமைகளையும், பணத்தையும் விடுதிுக்கு வெளியிலும், தங்கள் அறையிலும் பத்திரமாக பாதுகாத்து வைத்துக்கொள்ள வேண்டும். பணம் மற்றும் உடைமைகள் தவறினால் விடுதி நிர்வாகம் பொறுப்பேற்காது.",
  "பெற்றோர்களோ அல்லது பாதுகாவலர்களோ எக்காரணம் கொண்டும் தங்கள் மகன் தங்கியிருக்கும் அறைக்குள் செல்ல அனுமதிக்கப்படமாட்டார்கள்.",
  "விடுதிக்காப்பாளரின் முன் அனுமதியுடன் விருந்தினர்கள் விடுதி உணவகங்களில் உணவு அருந்த அனுமதிக்கப்படுவார்கள்.",
];

const ladiesHostelRulesData = {
  studentRules: [
    "மாணவிகள் விடுதிக்குள்ளும், உணவு அருந்தும் இடத்திலும் மிகுந்த ஒழுக்கத்தை கடைபிடிக்க வேண்டும்.",
    "விடுதியில் தங்கியுள்ள மற்ற மாணவிகளுக்கு எவ்விதத்திலும் இடையூறு ஏற்படும் வண்ணம் எந்த நடவடிக்கையிலும் ஈடுபடக்கூடாது.",
    "மாணவிகள் தங்களது அறை, உணவு அருந்தும் இடம், நடைபாதைகள், குளியலறை மற்றும் கழிவறைகளை சுத்தமாகவும், சுகாதாரமாகவும் வைத்துகொள்ளவேண்டும்.",
    "மாணவிகள் கல்லூரி வேலைநாட்களில் மாலை 6.00 மணிக்குள் விடுதியை வந்தடையவேண்டும்.",
    "மாணவிகள் விடுதிக்குள் வந்தபின் விடுதிக் காப்பாளரின் முன் அனுமதி பெறாமல் விடுதியை விட்டு வெளியில் செல்லக்கூடாது.",
    "மாணவிகள் விடுதியை விட்டு வெளியே செல்லும் போதும், அதேபோல் உள்ளே வரும்போதும் அதற்குரிய காரணத்தை அதற்கென வைக்கப்பட்டுள்ள பதிவேட்டில் குறிப்பிடவேண்டும்.",
    "மாணவிகள் தினசரி இரவு 7.15 மணியிலிருந்து 8.15 மணிக்குள் தங்களது வருகை விவரத்தினை \"பயோ மெட்ரிக் சிஸ்டத்தில் (Bio-Metric System)\" பதிவு செய்தல் வேண்டும். அவ்வாறு பதிவு செய்யத் தவறினால் அவர்களுக்கு தக்க அபராதம் விதிக்கப்படும்.",
    "மாணவிகள் தக்க காரணம் இன்றி வகுப்பிற்கு செல்லாமல் விடுதியில் தங்கி இருத்தல் கூடாது. தகுந்த காரணத்துடன் விடுதிக்காப்பாளரின் முன்அனுமதி பெற்றே விடுதியில் கல்லூரி வேலை நாட்களில் தங்கியிருத்தல் வேண்டும்.",
    "மாணவிகள் கூடுதல் மின்சாதனங்களை (Iron Box, Hair dryer, Kettle, Water Heater etc.) தங்களது அறையில் பயன்படுத்தக்கூடாது.",
    "மாணவிகள் தங்களது அறைகளை விட்டு வெளியில் செல்லும்போது அனைத்து மின்விளக்குகளையும், மின்விசிறிகளையும் அணைத்துவிட்டுச் செல்லவேண்டும். அவ்வாறு செய்யாவிட்டால் தக்க அபராதம் அவர்களுக்கு விதிக்கப்படும். மின் சிக்கனம் நமது நாட்டை மேம்படுத்த உதவும் என்பதை மனதில் கொள்ளவேண்டும்.",
    "மாணவிகள் தங்களது பிறந்தநாளை இரவில் கொண்டாடுதல் கூடாது.",
    "மாணவிகள் விடுதிக்காப்பாளரின் அனுமதியின்றி தாங்கள் தங்கும் அறைகளை மாற்றக்கூடாது. மீறுபவர்களுக்கு அபராதம் விதிக்கப்படும் அல்லது விடுதியிலிருந்து வெளியேற்றப்படுவார்கள்.",
    "விடுதிக்காப்பாளரின் பொது அனுமதி பெற்று வீட்டிற்குச் செல்லும் மாணவிகள் மாலை 7.00 மணிக்குள் விடுதிக்கு வந்துவிடவேண்டும். எக்காரணத்தை முன்னிட்டும் மாலை 7.00 மணிக்குமேல் விடுதிக்குள் அனுமதிக்கப்படமாட்டார்கள்.",
    "விடுதியில் தங்கிப் பயிலும் மாணவிகள் எக்காரணம் கொண்டும் கல்லூரியில் தங்களோடு பயிலும் Dayscholar மாணவிகளை அனுமதியின்றி விடுதிக்குள் அழைத்து வருதல் கூடாது.",
    "மாணவிகள் உணவருந்தச் செல்லும் போதும், விடுதி அருகிலுள்ள படிக்கடைக்குச் செல்லும்போதும் கண்ணியமான உடையணிந்து செல்லவேண்டும்.",
    "மாணவிகள் அனுமதியின்றி உணவுப்பொருட்களை தங்களது அறைக்கு எடுத்துச் செல்லக்கூடாது.",
    "உணவுப்பொருட்களையும், தண்ணீரையும் தேவையன்றி வீணாக்கக்கூடாது.",
    "மாணவிகள் தங்களது உடைமைகளையும், பணத்தையும் விடுதிக்கு வெளியிலும், தங்கள் அறையிலும் பத்திரமாக பாதுகாத்து வைத்துக்கொள்ள வேண்டும். பணம் மற்றும் உடைமைகள் தவறினால் விடுதி நிர்வாகம் பொறுப்பேற்காது.",
    "அறை சுவர்கள், கதவு, ஜன்னல் மற்றும் சுற்றுப்புற சுவர்களை சேதப்படுத்தவோ அவற்றில் எழுதவோ கூடாது. மீறினால் அபராதம் விதிக்கப்படும்.",
  ],
  parentRules: [
    "பெற்றோர்கள் பொதுவிடுமுறை நாட்களில் தங்களது மகளை அழைத்து செல்வதற்கு தங்களால் ஏற்கனவே கொடுக்கப்பட்டுள்ள தங்கள் தொலைபேசியின் மூலம் விடுதி கைபேசியில் காலை 9.00 மணிக்குமேல் மாலை 5.00 மணிக்குள் தொடர்பு கொண்டு அனுமதி பெறுதல் வேண்டும்.",
    "பெற்றோர்கள் தங்களது தொலைபேசி எண்களை மாற்றம் செய்தால் அதனை உடனடியாக விடுதி அலுவலகத்திற்கு தெரிவிக்கவேண்டும்.",
    "பொதுவிடுமுறை அல்லாத நாட்களிலும், கல்லூரி வேலை நாட்களிலும் தங்கள் மகளை வீட்டிற்கு அனுப்பி வைக்குமாறு தொலைபேசி மூலம் விடுதி அலுவலகத்தையோ அல்லது விடுதி காப்பாளரையோ தொடர்பு கொள்ளக்கூடாது.",
    "பெற்றோர்கள் மற்றும் பாதுகாவலர்கள் தங்களது குழந்தைகளை காணவரும்போது தங்களுடன் தவறாமல் பார்வையாளர் அட்டையை (Visitor Card) கொண்டுவரவேண்டும். அவ்வாறு பார்வையாளர் அட்டை இல்லாமல் வரும் பெற்றோர்கள் மற்றும் பாதுகாவலர்கள் தங்கள் குழந்தைகளை பார்க்க கண்டிப்பாக அனுமதிக்கப்படமாட்டார்கள்.",
    "பெற்றோர்கள் பார்வையாளர் அட்டையில் குறிப்பிடப்பட்டுள்ள நேரங்களில் மட்டுமே தங்களது குழந்தைகளை பார்க்க அனுமதிக்கப்படுவார்கள்.",
  ],
  generalRules: [
    "மாணவிகள் கைபேசியை விடுதி வளாகத்தில் (Mess, Garden, Pathway, Corridor) பயன்படுத்துவது தடைசெய்யப்பட்டுள்ளது.",
    "மாணவிகள் பொதுவிடுமுறை நாட்களில் மட்டுமே தங்கள் வீடுகளுக்கு செல்ல அனுமதிக்கப்படுவார்கள். அவசர காலங்களில் மட்டுமே மாணவிகளின் பெற்றோர்கள் அல்லது பாதுகாவலர்கள் நேரில் வந்து அழைத்துச் செல்ல அனுமதிக்கப்படுவார்கள்.",
    "பெற்றோர்களோ அல்லது பாதுகாவலர்களோ எக்காரணம் கொண்டும் மாணவிகள் தங்கியிருக்கும் அறைக்குள்ளும், உணவருந்துமிடத்திற்குள்ளும் செல்ல அனுமதிக்கப்படமாட்டார்கள்.",
    "விடுதிக்காப்பாளரின் முன்அனுமதியின்றி விருந்தினர்களோ, விடுதியில் இல்லாத மாணவிகளோ விடுதி உணவகங்களில் உணவருந்த அனுமதிக்கப்படமாட்டார்கள். மீறுபவர்களுக்கு தக்க அபராதம் விதிக்கப்படும்.",
  ]
};

const hostelFacilities = [
  { particular: "Hot Water", remarks: "Solar Water Available Electrical Water facility" },
  { particular: "Wi - Fi", remarks: "24 * 7 Wifi Available" },
  { particular: "RO Water", remarks: "24 * 7 Available" },
  { 
    particular: "Mess Timing", 
    remarks: (
      <div className="remarks-list">
        <div>Morning 6.00 AM Coffee</div>
        <div>Break Fast 7.15 AM to 8.30 AM</div>
        <div>Lunch 12.15 PM to 1.30 PM</div>
        <div>Evening 4.30 PM Tea Snacks</div>
        <div>Dinner 7.15 PM to 8.45 PM</div>
      </div>
    )
  },
  { particular: "Laundry", remarks: "24 * 7 Washing Machine Available" },
  { particular: "TV Hall", remarks: "Evening Time Available" },
  { 
    particular: "Gym", 
    remarks: (
      <div className="remarks-list">
        <div>Morning 5.00 AM to 7.30 AM</div>
        <div>Evening 4.30 PM to 7.30 PM</div>
      </div>
    )
  },
  { particular: "CCTV", remarks: "Available at all hostels" },
  { particular: "Snacks Vending Machine", remarks: "24.7 Snacks vending machine available" },
  { particular: "Ambulance", remarks: "24.7 Ambulance available" },
  { particular: "Dispensary", remarks: "Available inside the college campus" },
  { particular: "Barber Shop", remarks: "Available inside the college campus" },
  { particular: "Beauty Barlour", remarks: "Available in Ladies Hostel" },
  { particular: "Tailor", remarks: "Available in Ladies Hostel" },
  { particular: "Fruit Stall", remarks: "Available inside the college campus" },
  { particular: "Food Court", remarks: "Available inside the college campus" },
  { particular: "Sports Rooms", remarks: "Available inside the Hostel (Indoor Games)" },
];

const HostelsandAccommodation = () => {
  const [loading, setLoading] = useState(true);
  const [rulesTab, setRulesTab] = useState("boys");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <div className="hostels-page-wrapper immersive-theme">
      <Navbar />
      
      {/* ─── Immersive Hero Section ─── */}
      <div className="hostels-hero-immersive">
        <div className="parallax-bg"></div>
        <div className="hero-content-modern">
          <div className="badge-modern">LIVING AT KEC</div>
          <h1 className="title-glitch">Hostels & <span>Accommodation</span></h1>
          <p className="subtitle-modern">A premium ecosystem designed for academic excellence and personal growth. Experience a home that inspires.</p>
          <div className="hero-stats-row">
            <div className="hero-stat">
              <span className="stat-value">11</span>
              <span className="stat-label">Hostel Blocks</span>
            </div>
            <div className="hero-stat">
              <span className="stat-value">4200+</span>
              <span className="stat-label">Students</span>
            </div>
            <div className="hero-stat">
              <span className="stat-value">24/7</span>
              <span className="stat-label">Security</span>
            </div>
          </div>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#ffffff" d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,165.3C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      <div className="hostels-container-modern">
        {/* Floating Background Blobs */}
        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>

        {/* ─── Hostel Explorer ─── */}
        <div className="explorer-wrapper">
          {Object.entries(hostels).map(([category, items], catIdx) => (
            <section key={category} className={`hostel-section-modern fade-in-up delay-${catIdx}`}>
              <div className="modern-section-header">
                <div className="category-line"></div>
                <h3 className="category-title">{category}</h3>
                <div className="category-line"></div>
              </div>
              <div className="modern-cards-grid">
                {items.map((item, index) => (
                  <div key={index} className="explorer-card">
                    <div className="explorer-card-inner">
                      <div className="explorer-image">
                        <img src={imageMap[item]} alt={item} />
                        <div className="image-overlay">
                          <button className="view-details-btn">View Gallery</button>
                        </div>
                      </div>
                      <div className="explorer-info">
                        <div className="explorer-icon">
                          {category === "Ladies Hostels" ? <FaUsers /> : <FaBed />}
                        </div>
                        <div className="explorer-text">
                          <h4>{item}</h4>
                          <span className="status-badge">Available</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="section-divider-wave">
          <svg viewBox="0 0 1440 120">
            <path fill="#f8fafc" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
          </svg>
        </div>

        {/* ─── Intelligent Data Modules ─── */}
        <div className="data-modules-grid">
          {/* Intake Module */}
          <section className="glass-module full-width">
            <div className="module-header">
               <div className="module-icon-box"><FaClipboardList /></div>
               <div className="module-title-box">
                  <h2>Intake & Capacity</h2>
                  <p>2025 - 2026 Academic Infrastructure</p>
               </div>
            </div>
            <div className="modern-table-container">
              <table className="modern-data-table">
                <thead>
                  <tr>
                    <th>Hostel Name</th>
                    <th>Type</th>
                    <th>Room Type</th>
                    <th>Rooms</th>
                    <th>Capacity</th>
                    <th>Accommodated</th>
                    <th>Warden</th>
                    <th>Contact</th>
                  </tr>
                </thead>
                <tbody>
                  {hostelIntakeDetails.map((hostel, index) => (
                    <tr key={index}>
                      <td className="font-bold text-blue">{hostel.name}</td>
                      <td>{hostel.type}</td>
                      <td>
                        <div className="room-type-stack">
                          {hostel.roomType.map((rt, i) => (
                            <div key={i} className="rt-tag">{rt}</div>
                          ))}
                        </div>
                      </td>
                      <td>{hostel.totalRooms}</td>
                      <td className="font-bold">{hostel.capacity}</td>
                      <td className="text-highlight">{hostel.accommodated}</td>
                      <td>{hostel.warden}</td>
                      <td className="action-cell">
                        {hostel.phone}
                      </td>
                      <td className="action-cell">
                        {hostel.mail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Stats & Wardens Row */}
          <div className="module-row">
             <section className="glass-module half-width">
                <div className="module-header">
                  <div className="module-icon-box"><FaChartPie /></div>
                  <div className="module-title-box">
                      <h2>Room Statistics</h2>
                      <p>Distribution Overview</p>
                  </div>
                </div>
                <div className="modern-table-container">
                  <table className="modern-data-table mini-stats-table">
                    <thead>
                       <tr>
                          <th>Room Configuration</th>
                          <th>Male</th>
                          <th>Female</th>
                       </tr>
                    </thead>
                    <tbody>
                      {roomTypeSummary.map((item, idx) => (
                        <tr key={idx}>
                          <td className="font-bold">{item.type}</td>
                          <td>
                             <div className="stat-pill male">{item.boys}</div>
                          </td>
                          <td>
                             <div className="stat-pill female">{item.girls}</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
             </section>

          </div>

          {/* Warden Management Module */}
          <section className="glass-module full-width">
            <div className="module-header">
               <div className="module-icon-box"><FaUserEdit /></div>
               <div className="module-title-box">
                  <h2>Residential Management Team</h2>
                  <p>Chief & Deputy Wardens Council</p>
               </div>
            </div>
            <div className="modern-table-container">
              <table className="modern-data-table warden-full-table">
                <thead>
                  <tr>
                    <th>Hostel</th>
                    <th>Staff Name</th>
                    <th>Designation</th>
                    <th>Contact Info</th>
                  </tr>
                </thead>
                <tbody>
                  {hostelWardensData.map((item, idx) => (
                    <React.Fragment key={idx}>
                      {item.staff.map((staff, sIdx) => (
                        <tr key={sIdx}>
                          {sIdx === 0 && (
                            <td rowSpan={item.staff.length} className="hostel-focus-cell">
                              {item.hostel}
                            </td>
                          )}
                          <td className="font-bold">{staff.name}</td>
                          <td className="desig-cell">{staff.designation}</td>
                          <td className="action-cell">
                             <a href={`tel:${staff.phone}`} className="call-link">
                               <FaPhoneAlt /> {staff.phone}
                             </a>
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* ─── Immersive Rules Dashboard ─── */}
        <section className="immersive-rules-section">
          <div className="module-header center">
            <div className="module-icon-box gold"><FaGavel /></div>
            <h2>Community Guidelines</h2>
            <p>Maintaining an environment of excellence</p>
          </div>

          <div className="custom-pill-tabs">
            <div className={`pill-glider ${rulesTab}`}></div>
            <button className={`pill-btn ${rulesTab === 'boys' ? 'active' : ''}`} onClick={() => setRulesTab('boys')}>Students (Boys)</button>
            <button className={`pill-btn ${rulesTab === 'ladies' ? 'active' : ''}`} onClick={() => setRulesTab('ladies')}>Students (Girls)</button>
          </div>

          <div className="rules-glass-container">
            {rulesTab === 'boys' ? (
              <div className="rules-stagger-list animation-fade">
                {boysHostelRulesTamil.map((rule, idx) => (
                  <div key={idx} className="modern-rule-card">
                    <div className="rule-idx">{(idx + 1).toString().padStart(2, '0')}</div>
                    <p>{rule}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rules-stagger-list animation-fade">
                <div className="ladies-rules-grid">
                  <div className="rules-column">
                    <h4 className="column-title">மாணவியர்களுக்கான விதிமுறைகள்</h4>
                    {ladiesHostelRulesData.studentRules.map((rule, idx) => (
                      <div key={idx} className="modern-rule-card compact">
                         <div className="rule-idx">{idx+1}</div>
                         <p>{rule}</p>
                      </div>
                    ))}
                  </div>
                  <div className="rules-column">
                    <h4 className="column-title">பொதுவான விதிமுறைகள்</h4>
                    {ladiesHostelRulesData.generalRules.map((rule, idx) => (
                      <div key={idx} className="modern-rule-card compact gold-border">
                         <div className="rule-idx">{idx+1}</div>
                         <p>{rule}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ─── Facilities & Fees Highlight ─── */}
        <section className="highlight-module">
           <div className="facilities-showcase">
              <div className="showcase-header">
                <h3>Campus Amenities</h3>
                <div className="amenity-badges">
                  {hostelFacilities.slice(0, 8).map((f, i) => (
                    <span key={i} className="amenity-tag">{f.particular}</span>
                  ))}
                </div>
              </div>
              <div className="fees-immersive-banner">
                 <div className="fees-content">
                    <span className="fees-tag">ANNUAL MEMBERSHIP</span>
                    <h4>Hostel & Mess Fees</h4>
                    <p>Comprehensive package including accommodation, nutritious food, and high-speed campus network access.</p>
                 </div>
                 <div className="fees-price-box">
                    <span className="currency">Rs.</span>
                    <span className="amount">90,000</span>
                    <span className="period">/ Year</span>
                    <button className="pay-cta">Secure Your Room</button>
                 </div>
              </div>
           </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default HostelsandAccommodation;
