export const hero = {
  name: "Rudrax Kongbrailatpam",
  title: "AI/ML Engineer · Full-Stack Developer · Automation Architect",
  tagline:
    "AI & Python Developer building intelligent, scalable systems — from ML models to production-ready APIs. I turn complex data into reliable, explainable solutions that drive real-world impact.",
  email: "krudrax16@gmail.com",
  resumeUrl:
    "https://drive.google.com/file/d/18ms0gopDwlhe_ljHMxO86cyrHELTla9p/view?usp=sharing",
  github: "https://github.com/NansKong",
  linkedin: "https://www.linkedin.com/in/rudrax-kongbrailatpam/",
  medium: "https://medium.com/@krudrax16",
};

export const about = `I'm an AI/ML Engineer who builds intelligent systems — not just models. I work across the full stack of machine learning: research, system design, data engineering, model training, and production deployment.

My work spans multiple domains — from training open-source language models for low-resource languages to building pharmacovigilance pipelines, automated outreach systems, and agentic AI tools. I approach problems with a research mindset: I read papers, run experiments, measure outcomes, and iterate until the system actually works.

What drives me is bridging the gap between research and production. I'm not content with a model that only performs well in a notebook — I want it running reliably in real environments, serving real users, and generating real value. That means building the pipelines, APIs, infrastructure, and automation layers around it too.

I'm also deeply interested in low-resource NLP, foundation model development, and AI systems that operate at scale. Whether it's pretraining a 135M-parameter language model from scratch, building a clinical risk prediction system, or automating complex business workflows with LLMs — I build things that matter.`;

export const skills = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
  },
  {
    title: "AI & Machine Learning",
    items: ["PyTorch", "TensorFlow", "Deep Learning", "Scikit-Learn", "Pandas", "NumPy", "Generative AI", "LangChain", "NLP", "Transformers", "Computer Vision", "HuggingFace", "RLHF", "Fine-Tuning", "RAG"],
  },
  {
    title: "Research & Tooling",
    items: ["Jupyter", "Weights & Biases", "FAISS", "Replicate", "OpenAI API", "Jinja2", "n8n", "Airtable"],
  },
  {
    title: "Web Technologies",
    items: ["React", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "FastAPI", "Django", "Flask", "React Router"],
  },
  {
    title: "Databases, Cloud & Tools",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Docker", "Git", "AWS", "Vercel", "Celery"],
  },
];

export const experience = [
  {
    dates: "2025 — Present",
    title: "AI/ML Engineer",
    company: "Freelance",
    companyUrl: "",
    description:
      "Design and deploy end-to-end machine learning pipelines, LLM-powered tools, and agentic AI systems for real-world automation. Build production-ready APIs, backend services, and data engineering pipelines integrating AI models with cloud infrastructure. Projects span pharmacovigilance, business outreach, NLP, and agentic workflows.",
    tech: ["Python", "FastAPI", "LangChain", "PostgreSQL", "Docker", "HuggingFace", "Replicate"],
  },
  {
    dates: "2023 — Present",
    title: "AI Systems Developer",
    company: "Personal Research Projects",
    companyUrl: "",
    description:
      "Research and build AI systems across low-resource NLP, foundation model pretraining, computer vision, and intelligent automation. Designed and trained ManipuriGPT (135M parameters) from scratch, built clinical risk prediction systems, and developed multi-pipeline ML architectures for production use.",
    tech: ["PyTorch", "Transformers", "HuggingFace", "Python", "NLP", "Computer Vision"],
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
    name: "Real World Machine Learning & AI: Scratch to Impact",
    issuer: "Fifth Force",
    date: "2025",
    verifyLink: "https://drive.google.com/file/d/1LK8fJ4YjczLGj0oC_SXENW2nuCXobZzO/view?usp=sharing",
    tags: ["Machine Learning", "AI", "Deep Learning"],
  },
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
    title: "ManipuriGPT — Foundational Language Model",
    description:
      "A research-grade open foundation language model for Manipuri (Meitei), a low-resource language. Trained a 135M-parameter GPT-style model from scratch using a custom corpus engineered from 147k sequences, a 32K-vocabulary tokenizer with 91% utilization, and a full SFT instruction-tuning pipeline with 30k ChatML records. Published to HuggingFace.",
    tech: ["PyTorch", "HuggingFace", "Python", "NLP", "Tokenization", "SFT"],
    github: "https://github.com/NansKong/ManipuriGPT-Foundational-Language-",
    label: "NLP RESEARCH",
  },
  {
    title: "Phera — Pharmacovigilance Pipeline",
    description:
      "A production-grade automated pharmacovigilance reporting system (PADER generation). Features an 8-step pipeline: data ingestion → deterministic analysis → LLM narrative generation → 6-layer automated validation → Jinja2 template rendering → final PDF. Processes 1,024 adverse drug reaction cases with MedDRA compliance.",
    tech: ["Python", "LLM", "Jinja2", "Replicate", "YAML", "Data Pipelines"],
    github: "https://github.com/NansKong/Phera",
    label: "AI PIPELINE",
  },
  {
    title: "Automated Startup Outreach System",
    description:
      "An agentic AI system that autonomously identifies newly registered Indian startups, enriches their profiles through live web scraping, scores opportunity gaps, and generates personalised cold-email pitches at scale. Implements a 6-stage pipeline with compliance, suppression DB, human-in-the-loop review, and multi-touch follow-up cadences.",
    tech: ["Python", "LLM", "Web Scraping", "FastAPI", "PostgreSQL", "Agentic AI"],
    github: "https://github.com/NansKong/Automated-Startup-Outreach-System",
    label: "AGENTIC AI",
  },
  {
    title: "Unusual Mobility Behaviour Detection",
    description:
      "An unsupervised ML pipeline for detecting unusual mobility behaviour in security surveillance video. Fuses geometric trajectory features with deep spatiotemporal VideoMAE embeddings, clustered via HDBSCAN for anomaly scoring — no labelled data required.",
    tech: ["Python", "YOLOv8", "VideoMAE", "HDBSCAN", "DeepSORT"],
    github: "https://github.com/NansKong/Unusual-Mobility-Behaviour-Detection-",
    label: "COMPUTER VISION",
  },
  {
    title: "Manipuri Corpus v1.0",
    description:
      "A research-grade, deduplicated Manipuri language corpus engineered for training foundation models. 11-phase data pipeline covering OCR (Tesseract multi-script), quality scoring, MinHash/SimHash deduplication, JSONL→Parquet conversion, and HuggingFace dataset publishing with train/val/test splits and a formal dataset card.",
    tech: ["Python", "Tesseract OCR", "HuggingFace", "NLP", "Data Engineering"],
    github: "https://github.com/NansKong/Manipuri_Corpus",
    label: "DATA ENGINEERING",
  },
  {
    title: "Smart Farmer Advisory Chatbot",
    description:
      "A RAG-powered multilingual agricultural advisory chatbot for Indian farmers. Combines curated knowledge retrieval (FAISS + multilingual embeddings), real-time weather context, and hallucination-controlled LLM responses in Hindi, English, and Hinglish.",
    tech: ["Python", "FAISS", "GPT-4", "Streamlit", "LangChain"],
    github: "https://github.com/alenso0/smart-farmer-advisory-chatbot",
    label: "NLP / RAG",
    image: "/nlp.png"
  },
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
    title: "Food-Dzzz — Campus Food Pre-Order Bot",
    description:
      "A Telegram bot system that lets students at LPU pre-order food from college canteens and restaurants, drastically reducing wait times and counter traffic. Handles order queuing, slot management, and canteen notifications.",
    tech: ["Python", "Telegram Bot API", "FastAPI", "SQLite"],
    github: "https://github.com/NansKong/Food-Dzzz",
    label: "AUTOMATION",
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
