import { eternalTerms } from "../../../lib/eternalTerms";

export function generateStaticParams() {
  return eternalTerms.map((term) => ({ term: term.slug }));
}

export async function generateMetadata({ params }) {
  const { term: slug } = await params;
  const term = eternalTerms.find((item) => item.slug === slug);
  if (!term) {
    return { title: "Term Not Found" };
  }
  return {
    title: `${term.name} — An Eternal AI Term`,
    description: term.tagline,
    alternates: {
      canonical: `/eternal-terms/${term.slug}`,
    },
  };
}

export default async function EternalTermPage({ params }) {
  const { term: slug } = await params;
  const term = eternalTerms.find((item) => item.slug === slug);
  const index = eternalTerms.findIndex((item) => item.slug === slug);
  const prev = index > 0 ? eternalTerms[index - 1] : null;
  const next = index >= 0 && index < eternalTerms.length - 1 ? eternalTerms[index + 1] : null;

  if (!term) {
    return (
      <div className="page-shell">
        <main className="page-main">
          <div className="chapter-article">
            <h2>Term Not Found</h2>
            <p>The requested term does not exist.</p>
            <p>
              <a className="more" href="/eternal-terms">
                Browse all eternal terms &rarr;
              </a>
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <main className="page-main">
        <article className="chapter-article">
          <p className="eyebrow">
            <span aria-hidden="true">{term.icon}</span> Eternal Term {index + 1} of {eternalTerms.length}
          </p>
          <h2>{term.name}</h2>
          <p>
            <em>{term.tagline}</em>
          </p>

          <h3>What It Means</h3>
          <p>{term.definition}</p>

          <h3>Why It Is Eternal</h3>
          {term.whyEternal.map((paragraph, i) => (
            <p key={`why-${i}`}>{paragraph}</p>
          ))}

          <h3>Core Ideas</h3>
          <dl className="chapter-keyterms">
            {term.coreIdeas.map((idea, i) => (
              <div className="chapter-keyterm" key={`idea-${i}`}>
                <dt>{idea.title}</dt>
                <dd>{idea.text}</dd>
              </div>
            ))}
          </dl>

          <h3>Where It Shows Up</h3>
          <ul className="chapter-outcomes">
            {term.applications.map((app, i) => (
              <li key={`app-${i}`}>{app}</li>
            ))}
          </ul>

          <h3>Milestones Through Time</h3>
          <ul className="chapter-reading-list">
            {term.milestones.map((m, i) => (
              <li key={`milestone-${i}`}>
                <strong>{m.year}</strong> — {m.event}
              </li>
            ))}
          </ul>

          <h3>The Road Ahead</h3>
          <p>{term.futureOutlook}</p>

          <h3>The Takeaway</h3>
          <p>
            <strong>{term.keyTakeaway}</strong>
          </p>

          {term.furtherReading.length > 0 ? (
            <>
              <h3>Further Reading</h3>
              <ul className="chapter-reading-list">
                {term.furtherReading.map((item, i) => (
                  <li key={`reading-${i}`}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          <hr />

          <div
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
                <a className="more" href={`/eternal-terms/${prev.slug}`}>
                  &larr; {prev.name}
                </a>
              ) : null}
            </div>
            <div>
              <a className="btn btn-sm" href="/eternal-terms">
                All Eternal Terms
              </a>
            </div>
            <div>
              {next ? (
                <a className="more" href={`/eternal-terms/${next.slug}`}>
                  {next.name} &rarr;
                </a>
              ) : null}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
