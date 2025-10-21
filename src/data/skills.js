/**
 * Technical Skills Data
 * Categorized by technology domains
 */

const skills = {
  backend: [
    { name: "Python", level: "Expert", icon: "SiPython" },
    { name: "FastAPI", level: "Expert", icon: "FaServer" },
    { name: "Django", level: "Familiar", icon: "FaCode" },
    { name: "RESTful APIs", level: "Expert", icon: "FaServer" },
    { name: "Microservices", level: "Proficient", icon: "FaCloud" },
  ],

  ai: [
    { name: "OpenAI API", level: "Proficient", icon: "SiOpenai" },
    { name: "LangChain", level: "Familiar", icon: "FaBrain" },
    { name: "AI Agents", level: "Proficient", icon: "FaRobot" },
    { name: "Prompt Engineering", level: "Proficient", icon: "FaCode" },
    { name: "LLM Integration", level: "Proficient", icon: "FaMicrochip" },
  ],

  frontend: [
    { name: "React.js", level: "Proficient", icon: "SiReact" },
    { name: "JavaScript", level: "Proficient", icon: "SiJavascript" },
    { name: "HTML5/CSS3", level: "Proficient", icon: "SiHtml5" },
    { name: "Responsive Design", level: "Proficient", icon: "FaMobile" },
  ],

  databases: [
    { name: "PostgreSQL", level: "Proficient", icon: "SiPostgresql" },
    { name: "SQLAlchemy", level: "Proficient", icon: "FaDatabase" },
    { name: "SQL Server", level: "Proficient", icon: "FaDatabase" },
    { name: "MySQL", level: "Proficient", icon: "SiMysql" },
    { name: "Alembic", level: "Proficient", icon: "FaDatabase" },
  ],

  cloud: [
    { name: "AWS EC2", level: "Proficient", icon: "SiAmazonwebservices" },
    { name: "AWS RDS", level: "Proficient", icon: "SiAmazonwebservices" },
    { name: "AWS S3", level: "Proficient", icon: "SiAmazonwebservices" },
    { name: "Docker", level: "Proficient", icon: "SiDocker" },
    { name: "GitHub Actions", level: "Proficient", icon: "SiGithubactions" },
    { name: "Azure", level: "Familiar", icon: "FaCloud" },
  ],

  tools: [
    { name: "Git", level: "Expert", icon: "SiGit" },
    { name: "Postman", level: "Proficient", icon: "FaCode" },
    { name: "Pytest", level: "Proficient", icon: "SiPython" },
    { name: "Selenium", level: "Proficient", icon: "FaCode" },
    { name: "JWT Auth", level: "Proficient", icon: "FaLock" },
    { name: "OAuth", level: "Proficient", icon: "FaKey" },
  ],
};

/**
 * Services offered
 */
export const services = [
  {
    title: "API Development & Backend Systems",
    description:
      "Building robust, scalable RESTful APIs with FastAPI and Python. Expertise in microservices architecture, database design, and secure authentication.",
    icon: "FaServer",
    features: [
      "FastAPI & Django development",
      "RESTful API design",
      "Database modeling (PostgreSQL, SQL Server)",
      "JWT & OAuth authentication",
      "Payment gateway integration",
    ],
  },
  {
    title: "AI Integration & LLM Solutions",
    description:
      "Integrating AI capabilities into your applications with OpenAI APIs, LangChain, and custom AI agents for intelligent automation.",
    icon: "FaBrain",
    features: [
      "OpenAI API integration",
      "AI-powered data categorization",
      "Prompt engineering",
      "Automated report generation",
      "Intelligent chatbots",
    ],
  },
  {
    title: "Cloud Deployment & DevOps",
    description:
      "End-to-end cloud deployment on AWS with Docker containerization, CI/CD pipelines, and automated workflows.",
    icon: "FaCloud",
    features: [
      "AWS deployment (EC2, RDS, S3)",
      "Docker containerization",
      "GitHub Actions CI/CD",
      "Database migrations",
      "Automated testing",
    ],
  },
  {
    title: "Full-Stack Web Development",
    description:
      "Creating modern, responsive web applications with React.js frontend and Python backend, delivering complete solutions.",
    icon: "FaCode",
    features: [
      "React.js development",
      "Responsive UI design",
      "Full-stack integration",
      "Real-time features",
      "Performance optimization",
    ],
  },
];

export default skills;
