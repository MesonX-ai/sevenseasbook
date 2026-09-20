/**
 * Per-guide diagrams for every chapter study guide page.
 * Keyed: chapterGuideDiagrams[chapterId][guideSlug].
 */
import { N, S } from "./shared";

export const chapterGuideDiagrams = {
  1: {
    "explained-simply": {
      title: "The Desk, the Diary, and the Encyclopedia",
      subtitle: "Agent memory in everyday terms",
      edgeLabels: ["now", "before", "always true"],
      stages: [
        S("You ask", "slate", [N("user", "A new question", "The AI only has a small desk to work on")]),
        S("The desk", "blue", [N("memory", "Working memory", "What it is doing right now — small and fast")]),
        S("The diary", "purple", [N("book", "Episodic memory", "What happened yesterday, written down forever")]),
        S("The shelf", "teal", [N("database", "Semantic memory", "Facts it can look up any time, like an encyclopedia")]),
        S("Good answer", "green", [N("check", "Never starts over", "Desk + diary + shelf = it remembers you")]),
      ],
    },
    "how-it-works": {
      title: "The Four Memory Loops",
      subtitle: "Read, write, compact, isolate",
      edgeLabels: ["before each turn", "after each turn", "on a schedule", "always"],
      stages: [
        S("Read", "blue", [N("search", "Assemble context", "Pull working, episodic, and semantic tiers")]),
        S("Write", "green", [N("memory", "Commit results", "Store outcomes with sensitivity labels")]),
        S("Compact", "amber", [N("loop", "Summarize & prune", "Nightly jobs remove stale, contradictory facts")]),
        S("Isolate", "red", [N("lock", "Tenant boundaries", "One customer's memory never leaks to another")]),
      ],
    },
    "real-world": {
      title: "Memory at Work Across Industries",
      subtitle: "Where tiered memory earns its keep",
      stages: [
        S("Healthcare", "teal", [N("shield", "Triage copilots", "Patient history kept safely across encounters")]),
        S("Customer success", "blue", [N("users", "Account agents", "State preserved across tickets and handoffs")]),
        S("Sales engineering", "amber", [N("target", "Deal assistants", "Product constraints and POC outcomes recalled")]),
      ],
    },
    "made-simple": {
      title: "Your Brain's Three Filing Cabinets",
      subtitle: "The made-simple view of AI memory",
      feedback: { label: "next time, it already knows" },
      stages: [
        S("Something happens", "slate", [N("sparkles", "A new event", "You learn or do something new")]),
        S("Desk note", "blue", [N("memory", "Right now", "Hold it where you can see it")]),
        S("Diary page", "purple", [N("book", "Save the story", "Write what happened and why")]),
        S("Smarter AI", "green", [N("check", "Use it again", "Remembering means fewer repeated questions")]),
      ],
    },
  },

  2: {
    "explained-simply": {
      title: "From Wish to Receipt",
      subtitle: "Tool calls in everyday terms",
      edgeLabels: ["order form", "checked", "done"],
      stages: [
        S("You ask", "slate", [N("chat", "An order", "Like a lunch form: name, item, quantity")]),
        S("The form", "blue", [N("doc", "Strict fields", "Boxes must be filled correctly or it bounces back")]),
        S("The kitchen", "amber", [N("wrench", "The tool", "Prepares exactly what the form requested")]),
        S("Your receipt", "green", [N("check", "Exact result", "You get what you ordered — nothing else")]),
      ],
    },
    "how-it-works": {
      title: "The Validation Pipeline",
      subtitle: "What happens between model and API",
      edgeLabels: ["proposal", "payload", "safe call"],
      feedback: { label: "errors go back for self-correction" },
      stages: [
        S("Model", "blue", [N("sparkles", "Proposes a call", "Function name plus generated arguments")]),
        S("Validate", "red", [N("check", "Schema check", "Types, required fields, and value bounds")]),
        S("Gateway", "amber", [N("gear", "Route & retry", "Idempotency keys make retries safe")]),
        S("Execute", "green", [N("server", "Real API", "Deterministic action with a typed result")]),
      ],
    },
    "real-world": {
      title: "Tool Calls in Production",
      subtitle: "Where strict contracts matter most",
      stages: [
        S("Banking", "teal", [N("lock", "Payments & fraud", "Every call idempotent, compliant, and traceable")]),
        S("IT service", "slate", [N("gear", "Tickets & runbooks", "Agents open tickets and query the CMDB safely")]),
        S("E-commerce", "amber", [N("globe", "Order pipelines", "Inventory, pricing, and shipping with safe retries")]),
      ],
    },
    "made-simple": {
      title: "The Lunch Order Form",
      subtitle: "The made-simple view of tool calls",
      stages: [
        S("Fill the form", "slate", [N("doc", "Say what you want", "Name, room, and lunch choice — all boxes filled")]),
        S("Teacher checks", "amber", [N("check", "Look it over", "Missing box? Back to your desk to fix it")]),
        S("Cafeteria cooks", "green", [N("wrench", "Make exactly that", "The kitchen only trusts a complete form")]),
      ],
    },
  },

  3: {
    "explained-simply": {
      title: "Try, Check, Try Again",
      subtitle: "Execution loops in everyday terms",
      edgeLabels: ["attempt", "result"],
      feedback: { label: "not there yet? go again" },
      stages: [
        S("The goal", "slate", [N("target", "A hard task", "Too big for one try — like a video game boss")]),
        S("A plan", "blue", [N("memory", "Break it down", "Small steps, in order, with checkpoints")]),
        S("Try & check", "amber", [N("loop", "Act, then look", "Did that step work? What did we learn?")]),
        S("Win", "green", [N("check", "Level complete", "Each failed try makes the next try smarter")]),
      ],
    },
    "how-it-works": {
      title: "Anatomy of the Loop",
      subtitle: "Plan state, actions, reflection, rollback",
      edgeLabels: ["chosen action", "outcome"],
      feedback: { label: "replan from updated state" },
      stages: [
        S("Plan state", "blue", [N("memory", "Explicit machine", "Step status, dependencies, rollback paths")]),
        S("Act", "amber", [N("wrench", "Execute step", "Tool calls and retrieval, results recorded")]),
        S("Reflect", "purple", [N("loop", "Grade the step", "Success criteria checked against evidence")]),
        S("Decide", "green", [N("check", "Continue or replan", "Resume safely after interruptions")]),
      ],
    },
    "real-world": {
      title: "Loops at Work",
      subtitle: "Self-correction in production agents",
      stages: [
        S("Data analysis", "teal", [N("chart", "Investigate & verify", "Agents refine queries when results look wrong")]),
        S("DevOps", "slate", [N("gear", "Incident response", "Rollback paths when remediation fails")]),
        S("Research", "purple", [N("book", "Deep literature work", "Plans adapt when sources conflict")]),
      ],
    },
    "made-simple": {
      title: "Beating a Video Game Level",
      subtitle: "The made-simple view of execution loops",
      feedback: { label: "each life teaches the next" },
      stages: [
        S("See the level", "slate", [N("target", "Spot the goal", "Where to go and what blocks the way")]),
        S("Play", "amber", [N("play", "Make a move", "Jump, dodge, try a new path")]),
        S("Watch the replay", "purple", [N("loop", "What went wrong?", "Good players learn from every fall")]),
      ],
    },
  },

  4: {
    "explained-simply": {
      title: "The Open-Book Test",
      subtitle: "RAG in everyday terms",
      edgeLabels: ["question", "right pages", "answer"],
      stages: [
        S("The question", "slate", [N("chat", "Something specific", "Like an exam question you may look up")]),
        S("Find the page", "blue", [N("search", "Search the book", "Only trusted textbooks, not random memory")]),
        S("Read & answer", "green", [N("doc", "In your own words", "Answer only from what the page says")]),
      ],
    },
    "how-it-works": {
      title: "The RAG Pipeline",
      subtitle: "Chunk, retrieve, re-rank, generate",
      edgeLabels: ["query", "top-k chunks", "best evidence"],
      stages: [
        S("Prepare", "blue", [N("doc", "Chunk & embed", "Documents split and stored as vectors")]),
        S("Retrieve", "amber", [N("database", "Hybrid search", "Dense + keyword + metadata filters")]),
        S("Re-rank", "purple", [N("chart", "Cross-encoder", "True relevance ordering of passages")]),
        S("Generate", "green", [N("check", "Cited answer", "Every claim points at its source")]),
      ],
    },
    "real-world": {
      title: "RAG in Production",
      subtitle: "Enterprise grounding at work",
      stages: [
        S("Support", "teal", [N("users", "Answer bots", "Only official docs — no invented policies")]),
        S("Legal & finance", "slate", [N("scale", "Compliance answers", "Citations auditors can verify")]),
        S("Engineering", "purple", [N("code", "Code assistants", "Grounded in your repos, not the open web")]),
      ],
    },
    "made-simple": {
      title: "Be a RAG AI for One Question",
      subtitle: "The made-simple view of grounding",
      stages: [
        S("Get asked", "slate", [N("chat", "A fact question", "Who was the 16th president?")]),
        S("Open a book", "blue", [N("book", "Look it up", "Find the exact page before answering")]),
        S("Answer + cite", "green", [N("check", "Show your source", "Point at the page — that is RAG!")]),
      ],
    },
  },

  5: {
    "explained-simply": {
      title: "The Group Project",
      subtitle: "Multi-agent systems in everyday terms",
      edgeLabels: ["assignments", "sections"],
      stages: [
        S("The project", "slate", [N("target", "One big goal", "A report too big for one person")]),
        S("Team lead", "blue", [N("users", "Splits the work", "Assigns parts and sets deadlines")]),
        S("Teammates", "amber", [N("robot", "Specialists", "Writer, fact-checker, designer each do their bit")]),
        S("Final report", "green", [N("check", "Assembled & reviewed", "The lead merges and checks everything")]),
      ],
    },
    "how-it-works": {
      title: "Coordination Patterns",
      subtitle: "How agents share state and hand off work",
      edgeLabels: ["decompose", "results"],
      feedback: { label: "review & rework loop" },
      stages: [
        S("Orchestrator", "blue", [N("network", "Plan & route", "Task graph with roles and dependencies")]),
        S("Workers", "amber", [N("wrench", "Do the work", "Each agent has tools scoped to its role")]),
        S("Blackboard", "purple", [N("database", "Shared state", "Artifacts and handoffs visible to all")]),
        S("Verify", "green", [N("check", "Critic sign-off", "Quality and policy gates before delivery")]),
      ],
    },
    "real-world": {
      title: "Agent Teams in Production",
      subtitle: "Where multi-agent patterns pay off",
      stages: [
        S("Finance ops", "teal", [N("chart", "Reconciliation crew", "Matcher, auditor, and reporter agents")]),
        S("Software teams", "slate", [N("code", "Dev squads", "Coder, reviewer, and tester in a loop")]),
        S("Customer ops", "purple", [N("users", "Tiered support", "Triage agent escalates to specialists")]),
      ],
    },
    "made-simple": {
      title: "The School Play Crew",
      subtitle: "The made-simple view of agent teams",
      stages: [
        S("Director", "slate", [N("users", "Runs the show", "Knows the whole story start to finish")]),
        S("Cast & crew", "amber", [N("robot", "Everyone has a role", "Actors, lights, music — each does one job well")]),
        S("Opening night", "green", [N("check", "It works together", "Practice (feedback) makes the play great")]),
      ],
    },
  },

  6: {
    "explained-simply": {
      title: "The Playground Rulebook",
      subtitle: "Guardrails in everyday terms",
      edgeLabels: ["check at entry", "watch the game"],
      feedback: { label: "break a rule → time out" },
      stages: [
        S("Rules first", "slate", [N("book", "Know the limits", "What is never allowed, written down")]),
        S("Gate check", "red", [N("shield", "At the entrance", "Stop tricks and private info at the gate")]),
        S("Supervised play", "blue", [N("eye", "Watch the game", "The monitor steps in before someone gets hurt")]),
        S("Safe day", "green", [N("check", "Everyone goes home happy", "Fun happened and nobody got hurt")]),
      ],
    },
    "how-it-works": {
      title: "Layered Enforcement",
      subtitle: "Screening, constraints, policy, human gate",
      edgeLabels: ["clean input", "draft", "decision"],
      feedback: { label: "violation → quarantine" },
      stages: [
        S("Layer 1 — Input", "red", [N("shield", "Injection & PII screens", "Deterministic filters before the model")]),
        S("Layer 2 — Draft rules", "blue", [N("doc", "Rule-based checks", "No secrets, no claims without citations")]),
        S("Layer 3 — Policy", "amber", [N("lock", "Policy engine", "Externalized rules; humans gate high stakes")]),
        S("Release", "green", [N("check", "Logged & audited", "Every decision has a paper trail")]),
      ],
    },
    "real-world": {
      title: "Guardrails in Production",
      subtitle: "Safety as an engineering discipline",
      stages: [
        S("Banking", "teal", [N("scale", "Regulated advice", "Policy-approved responses only")]),
        S("Healthcare", "slate", [N("shield", "PHI protection", "Redaction layers before anything is stored")]),
        S("Public bots", "purple", [N("globe", "Brand safety", "Prompt-injection defenses under constant attack")]),
      ],
    },
    "made-simple": {
      title: "Rules for a Class Robot",
      subtitle: "The made-simple view of guardrails",
      stages: [
        S("Write the rules", "slate", [N("book", "Be kind, be safe", "The class agrees on what the robot may do")]),
        S("Robot obeys", "amber", [N("robot", "Checks first", "Before acting, it asks: is this allowed?")]),
        S("Teacher override", "purple", [N("users", "Humans decide the hard ones", "Tricky calls go to a person")]),
      ],
    },
  },

  7: {
    "explained-simply": {
      title: "The Replay Camera",
      subtitle: "Observability in everyday terms",
      edgeLabels: ["record", "watch"],
      feedback: { label: "practice improves the next game" },
      stages: [
        S("The game", "slate", [N("play", "AI answers questions", "But you cannot see its work... yet")]),
        S("The camera", "blue", [N("eye", "Record everything", "Every lookup, tool, and step is saved")]),
        S("The replay", "purple", [N("chart", "Watch it back", "See exactly why the answer came out that way")]),
        S("Better team", "green", [N("check", "Fix what you saw", "Coaching beats guessing every time")]),
      ],
    },
    "how-it-works": {
      title: "Tracing and Evaluation",
      subtitle: "From raw events to release gates",
      edgeLabels: ["events", "scores", "verdict"],
      stages: [
        S("Capture", "blue", [N("eye", "Distributed traces", "Correlation ids span every step of a run")]),
        S("Score", "purple", [N("chart", "Golden dataset", "LLM judges graded against human labels")]),
        S("Gate", "amber", [N("alert", "Thresholds", "Factuality or policy regression blocks deploy")]),
        S("Dashboard", "green", [N("chart", "Live SLOs", "Latency, cost, and success in real time")]),
      ],
    },
    "real-world": {
      title: "Observability in Production",
      subtitle: "What platform teams actually watch",
      stages: [
        S("Quality boards", "teal", [N("chart", "Hallucination risk", "Citation quality tracked per business domain")]),
        S("Release trains", "slate", [N("gear", "Eval-gated deploys", "No build ships without passing the suite")]),
        S("Cost watch", "purple", [N("cloud", "Token spend", "Spikes flag quality issues before users do")]),
      ],
    },
    "made-simple": {
      title: "The Coach's Film Room",
      subtitle: "The made-simple view of observability",
      stages: [
        S("Film the game", "slate", [N("play", "Record the match", "Every play, saved and labeled")]),
        S("Grade the plays", "purple", [N("chart", "Good or bad?", "Coaches score each play against a rubric")]),
        S("Better next game", "green", [N("check", "Practice the fixes", "The team improves because they can see")]),
      ],
    },
  },
};
