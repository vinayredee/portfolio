// Personal and project data for the portfolio

export const personalInfo = {
    name: "Kundu Vinay Kumar Reddy",
    title: "Full-Stack Developer",
    email: "kunduvinai@gmail.com",
    phone: "+91 93461 44693",
    location: "Anantapur, Andhra Pradesh, India",
    linkedin: "https://linkedin.com/in/kunduvinaykumarreddy",
    github: "https://github.com/vinayredee",
    bio: "Aspiring full-stack developer specializing in AI-powered applications and scalable web systems. Experienced in building real-world solutions using Java, React, and Spring Boot. Strong foundation in DSA, system design, and proven ability to ship production-grade projects.",

    skills: {
        programming: ["Java", "Python", "SQL"],
        frameworks: ["Spring Boot", "React.js", "Streamlit", "Docker", "Git"],
        aiml: ["Generative AI", "Large Language Models", "AI Agents"],
        core: ["Data Structures & Algorithms", "Computer Networks"]
    },

    education: {
        degree: "B.Tech in Computer Science",
        institution: "Kalasalingam Academy of Research and Education",
        location: "Tamil Nadu",
        period: "2021-2025",
        cgpa: "8.13 / 10"
    },

    certifications: [
        "Oracle Cloud Infrastructure 2025 Generative AI Professional",
        "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
        "Java, Python and SQL Certifications - HackerRank"
    ]
};

export const projects = [
    {
        id: "ai-legal-assistant",
        title: "AI Powered Legal Assistant",
        description: "AI assistant providing legal information to user queries, increasing legal awareness by 65%",
        longDescription: "Developed an AI assistant providing legal information to user queries, increasing legal awareness by 65%. Implemented 'summary' and 'deep-dive' response modes, reducing user research time by 55%. Added legal templates and official references, improving documentation completion by 45%. Integrated AI document analysis to review legal text and provide summaries, reducing manual review effort by 40%.",
        tech: ["Python", "Streamlit", "Gemini API"],
        liveUrl: "https://ai-powered-legal-assistant.streamlit.app",
        githubUrl: "",
        features: [
            "Summary and deep-dive response modes",
            "Legal templates and official references",
            "AI document analysis",
            "Real-time query processing"
        ],
        impact: {
            awareness: "65% increase in legal awareness",
            time: "55% reduction in research time",
            documentation: "45% faster documentation completion",
            review: "40% reduction in manual review effort"
        },
        category: "AI/ML"
    },
    {
        id: "digital-public-seva",
        title: "Digital Public Seva Portal",
        description: "Citizen grievance platform with secure authentication, role-based access, and Docker containerization",
        longDescription: "Built a citizen grievance platform supporting category, severity, geolocation, and attachments, boosting reporting transparency by 60%. Designed secure authentication and role-based access to prevent misuse, reducing invalid submissions by 30%. Containerized backend services with Docker, reducing environment setup issues by 40%. Integrated REST APIs with scalable database schema to support multi-role interactions and ticket tracking.",
        tech: ["React.js", "Spring Boot", "Docker", "PostgreSQL"],
        liveUrl: "https://digitalpublicseva.vercel.app",
        githubUrl: "",
        features: [
            "Category and severity-based grievance tracking",
            "Geolocation support with attachments",
            "Secure authentication and role-based access",
            "Docker containerization",
            "REST API integration",
            "Scalable PostgreSQL database"
        ],
        impact: {
            transparency: "60% boost in reporting transparency",
            security: "30% reduction in invalid submissions",
            setup: "40% reduction in environment setup issues"
        },
        category: "Full-Stack"
    },
    {
        id: "smart-ai-hub",
        title: "Smart AI Hub",
        description: "Platform categorizing and recommending AI tools across multiple domains, reducing discovery time by 65%",
        longDescription: "Built a platform that categorizes and recommends AI tools across education, coding, business, editing, productivity, and entertainment. Reduced time-to-discover AI solutions by 65% using semantic search and user-intent filtering. Implemented multi-criteria filtering to increase recommendations and reduce browsing effort by 50%. Added side-by-side comparison of up to 4 tools, improving decision confidence by 45%.",
        tech: ["React.js", "Node.js", "Search API"],
        liveUrl: "https://smart-aihub.vercel.app",
        githubUrl: "",
        features: [
            "Multi-category AI tool catalog",
            "Semantic search with user-intent filtering",
            "Multi-criteria filtering system",
            "Side-by-side tool comparison (up to 4 tools)",
            "Personalized recommendations"
        ],
        impact: {
            discovery: "65% faster AI solution discovery",
            browsing: "50% reduction in browsing effort",
            confidence: "45% improvement in decision confidence"
        },
        category: "Web Platform"
    }
];
