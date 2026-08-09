import { chapters } from "../../lib/sevenSeasData";

export default function AboutPage() {
  const pressQuotes = [
    {
      quote: "A practical blueprint for enterprise AI delivery",
      source: "Enterprise Architect Review",
    },
    {
      quote: "Bridges the gap between theory and production systems",
      source: "AI Engineering Weekly",
    },
    {
      quote: "Clear, structured, and immediately actionable",
      source: "Cloud Infrastructure Journal",
    },
    {
      quote: "Essential reading for agentic platform teams",
      source: "MLOps Digest",
    },
  ];

  const favorites = [
    {
      title: "BOOKS",
      items: [
        "Designing Data-Intensive Applications",
        "Building LLM Apps",
        "The Mythical Man-Month",
        "Clean Architecture",
        "Deep Learning",
        "Hacker's Delight",
        "The Pragmatic Programmer",
        "AI Engineering",
      ],
    },
    {
      title: "PROJECTS",
      items: [
        "sQuark AI Browser",
        "My Family Assistant AI",
        "Wall of Wisdom",
        "My Sports 365",
        "AniShiv",
        "Seven SEAS Book",
      ],
    },
    {
      title: "THINGS WE NEED MORE OF",
      items: [
        "Curiosity",
        "Production-grade reasoning",
        "Deterministic tool usage",
        "Observable agent loops",
        "Policy-first safety",
        "Enterprise-grade memory",
        "Measurable quality",
        "A whole lot of gratitude",
      ],
    },
  ];

  return (
    <div className="page-shell page-about">
      <main className="page-main">
        {/* Header */}
        <div className="section-header" style={{ marginBottom: "48px" }}>
          <p className="eyebrow">About</p>
          <h1 className="hero-title" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", marginBottom: "12px" }}>
            Seven SEAS
          </h1>
          <p className="hero-eyebrow" style={{ marginBottom: "0" }}>
            By Shiva R Dhanuskodi
          </p>
        </div>

        {/* Quotes strip */}
        <div className="quote-strip">
          {pressQuotes.map((q) => (
            <div className="quote-chip" key={q.quote}>
              <strong>&ldquo;{q.quote}&rdquo;</strong>
              <span>{q.source}</span>
            </div>
          ))}
        </div>

        <div className="about-layout">
          <div className="about-copy">
            <p className="lead">
              SevenSEAS is a practical architecture model for enterprise-grade AI
              systems. It bridges foundation-model theory and production implementation
              through a clear engineering path from data ingestion to real-world deployment.
            </p>

            <p>
              Seven SEAS (Structural Embeddings, Expanded Retrieval, Agentic Execution, and
              Scalable Deployment) now frames the updated AI lifecycle from foundational
              embeddings through scalable production deployment.
            </p>

            <p>
              Shiva R Dhanuskodi is the founder and CEO at Mesonsoft LLC. Drawing on
              extensive practitioner experience in real enterprise deployments, the Seven
              SEAS framework breaks down the seven essential technical pillars every
              production-grade agentic system must master: state and memory hierarchies,
              deterministic tool calling, execution loops, RAG grounding, multi-agent
              collaboration, guardrails, and observability.
            </p>

            <p>
              When Shiva is not architecting enterprise AI systems, he is building software
              products that bring intelligence and automation to everyday workflows.
            </p>

            <p>
              The Seven SEAS project exists to help founders, architects, and engineering leaders
              speak clearly about how AI systems should be designed, governed, and operated in real
              organizations. It is both a technical framework and a practical lens for decision-making.
            </p>

            <hr />

            <h3 style={{ fontSize: "1.3rem", fontFamily: "var(--serif)", marginBottom: "16px" }}>
              The Seven Technical Pillars
            </h3>
            <ul className="fact-list" style={{ display: "grid", gap: "10px" }}>
              {chapters.map((chapter) => (
                <li key={`about-pillar-${chapter.id}`}>
                  <strong>
                    {chapter.id}. {chapter.navTitle}
                  </strong>{" "}
                  - {chapter.summary}
                </li>
              ))}
            </ul>
          </div>

          <aside>
            <div className="fact-card">
              <img
                src="/images/shiva_r_dhanuskodi.png"
                alt="Shiva R Dhanuskodi"
                className="author-photo"
              />
              <h3>About the Author</h3>
              <p style={{ fontSize: "0.9rem", lineHeight: "1.75" }}>
                Shiva R Dhanuskodi is the author of Seven SEAS and founder and CEO at
                Mesonsoft LLC.
              </p>
              <a className="more" href="https://shiva-dhanuskodi.us" target="_blank" rel="noopener noreferrer">
                Learn more &rarr;
              </a>
            </div>

            <div className="fact-card">
              <h3>Contact</h3>
              <ul className="fact-list">
                <li>
                  <a href="mailto:shiva.dhanuskodi@mesonsoft.com">shiva.dhanuskodi@mesonsoft.com</a>
                </li>
                <li>
                  <a href="https://www.mesonsoft.com" target="_blank" rel="noopener noreferrer">
                    www.mesonsoft.com
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    Connect on LinkedIn
                  </a>
                </li>
                <li>
                  <a href="/docs/SevenSEAS.pdf" target="_blank" rel="noopener noreferrer">
                    Download Seven SEAS PDF
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        {/* Favorites */}
        <div style={{ marginTop: "56px" }}>
          <div className="section-header">
            <p className="eyebrow">Inspirations</p>
            <h2>Books, Projects & Ideas</h2>
          </div>
          <div className="journey-grid">
            {favorites.map((cat) => (
              <article className="journey-card" key={cat.title} style={{ textAlign: "left" }}>
                <h3>{cat.title}</h3>
                <ul className="fact-list">
                  {cat.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}