export const hero = {
  name: "Rudrax Kongbrailatpam",
  title: "AI/ML Engineer · Full-Stack Developer · Automation Architect",
  tagline:
    "AI & Python Developer building intelligent, scalable systems — from ML models to production-ready APIs. I turn complex data into reliable, explainable solutions that drive real-world impact.",
  email: "krudrax16@gmail.com",
  resumeUrl:
    "https://drive.google.com/file/d/1o3J1R6fWFTtGQbzrdFhDQFoVP6x26Q08/view?usp=sharing",
  github: "https://github.com/NansKong",
  linkedin: "https://www.linkedin.com/in/rudrax-kongbrailatpam/",
  medium: "https://medium.com/@krudrax16",
};

export const about = `I'm an AI/ML engineer and Python developer who enjoys building intelligent systems that actually work outside of research papers and notebooks.

Most of what I do revolves around turning machine learning ideas into real, usable products. I like working on the entire pipeline — from cleaning and preparing data to training models, building APIs, and deploying systems that people can interact with.

Over time, I've worked on projects like multi-label clinical risk prediction systems, machine learning models, and LLM-powered automation tools. What excites me most is figuring out how to take complex ML concepts and turn them into practical applications that solve real problems.

Alongside AI, I also build backend systems and automation tools that connect APIs, databases, and cloud infrastructure. I enjoy creating systems that are not just smart, but also reliable, scalable, and ready for production.`;

export const skills = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
  },
  {
    title: "AI & Machine Learning",
    items: ["PyTorch", "TensorFlow", "Scikit-Learn", "Pandas", "NumPy", "Generative AI", "LangChain", "NLP", "Transformers", "Computer Vision"],
  },
  {
    title: "Web Technologies",
    items: ["React", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "FastAPI", "Django", "Flask", "React Router"],
  },
  {
    title: "Databases & Tools",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Docker", "Git", "AWS"],
  },
];

export const experience = [
  {
    dates: "2025 — Present",
    title: "AI/ML Developer",
    company: "Freelance",
    companyUrl: "",
    description:
      "Design and deploy end-to-end machine learning pipelines and LLM-powered tools for real-world automation. Build production-ready APIs and backend services integrating AI models with cloud infrastructure.",
    tech: ["Python", "FastAPI", "LangChain", "PostgreSQL", "Docker"],
  },
  {
    dates: "2023 — Present",
    title: "Full-Stack Developer",
    company: "Personal Projects",
    companyUrl: "",
    description:
      "Built multiple full-stack applications combining React frontends with Python backends. Focused on performance, scalability, and clean architecture with modern tooling.",
    tech: ["React", "TypeScript", "Node.js", "Vite", "Tailwind CSS"],
  },
  {
    dates: "Jun' 25 — Jul' 25",
    title: "Real World Machine Learning & AI: Scratch to Impact",
    company: "Fifth Force",
    companyUrl: "https://drive.google.com/file/d/1LK8fJ4YjczLGj0oC_SXENW2nuCXobZzO/view?usp=sharing",
    description:
      "Participated in a 6-week intensive program focused on building real-world machine learning and AI applications from scratch.",
    tech: ["Python", "Machine Learning", "Deep Learning", "AI"],
  },
];

export const education = [
  {
    dates: "Aug' 23 — Present",
    degree: "Lovely Professional University",
    institution: "Bachelor of Technology - Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
    institutionUrl: "",
    description: "Punjab, India",
  },
  {
    dates: "Mar' 22 — Mar' 23",
    degree: "Herbert School",
    institution: "Intermediate",
    institutionUrl: "",
    description: "Manipur, India",
  },
  {
    dates: "Mar' 19 — Mar' 20",
    degree: "St. Joseph's Hr. Sec. School",
    institution: "Matriculation",
    institutionUrl: "",
    description: "Manipur, India",
  },
];

export const certificates = [
  {
    name: "Introduction to Artificial Intelligence",
    issuer: "Infosys Springboard / Coursera",
    date: "2024",
    verifyLink: "https://drive.google.com/file/d/1wc_H8SzhZm6GLcUiV3m4IZUo2GdhxD_F/view?usp=sharing",
    tags: ["AI", "Machine Learning"],
  },
  {
    name: "Introduction to Data Science",
    issuer: "Infosys Springboard / Coursera",
    date: "2024",
    verifyLink: "https://drive.google.com/file/d/1PsKkbPR5p5XeeaDoMxThoDkjk9wS0yM4/view?usp=sharing",
    tags: ["Data Science", "Python", "Analytics"],
  },
  {
    name: "Introduction to Natural Language Processing",
    issuer: "Infosys Springboard / Coursera",
    date: "2024",
    verifyLink: "https://drive.google.com/file/d/1zZvx3TRIGQ_88zEn24gOuSFiyrH5kq8U/view?usp=sharing",
    tags: ["NLP", "Text Processing"],
  },
];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  label: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "BharatAI",
    description:
      "A production-grade AI-powered opportunity platform connecting Indian students with internships, jobs, and grants. Full-stack system with FastAPI, PostgreSQL, Redis, Celery task queues, an InCoScore ranking algorithm, and a React frontend.",
    tech: ["FastAPI", "PostgreSQL", "Redis", "Celery", "React"],
    github: "https://github.com/NansKong/BharatAI",
    label: "AI PLATFORM",
    image: "/bharatai.png",
  },
  {
    title: "Meetings Transcription Automation",
    description:
      "Fully automated pipeline that records, transcribes, and summarizes meeting audio using Whisper and GPT. Integrates with n8n for end-to-end workflow orchestration — auto-sending summaries and action items to participants.",
    tech: ["Python", "Whisper", "GPT-4", "n8n", "Automation"],
    github:
      "https://github.com/NansKong/meetings-transcription-automation",
    label: "TRANSCRIPTION",
  },
  {
    title: "Diabetes Prediction Model",
    description:
      "A machine learning pipeline for clinical diabetes risk prediction. Covers full data preprocessing, feature engineering, model training, evaluation, and a Flask API for serving predictions — built for real-world interpretability and accuracy.",
    tech: ["Python", "Scikit-Learn", "Pandas", "Flask", "ML"],
    github: "https://github.com/NansKong/Diabetes-Prediction-Model",
    label: "ML MODEL",
  },
  {
    title: "3D Portfolio Website",
    description:
      "A modern, immersive 3D portfolio built with React, Three.js, and Vite. Features an animated liquid-ether background, glassmorphism UI, smooth scroll sections, and a skills marquee. Designed to wow at first glance.",
    tech: ["React", "Three.js", "TypeScript", "Vite", "Tailwind CSS"],
    github: "https://github.com/NansKong/Rudrax-Portfolio",
    label: "Portfolio V1",
    image: "/v1.png",
  },
];
