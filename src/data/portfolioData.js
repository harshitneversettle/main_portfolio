export const profile = {
  name: "Harshit",
  title: "full-stack engineer",
  location: "india",
  focus: ["web3", "systems"],
  skills: ["solana", "rust", "system-level engineering"],
  description:
    "most of my work revolves around solana, rust, and system-level engineering, where i focus on building infrastructure, developer tooling, and on-chain applications.",
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
  ],
};

export const experiences = [
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
    title: "SolEase",
    description:
      "a local-first, terminal-based password manager built for people who care about security, simplicity, and control and uses argon2id and xchacha20-poly1305.",
    image: "/solease.png",
    links: [
      {
        type: "readme",
        url: "https://github.com/harshitneversettle/SolEase/blob/main/README.md",
      },
      { type: "code", url: "https://github.com/harshitneversettle/SolEase" },
    ],
  },
  {
    title: "Solana mev analyzer",
    description:
      "A real-time MEV analyzer built on Solana Devnet to detect arbitrage opportunities caused by price imbalances across liquidity pools trading the same asset pair.",
    image: "/mev.png",
    links: [
      {
        type: "readme",
        url: "https://github.com/harshitneversettle/solana-mev/blob/main/README.md",
      },
      { type: "code", url: "https://github.com/harshitneversettle/solana-mev" },
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
    category: "web3",
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
];

export const githubActivity = {
  contributions: 1580,
  year: 2025,
};

export const musicTrack = {
  title: "Currently Listening",
  url: "./udarriyan.mp3",
};
