import { eternalTerms } from "../../lib/eternalTerms";

export const metadata = {
  title: "Seven Eternal Terms in the AI Industry",
  description:
    "Seven foundational AI concepts that have endured every hype cycle — machine learning, neural networks, NLP, computer vision, reinforcement learning, knowledge representation, and AI ethics — explained with depth and practical context.",
  alternates: {
    canonical: "/eternal-terms",
  },
};

export default function EternalTermsIndex() {
  return (
    <div className="page-shell">
      <main className="page-main">
        <article className="chapter-article">
          <p className="eyebrow">Evergreen concepts</p>
          <h2>Seven Eternal Terms in the AI Industry</h2>
          <p>
            Technologies cycle; ideas endure. These seven terms have anchored the AI industry from
            its founding decades through every hype wave since — and each will still matter when
            today's tools are forgotten. Each page explores where the term came from, why it never
            goes away, the ideas inside it, where it is applied, and where it is heading.
          </p>

          <div className="insight-grid">
            {eternalTerms.map((term, index) => (
              <article className="insight-card" key={term.slug}>
                <h3>
                  <span aria-hidden="true">{term.icon}</span> {index + 1}. {term.name}
                </h3>
                <p>{term.tagline}</p>
                <a className="more" href={`/eternal-terms/${term.slug}`}>
                  Explore the term &rarr;
                </a>
              </article>
            ))}
          </div>

          <hr />

          <p>
            Prefer to start reading? Jump to{" "}
            <a className="more" href="/eternal-terms/machine-learning">
              Machine Learning
            </a>{" "}
            — the term every other one builds on.
          </p>
        </article>
      </main>
    </div>
  );
}
