/**
 * Hero architecture diagram for each of the 7 SEAS chapters.
 * Rendered at the top of /chapters/[chapter].
 */
import { N, S } from "./shared";

export const chapterDiagrams = {
  1: {
    title: "Tiered Agent Memory Architecture",
    subtitle: "How a request flows through working, episodic, and semantic memory",
    caption:
      "Every turn reads from all three memory tiers, and every turn writes back — keeping agents consistent across long, multi-session enterprise work.",
    edgeLabels: ["load state", "recent episodes", "top-k facts", "final prompt"],
    feedback: { label: "commit turn results" },
    stages: [
      S("Client", "slate", [N("user", "User request", "Task, context, and a stable session id")]),
      S("Working memory", "blue", [
        N("memory", "Session state", "Objectives, plan checkpoints, pending tool results"),
      ]),
      S("Episodic memory", "purple", [
        N("database", "Interaction log", "Durable per-tenant trail with retention policy"),
      ]),
      S("Semantic memory", "teal", [
        N("search", "Vector + metadata index", "Domain facts filtered by tenant and policy scope"),
      ]),
      S("Response", "green", [
        N("check", "Assembled context", "Rendered prompt → model → cited, consistent answer"),
      ]),
    ],
  },

  2: {
    title: "Deterministic Tool Execution Path",
    subtitle: "Strict contracts turn probabilistic model output into safe API calls",
    caption:
      "Malformed payloads are rejected with explicit error codes so the model can self-correct — execution only happens after schema and policy pass.",
    edgeLabels: ["intent", "raw payload", "validated call", "typed result"],
    feedback: { label: "error signal → self-correct" },
    stages: [
      S("Client", "slate", [N("user", "User intent", "High-level goal expressed in natural language")]),
      S("Model", "blue", [
        N("sparkles", "Model proposal", "Probabilistic tool call with generated arguments"),
      ]),
      S("Contract check", "red", [
        N("check", "Schema validation", "Types, required fields, enums, bounded values"),
        N("alert", "Reject & instruct", "Explicit error codes returned to the model"),
      ]),
      S("Tool gateway", "amber", [
        N("gear", "Versioned gateway", "Retries, idempotency keys, response normalization"),
      ]),
      S("Execution", "green", [
        N("server", "Downstream APIs", "Deterministic, traceable side effects"),
      ]),
    ],
  },

  3: {
    title: "Reason–Act–Reflect Loop",
    subtitle: "Agents plan, act, evaluate, and self-correct until the goal is met",
    caption:
      "The loop is explicit state, not improvisation: every cycle updates plan status so execution can pause, resume, and roll back safely.",
    edgeLabels: ["next action", "results", "verdict"],
    feedback: { label: "retry / replan on failure" },
    stages: [
      S("Goal", "slate", [N("target", "Complex task", "Decomposed into an explicit plan with dependencies")]),
      S("Reason", "blue", [N("sparkles", "Planner", "Chooses the next action from current state")]),
      S("Act", "amber", [N("wrench", "Tool execution", "APIs, retrieval, or code — results captured")]),
      S("Reflect", "purple", [
        N("loop", "Evaluate outcome", "Compare result against success criteria"),
      ]),
      S("Done", "green", [N("check", "Verified answer", "Final deliverable with a full trace")]),
    ],
  },

  4: {
    title: "Retrieval-Augmented Generation Pipeline",
    subtitle: "Grounding every answer in retrievable enterprise evidence",
    caption:
      "Hybrid retrieval maximizes recall, cross-encoder re-ranking maximizes precision, and citation discipline makes every claim auditable.",
    edgeLabels: ["expanded query", "candidate chunks", "ranked evidence", "grounded draft"],
    stages: [
      S("Query", "slate", [N("search", "User question", "Rewritten and expanded for better recall")]),
      S("Retrieve", "blue", [
        N("database", "Hybrid search", "Dense vectors + keywords + metadata filters"),
      ]),
      S("Re-rank", "amber", [
        N("chart", "Cross-encoder scoring", "Passages ordered by true relevance"),
      ]),
      S("Generate", "purple", [
        N("doc", "Cited synthesis", "Answer constrained to retrieved evidence"),
      ]),
      S("Trust", "green", [
        N("shield", "Citations + refusal", "Every claim traceable; no evidence → no answer"),
      ]),
    ],
  },

  5: {
    title: "Orchestrator–Worker Agent Topology",
    subtitle: "Specialist agents collaborate through shared state and review",
    caption:
      "The orchestrator owns the goal; workers own specialties; shared blackboard state and critic review keep the team coherent.",
    edgeLabels: ["decomposed work", "artifacts", "merge & verify"],
    feedback: { label: "peer review & reassignment" },
    stages: [
      S("Task", "slate", [N("target", "Business objective", "Owned end-to-end by the orchestrator")]),
      S("Orchestrator", "blue", [
        N("network", "Planner & router", "Decomposes work, assigns roles, merges results"),
      ]),
      S("Workers", "amber", [
        N("robot", "Researcher", "Gathers and cites evidence"),
        N("wrench", "Executor", "Calls tools and systems"),
        N("doc", "Critic", "Reviews quality and policy"),
      ]),
      S("Shared state", "purple", [
        N("database", "Blackboard", "Plans, artifacts, and handoffs in one store"),
      ]),
      S("Delivery", "green", [
        N("check", "Verified output", "Critic sign-off before the result ships"),
      ]),
    ],
  },

  6: {
    title: "Layered Safety Enforcement",
    subtitle: "Guardrails designed into the call path — not bolted on after launch",
    caption:
      "Three independent layers assume any single filter will eventually fail: input screening, constrained generation, and an externalized policy engine.",
    edgeLabels: ["clean input", "constrained draft", "policy decision"],
    feedback: { label: "violations → quarantine & alert" },
    stages: [
      S("Input", "slate", [N("chat", "User request", "Screened before it reaches the model")]),
      S("Screen", "red", [
        N("shield", "Injection & PII filters", "Block, redact, or sanitize hostile input"),
      ]),
      S("Model", "blue", [
        N("sparkles", "Constrained generation", "Policy-aware system prompt and tool scope"),
      ]),
      S("Policy engine", "amber", [
        N("lock", "Externalized rules", "Scope, tone, and action policies; human gates"),
      ]),
      S("Release", "green", [
        N("check", "Audit-logged output", "Every enforcement decision recorded"),
      ]),
    ],
  },

  7: {
    title: "Observe → Evaluate → Improve Loop",
    subtitle: "Turning opaque agent behavior into signals, gates, and safer releases",
    caption:
      "Traces become metrics, metrics become release gates, and every regression blocks deployment — quality becomes an engineering number, not a feeling.",
    edgeLabels: ["structured events", "scores", "gate verdicts"],
    feedback: { label: "continuous improvement" },
    stages: [
      S("Runtime", "slate", [N("play", "Agent runs", "Every run traced with correlation ids")]),
      S("Telemetry", "blue", [
        N("eye", "Trace store", "Prompts, retrieval hits, tool args, latency, cost"),
      ]),
      S("Evaluation", "purple", [
        N("chart", "Golden set + judges", "Factuality, policy, and task scores per build"),
      ]),
      S("Gates", "amber", [
        N("alert", "Release gates", "Block deploys when thresholds regress"),
      ]),
      S("Improve", "green", [
        N("gear", "Model & prompt updates", "Safer, cheaper, faster next release"),
      ]),
    ],
  },
};

const STEP_COLORS = ["slate", "blue", "purple", "teal", "green", "amber", "cyan", "indigo"];

/** Convert a chapter's text step-flow into an ArchDiagram spec. */
export function stepsToDiagram(title, steps) {
  return {
    title,
    stages: steps.map((step, i) =>
      S(
        `Step ${i + 1}`,
        STEP_COLORS[i % STEP_COLORS.length],
        [N(i === steps.length - 1 ? "check" : "gear", step)]
      )
    ),
  };
}

