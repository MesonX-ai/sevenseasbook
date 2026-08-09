export default function NewsPage() {
  const newsItems = [
    {
      title: "Seven SEAS Framework Updated for the New AI Lifecycle",
      source: "Mesonsoft LLC",
      date: "Coming Soon",
      excerpt:
        "Seven SEAS now frames the updated AI lifecycle from foundational embeddings through scalable production deployment, including agentic execution and enterprise guardrails.",
    },
    {
      title: "Structural Embeddings: The Foundation of Reasoning",
      source: "Chapter 1",
      date: "Available Now",
      excerpt:
        "Neural networks and mathematical foundations of LLMs - how raw text becomes high-dimensional vector spaces and semantic memory.",
    },
    {
      title: "Expanded Retrieval Eliminates Hallucinations",
      source: "Chapter 4",
      date: "Available Now",
      excerpt:
        "RAG pipelines, hybrid search, cross-encoder re-ranking, and grounding responses in trusted enterprise knowledge.",
    },
    {
      title: "Agentic Execution: From Passive Text to Autonomous Action",
      source: "Chapter 3",
      date: "Available Now",
      excerpt:
        "ReAct-style orchestration, planning loops, and self-correction move AI beyond passive text generation into autonomous action.",
    },
    {
      title: "Scalable Deployment for Production AI Systems",
      source: "Seven SEAS",
      date: "Available Now",
      excerpt:
        "API gateways, model orchestration, rate limiting, token caching, and managing multi-agent microservices.",
    },
  ];

  return (
    <div className="page-shell page-news">
      <main className="page-main">
        <div className="section-header" style={{ marginBottom: "40px" }}>
          <p className="eyebrow">News</p>
          <h1 className="hero-title" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", marginBottom: "12px" }}>
            News & Updates
          </h1>
          <p className="hero-eyebrow" style={{ marginBottom: "0" }}>
            Latest developments from the Seven SEAS framework
          </p>
        </div>

        <div className="books-layout">
          {newsItems.map((item) => (
            <article className="press-item" key={item.title}>
              <div>
                <h2 className="press-item-title">{item.title}</h2>
                <p className="press-item-source">{item.source}</p>
                <p style={{ color: "var(--ink-soft)", fontSize: "0.92rem", lineHeight: "1.7", margin: "10px 0 0" }}>
                  {item.excerpt}
                </p>
              </div>
              <span className="press-item-date">{item.date}</span>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}