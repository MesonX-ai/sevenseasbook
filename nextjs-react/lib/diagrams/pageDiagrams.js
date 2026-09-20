/**
 * Contextual diagrams for the static (non-homepage) pages.
 * Keyed by page name; rendered near the top of each page.
 */
import { N, S } from "./shared";

export const pageDiagrams = {
  books: {
    title: "From Book to Production System",
    subtitle: "How the Seven SEAS materials fit together",
    edgeLabels: ["explains", "maps to", "practice"],
    stages: [
      S("The book", "slate", [N("book", "Seven SEAS (PDF)", "The complete framework in one volume")]),
      S("Seven pillars", "blue", [N("memory", "Chapter index", "Memory, tools, loops, RAG, agents, safety, observability")]),
      S("Study guides", "purple", [N("doc", "Four angles per chapter", "Explained simply, under the hood, real world, made simple")]),
      S("Your system", "green", [N("check", "Production rollout", "Patterns applied to real enterprise workloads")]),
    ],
  },
  "eternal-terms": {
    title: "Seven Terms That Outlast Every Hype Cycle",
    subtitle: "How the eternal terms stack into modern AI",
    edgeLabels: ["builds on", "enables", "steers"],
    stages: [
      S("Foundations", "blue", [
        N("chart", "Machine learning", "Learning from data since 1959"),
        N("network", "Neural networks", "The substrate of deep learning"),
      ]),
      S("Perception", "purple", [
        N("chat", "NLP", "Language in and out"),
        N("eye", "Computer vision", "Pixels to perception"),
      ]),
      S("Action & structure", "amber", [
        N("target", "Reinforcement learning", "Learning from consequences"),
        N("graph", "Knowledge representation", "Facts machines can reason over"),
      ]),
      S("Responsibility", "green", [
        N("scale", "AI ethics & alignment", "What makes capability deployable"),
      ]),
    ],
  },
  projects: {
    title: "The Mesonsoft Ecosystem",
    subtitle: "One lab, many products — shared ideas across projects",
    stages: [
      S("Studio", "slate", [N("globe", "Mesonsoft & AniShiv", "The companies and progress monitor behind the work")]),
      S("AI products", "blue", [
        N("sparkles", "sQuark AI Browser", "An AI-native browsing experience"),
        N("users", "My Family Assistant", "Everyday intelligence for households"),
      ]),
      S("Community", "amber", [
        N("book", "Wall of Wisdom & My Thoughts", "Shared reflection and writing"),
        N("play", "Sports & Cricket", "My Sports 365, RespoFit, Warriors CC"),
      ]),
      S("This book", "green", [N("book", "Seven SEAS", "The framework that ties the learnings together")]),
    ],
  },
  resources: {
    title: "Finding the Right Resource",
    subtitle: "How the video library is organized",
    edgeLabels: ["pick a pillar", "curated list"],
    feedback: { label: "go deeper in the linked chapter" },
    stages: [
      S("Start", "slate", [N("user", "What do you need?", "A chapter topic or a keyword")]),
      S("Filter", "blue", [
        N("search", "By topic", "All seven pillars represented"),
        N("chart", "By level", "Beginner, intermediate, advanced"),
      ]),
      S("Watch", "purple", [N("play", "Community-curated videos", "Channels vetted for production-grade content")]),
    ],
  },
  press: {
    title: "How Seven SEAS Travels",
    subtitle: "From framework to community coverage",
    edgeLabels: ["review", "coverage"],
    feedback: { label: "reader feedback shapes new editions" },
    stages: [
      S("Framework", "blue", [N("book", "Seven SEAS releases", "New pillars and updated editions")]),
      S("Media", "purple", [N("doc", "Reviews & features", "Architect, MLOps, and cloud publications")]),
      S("Practitioners", "green", [N("users", "Platform teams", "Patterns adopted in real enterprise platforms")]),
    ],
  },
  mcp: {
    title: "MCP in the Enterprise Stack",
    subtitle: "One protocol between models and everything else",
    edgeLabels: ["requests", "standard calls", "results"],
    stages: [
      S("AI model", "blue", [N("sparkles", "The client side", "Model or agent that needs context and tools")]),
      S("MCP interface", "purple", [
        N("gear", "Standardized protocol", "Uniform tool invocation across platforms"),
        N("lock", "Scoped permissions", "Enterprise-safe access per deployment"),
      ]),
      S("The world", "amber", [
        N("wrench", "Tools", "Deterministic, versioned actions"),
        N("database", "Data sources", "Structured retrieval for RAG workflows"),
      ]),
    ],
  },
  about: {
    title: "The Seven SEAS Framework at a Glance",
    subtitle: "Four acronym layers, seven technical pillars",
    edgeLabels: ["inform", "organize"],
    stages: [
      S("SEAS layers", "blue", [
        N("memory", "Structural embeddings", "How models represent meaning"),
        N("search", "Expanded retrieval", "Grounding in real knowledge"),
        N("play", "Agentic execution", "Reasoning that acts"),
        N("cloud", "Scalable deployment", "Production at enterprise scale"),
      ]),
      S("Seven pillars", "purple", [N("book", "Chapters 1-7", "Memory, tools, loops, RAG, multi-agent, guardrails, observability")]),
      S("Outcome", "green", [N("check", "Dependable enterprise AI", "Systems teams can build, evaluate, and defend")]),
    ],
  },
  students: {
    title: "Your Path Through AI, Made Simple",
    subtitle: "Seven lessons, one big idea each",
    edgeLabels: ["read", "practice", "go deeper"],
    stages: [
      S("Lesson", "slate", [N("book", "A 5-minute read", "An everyday analogy — desk, lunch form, film room")]),
      S("Activity", "amber", [N("gear", "Try it yourself", "Hands-on, at a desk or the dinner table")]),
      S("Quiz", "purple", [N("check", "Three questions", "Quick check that the big idea stuck")]),
      S("The chapter", "green", [N("target", "The professional version", "One click away when you are ready")]),
    ],
  },
  news: {
    title: "How Updates Reach You",
    subtitle: "The flow from framework work to readers",
    edgeLabels: ["release notes", "chapters live"],
    stages: [
      S("Framework work", "blue", [N("gear", "Research & writing", "Pillars updated for the new AI lifecycle")]),
      S("Announcements", "purple", [N("doc", "News & updates", "Release notes and chapter availability")]),
      S("Readers", "green", [N("users", "Newsletter & site", "Practical essays straight to your inbox")]),
    ],
  },
  events: {
    title: "From Visit to Working Architecture",
    subtitle: "Formats for bringing Seven SEAS to your team",
    edgeLabels: ["book a format", "walk out with patterns"],
    stages: [
      S("Choose a format", "slate", [
        N("users", "Assemblies & talks", "Full-team or classroom sessions"),
        N("gear", "Workshops & reviews", "Hands-on architecture deep dives"),
      ]),
      S("The session", "blue", [N("play", "Framework in action", "Live examples across the seven pillars")]),
      S("Outcomes", "green", [N("check", "Applied to your stack", "Audits, roadmaps, and design patterns to keep")]),
    ],
  },
};

