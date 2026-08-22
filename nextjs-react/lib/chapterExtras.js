/**
 * Tutorial-depth extras for each chapter, keyed by chapter id.
 * Consumed by app/chapters/[chapter]/page.js.
 */
export const chapterExtras = {
  1: {
    keyTerms: [
      { term: "Working memory", definition: "Short-lived state for the current task: objectives, constraints, plan checkpoints, and pending tool results." },
      { term: "Episodic memory", definition: "A durable log of past interactions and outcomes that lets an agent recall what happened before and why." },
      { term: "Semantic memory", definition: "Normalized domain knowledge stored as embeddings plus metadata, reusable across every session." },
      { term: "Context window", definition: "The finite token budget a model can attend to in one pass — the reason external memory exists." },
      { term: "Memory compaction", definition: "Summarizing or pruning stale context on a schedule so long-running sessions stay fast and relevant." },
    ],
    codeExample: {
      title: "Tiered memory store with Redis-backed working memory",
      language: "python",
      code: `from dataclasses import dataclass, field

@dataclass
class MemoryTier:
    working: dict = field(default_factory=dict)   # fast, session-scoped
    episodic_key: str = ""                        # durable interaction log
    semantic_top_k: int = 5                       # retrieved domain facts

def load_context(session_id: str, query: str) -> str:
    """Assemble the prompt context from three memory tiers."""
    working = working_cache.get(session_id)          # Redis hash, TTL ~1h
    episodes = episodic_db.recent(session_id, k=10)  # Postgres rows
    facts = semantic_index.search(                   # pgvector / Pinecone
        query=query, tenant=session_id, top_k=5,
        filters={"retention": "active"},
    )
    return render_prompt(working, summarize(episodes), facts)

def commit_turn(session_id: str, turn: dict):
    working_cache.update(session_id, turn["state"])
    episodic_db.append(session_id, turn)             # auditable trail
    if should_compact(session_id):                   # nightly / N-turn job
        compact_episodic_memory(session_id)`,
    },
    pitfalls: [
      "Stuffing everything into the context window instead of tiering memory — costs explode and quality drops as attention dilutes.",
      "Forgetting tenant isolation: one customer's documents leaking into another's retrieval is a compliance incident, not a bug.",
      "Letting episodic memory grow forever without compaction — sessions slow down and stale facts contradict fresh ones.",
      "Treating memory writes as fire-and-forget. Every write needs retention policy, sensitivity classification, and audit lineage.",
    ],
    furtherReading: [
      { title: "pgvector — open-source vector similarity search for Postgres", url: "https://github.com/pgvector/pgvector" },
      { title: "Pinecone Learning Center — retrieval and memory patterns", url: "https://www.pinecone.io/learn/" },
      { title: "Redis documentation — low-latency state stores", url: "https://redis.io/docs/latest/" },
    ],
  },

  2: {
    keyTerms: [
      { term: "JSON Schema", definition: "The contract format that declares exactly which fields, types, and value ranges a tool accepts." },
      { term: "Structured output", definition: "Constrained model generation that is guaranteed to parse into your target type before it ever executes." },
      { term: "Idempotency key", definition: "A unique per-operation identifier that makes retried tool calls safe — no double payments, no duplicate tickets." },
      { term: "Tool gateway", definition: "A service boundary that validates, versions, authorizes, and normalizes every call between agents and real systems." },
      { term: "Golden payloads", definition: "Regression fixtures of known-good (and known-bad) tool calls replayed against every release." },
    ],
    codeExample: {
      title: "Schema-first tool call with validation and safe retry",
      language: "python",
      code: `TOOL_SCHEMA = {
    "type": "object",
    "required": ["account_id", "amount", "currency"],
    "additionalProperties": False,
    "properties": {
        "account_id": {"type": "string", "pattern": "^ACC-[0-9]{8}$"},
        "amount":     {"type": "number", "minimum": 0.01},
        "currency":   {"enum": ["USD", "EUR", "GBP"]},
    },
}

def execute_tool(call: dict, idempotency_key: str):
    errors = validate(call, TOOL_SCHEMA)          # jsonschema.validate
    if errors:
        # structured rejection -> model self-corrects next turn
        return {"status": "rejected", "errors": errors}

    if ledger.seen(idempotency_key):              # replay-safe execution
        return ledger.result_for(idempotency_key)

    result = gateway.invoke("ledger.credit",       # versioned route
                            payload=call,
                            idempotency_key=idempotency_key)
    return {"status": "ok", "result": normalize(result)}`,
    },
    pitfalls: [
      "Trusting string parsing: a missing enum or regex turns 'one thousand dollars' into a production incident.",
      "Retrying non-idempotent operations without keys — duplicate wire transfers are unrecoverable.",
      "Pointing agents directly at internal APIs with no gateway, losing versioning, rate limits, and audit trails.",
      "Changing a tool's schema silently. Version it and test against golden payloads across every model upgrade.",
    ],
    furtherReading: [
      { title: "OpenAI — Function calling guide", url: "https://platform.openai.com/docs/guides/function-calling" },
      { title: "Anthropic — Tool use (function calling)", url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use" },
      { title: "JSON Schema specification", url: "https://json-schema.org/specification" },
    ],
  },

  3: {
    keyTerms: [
      { term: "Reason–Act loop", definition: "The core agent cycle: think about what to do, act with a tool, observe the result, repeat until done." },
      { term: "Step budget", definition: "A hard cap on loop iterations that converts runaway agents into bounded, predictable jobs." },
      { term: "Checkpointing", definition: "Persisting loop state after every step so runs can pause, resume, and be audited." },
      { term: "Reflection", definition: "A self-critique step where the model reviews its own progress before committing to the next action." },
    ],
    codeExample: {
      title: "Bounded reason-and-act loop with checkpoints",
      language: "python",
      code: `MAX_STEPS = 12

def run_agent(goal: str, memory: MemoryTier) -> RunResult:
    trace = Trace(span="agent.run")             # OpenTelemetry child spans
    state = checkpoint.load_or_init(goal)

    for step in range(MAX_STEPS):
        thought = llm.plan(state=state, goal=goal, tools=TOOLS)
        if thought.action == "final_answer":
            trace.close(outcome="completed")
            return RunResult(answer=thought.answer, steps=step + 1)

        observation = safe_execute(thought.tool_call)   # ch.2 gateway
        state.observe(observation)
        checkpoint.save(state)                          # resumable mid-run
        trace.event(step=step, thought=thought, obs=observation)

    escalate_to_human(state, trace)   # budget exhausted -> hand off
    trace.close(outcome="escalated")`,
    },
    pitfalls: [
      "No iteration cap: a confused agent loops on the same failing tool until the bill arrives.",
      "Discarding intermediate observations — without them the model repeats work it already did.",
      "Hiding the loop. Every step should emit a trace event; opaque loops cannot be debugged or trusted.",
    ],
    furtherReading: [
      { title: "ReAct: Synergizing Reasoning and Acting in Language Models (arXiv 2210.03629)", url: "https://arxiv.org/abs/2210.03629" },
      { title: "LangGraph — building stateful, multi-step agent runtimes", url: "https://langchain-ai.github.io/langgraph/" },
    ],
  },

  4: {
    keyTerms: [
      { term: "Chunking", definition: "Splitting documents into semantically coherent passages — chunk boundaries decide answer quality more than model choice." },
      { term: "Hybrid search", definition: "Combining keyword (BM25) and vector similarity so exact terms and meaning both contribute to retrieval." },
      { term: "Reranker", definition: "A second-stage cross-encoder that reorders candidate chunks by true relevance before generation." },
      { term: "Grounded citation", definition: "Every claim linked to the specific retrieved passage it came from — the unit of trust in enterprise RAG." },
    ],
    codeExample: {
      title: "Retrieve → rerank → grounded generate pipeline",
      language: "python",
      code: `def answer(question: str, tenant: str) -> Answer:
    # 1) hybrid retrieval: lexical + dense, tenant-scoped
    candidates = index.search(
        hybrid=(bm25(question, tenant=tenant), embed(question)),
        top_k=40,
    )

    # 2) cross-encoder rerank for precision
    top_chunks = reranker.rerank(question, candidates, top_n=5)

    # 3) constrained generation with mandatory citations
    completion = llm.generate(
        system=GROUNDED_PROMPT,               # cite chunk ids; refuse if unsupported
        context=format_chunks(top_chunks),
        question=question,
    )

    verify_citations(completion, top_chunks)  # reject uncited claims
    return Answer(text=completion.text,
                  sources=[c.id for c in completion.cited])`,
    },
    pitfalls: [
      "Naive fixed-size chunking that slices sentences mid-thought — retrieval returns fragments nobody can cite.",
      "Vector-only search: pure embedding recall misses product codes, names, and legal phrases that BM25 nails.",
      "Skipping rerank. Top-k from stage one is noisy; precision comes from the second-stage cross-encoder.",
      "Letting the model answer from parametric memory when retrieval came back empty. Refusal is a feature.",
    ],
    furtherReading: [
      { title: "RAG paper — Lewis et al., Retrieval-Augmented Generation (arXiv 2005.11401)", url: "https://arxiv.org/abs/2005.11401" },
      { title: "Model Context Protocol — open standard for connecting models to data", url: "https://modelcontextprotocol.io" },
    ],
  },

  5: {
    keyTerms: [
      { term: "Orchestrator", definition: "The supervisor agent that decomposes goals, routes subtasks, and merges specialist results." },
      { term: "Handoff", definition: "A typed message transferring ownership of a task between agents, carrying state and acceptance criteria." },
      { term: "Capability registry", definition: "A machine-readable catalog of which agents can perform which tasks under which policies." },
      { term: "Shared scratchpad", definition: "Structured common memory that prevents specialists from contradicting each other's assumptions." },
    ],
    codeExample: {
      title: "Supervisor routing tasks to specialist agents",
      language: "python",
      code: `SPECIALISTS = {
    "research": Agent(role="analyst",  tools=[search, browser]),
    "finance":  Agent(role="auditor",  tools=[ledger_api], policy="fin-7"),
    "writer":   Agent(role="author",   tools=[]),
}

def orchestrate(request: str) -> Report:
    plan = supervisor.decompose(request)           # typed subtask DAG
    results = {}
    for task in topo_sort(plan):
        agent = SPECIALISTS[route(task)]           # capability lookup
        handoff = Handoff(task=task, context=results,
                          acceptance=task.criteria)
        out = agent.run(handoff)                   # own bounded loop
        results[task.id] = supervisor.review(out, task.criteria)
        if not results[task.id].accepted:
            results[task.id] = agent.revise(handoff,
                                            feedback=out.review)
    return supervisor.synthesize(results)`,
    },
    pitfalls: [
      "Free-for-all chatter between agents with no supervisor — token cost multiplies while accountability disappears.",
      "Handoffs carrying prose instead of typed state; downstream specialists guess at intent and drift.",
      "No acceptance criteria. 'Done' must be checkable, or review becomes vibes.",
    ],
    furtherReading: [
      { title: "AutoGen — Microsoft framework for multi-agent conversations", url: "https://microsoft.github.io/autogen/stable/" },
      { title: "CrewAI — role-playing autonomous agent crews", url: "https://docs.crewai.com/" },
    ],
  },

  6: {
    keyTerms: [
      { term: "Input guardrail", definition: "Pre-execution screening for prompt injection, jailbreaks, PII, and out-of-scope requests." },
      { term: "Output guardrail", definition: "Post-generation enforcement: toxicity, secrets, hallucinated URLs, and policy claims never reach users." },
      { term: "Policy engine", definition: "Declarative rules (e.g., OPA/Rego) evaluated at runtime so safety logic changes without redeploying models." },
      { term: "Human-in-the-loop", definition: "A designed escalation path where confidence thresholds or high-stakes actions require human approval." },
    ],
    codeExample: {
      title: "Layered guardrails around every model call",
      language: "python",
      code: `def guarded_completion(user_input: str, ctx: Session) -> Response:
    # layer 1 — input screening
    verdict = input_guard.scan(user_input)         # injection / PII / scope
    if verdict.blocked:
        audit.log("input_blocked", verdict.reason)
        return Response.refuse(verdict.user_message)

    draft = llm.generate(user_input, context=ctx.safe_memory())

    # layer 2 — output enforcement
    for rule in [no_secrets, no_medical_claims, citation_required]:
        if not rule.check(draft):
            draft = rule.rewrite_or_block(draft)   # deterministic fix

    # layer 3 — policy engine + human gate for high stakes
    if policy_engine.decide(draft, ctx).requires_approval:
        return hold_for_human_review(draft, sla="4h")

    audit.log("released", draft.meta)
    return draft`,
    },
    pitfalls: [
      "Single-layer defense. Prompt-injection techniques evolve weekly; assume any single filter will eventually fail.",
      "Guardrails bolted on after launch instead of designed into the call path — retrofitting is how leaks happen.",
      "Safety rules buried in application code where only engineers can change them. Externalize policies to a rules engine.",
    ],
    furtherReading: [
      { title: "OWASP Top 10 for LLM Applications", url: "https://genai.owasp.org/llm-top-10/" },
      { title: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
      { title: "Open Policy Agent — policy-based control", url: "https://www.openpolicyagent.org/docs/latest/" },
    ],
  },

  7: {
    keyTerms: [
      { term: "Trace", definition: "An end-to-end record of one agent run: every prompt version, retrieval hit, tool argument, cost, and latency." },
      { term: "Golden dataset", definition: "Curated input/output pairs with rubric scores that define what 'working' means before anything ships." },
      { term: "LLM-as-judge", definition: "A strong model scoring outputs against a rubric — cheap coverage at scale, calibrated against human labels." },
      { term: "Release gate", definition: "A CI stage that blocks deployment when factuality, policy, or latency metrics regress beyond thresholds." },
    ],
    codeExample: {
      title: "Eval suite wired as a deployment gate",
      language: "python",
      code: `GATES = {"factuality": 0.92,
         "policy_pass": 1.00,
         "p95_latency_ms": 4500}

def evaluate(build: str) -> GateReport:
    dataset = golden_dataset(version="2025-06")    # versioned, reviewed
    scores = {"factuality": [], "policy_pass": [], "latency_ms": []}

    for case in dataset:
        with traced_run(tags={"build": build}) as trace:
            out = pipeline.run(case.input)
        scores["factuality"].append(judge.grade(out, case.rubric))
        scores["policy_pass"].append(policy_engine.audit(out).passed)
        scores["latency_ms"].append(trace.duration_ms)

    report = GateReport(mean(scores), build=build)
    for metric, floor in GATES.items():
        report.check(metric, floor)                # fails -> block deploy
    publish(report)                                # dashboard + alerts
    return report`,
    },
    pitfalls: [
      "Shipping on vibes — demoing five happy paths instead of scoring a golden dataset on every release.",
      "Uncalibrated LLM-judges. Grade the judge against a few hundred human-labeled samples first.",
      "Tracing prompts but not retrieval and tool arguments. Most production failures live between the steps.",
      "Ignoring cost telemetry. Quality regressions often show up first as token-spend spikes.",
    ],
    furtherReading: [
      { title: "OpenTelemetry — vendor-neutral distributed tracing", url: "https://opentelemetry.io/docs/" },
      { title: "RAGAS — evaluation framework for RAG pipelines", url: "https://docs.ragas.io/" },
      { title: "Langfuse — open-source LLM observability", url: "https://langfuse.com/docs" },
    ],
  },
};




