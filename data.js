const PORTFOLIO_DATA = {
    profile: {
        name: "G. Rupali",
        role: "AI Specialist | Fog Computing Researcher",
        bio: "Dynamic AI specialist excelling in Explainable AI (XAI) and classification models. Inventor of a Fog-assisted framework for plant disease detection using YOLOv8 and Grad-CAM.",
        avatar: "https://ui-avatars.com/api/?name=G+Rupali&background=7000ff&color=fff&size=256", 
        socials: [
            // ✅ FIXED: Corrected LinkedIn URL based on resume
            { icon: "fab fa-linkedin-in", link: "https://linkedin.com/in/rupali-ganesh-940a9b29", label: "LinkedIn" },
            { icon: "fab fa-github", link: "https://github.com/Rupali-byte-alt", label: "GitHub" }
        ]
    },

    patent: {
        number: "IN202641053225 A1",
        title: "Fog Assisted Explainable AI for Plant Disease Detection",
        abstract: "A distributed three-tier architecture (Mobile-Edge, Fog, Cloud) integrating YOLOv8 and Grad-CAM. Ensures efficiency, reliability, and low latency for farmers in rural environments by offloading explainability tasks to the fog layer.",
        status: "Published", 
        date: "15-05-2026",
        applicants: ["SRM Institute Of Science And Technology, Ramapuram Campus", "Easwari Engineering College"],
        inventors: ["G. Rupali", "P. Lakshanya", "Athira Anish", "Dr. D. Deva Hema", "Dr. S. Visnu Dharsini", "Dr. T. Tamilselvi"],
        // ✅ FIXED: Path now matches the corrected filename (single .pdf)
        pdfLink: "/Patent_Fog_Assisted_Explainable_AI.pdf" 
    },

    education: [
        { degree: "B.S. Data Science and Applications", school: "IIT Madras", year: "May 2029", location: "Chennai" },
        { degree: "B.Tech Computer Science", school: "SRM Institute of Science and Technology", year: "May 2028", location: "Chennai" }
    ],

    skills: ["Explainable AI (XAI)", "YOLOv8", "Grad-CAM", "Fog Computing", "Python", "SQL", "Android Development", "LLM Integration"],

    projects: [
        { title: "Krishilens Server", desc: "Backend API server handling real-time YOLOv8 inference requests.", tech: ["Python", "FastAPI", "YOLOv8"], link: "https://github.com/Rupali-byte-alt/krishilens-server" },
        { title: "Krishlens Website", desc: "Official web portal for the Krishilens agricultural AI platform.", tech: ["HTML5", "CSS3", "JavaScript"], link: "https://github.com/Rupali-byte-alt/Krishlens-website" },
        { title: "Study Planner DBMS", desc: "Full-stack academic management system with risk analysis dashboard.", tech: ["Flask", "MySQL", "Streamlit"], link: "https://github.com/Rupali-byte-alt/DBMS" },
        { title: "Study Planner App", desc: "Android application for intelligent study scheduling.", tech: ["Flutter", "Dart"], link: "https://github.com/Rupali-byte-alt/study-planner" }
    ],

    certifications: ["Cybersecurity Analyst Job Simulation", "Learn Python Programming", "A1 Certificate in German", "AI Impact Gen-AI Hackathon", "Smart India Hackathon (Internal)"]
};
