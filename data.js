const PORTFOLIO_DATA = {
    profile: {
        name: "G. Rupali",
        role: "AI Specialist | Fog Computing Researcher",
        bio: "Dynamic AI specialist excelling in Explainable AI (XAI) and classification models. Inventor of a Fog-assisted framework for plant disease detection using YOLOv8 and Grad-CAM. Passionate about ethical AI and rural tech solutions.",
        avatar: "https://ui-avatars.com/api/?name=G+Rupali&background=7000ff&color=fff&size=256", 
        contact: {
            email: "rupali171206@gmail.com",
            location: "Chennai, 600087"
        },
        socials: [
            { icon: "fab fa-linkedin-in", link: "https://linkedin.com/in/rupali-ganesh-940a9b29", label: "LinkedIn" },
            { icon: "fab fa-github", link: "https://github.com/Rupali-byte-alt", label: "GitHub" }
        ]
    },

    patent: {
        number: "IN202641053225 A1",
        title: "Fog Assisted Explainable AI for Plant Disease Detection",
        abstract: "A distributed three-tier architecture (Mobile-Edge, Fog, Cloud) integrating YOLOv8 and Grad-CAM. The system ensures efficiency, reliability, and low latency for farmers in rural environments by offloading heavy explainability tasks to the fog layer, reducing mobile battery consumption.",
        status: "Published", 
        date: "15-05-2026",
        applicants: ["SRM Institute of Science and Technology, Ramapuram Campus", "Easwari Engineering College"],
        inventors: ["G. Rupali", "P. Lakshanya", "Athira Anish", "Dr. D. Deva Hema", "Dr. S. Visnu Dharsini", "Dr. T. Tamilselvi"],
        // ⚠️ IMPORTANT: Ensure this filename EXACTLY matches your uploaded PDF
        pdfLink: "/Patent_Fog_Assisted_Explainable_AI.pdf" 
    },

    education: [
        {
            degree: "B.Tech Computer Science",
            school: "SRM Institute of Science and Technology",
            year: "May 2028",
            location: "Chennai"
        },
        {
            degree: "B.S. Data Science and Applications",
            school: "IIT Madras",
            year: "May 2029",
            location: "Chennai"
        }
    ],

    skills: [
        "Explainable AI (XAI)", "YOLOv8", "Grad-CAM", "Fog Computing", 
        "Python", "SQL", "Android Development", "Website Development", 
        "LLM Integration", "Classification Models"
    ],

    projects: [
        {
            title: "Krishilens Server",
            desc: "Backend API server handling real-time YOLOv8 inference requests for the Krishilens mobile app.",
            tech: ["Python", "FastAPI", "YOLOv8"],
            link: "https://github.com/Rupali-byte-alt/krishilens-server"
        },
        {
            title: "Study Planner DBMS",
            desc: "Full-stack academic management system with risk analysis dashboard using LLM API.",
            tech: ["Flask", "MySQL", "Streamlit", "LLM"],
            link: "https://github.com/Rupali-byte-alt/DBMS"
        },
        {
            title: "Study Planner App",
            desc: "Android application for intelligent study scheduling and academic progress tracking.",
            tech: ["Flutter", "Dart", "Firebase"],
            link: "https://github.com/Rupali-byte-alt/study-planner"
        }
    ],

    certifications: [
        "Cybersecurity Analyst Job Simulation",
        "Learn Python Programming",
        "A1 Certificate in German",
        "AI Impact Gen-AI Hackathon Participant",
        "Smart India Hackathon Participant (Internal)"
    ],

    // ⚠️ IMPORTANT: Ensure this filename EXACTLY matches your uploaded PDF
    resumeLink: "/Resume.pdf" 
};
