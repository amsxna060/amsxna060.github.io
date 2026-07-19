/**
 * Skills grouped in three columns. lvl: EXPERT | ADVANCED | WORKING
 */

const skills = [
  {
    group: "Backend & APIs",
    items: [
      { name: "Python · FastAPI", lvl: "EXPERT" },
      { name: "PostgreSQL · SQLAlchemy", lvl: "EXPERT" },
      { name: "JWT / OAuth2 · RBAC", lvl: "EXPERT" },
      { name: "Celery · Redis · Kafka", lvl: "ADVANCED" },
      { name: "WebSockets · Microservices", lvl: "ADVANCED" },
    ],
  },
  {
    group: "AI / LLM Engineering",
    items: [
      { name: "LangGraph · LangChain", lvl: "EXPERT" },
      { name: "RAG · Qdrant · MCP", lvl: "EXPERT" },
      { name: "OpenAI · AWS Bedrock", lvl: "EXPERT" },
      { name: "Guardrails · Evals", lvl: "ADVANCED" },
      { name: "Prompt & cost optimization", lvl: "ADVANCED" },
    ],
  },
  {
    group: "Cloud & Delivery",
    items: [
      { name: "AWS (EC2·RDS·S3·Lambda·SES)", lvl: "ADVANCED" },
      { name: "Docker · Nginx · CI/CD", lvl: "ADVANCED" },
      { name: "Twilio · Razorpay", lvl: "EXPERT" },
      { name: "React (frontend)", lvl: "WORKING" },
      { name: "Pytest · QA automation", lvl: "ADVANCED" },
    ],
  },
];

export default skills;
