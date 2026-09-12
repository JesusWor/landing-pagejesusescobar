import { Github, Linkedin } from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    label: "GitHub",
    logo: <Github size={22} strokeWidth={1.5} />,
    src: "https://github.com/JesusWor",
  },
  {
    id: 2,
    label: "LinkedIn",
    logo: <Linkedin size={22} strokeWidth={1.5} />,
    src: "https://www.linkedin.com/in/jesus-escobar-123572344/",
  },
];

export const navItems = [
  { id: 1, title: "Explore", link: "/" },
  { id: 2, title: "Projects", link: "/portfolio" },
  { id: 3, title: "Skills", link: "/services" },
  { id: 4, title: "About Me", link: "/about-me" },
];

export type Difficulty = "Easy" | "Medium" | "Hard";

export type Project = {
  id: number;
  slug: string;
  title: string;
  difficulty: Difficulty;
  period: string;
  stack: string[];
  description: string;
  points: string[];
  image?: string;
  urlGithub?: string;
  urlDemo?: string;
  status: "live" | "github-only" | "hardware";
  featured?: boolean;
};

// status meanings:
// "live"          -> has a working deployed demo      -> shown "Solved" (green check)
// "github-only"   -> code is public, no hosted demo    -> shown "Attempted" (orange half-ring)
// "hardware"      -> physical / embedded project        -> shown with a star marker

export const dataProjects: Project[] = [
  {
    id: 1,
    slug: "cardiac-digital-twin",
    title: "Cardiac Digital Twin — PIGNN for ECG Synthesis",
    difficulty: "Hard",
    period: "Jun 2025 — Present",
    stack: ["Python", "PyTorch", "Graph Neural Networks", "Jupyter"],
    description:
      "Physics-informed graph neural network that models the heart's electrical conduction system and synthesizes 12-lead ECG from PPG input.",
    points: [
      "Modeled the SA node, AV node, His bundle, and Purkinje network as a graph using Graph GRU message-passing to synthesize 12-lead ECG from pulse-oximetry input.",
      "Combined a rule-based HRV classifier (bradycardia, tachycardia, arrhythmia, hypoxemia) with the deep model, trained on PhysioNet's MIT-BIH and PTB databases.",
      "Built a 1D convolutional encoder + temporal-refinement GRU with a composite loss (MSE, Pearson correlation, physiological regularization).",
      "Shipped a PyTorch pipeline with checkpointing, patient-level splitting, and cross-platform fixes.",
    ],
    image: "/projects/cardiac-twin.png",
    urlGithub: "https://github.com/JesusWor",
    status: "github-only",
    featured: true,
  },
  {
    id: 2,
    slug: "workhubmty",
    title: "WorkHubMTY — Collaborative Workspace Platform",
    difficulty: "Medium",
    period: "Feb 2026 — Jun 2026",
    stack: ["Next.js", "Node.js", "Express", "MySQL", "MongoDB", "JWT"],
    description:
      "Full-stack booking platform for reserving cubicles and parking spots, built with a small team.",
    points: [
      "Implemented JWT-based authentication with access/refresh token flow to secure API endpoints.",
      "Built a coworker schedule visualization so teammates can see each other's booking agendas in real time.",
      "Designed a statistics dashboard tracking workspace usage and occupancy.",
      "Built a notification system for booking confirmations, changes, and reminders.",
      "Collaborated on integrating a Gemini-powered assistant to search and book available spaces.",
    ],
    image: "/projects/workhub.png",
    urlGithub: "https://github.com/JesusWor/workhubMTY",
    status: "github-only",
    featured: true,
  },
  {
    id: 3,
    slug: "multi-agent-rl-simulator",
    title: "Multi-Agent Reinforcement Learning Simulator",
    difficulty: "Hard",
    period: "Nov 2025 — Dec 2025",
    stack: ["Python", "FastAPI", "Q-Learning", "React", "Vite"],
    description:
      "A simulation environment where multiple agents learn via Q-learning, trainable and viewable from the browser.",
    points: [
      "Designed the Q-learning training pipeline, agent decision logic, and simulation environment.",
      "Architected a modular FastAPI backend exposing simulation state through a REST API.",
      "Built a training state machine managing agent lifecycle and Q-table persistence.",
      "Developed a React (Vite) frontend to run and visualize agent behavior in real time.",
    ],
    image: "/projects/rl-simulator.png",
    urlGithub: "https://github.com/JesusWor",
    status: "github-only",
    featured: true,
  },
  {
    id: 4,
    slug: "shelterhub",
    title: "ShelterHub — Shelter Management Platform",
    difficulty: "Medium",
    period: "Aug 2025 — Nov 2026",
    stack: [".NET", "C#", "REST API", "React", "SQL"],
    description:
      "Administrative platform for managing shelters, reservations, and bed allocation with role-based access.",
    points: [
      "Engineered a RESTful API in .NET (C#) with real-time validation and business-logic enforcement.",
      "Built an admin web platform with authentication and role-based access control.",
      "Implemented encrypted QR-code generation and mobile validation for reservation check-in.",
    ],
    image: "/projects/shelterhub.png",
    urlGithub: "https://github.com/JesusWor",
    status: "github-only",
  },
  {
    id: 5,
    slug: "advanced-algorithms-visualization",
    title: "Advanced Algorithms Visualization Platform",
    difficulty: "Medium",
    period: "Oct 2025 — Nov 2025",
    stack: ["Python", "C++", "React", "JavaScript"],
    description:
      "Runs and compares algorithm implementations in Python and C++ side by side, benchmarking execution time.",
    points: [
      "Exposed a REST-style API to run, benchmark, and compare algorithms across languages.",
      "Returned execution time and complexity metrics for direct comparison.",
      "Applied core CS concepts: data structures, recursion, and complexity analysis.",
    ],
    image: "/AlgorithmVisualizer.png",
    urlGithub: "https://github.com/JesusWor/AlgorithmVisualizer",
    urlDemo: "https://algorithmvisulizer.netlify.app/",
    status: "live",
  },
  {
    id: 6,
    slug: "smart-greenhouse-control-system",
    title: "Smart Greenhouse Control System",
    difficulty: "Medium",
    period: "Sep 2024 — Nov 2024",
    stack: ["Python", "PHP", "Raspberry Pi", "JavaScript"],
    description:
      "Web system to monitor and control greenhouse conditions in real time from a Raspberry Pi.",
    points: [
      "Built a Python API bridging the web app and a Raspberry Pi managing sensors and actuators.",
      "Engineered a PHP-based authentication system backed by a relational database.",
      "Added dynamic data visualization and manual actuator control for fans and irrigation.",
    ],
    image: "/projects/greenhouse.png",
    urlGithub: "https://github.com/JesusWor",
    status: "github-only",
  },
  {
    id: 7,
    slug: "hand-gesture-mouse-controller",
    title: "Hand Gesture Mouse Controller",
    difficulty: "Easy",
    period: "Jan 2026",
    stack: ["Python", "OpenCV", "MediaPipe"],
    description: "Hands-free mouse control from a webcam using real-time hand-landmark detection.",
    points: [
      "Implemented gesture recognition and finger counting to trigger OS-level mouse and keyboard actions.",
      "Applied cursor smoothing, sensitivity scaling, and action cooldowns for stable control.",
    ],
    image: "/projects/gesture-mouse.png",
    urlGithub: "https://github.com/JesusWor",
    status: "github-only",
  },
  {
    id: 8,
    slug: "video-games-webpage",
    title: "Video Games Webpage",
    difficulty: "Easy",
    period: "Jan 2025 — Apr 2025",
    stack: ["React", "JavaScript", "CSS"],
    description:
      "Tic Tac Toe, Connect 4, Snake, Flappy Bird, and Wordle in one responsive React app.",
    points: [
      "Persisted game state with Local Storage and deployed on Vercel.",
      "Added real-time feedback for game events with React-Toastify.",
    ],
    image: "/image-3.jpg",
    urlGithub: "https://github.com/JesusWor/Proyectos/tree/main/juegos",
    urlDemo: "https://juegosde1-2jugadores.pages.dev/",
    status: "live",
  },
  {
    id: 9,
    slug: "task-manager",
    title: "Task Manager",
    difficulty: "Easy",
    period: "Dec 2025",
    stack: ["React", "Tailwind CSS"],
    description: "A to-do list app with full CRUD and small interaction touches.",
    points: [
      "Implemented create/edit/delete flows with optimistic UI updates.",
      "Polished the experience with animations and micro-interactions.",
    ],
    image: "/image-4.jpg",
    urlGithub: "https://github.com/JesusWor/Proyectos/tree/main/task-assignaments",
    urlDemo: "https://task-assignament.pages.dev/",
    status: "live",
  },
  {
    id: 10,
    slug: "turing-machine-model",
    title: "Model of a Turing Machine",
    difficulty: "Medium",
    period: "Dec 2024 — Jan 2025",
    stack: ["C/C++", "Arduino"],
    description:
      "A physical model of a Turing Machine validating input strings with real hardware.",
    points: [
      "Implemented finite-state logic in C on Arduino to check strings starting with \"ab\".",
      "Used an ultrasonic sensor to emulate character input via distance measurement.",
    ],
    image: "/Turing.png",
    urlGithub: "https://github.com/JesusEduardoEscobar/Turing-Machine",
    urlDemo: "https://www.youtube.com/shorts/y2WWIDBUsqo",
    status: "hardware",
  },
];

export const dataAbout = [
  {
    id: 1,
    title: "Programming Technician — CBTis 224",
    date: "Aug 2020 — Jun 2023",
    description:
      "Technical high school degree in Programming, Culiacán, Sinaloa.",
  },
  {
    id: 2,
    title: "B.S. Computer Science and Technology — Tecnológico de Monterrey",
    date: "Aug 2023 — Jun 2027",
    description:
      "Focused on backend development, AI/ML, and full-stack systems. Volunteer on the Education Board of SEITC.",
  },
  {
    id: 3,
    title: "Junior Web Developer — Rivemex",
    date: "Jul 2025 — May 2026",
    description:
      "Maintained a supplier platform's frontend, validated API responses against requirements (cutting production errors by 25%), and worked with C# and SAP Business One integrations.",
  },
  {
    id: 4,
    title: "Hackathon — 2nd place at SAERO",
    date: "Nov 2025",
    description:
      "Built a web-based asteroid impact risk assessment system in 24 hours using NASA APIs, placing 2nd among 7 teams.",
  },
];

export const skillGroups = [
  {
    id: 1,
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C++", "C#", "SQL", "Kotlin"],
  },
  {
    id: 2,
    title: "Frameworks & Libraries",
    items: ["React.js", "Next.js", "Node.js", "ASP.NET", "Blazor", "FastAPI", "PyTorch"],
  },
  {
    id: 3,
    title: "Tools & Platforms",
    items: ["Git", "VS Code", "Visual Studio", "MATLAB", "SAP Business One"],
  },
  {
    id: 4,
    title: "Data & Infra",
    items: ["MySQL", "MongoDB", "Netlify", "Vercel", "Raspberry Pi"],
  },
];
