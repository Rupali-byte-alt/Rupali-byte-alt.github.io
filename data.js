// ==========================================
//  PORTFOLIO DATA CONFIGURATION
// Edit ONLY this file to update your website!
// ==========================================

const PORTFOLIO_DATA = {
    // 1. PERSONAL PROFILE
    profile: {
        name: "Rupali Ganesh",
        role: "AI Developer & Researcher | B.Tech CSE",
        bio: "Inventor of Fog-Assisted Explainable AI for Plant Disease Detection. Specializing in YOLOv8, Edge Computing, and Full-Stack Development.",
        avatar: "https://ui-avatars.com/api/?name=Rupali+Ganesh&background=7000ff&color=fff&size=256", 
        socials: [
            { icon: "fab fa-linkedin-in", link: "https://linkedin.com/in/your-profile", label: "LinkedIn" },
            { icon: "fab fa-github", link: "https://github.com/Rupali-byte-alt", label: "GitHub" },
            { icon: "fas fa-envelope", link: "mailto:your@email.com", label: "Email" }
        ]
    },

    // 2. PATENT DETAILS (From your PDF)
    patent: {
        number: "IN202641053225 A1",
        title: "Fog Assisted Explainable AI for Plant Disease Detection",
        desc: "A distributed three-tier architecture (Mobile-Edge, Fog, Cloud) integrating YOLOv8 and Grad-CAM for low-latency, battery-efficient crop disease diagnosis with visual explainability for farmers.",
        status: "Published", 
        date: "May 2026",
        inventors: ["G. Rupali", "P. Lakshanya", "Athira Anish", "Dr. D. Deva Hema", "Dr. S. Visnu Dharsini", "Dr. T. Tamilselvi"],
        institution: "SRM Institute of Science and Technology, Ramapuram Campus"
    },

    // 3. EDUCATION & COURSES
    education: [
        {
            degree: "B.Tech Computer Science Engineering",
            school: "SRM Institute of Science and Technology",
            score: "9.36 CGPA",
            year: "2022 - 2026"
        },
        {
            degree: "BS in Data Science and Applications",
            school: "IIT Madras",
            score: "Ongoing",
            year: "2024 - Present"
        }
    ],

    // 4. PROJECTS (Add new ones here anytime!)
    projects: [
        {
            title: "Krishilens Server",
            desc: "Backend API server handling real-time YOLOv8 inference requests for the Krishilens mobile app.",
            tech: ["Python", "FastAPI", "YOLOv8", "Docker"],
            link: "https://github.com/Rupali-byte-alt/krishilens-server"
        },
        {
            title: "Krishlens Website",
            desc: "Official web portal for the Krishilens agricultural AI platform featuring documentation and demos.",
            tech: ["HTML5", "CSS3", "JavaScript"],
            link: "https://github.com/Rupali-byte-alt/Krishlens-website"
        },
        {
            title: "Study Planner DBMS",
            desc: "Full-stack academic management system with risk analysis dashboard and relational database design.",
            tech: ["Flask", "MySQL", "Streamlit", "SQL"],
            link: "https://github.com/Rupali-byte-alt/DBMS"
        },
        {
            title: "Study Planner App",
            desc: "Android application for intelligent study scheduling and academic progress tracking.",
            tech: ["Flutter", "Dart", "Firebase"],
            link: "https://github.com/Rupali-byte-alt/study-planner"
        }
    ],

    // 5. SKILLS
    skills: ["YOLOv8", "Grad-CAM", "Fog Computing", "Flutter", "FastAPI", "TensorFlow Lite", "MySQL", "Docker", "Git"]
};
