export const hero = {
  name: "Rudrax Kongbrailatpam",
  title: "AI/ML Engineer · Full-Stack Developer · Automation Architect",
  tagline:
    "AI & Python Developer building intelligent, scalable systems — from ML models to production-ready APIs. I turn complex data into reliable, explainable solutions that drive real-world impact.",
  email: "krudrax16@gmail.com",
  resumeUrl:
    "https://drive.google.com/file/d/18ms0gopDwlhe_ljHMxO86cyrHELTla9p/view?usp=drive_link",
  github: "https://github.com/NansKong",
  linkedin: "https://www.linkedin.com/in/rudrax-kongbrailatpam/",
  huggingface: "https://huggingface.co/nanskong",
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
  demo?: string;
  livePreview?: string;
}

export interface ResearchItem {
  title: string;
  description: string;
  tech: string[];
  github: string;
  label: string;
  demo?: string;
}

export const research: ResearchItem[] = [
  {
    title: "HAFT — Adversarial Robustness for Hindi Fact-Checking",
    description:
      "An empirical adversarial robustness benchmark (1,120 claims, 22 attacks, 18,304 clean-verified evaluations) and Leave-One-Out calibrated feasibility predictor (90.91% acc) for Devanagari Hindi automated fact-checking, submitted to NAACL. Features fine-tuned IndicBERTv2, transfer audits on Llama 3 70B, and coverage-aware auditing policies.",
    tech: ["Python", "PyTorch", "NLP", "Transformers", "Adversarial ML", "Llama 3"],
    github: "https://github.com/NansKong/HAFT-Adversarial-Robustness-Benchmarking-for-Hindi-Fact-Checking-with-Adaptive-Attack-Selection-",
    label: "NAACL SUBMISSION",
  },
  {
    title: "ManipuriGPT — Foundational Language Model",
    description:
      "A research-grade open foundation language model for Manipuri (Meitei), a low-resource language. Trained a 135M-parameter GPT-style model from scratch using a custom corpus engineered from 147k sequences, a 32K-vocabulary tokenizer with 91% utilization, and a full SFT instruction-tuning pipeline with 30k ChatML records. Published to HuggingFace.",
    tech: ["PyTorch", "HuggingFace", "Python", "NLP", "Tokenization", "SFT"],
    github: "https://github.com/NansKong/ManipuriGPT-Foundational-Language-",
    label: "FOUNDATION MODEL",
  },
];

export const projects: Project[] = [
  {
    title: "GeoAtlas — Global Intelligence Platform",
    description:
      "A production global geospatial intelligence platform streaming real-time market data and multi-source news ingestion. Engineered with FastAPI, Celery background workers, Redis AOF caching, on-VM PostgreSQL 17, and a Next.js 14 frontend, reverse-proxied via Caddy with automated SSL on an Oracle Cloud ARM VM.",
    tech: ["Next.js", "FastAPI", "Oracle Cloud", "Docker", "PostgreSQL", "Redis", "Celery"],
    github: "https://github.com/NansKong/GeoAtlas",
    demo: "https://geoatlas-live.vercel.app",
    livePreview: "https://geoatlas-live.vercel.app",
    label: "GEOSPATIAL PLATFORM",
  },
  {
    title: "Virtual Photobooth Retro",
    description:
      "A retro-styled interactive virtual photobooth featuring real-time WebRTC multi-peer video streaming, custom canvas filters, dynamic sticker placement, photo strip composition, and automated download sharing.",
    tech: ["Next.js", "WebRTC", "React", "Node.js", "Canvas API", "Tailwind CSS"],
    github: "https://github.com/NansKong",
    demo: "https://photoboothretro.vercel.app",
    livePreview: "https://photoboothretro.vercel.app",
    label: "WEBRTC PLATFORM",
  },
  {
    title: "Research Desk — AI Investment Research Agent",
    description:
      "An autonomous financial research agent utilizing LangChain, LangGraph, and financial data tools to evaluate equities, synthesize market reports, and generate institutional investment memos in real time.",
    tech: ["TypeScript", "LangChain", "LangGraph", "Replicate API", "AI Agents", "React"],
    github: "https://github.com/NansKong/investment-research-agent",
    demo: "https://researchdesk-pi.vercel.app/",
    livePreview: "https://researchdesk-pi.vercel.app/",
    label: "AGENTIC AI",
  },
  {
    title: "Saarthi — Verified Grounded Adaptive Multimodal Tutor",
    description:
      "A verified grounded adaptive multimodal AI tutoring platform. Built with a 4-pod zero-overlap architecture featuring multimodal ingestion (Whisper + PDF/PPTX), concept prerequisite DAG graphs, hybrid BM25 + Qdrant dense retrieval with confidence-gated citations, Dual-LLM + SymPy question verification, and Bayesian Knowledge Tracing (BKT) with diagnostic backward-walk.",
    tech: ["FastAPI", "Next.js", "Python", "Qdrant", "BM25", "BKT", "SymPy", "Whisper"],
    github: "https://github.com/NansKong/Saarthi-A-Verified-Grounded-Adaptive-Tutor",
    label: "AI TUTOR & EDTECH",
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
    title: "BharatAI",
    description:
      "A production-grade AI-powered opportunity platform connecting Indian students with internships, jobs, and grants. Full-stack system with FastAPI, PostgreSQL, Redis, Celery task queues, an InCoScore ranking algorithm, and a React frontend.",
    tech: ["FastAPI", "PostgreSQL", "Redis", "Celery", "React"],
    github: "https://github.com/NansKong/BharatAI",
    label: "AI PLATFORM",
    image: "/bharatai.png",
  },
  {
    title: "Unusual Mobility Behaviour Detection",
    description:
      "An unsupervised ML pipeline for detecting unusual mobility behaviour in security surveillance video. Fuses geometric trajectory features with deep spatiotemporal VideoMAE embeddings, clustered via HDBSCAN for anomaly scoring — no labelled data required.",
    tech: ["Python", "YOLOv8", "VideoMAE", "HDBSCAN", "DeepSORT"],
    github: "https://github.com/NansKong/Unusual-Mobility-Behaviour-Detection-",
    label: "COMPUTER VISION",
  },
];
