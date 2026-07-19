/**
 * Profile Information — central source of truth.
 * Edit here; components read from this file.
 */

const profile = {
  name: "Amol Saxena",
  firstName: "Amol",
  title: "Python Backend & GenAI Systems Engineer",
  eyebrow: "Python Backend · GenAI · Noida, IN",
  // Hero headline is split so the accent span can be styled
  headline: { plain: "AI agents and backends that ", accent: "do real work." },
  sub: "I'm Amol — 4 years shipping production systems. FastAPI services, LangGraph multi-agent apps, WhatsApp automation and finance platforms that real businesses run on every single day.",

  email: "amolsaxena060@gmail.com",
  phone: "+91 72485 43060",
  whatsapp: "917248543060", // used for wa.me deep link
  whatsappPrefill: "Hi Amol, I found you through your portfolio. I want to discuss a project.",
  location: "Noida, India",

  social: {
    github: "https://github.com/amsxna060",
    linkedin: "https://linkedin.com/in/amolsaxena060",
    financerbuddy: "https://financerbuddy.com",
    // Create a free account at cal.com or calendly.com, paste the link here,
    // and a "Book a call" button appears automatically in Contact.
    calendly: "",
  },

  resume: "/assets/resume.pdf",

  trustChips: [
    { text: "FinancerBuddy — live in production", tone: "mint" },
    { text: "4 yrs @ ValueLabs", tone: "gold" },
    { text: "UK / US client experience", tone: "mint" },
  ],

  trustLogos: [
    "ValueLabs", "Canal+", "AWS", "OpenAI",
    "Twilio", "Razorpay", "LangGraph", "Kafka",
  ],

  availability: "Open — freelance & full-time",
};

export default profile;
