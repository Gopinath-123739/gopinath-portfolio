/**
 * Portfolio Data Configuration for Gopinath S
 * Verified against Resume & Official Credentials
 * 
 * Note: To update your GitHub repository links, live demos, or resume URL,
 * edit the respective fields below.
 */

export const portfolioData = {
  personal: {
    name: "Gopinath S",
    title: "Entry-Level Java Full-Stack Developer",
    tagline: "I build responsive web experiences and practical applications with a focus on clean interfaces, problem-solving, and user experience.",
    summary:
      "Computer Science and Engineering graduate (2026) with hands-on experience building full-stack applications with Java. Seeking an entry-level Software Developer role to apply strong fundamentals in Java, SQL, JavaScript, data structures, and OOPs to build reliable, user-focused products.",
    email: "vishalgopi02@gmail.com",
    phone: "+91 88071 92893",
    location: "Chennai, Tamil Nadu, India",
    availability: "Available for Full-time Roles",
    profileImage: "/profile.png",
    degree: "B.E. Computer Science & Engineering",
    cgpa: "8.03 / 10",
    college: "Alpha College of Engineering, Chennai",
    batch: "2022 – 2026",
    trainingCenter: "Tap Academy",
    trainingCourse: "Java Full Stack Development",
    trainingPeriod: "July 2026 – Ongoing",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/gopinath-s-bio",
      github: "https://github.com/Gopinath-123739",
      email: "mailto:vishalgopi02@gmail.com",
      portfolioLive: "https://gopinath-portfolio-seven.vercel.app"
    },
    resumePath: "/resume.pdf"
  },

  skills: {
    programmingLanguages: [
      {
        name: "Java",
        description: "Core OOPs, Collections framework, Exception Handling, Multi-threading basics",
        icon: "Coffee",
        highlight: "Primary Language"
      },
      {
        name: "SQL",
        description: "Relational database queries, Joins, Aggregations, Schema design & normalization",
        icon: "Database",
        highlight: "Relational DB"
      },
      {
        name: "JavaScript",
        description: "ES6+, DOM Manipulation, Async/Await, Functional logic & Event handling",
        icon: "Code2",
        highlight: "Frontend Logic"
      }
    ],
    webDevelopment: [
      {
        name: "HTML5",
        description: "Semantic markup, accessibility (a11y), clean document structure & forms",
        icon: "Layout",
        highlight: "Markup"
      },
      {
        name: "CSS3",
        description: "Responsive Flexbox & Grid layouts, media queries, modern UI styling & animations",
        icon: "Palette",
        highlight: "Responsive UI"
      },
      {
        name: "React JS",
        description: "Component architecture, hooks (useState, useEffect), props, modular UI design",
        icon: "Atom",
        highlight: "Modern SPA"
      }
    ],
    coreConcepts: [
      {
        name: "Object-Oriented Programming",
        description: "Encapsulation, Inheritance, Polymorphism, Abstraction, Clean modular design",
        icon: "Layers",
        highlight: "Architecture"
      },
      {
        name: "DBMS",
        description: "Database Management Systems, ACID properties, indexing, entity relationships",
        icon: "Server",
        highlight: "Data Integrity"
      },
      {
        name: "Data Structures",
        description: "Arrays, Linked Lists, Stacks, Queues, Hash Tables, problem-solving logic",
        icon: "Binary",
        highlight: "Problem Solving"
      }
    ]
  },

  experience: [
    {
      role: "Full Stack Web Development Intern",
      company: "Pumo Technovation",
      location: "Chennai, India",
      period: "July 2025 – August 2025",
      type: "Internship",
      responsibilities: [
        "Contributed to full-stack web development tasks, gaining hands-on experience with frontend integration.",
        "Built and tested responsive UI components as part of a collaborative development team.",
        "Improved practical skills in front-end development, UI design, and web development.",
        "Collaborated on debugging cross-browser UI issues to ensure consistent desktop and mobile user experience."
      ],
      skillsGained: ["HTML5", "CSS3", "JavaScript", "Responsive UI Design", "Frontend Integration", "Cross-Browser Testing"]
    }
  ],

  projects: [
    {
      id: "personal-finance-advisor",
      title: "Personal Finance Advisor Using Chatbot",
      year: "2026",
      category: "JavaScript / Full-Stack Concept",
      headline: "AI-assisted personal finance web application with automated categorization & interactive reporting",
      shortDescription:
        "A web-based personal finance application designed to help users track and manage their income, expenses, and savings with automated analytics and conversational guidance.",
      detailedDescription:
        "Engineered a client-centric financial management dashboard designed to address personal budgeting challenges. Features automated transaction classification logic written in JavaScript, dynamic financial calculations (savings rate, expense breakdown), dynamic charts representing cashflow, and an interactive chatbot assistant that answers spending queries and gives context-aware budgeting advice.",
      features: [
        "Automated expense categorization and financial analysis using JavaScript-based logic",
        "Interactive dashboard with visual charts and reports representing spending patterns, income, expenses, and savings",
        "Conversational AI chatbot interface to provide interactive financial guidance based on user queries and financial information",
        "Dynamic summary statistics calculating total savings rate, monthly balance, and expenditure breakdowns",
        "Responsive, modern layout tailored for seamless interaction across desktop, tablet, and smartphone screens"
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "DOM API", "Data Visualization", "Modular Logic"],
      architecture: [
        "UI Layer: Clean semantic interface with modular views for Income, Expenses, Analytics, and Chatbot",
        "Logic Engine: JavaScript rules engine that classifies raw expense entries into categorized buckets (Food, Utilities, Travel, Savings)",
        "Chatbot Parser: Conversational query processor that matches user intents (e.g., 'how much did I spend?', 'savings advice') with real-time session financial data",
        "State & Storage: Client-side state tracking ensuring instantaneous feedback without latency"
      ],
      // GitHub & Demo links - configurable by Gopinath
      githubUrl: null, // Set to string like "https://github.com/gopinath-s/personal-finance-advisor"
      demoUrl: null,   // Set to live deployment URL when available
      status: "Completed (2026)"
    },
    {
      id: "online-food-stall",
      title: "Online Food Stall — E-Commerce Website",
      year: "2025",
      category: "Frontend E-Commerce",
      headline: "Responsive culinary catalog and food ordering interface with intuitive product navigation",
      shortDescription:
        "An e-commerce website interface engineered for displaying food products with an emphasis on seamless usability, visual appetite appeal, and intuitive navigation.",
      detailedDescription:
        "Designed and developed a customer-facing e-commerce storefront for an online food stall. Built using clean, semantic HTML5 and modern CSS3 styling, the platform features structured menus, interactive item cards with high-fidelity imagery and pricing, cart layout concepts, and fluid responsive grid layouts for quick order browsing.",
      features: [
        "Structured food catalog displaying items with high-resolution imagery, item names, pricing, and descriptions",
        "Interactive UI components implemented using modern HTML5 and responsive CSS3 layouts",
        "Structured navigation, category filtering, and well-organized page layouts to elevate user shopping experience",
        "Mobile-first responsive presentation optimized for fast touch browsing on any screen size",
        "Clean, maintainable stylesheet structure with organized CSS variables and reusable classes"
      ],
      technologies: ["HTML5", "CSS3", "Responsive Design", "Flexbox & Grid", "UI/UX Prototyping"],
      architecture: [
        "Presentation Layer: Semantic HTML5 structure with accessible landmarks, headers, and product cards",
        "Layout Architecture: CSS Grid for multidimensional food catalogs and Flexbox for navigation, tags, and controls",
        "Design System: Cohesive color palette, typography hierarchy, and hover transitions highlighting dishes"
      ],
      // GitHub & Demo links - configurable by Gopinath
      githubUrl: null, // Set to string like "https://github.com/gopinath-s/online-food-stall"
      demoUrl: null,   // Set to live deployment URL when available
      status: "Completed (2025)"
    }
  ],

  education: [
    {
      type: "Academic Degree",
      degree: "B.E. Computer Science and Engineering",
      institution: "Alpha College of Engineering",
      location: "Chennai, Tamil Nadu",
      period: "2022 – 2026",
      score: "CGPA: 8.03 / 10",
      status: "Graduate (2026)",
      highlights: [
        "Strong academic standing with an 8.03/10 CGPA throughout undergraduate study",
        "Core foundational coursework: Object-Oriented Programming, Database Management Systems, Data Structures & Algorithms",
        "Active participant in technical symposiums, coding challenges, and collaborative engineering projects"
      ]
    },
    {
      type: "Professional Training",
      degree: "Java Full Stack Development Course",
      institution: "Tap Academy",
      location: "Professional Training Institute",
      period: "July 2026 – Ongoing",
      score: "Active Certification Program",
      status: "Currently Enrolled",
      highlights: [
        "Rigorous intensive training focusing on enterprise Java fundamentals and Full Stack development",
        "Hands-on practice with Core Java, Object-Oriented Design patterns, and SQL relational databases",
        "Application architecture development integrating React frontend interfaces with Java backend services"
      ]
    }
  ],

  certifications: [
    {
      id: "cert-web-dev",
      title: "Web Development Internship Certificate",
      issuer: "Pumo Technovation",
      year: "2025",
      type: "Internship Completion",
      description: "Verified completion of practical full-stack web development internship focusing on responsive UI engineering and team collaboration."
    },
    {
      id: "cert-cambridge",
      title: "Cambridge English Preliminary Certificate",
      issuer: "Cambridge University",
      year: "Certified",
      type: "Language & Communication",
      description: "Demonstrated international standard of English communication proficiency, essential for collaborative software engineering teams."
    },
    {
      id: "cert-fs-course",
      title: "Full Stack Development Course Certificate",
      issuer: "Pumo Technovation",
      year: "2025",
      type: "Course Completion",
      description: "Comprehensive training certification covering web technologies, frontend interfaces, and full-stack software practices."
    }
  ],

  codeSnippet: {
    java: `// GopinathDeveloper.java
package com.gopinath.portfolio;

public class GopinathDeveloper implements FullStackEngineer {
    private final String name = "Gopinath S";
    private final String title = "Entry-Level Java Full-Stack Developer";
    private final String education = "B.E. Computer Science & Eng. (8.03 CGPA)";
    private final String training = "Java Full Stack @ Tap Academy";

    private final String[] coreStack = {
        "Java", "SQL", "JavaScript", "React", "HTML5", "CSS3"
    };

    @Override
    public Application buildReliableSolution(UserRequirements requirements) {
        CleanArchitecture architecture = new CleanArchitecture();
        ResponsiveInterface ui = new ResponsiveInterface("React");
        RobustBackend backend = new RobustBackend("Java + SQL");

        return architecture.assemble(ui, backend, requirements);
    }

    public boolean isReadyForHire() {
        return true; // Passionate, fast learner, team player
    }
}`
  }
};
