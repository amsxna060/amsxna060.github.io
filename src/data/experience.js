/**
 * Professional Experience Data
 */

const experience = [
  {
    id: 1,
    company: "ValueLabs",
    location: "Hyderabad, India",
    positions: [
      {
        title: "Python Developer - Financial Systems",
        period: "Nov 2023 - Present",
        current: true,
        type: "Full-time",

        description: `Leading backend development for financial applications using FastAPI and PostgreSQL. 
        Building scalable APIs, integrating AI capabilities, and deploying on AWS cloud infrastructure.`,

        responsibilities: [
          "Developed financial application backend using FastAPI and PostgreSQL",
          "Built RESTful APIs with JWT-based authentication serving multiple client applications",
          "Integrated Razorpay payment gateway with automated reconciliation",
          "Implemented OpenAI API integration for intelligent data categorization",
          "Utilized prompt engineering techniques for automated report generation",
          "Implemented CI/CD pipelines using Docker containerization",
          "Deployed applications on AWS EC2 with RDS and S3",
        ],

        achievements: [
          {
            metric: "95%+ uptime",
            description: "Maintained high availability for production APIs",
          },
          {
            metric: "60% reduction",
            description: "Automated reconciliation reduced manual effort",
          },
          {
            metric: "40% time saved",
            description: "Prompt engineering optimized development workflows",
          },
        ],

        techStack: [
          "Python",
          "FastAPI",
          "PostgreSQL",
          "OpenAI API",
          "Docker",
          "AWS",
          "GitHub Actions",
          "Razorpay",
          "JWT",
          "SQLAlchemy",
        ],
      },

      {
        title: "Automation Engineer - OTT Platform",
        period: "Apr 2022 - Oct 2023",
        current: false,
        type: "Full-time",

        description: `Developed automated testing frameworks for Canal+ OTT platform serving 
        France and Europe markets. Created comprehensive end-to-end test automation reducing 
        testing time significantly.`,

        responsibilities: [
          "Developed automated testing frameworks using Python and Selenium",
          "Created end-to-end test automation scripts for Canal+ OTT platform",
          "Implemented API testing with Python requests library",
          "Built custom test reporting and analytics dashboard",
          "Collaborated with development teams for test strategy",
          "Maintained test suites and CI/CD integration",
        ],

        achievements: [
          {
            metric: "50% reduction",
            description: "Decreased testing time with comprehensive automation",
          },
          {
            metric: "100% coverage",
            description: "Critical user flows fully automated",
          },
          {
            metric: "Zero incidents",
            description: "No critical bugs in production releases",
          },
        ],

        techStack: [
          "Python",
          "Selenium",
          "Pytest",
          "API Testing",
          "Jenkins",
          "Test Automation",
        ],
      },
    ],

    companyLogo: "/assets/companies/valuelabs.png",
    companyWebsite: "https://www.valuelabs.com",
  },
];

/**
 * Education details
 */
export const education = {
  degree: "Bachelor of Technology in Computer Science",
  institution: "Lakshmi Narain College of Technology",
  location: "Bhopal, India",
  graduation: "2022",
  cgpa: "8.28/10.0",
  highlights: [
    "Strong foundation in algorithms and data structures",
    "Specialized in software engineering and web technologies",
    "Active participation in coding competitions",
    "Academic projects in Python and web development",
  ],
};

/**
 * Certifications (if any)
 */
export const certifications = [
  // Add certifications here as needed
];

export default experience;
