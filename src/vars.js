import linkedinIcon from "./assets/images/svg/linkedin.svg";
import githubIcon from "./assets/images/svg/github.svg";

export const staticValue = {
    nick: 'ruriazz',
    firstName: "Aziz",
    middleName: "Ruri",
    lastName: "Suparman",
    fullName: "",
    role: "Software Engineer",
    tagline: "Backend-focused Software Engineer",
    phoneNumber: "+6281314277138",
    phoneNumberView: "(+62) 813 1427 7138",
    emailAddress: "me@ruriazz.com",
    location: "Jakarta, Indonesia",
    nationality: "Indonesia",
    avatarUrl: "https://public.storage.ruriazz.com/images/aziz.png",
    cvUrl: "https://public.storage.ruriazz.com/download/Resume%20-%20Aziz%20Ruri%20Suparman.pdf",
    experience: "5+ years",
    freelanceAvailability: true,
    mainLanguage: "Bahasa",
    summary:
        "Backend-focused Software Engineer with 5+ years building scalable systems for fintech and marketplace platforms. Delivered a WebRTC video call platform with an auto-assignment engine in 3 months, now handling hundreds of priority calls a month. Led an Elasticsearch migration that cut search latency from ~10s to <2s (5x). Comfortable owning architecture through production on GCP and AWS.",
    experiences: [
        {
            position: "Software Engineer — Full Stack",
            period: "2025-03 – Present",
            company: "PT Bank SMBC Indonesia",
            location: "South Jakarta, Indonesia",
            stack: "Spring Boot, NestJS, Next.js, WebRTC, WebSocket, Redis",
            highlights: [
                "Led development of a WebRTC-based video call platform for internal banking divisions and Jenius customers.",
                "Designed an intelligent auto-assignment engine, replacing manual agent pickup with automated priority-based call routing.",
                "Built a real-time queue system with Redis Pub/Sub for call state, agent availability, and audit history.",
                "Platform handles hundreds of video calls a month with consistent uptime since launch.",
            ],
        },
        {
            position: "Backend Software Engineer",
            period: "2022-02 – 2024-07",
            company: "PT Oto Klix Indonesia (Otoklix)",
            location: "South Jakarta, Indonesia",
            stack: "Python (Django, Flask, FastAPI), PHP (Laravel), PostgreSQL, MySQL, MongoDB, Elasticsearch, Redis, Docker",
            highlights: [
                "Spearheaded a search infrastructure overhaul, migrating from MySQL full-text search to Elasticsearch — cut average search latency from ~10s to <2s (5x).",
                "Enabled geo-aware search so customers could instantly discover nearby partner workshops carrying the products they searched for.",
                "Completed the migration in 4 months, coordinating reindexing strategy, API compatibility, and rollout with the team.",
                "Built and maintained RESTful APIs consumed by web, mobile, and third-party partner integrations.",
            ],
        },
        {
            position: "Web Programmer",
            period: "2020-02 – 2021-09",
            company: "PT Togu Inovasi Teknologi",
            location: "Central Jakarta, Indonesia",
            stack: "Mobile & Web, WebRTC, REST APIs",
            highlights: [
                "First developer at the company to ship a mobile app, expanding the team from web-only to mobile.",
                "Independently built and released SMOP! (real-time collaborative shopping tracker) and GoodJob (task manager with a real-time Kanban board) on Google Play and the App Store.",
                "Pioneered the company's first use of WebRTC for real-time voice/video/chat while building Wello, an internal collaboration app.",
                "Owned the full development lifecycle: API design, mobile development, deployment pipelines, and release management.",
            ],
        },
    ],
    skillGroups: [
        {
            title: "Languages",
            skills: ["Go", "Python", "TypeScript / JavaScript", "PHP", "Java"],
        },
        {
            title: "Data & Storage",
            skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"],
        },
        {
            title: "Frameworks",
            skills: ["Spring Boot", "NestJS", "Next.js", "Django / Flask / FastAPI", "Laravel"],
        },
        {
            title: "Realtime & Architecture",
            skills: ["WebRTC", "WebSocket", "RESTful APIs", "Microservices", "Event-Driven Systems"],
        },
        {
            title: "Infra & Cloud",
            skills: ["Docker", "Google Cloud Platform", "Amazon Web Services", "CI/CD Pipelines"],
        },
        {
            title: "Practices",
            skills: ["Git / Version Control", "Agile / Scrum"],
        },
    ],
    services: [
        {
            title: "Backend & API Development",
            description: "Designing and building RESTful and event-driven services — from data model to production rollout.",
        },
        {
            title: "Realtime Systems",
            description: "WebRTC video/voice, WebSocket, and Redis-backed queueing for call routing, chat, and live status.",
        },
        {
            title: "Database & Search",
            description: "Schema design, query optimization, and search infrastructure (Elasticsearch) for data at scale.",
        },
        {
            title: "Cloud & DevOps",
            description: "Docker-based deployments and CI/CD pipelines on GCP/AWS, from staging to production.",
        },
    ],
    socialMedia: [
        {
            name: "GitHub",
            url: "https://github.com/ruriazz",
            icon: githubIcon,
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/ruriazz/",
            icon: linkedinIcon,
        },
    ],
};

staticValue.fullName = `${staticValue.firstName} ${staticValue.middleName} ${staticValue.lastName}`;
