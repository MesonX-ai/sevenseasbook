export default function PressPage() {
  const pressItems = [
    {
      title: "Seven SEAS: A Practical Blueprint for Enterprise AI",
      source: "Enterprise Architect Review",
      date: "2025",
      url: "#",
    },
    {
      title: "Bridging the Gap Between Foundation Models and Production Systems",
      source: "AI Engineering Weekly",
      date: "2025",
      url: "#",
    },
    {
      title: "From RAG to Agentic Execution: A Seven Pillar Framework",
      source: "Cloud Infrastructure Journal",
      date: "2024",
      url: "#",
    },
    {
      title: "Designing Dependable Agentic Platforms with Memory and Guardrails",
      source: "MLOps Digest",
      date: "2024",
      url: "#",
    },
    {
      title: "Structural Embeddings and Retrieval: The New AI Lifecycle",
      source: "Enterprise Data World",
      date: "2024",
      url: "#",
    },
    {
      title: "Observability as a First-Class Citizen in Agentic Systems",
      source: "Platform Engineering Today",
      date: "2024",
      url: "#",
    },
    {
      title: "Building Enterprise-Grade AI with Deterministic Tool Calling",
      source: "Tech Leadership Quarterly",
      date: "2023",
      url: "#",
    },
    {
      title: "Multi-Agent Collaboration Patterns for Production Systems",
      source: "AI Systems Magazine",
      date: "2023",
      url: "#",
    },
    {
      title: "Safety, Guardrails, and Policy Enforcement in AI Agents",
      source: "Security & AI Review",
      date: "2023",
      url: "#",
    },
  ];

  return (
    <div className="page-shell page-press">
      <main className="page-main">
        <div className="section-header" style={{ marginBottom: "40px" }}>
          <p className="eyebrow">Press</p>
          <h1 className="hero-title" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", marginBottom: "12px" }}>
            Press, Reviews & Media
          </h1>
          <p className="hero-eyebrow" style={{ marginBottom: "0" }}>
            Coverage of the Seven SEAS architecture framework
          </p>
        </div>

        <div className="books-layout">
          {pressItems.map((item) => (
            <article className="press-item" key={item.title}>
              <div>
                <h2 className="press-item-title">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </h2>
                <p className="press-item-source">{item.source}</p>
              </div>
              <span className="press-item-date">{item.date}</span>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}