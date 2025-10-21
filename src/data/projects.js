/**
 * Projects Portfolio Data
 */

const projects = [
  {
    id: 1,
    title: "Finance Tracker API",
    subtitle: "AI-Powered Financial Management System",
    duration: "Feb 2025 - Present",
    status: "Active Development",
    repository: "https://github.com/amsxna060/finance-tracker-api",
    liveDemo: null,

    description: `A comprehensive financial management API with AI-powered expense categorization 
    and automated reporting. Features secure authentication, transaction processing, and intelligent 
    insights powered by OpenAI.`,

    impact: [
      "60% reduction in manual reconciliation effort",
      "Automated AI-powered expense categorization",
      "95%+ uptime with robust error handling",
      "Seamless Razorpay payment integration",
    ],

    features: [
      "Secure JWT authentication with role-based access control",
      "Transaction processing with automated balance calculations",
      "AI-driven expense categorization using OpenAI",
      "Razorpay payment gateway integration for subscriptions",
      "Automated reconciliation workflows",
      "CI/CD pipelines using Docker and GitHub Actions",
      "Comprehensive API documentation with OpenAPI",
    ],

    techStack: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "OpenAI API",
      "Docker",
      "AWS EC2",
      "GitHub Actions",
      "Razorpay",
    ],

    highlights: {
      backend: "FastAPI with async/await patterns",
      ai: "OpenAI integration for intelligent categorization",
      database: "PostgreSQL with Alembic migrations",
      deployment: "Dockerized deployment on AWS EC2",
      cicd: "Automated testing and deployment pipeline",
    },

    image: "/assets/projects/finance-tracker.png",
    category: "Backend & AI",
  },

  {
    id: 2,
    title: "SupportAGenious",
    subtitle: "Crowdfunding Platform for Startups",
    duration: "Jul 2024 - Dec 2024",
    status: "Completed",
    repository: "https://github.com/amsxna060/SupportAGenious",
    liveDemo: null,

    description: `Full-stack crowdfunding platform enabling campaign creation and fund management 
    for startups. Built with FastAPI backend and React.js frontend with secure payment processing.`,

    impact: [
      "25% increase in user registration with OAuth",
      "Streamlined startup funding process",
      "Secure payment processing with zero fraud incidents",
      "Real-time transaction tracking and notifications",
    ],

    features: [
      "FastAPI backend with modular architecture",
      "React.js frontend with responsive design",
      "Secure Razorpay payment integration",
      "Real-time transaction tracking",
      "Automated email notifications",
      "OAuth authentication for social login",
      "Campaign creation and management workflows",
      "Fund tracking and analytics dashboard",
    ],

    techStack: [
      "FastAPI",
      "React.js",
      "PostgreSQL",
      "Razorpay",
      "OAuth",
      "JWT",
      "HTML/CSS",
      "JavaScript",
    ],

    highlights: {
      backend: "Modular FastAPI architecture for scalability",
      frontend: "Responsive React.js with modern UI/UX",
      payments: "Secure Razorpay integration with webhooks",
      auth: "OAuth social login with JWT sessions",
      notifications: "Automated email workflow system",
    },

    image: "/assets/projects/support-a-genious.png",
    category: "Full-Stack",
  },

  {
    id: 3,
    title: "OTT Platform Automation",
    subtitle: "End-to-End Testing Framework",
    duration: "Apr 2022 - Oct 2023",
    status: "Production",
    repository: null,
    liveDemo: null,

    description: `Comprehensive automated testing framework for Canal+ OTT platform serving 
    France and Europe markets. Reduced testing time by 50% with Python and Selenium.`,

    impact: [
      "50% reduction in testing time",
      "Comprehensive test coverage for critical flows",
      "Served France and Europe markets",
      "Zero critical bugs in production releases",
    ],

    features: [
      "End-to-end test automation with Selenium",
      "Cross-browser compatibility testing",
      "API testing with Python requests",
      "Custom test reporting dashboard",
      "Continuous integration with Jenkins",
      "Test data management framework",
    ],

    techStack: [
      "Python",
      "Selenium",
      "Pytest",
      "Jenkins",
      "API Testing",
      "Test Automation",
    ],

    highlights: {
      automation: "Selenium-based E2E test framework",
      coverage: "Comprehensive test coverage across platforms",
      cicd: "Jenkins integration for automated runs",
      reporting: "Custom HTML test reports with screenshots",
    },

    image: "/assets/projects/ott-automation.png",
    category: "Automation",
  },
];

/**
 * Project categories for filtering
 */
export const categories = ["All", "Backend & AI", "Full-Stack", "Automation"];

export default projects;
