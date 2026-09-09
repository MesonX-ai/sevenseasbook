import { eternalTerms } from "../../../../lib/eternalTerms";
import { eternalTermGuides, GUIDE_ORDER } from "../../../../lib/topicGuides";

export function generateStaticParams() {
  const params = [];
  for (const term of eternalTerms) {
    for (const guide of eternalTermGuides[term.slug] || []) {
      params.push({ term: term.slug, guide: guide.slug });
    }
  }
  return params;
}

function resolve(termSlug, guideSlug) {
  const term = eternalTerms.find((item) => item.slug === termSlug);
  const guides = term ? eternalTermGuides[term.slug] || [] : [];
  const index = guides.findIndex((g) => g.slug === guideSlug);
  return { term, guides, guide: index >= 0 ? guides[index] : null, index };
}

export async function generateMetadata({ params }) {
  const { term: termSlug, guide: guideSlug } = await params;
  const { term, guide } = resolve(termSlug, guideSlug);
  if (!term || !guide) {
    return { title: "Guide Not Found" };
  }
  return {
    title: `${guide.title} — ${term.name}`,
    description: guide.intro,
    alternates: {
      canonical: `/eternal-terms/${term.slug}/${guide.slug}`,
    },
  };
}

export default async function EternalTermGuidePage({ params }) {
  const { term: termSlug, guide: guideSlug } = await params;
  const { term, guides, guide, index } = resolve(termSlug, guideSlug);

  if (!term || !guide) {
    return (
      <div className="page-shell">
        <main className="page-main">
          <div className="chapter-article">
            <h2>Guide Not Found</h2>
            <p>The requested study guide does not exist.</p>
            <p>
              <a className="more" href={`/eternal-terms/${termSlug}`}>
                &larr; Back to {term ? term.name : "the term"}
              </a>
            </p>
          </div>
        </main>
      </div>
    );
  }

  const prev = index > 0 ? guides[index - 1] : null;
  const next = index >= 0 && index < guides.length - 1 ? guides[index + 1] : null;

  return (
    <div className="page-shell">
      <main className="page-main">
        <article className="chapter-article">
          <p className="eyebrow">
            <span aria-hidden="true">{term.icon}</span> Study Guide &middot; {term.name}
            {typeof guide.minutes === "number" ? ` · ${guide.minutes} min read` : ""}
            {guide.audience === "middle-school" ? " · 🎒 Middle School" : ""}
          </p>
          <h2>{guide.title}</h2>
          <p>
            <em>{guide.intro}</em>
          </p>

          {guide.sections.map((section, sIndex) => (
            <section key={`section-${guide.slug}-${sIndex}`}>
              <h3>{section.heading}</h3>
              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={`para-${guide.slug}-${sIndex}-${pIndex}`}>{paragraph}</p>
              ))}
            </section>
          ))}

          {guide.analogy ? (
            <section className="chapter-callout chapter-callout-analogy">
              <h3>💡 The Big Analogy</h3>
              <h4>{guide.analogy.title}</h4>
              <p>{guide.analogy.text}</p>
            </section>
          ) : null}

          {guide.activity ? (
            <section className="chapter-callout chapter-callout-activity">
              <h3>🛠️ Try It Yourself</h3>
              <h4>{guide.activity.title}</h4>
              <ol className="chapter-callout-list">
                {guide.activity.steps.map((step, sIndex) => (
                  <li key={`activity-${guide.slug}-${sIndex}`}>{step}</li>
                ))}
              </ol>
            </section>
          ) : null}

          {guide.quiz && guide.quiz.length > 0 ? (
            <section className="chapter-quiz" aria-label="Quick quiz">
              <h3>📝 Quick Quiz</h3>
              <p className="chapter-quiz-hint">
                Try to answer before peeking. The correct answer is marked with a check, and the explanation
                shows you why.
              </p>
              {guide.quiz.map((item, qIndex) => (
                <div className="chapter-quiz-question" key={`quiz-${guide.slug}-${qIndex}`}>
                  <p className="chapter-quiz-prompt">
                    <strong>Q{qIndex + 1}.</strong> {item.question}
                  </p>
                  {item.options.map((option, oIndex) => (
                    <p
                      className={`chapter-quiz-option${oIndex === item.answer ? " is-answer" : ""}`}
                      key={`opt-${guide.slug}-${qIndex}-${oIndex}`}
                    >
                      {String.fromCharCode(65 + oIndex)}. {option}
                      {oIndex === item.answer ? " ✔" : ""}
                    </p>
                  ))}
                  <p className="chapter-quiz-why">Why? {item.why}</p>
                </div>
              ))}
            </section>
          ) : null}

          <h3>Key Points</h3>
          <ul className="chapter-outcomes">
            {guide.keyPoints.map((point, kIndex) => (
              <li key={`point-${guide.slug}-${kIndex}`}>{point}</li>
            ))}
          </ul>

          <hr />

          <nav
            aria-label="More study guides"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              {prev ? (
                <a className="more" href={`/eternal-terms/${term.slug}/${prev.slug}`}>
                  &larr; {prev.title}
                </a>
              ) : null}
            </div>
            <div>
              <a className="btn btn-sm" href={`/eternal-terms/${term.slug}`}>
                {term.name} Overview
              </a>
            </div>
            <div>
              {next ? (
                <a className="more" href={`/eternal-terms/${term.slug}/${next.slug}`}>
                  {next.title} &rarr;
                </a>
              ) : null}
            </div>
          </nav>

          <hr />

          <p style={{ textAlign: "center" }}>
            All study guides for this term:{" "}
            {guides.map((g, i) => (
              <span key={`all-${g.slug}`}>
                {i > 0 ? " · " : ""}
                <a className="more" href={`/eternal-terms/${term.slug}/${g.slug}`}>
                  {GUIDE_ORDER.includes(g.slug) ? g.title : g.title}
                </a>
              </span>
            ))}
          </p>
        </article>
      </main>
    </div>
  );
}
