// Curated archive — real projects only, sorted by year descending
// Excludes: valentines, roseday, personal/tutorial repos

export type ArchiveProject = {
  year: number;
  title: string;
  tech: string[];
  github: string;
  demo?: string;
};

export const archiveProjects: ArchiveProject[] = [
  // 2026
  {
    year: 2026,
    title: "ASCII Image Generator",
    tech: ["Python", "PIL", "CLI"],
    github: "https://github.com/NansKong/ASCII-Image-Generator",
  },
  {
    year: 2026,
    title: "LeetCode Problem Solver Bot",
    tech: ["Python", "LLM", "Automation"],
    github: "https://github.com/NansKong/Leetcode-Problem-Solver-Bot",
  },
  {
    year: 2026,
    title: "BharatAI",
    tech: ["FastAPI", "PostgreSQL", "Redis", "Celery", "React"],
    github: "https://github.com/NansKong/BharatAI",
  },
  {
    year: 2026,
    title: "Campus Management System",
    tech: ["Python", "FastAPI", "PostgreSQL"],
    github: "https://github.com/NansKong/Campus-Management-System",
  },
  {
    year: 2026,
    title: "Production Travel Automation Engine",
    tech: ["Python", "n8n", "GPT-4", "Automation"],
    github: "https://github.com/NansKong/Production-Travel-Automation-",
  },
  {
    year: 2026,
    title: "Automated Startup Outreach System",
    tech: ["Python", "n8n", "AI", "Automation"],
    github: "https://github.com/NansKong/Automated-Startup-Outreach-System",
  },
  {
    year: 2026,
    title: "Meetings Transcription Automation",
    tech: ["Python", "Whisper", "GPT-4", "n8n"],
    github: "https://github.com/NansKong/meetings-transcription-automation",
  },
  {
    year: 2026,
    title: "Upwork Job Automation (n8n)",
    tech: ["n8n", "AI", "Airtable", "Automation"],
    github: "https://github.com/NansKong/upwork-automation-n8n",
  },
  // 2025
  {
    year: 2025,
    title: "CardioNeuro-Axis",
    tech: ["Python", "Machine Learning", "Healthcare"],
    github: "https://github.com/srtanya-25/CardioNeuro-Axis",
  },
  {
    year: 2025,
    title: "Blockchain Integrated File System",
    tech: ["Blockchain", "Python", "IPFS", "Solidity"],
    github: "https://github.com/NansKong/Blockchain-Integrated-File-System",
  },
  {
    year: 2025,
    title: "Diabetes Prediction Model",
    tech: ["Python", "Scikit-Learn", "Pandas", "Flask"],
    github: "https://github.com/NansKong/Diabetes-Prediction-Model",
  },
  {
    year: 2025,
    title: "Walmart Sales Analysis",
    tech: ["Python", "Pandas", "Matplotlib", "SQL"],
    github: "https://github.com/NansKong/Walmart-sales-analysis",
  },
  // 2024
  {
    year: 2024,
    title: "Sustainable Website",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/NansKong/Sustainable-Website",
  },
  // 2023
  {
    year: 2023,
    title: "SnazzyBites — Food Ordering App",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/NansKong/SnazzyBites",
  },
];

export type ArchiveCertificate = {
  year: number;
  title: string;
  issuer: string;
  link: string;
};

export const archiveCertificates: ArchiveCertificate[] = [
  {
    year: 2025,
    title: "Build Generative AI",
    issuer: "Infosys Springboard",
    link: "https://drive.google.com/file/d/1NwP_8cHZoLATQnAMc6RuA15eTbQpchQG/view?usp=sharing",
  },
  {
    year: 2025,
    title: "ChatGPT Made Easy",
    issuer: "Udemy",
    link: "https://drive.google.com/file/d/1w8-UzLPnvHSLpGykAztcIP9PjiTkcbZt/view?usp=sharing",
  },
  {
    year: 2025,
    title: "ChatGPT4 Prompt Engineering",
    issuer: "Infosys Springboard",
    link: "https://drive.google.com/file/d/1_nFJuC8NilBwrkrtuorRpNdarb-P3rKF/view?usp=sharing",
  },
  {
    year: 2025,
    title: "Computational Theory Language Principle & Finite Automata Theory",
    issuer: "Infosys Springboard",
    link: "https://drive.google.com/file/d/1mCnxo2fqElJKRJq_PAPU_MDcTn6655Os/view?usp=sharing",
  },
  {
    year: 2025,
    title: "Master Generative AI & Generative AI tools",
    issuer: "Infosys Springboard",
    link: "https://drive.google.com/file/d/19ODvBvhaukFD2YCnCM00dxJpZn_T8kFm/view?usp=sharing",
  },
  {
    year: 2024,
    title: "TCP/IP and Advanced Topics",
    issuer: "University Of Colorado",
    link: "https://drive.google.com/file/d/1SNHzKXLgEZtLw7oFX1o9RF1Yvlq5VrX-/view?usp=sharing",
  },
  {
    year: 2024,
    title: "Peer-to-Peer Protocols and Local Area Networks",
    issuer: "University Of Colorado",
    link: "https://drive.google.com/file/d/1oD3YPTqZ0GeV6jae5do_KUYig7yPVEY5/view?usp=sharing",
  },
  {
    year: 2024,
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google / Coursera",
    link: "https://drive.google.com/file/d/1Y34WrxStHHGjD1IZRYkzTFHdbxg0nmVG/view?usp=sharing",
  },
  {
    year: 2024,
    title: "Introduction to Artificial Intelligence",
    issuer: "Infosys Springboard",
    link: "https://drive.google.com/file/d/1wc_H8SzhZm6GLcUiV3m4IZUo2GdhxD_F/view?usp=sharing",
  },
  {
    year: 2024,
    title: "Introduction to Data Science",
    issuer: "Infosys Springboard",
    link: "https://drive.google.com/file/d/1PsKkbPR5p5XeeaDoMxThoDkjk9wS0yM4/view?usp=sharing",
  },
  {
    year: 2024,
    title: "Introduction to Natural Language Processing",
    issuer: "Infosys Springboard",
    link: "https://drive.google.com/file/d/1zZvx3TRIGQ_88zEn24gOuSFiyrH5kq8U/view?usp=sharing",
  },
  {
    year: 2024,
    title: "Fundamentals of Network Communication",
    issuer: "University Of Colorado",
    link: "https://drive.google.com/file/d/1iGb6g8tf7_P3wgtaJc8FK1Ftl83AcPjX/view?usp=sharing",
  },
  {
    year: 2024,
    title: "Project Management Course",
    issuer: "Udemy",
    link: "https://drive.google.com/file/d/1s39tzkWP5W2Hn4fubu4_7YJtKCtwASmx/view?usp=sharing",
  },
];
