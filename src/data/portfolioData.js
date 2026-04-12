export const profile = {
  name: "Harshit",
  title: "full-stack engineer",
  location: "india",
  focus: ["web3", "web2", "devOps"],
  skills: [
    "solana",
    "rust",
    "system-level engineering",
    "full stack webD",
    "DevOps",
  ],
  description:
    "Full-stack developer experienced in building scalable web applications, real-time systems, and developer tooling using Next.js, React, TypeScript, Node.js, Prisma, and PostgreSQL. Skilled in WebSockets, WebRTC, and containerized deployments with Docker and Kubernetes. Additional exposure to Solana, Rust, and system-level engineering, focusing on infrastructure and on-chain applications.",
  environments: ["solana"],
  technologies: [
    { name: "solana", icon: "solana" },
    { name: "rust", icon: "rust" },
    { name: "anchor", icon: "anchor" },
    { name: "pinocchio", icon: "code" },
    { name: "javascript", icon: "javascript" },
    { name: "typescript", icon: "typescript" },
    { name: "next.js", icon: "next" },
    { name: "react", icon: "react" },
    { name: "node.js", icon: "node" },
    { name: "express.js", icon: "express" },
    { name: "python", icon: "python" },
    { name: "c++", icon: "cplusplus" },
    { name: "selenium", icon: "selenium" },
    { name: "git", icon: "git" },
    { name: "github", icon: "github" },
    { name: "aws", icon: "aws" },
    { name: "docker", icon: "docker" },
    { name: "postgres", icon: "postgres" },
    { name: "prisma", icon: "prisma" },
    { name: "webSocket", icon: "websocket" },
    { name: "webRTC", icon: "webrtc" },
  ],
};

export const experiences = [
  {
    company: "Vitraga Solutions",
    role: "SDE intern",
    period: "April 2026 - present",
    achievements: [
      {
        text: "working with",
        highlight: "Next.js",
      },
      {
        text: "and contributing to",
        highlight: "real-world production projects",
      },
      {
        text: "while strengthening",
        highlight: "Git and collaborative development skills",
      },
    ],
  },
  {
    company: "Solana Turbine",
    role: "graduate (q4 2025)",
    period: "oct 2025 - dec 2025",
    achievements: [
      { text: "selected for the", highlight: "builder" },
      {
        text: "cohorts. learned solana runtime fundamentals and",
        highlight: "anchor (basic to advanced)",
      },
      {
        text: "built an",
        highlight: "decentralized lending and borrowing protocol",
      },
      {
        text: "as the builder capstone project.",
        highlight: "",
      },
    ],
  },
  {
    company: "Solana Turbine",
    role: "ongoing (q1 2026)",
    period: "jan 2026 - march 2026",
    achievements: [
      { text: "selected for the", highlight: "Acclerated builders" },
      { text: "ans currently learning", highlight: "Pinocchio" },
    ],
  },
];

export const recentProjects = [
  {
    title: "Wynk-it",
    description:
      "Built a WebRTC-based P2P game with SOL wagering, client-side blink detection (MediaPipe), and on-chain transactions using Solana",
    image: "/wynk-it.png",
    links: [
      {
        type: "live",
        url: "https://wynk-it.harshityad4v.in/",
      },
      { type: "code", url: "https://github.com/harshitneversettle/Wynk-It" },
    ],
  },
  {
    title: "Tareef",
    description:
      "Building a automated testimonal generator , generate and directky embed in any code ",
    image: "/tareef.png",
    links: [
      {
        type: "live",
        url: "",
      },
      { type: "code", url: "https://github.com/harshitneversettle/nextapp" },
    ],
  },
  {
    title: "Forj",
    description:
      "A certificate generator and validator which uses cryptography (sha256) for verifying the certs, and uses compressing algorithms (merkle tree) for minimizing cost.",
    image: "/forj.png",
    links: [
      { type: "live", url: "https://forj-eight.vercel.app/" },
      { type: "code", url: "https://github.com/harshitneversettle/Forj" },
    ],
  },
  {
    title: "SolEase",
    description:
      "A secure, transparent, and user-friendly decentralized finance (DeFi) protocol built on the Solana blockchain for seamless lending and borrowing of digital assets.",
    image: "/solease.png",
    links: [
      {
        type: "readme",
        url: "https://github.com/harshitneversettle/SolEase/blob/main/README.md",
      },
      { type: "code", url: "https://github.com/harshitneversettle/SolEase" },
    ],
  },
  // {
  //   title: "Solana mev analyzer",
  //   description:
  //     "A real-time MEV analyzer built on Solana Devnet to detect arbitrage opportunities caused by price imbalances across liquidity pools trading the same asset pair.",
  //   image: "/mev.png",
  //   links: [
  //     {
  //       type: "readme",
  //       url: "https://github.com/harshitneversettle/solana-mev/blob/main/README.md",
  //     },
  //     { type: "code", url: "https://github.com/harshitneversettle/solana-mev" },
  //   ],
  // },

  {
    title: "Shell (Rust)",
    description:
      "A fully-functional Unix shell implementation written in Rust, featuring command execution, I/O redirection, piping, command history, and tab completion.",
    image: "/shell.png",
    links: [
      {
        type: "readme",
        url: "https://github.com/harshitneversettle/Shell-rust/blob/main/README.md",
      },
      { type: "code", url: "https://github.com/harshitneversettle/Shell-rust" },
    ],
  },
];

export const proofOfWork = [
  {
    title: "SolEase",
    description: "A Solana-based decentralized lending and borrowing protocol",
    date: "dec 2025",
    category: "web3",
    github: "https://github.com/harshitneversettle/SolEase",
  },
  {
    title: "Solana Mev Analyzer",
    description:
      "Real-time arbitrage detection across SOL/USDC liquidity pools on Solana Devnet.",
    date: "dec 2025",
    category: "web3",
    github: "https://github.com/harshitneversettle/solana-mev",
  },
  {
    title: "Shell (Rust)",
    description:
      "A fully-functional Unix shell implementation written in Rust, featuring command execution, I/O redirection, piping, command history, and tab completion.",
    date: "Jan 2025",
    category: "web3",
    github: "https://github.com/harshitneversettle/Shell-rust",
  },
  {
    title: "Eventum",
    description:
      "A prediction market built on top of solana , using lmsr algo for finding the curr priice of assets.",
    date: "nov 2025",
    category: "web3",
    github: "https://github.com/harshitneversettle/eventum",
  },
  {
    title: "Forj",
    description:
      "A certificate generator and validator which uses cryptography (sha256) for verifying the certs, and uses compressing algorithms (merkle tree) for minimizing cost",
    date: "Jan 2025",
    category: "web3 web2",
    github: "https://github.com/harshitneversettle/forj",
  },
  {
    title: "My Chatbot",
    description: "Chat with me , without me",
    date: "Nov 2025",
    category: "web2",
    github: "https://github.com/harshitneversettle/My_Chatbot",
  },
  {
    title: "Mentors Connect",
    description: "Connect with mentors and teammates .",
    date: "jul 2025",
    category: "web2",
    github: "https://github.com/harshitneversettle/Mentors_connect",
  },
  {
    title: "Wynk-it",
    description: "Meet , play , stake and win",
    date: "March 2026",
    category: "web2 + web3",
    github: "https://github.com/harshitneversettle/Wynk-It",
  },
  {
    title: "Tareeft",
    description: "Generate testimonals and embed them directly",
    date: "april 2026",
    category: "web2",
    github: "https://github.com/harshitneversettle/nextapp",
  },
  {
    description:
      "Eager to hear 'You did well' instead of 'You could have done better' .",
    category: ";)",
  },
  {
    description:
      "You can be the prettiest shade of blue , but if they like red , it wouldn't matter.",
    category: ";)",
  },
];

export const githubActivity = {
  contributions: 1580,
  year: 2025,
};

export const musicTrack = {
  title: "Currently Listening",
  url: "./kho_gaye.mp3",
};
