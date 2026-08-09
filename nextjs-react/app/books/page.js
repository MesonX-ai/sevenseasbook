import { chapters } from "../../lib/sevenSeasData";

const chaptersNav = chapters.map((chapter) => ({
  id: chapter.id,
  navTitle: chapter.navTitle || chapter.title,
}));

export default function BooksPage() {
  const books = [
    {
      title: "Seven SEAS",
      subtitle: "Solutions for Enterprise Applications & Services",
      meta: "Mesonsoft LLC",
      description:
        "A practical architecture model for enterprise-grade AI systems. Seven SEAS bridges foundation-model theory and production implementation through a clear engineering path from data ingestion to real-world deployment.",
      image: "/images/seven_seas.png",
      link: "/docs/SevenSEAS.pdf",
    },
    {
      title: "Seven SEAS: The 7 Pillars",
      subtitle: "Structural Embeddings to Production Autonomy",
      meta: "Framework Guide",
      description:
        "Master the seven technical pillars every production-grade agentic system must adopt: State & Memory, Tool Calls, Execution Loops, RAG Grounding, Multi-Agent Collaboration, Guardrails, and Observability.",
      image: "/images/7_seas_logo.png",
      link: "/chapters/1",
    },
  ];

  return (
    <div className="page-shell page-books">
      <main className="page-main">
        <div className="section-header" style={{ marginBottom: "48px" }}>
          <p className="eyebrow">Books</p>
          <h1 className="hero-title" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", marginBottom: "12px" }}>
            Seven SEAS
          </h1>
          <p className="hero-eyebrow" style={{ marginBottom: "0" }}>
            Enterprise AI Architecture Framework
          </p>
        </div>

        <div className="books-layout">
          {books.map((book) => (
            <article className="book-card" key={book.title}>
              <div className="book-cover">
                <img src={book.image} alt={book.title} />
              </div>
              <div>
                <h2 className="book-title">{book.title}</h2>
                <p className="book-meta">{book.subtitle}</p>
                <p className="book-desc">{book.description}</p>
                <p style={{ marginTop: "14px" }}>
                  <a
                    className="more"
                    href={book.link}
                    target={book.link.startsWith("http") ? "_blank" : undefined}
                    rel={book.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    Learn more &rarr;
                  </a>
                </p>
              </div>
            </article>
          ))}

          <div style={{ marginTop: "48px" }}>
            <div className="section-header">
              <p className="eyebrow">Chapter Index</p>
              <h2>The Seven Technical Pillars</h2>
            </div>

            <div className="chapter-index-grid">
              {chaptersNav.map((chapter) => {
                const data = chapters.find((c) => c.id === chapter.id);
                return (
                  <a className="chapter-index-card" href={`/chapters/${chapter.id}`} key={chapter.id}>
                    <h3>
                      <span>{chapter.id}.</span> {chapter.navTitle}
                    </h3>
                    <p>{data ? data.summary : ""}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}