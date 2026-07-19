/**
 * Projects. `flagship` gets the large case-study treatment;
 * `featured` render as project cards below it.
 */

export const flagship = {
  badge: "LIVE · financerbuddy.com",
  title: "FinancerBuddy",
  tagline: "Personal finance & lending platform — built, deployed and operated by me",
  desc: "A full-stack platform managing multi-type loans (EMI, interest-only, short-term), property deals, partnerships, chit funds and ledger accounts — with day-level interest calculations that match how Indian lenders actually work.",
  caseStudy: [
    { k: "Problem", v: "Lenders and finance-side businesses track lakhs in registers and Excel — errors in interest math, zero visibility." },
    { k: "Build", v: "FastAPI + PostgreSQL + SQLAlchemy, JWT auth, modular service-router architecture, LangGraph agent over MCP — the same agent answers on web and WhatsApp (Twilio)." },
    { k: "Result", v: "Live in production on Oracle Cloud with Nginx, SSL and GitHub Actions CI/CD — real users, real money, day-level accuracy." },
  ],
  ledger: [
    { k: "status", v: "● IN PRODUCTION", tone: "mint" },
    { k: "loan types handled", v: "EMI · Interest-only · Short-term" },
    { k: "interest engine", v: "day-level accuracy", tone: "gold" },
    { k: "agent surface", v: "Web + WhatsApp (one agent)" },
    { k: "deploy", v: "Oracle Cloud · Nginx · CI/CD" },
    { k: "stack", v: "FastAPI · PostgreSQL · LangGraph" },
  ],
  liveUrl: "https://financerbuddy.com",
};

export const featured = [
  {
    title: "Vansh Care",
    kind: "MULTI-AGENT · HEALTHCARE",
    desc: "Dementia-care WhatsApp companion — I was the sole backend engineer. LangGraph multi-agent orchestration with memory, Tavily research, Twilio webhook retries and Redis SET NX distributed locks for idempotent LLM calls under concurrent messages.",
    metrics: [
      { n: "45%", l: "token cost cut" },
      { n: "0", l: "duplicate agent states" },
      { n: "1", l: "engineer (me)" },
    ],
    stack: ["LangGraph", "FastAPI", "Redis locks", "Twilio", "Bedrock + OpenAI", "AWS"],
  },
  {
    title: "Financial Analytics Platform",
    kind: "FINTECH · MICROSERVICES",
    desc: "Enterprise financial backend at ValueLabs — 40+ REST endpoints, JWT with refresh tokens, RBAC, Razorpay with webhook idempotency. Led the monolith\u2192microservices migration with Kafka event-driven communication and Celery async pipelines.",
    metrics: [
      { n: "800\u2192180ms", l: "p95 latency" },
      { n: "60%", l: "manual effort cut" },
      { n: "80%", l: "fewer deploy failures" },
    ],
    stack: ["FastAPI", "PostgreSQL", "Kafka", "Celery + Redis", "Razorpay", "AWS"],
  },
];
