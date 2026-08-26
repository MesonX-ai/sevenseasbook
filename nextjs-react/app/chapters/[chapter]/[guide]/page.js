import { chapters } from "../../../../lib/sevenSeasData";
import { chapterGuides, GUIDE_ORDER } from "../../../../lib/topicGuides";

export function generateStaticParams() {
  const params = [];
  for (const chapter of chapters) {
    for (const guide of chapterGuides[chapter.id] || []) {
      params.push({ chapter: chapter.id, guide: guide.slug });
    }
  }
  return params;
}

function resolve(chapterId, guideSlug) {
  const chapter = chapters.find((item) => item.id === chapterId);
  const guides = chapter ? chapterGuides[chapter.id] || [] : [];
  const index = guides.findIndex((g) => g.slug === guideSlug);
  return { chapter, guides, guide: index >= 0 ? guides[index] : null, index };
}

export async function generateMetadata({ params }) {
  const { chapter: chapterId, guide: guideSlug } = await params;
  const { chapter, guide } = resolve(chapterId, guideSlug);
  if (!chapter || !guide) {
    return { title: "Guide Not Found" };
  }
  return {
    title: `${guide.title} — Chapter ${chapter.id} Study Guide`,
    description: guide.intro,
    alternates: {
      canonical: `/chapters/${chapter.id}/${guide.slug}`,
    },
  };
}

export default async function ChapterGuidePage({ params }) {
  const { chapter: chapterId, guide: guideSlug } = await params;
  const { chapter, guides, guide, index } = resolve(chapterId, guideSlug);

  if (!chapter || !guide) {
    return (
      <div className="page-shell">
        <main className="page-main">
          <div className="chapter-article">
            <h2>Guide Not Found</h2>
            <p>The requested study guide does not exist.</p>
            <p>
              <a className="more" href={`/chapters/${chapterId}`}>
                &larr; Back to Chapter {chapterId}
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
            Study Guide &middot; Chapter {chapter.id}: {chapter.navTitle || chapter.title}
            {typeof guide.minutes === "number" ? ` · ${guide.minutes} min read` : ""}
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
                <a className="more" href={`/chapters/${chapter.id}/${prev.slug}`}>
                  &larr; {prev.title}
                </a>
              ) : null}
            </div>
            <div>
              <a className="btn btn-sm" href={`/chapters/${chapter.id}`}>
                Chapter {chapter.id} Overview
              </a>
            </div>
            <div>
              {next ? (
                <a className="more" href={`/chapters/${chapter.id}/${next.slug}`}>
                  {next.title} &rarr;
                </a>
              ) : null}
            </div>
          </nav>

          <hr />

          <p style={{ textAlign: "center" }}>
            All study guides for this chapter:{" "}
            {guides.map((g, i) => (
              <span key={`all-${g.slug}`}>
                {i > 0 ? " · " : ""}
                <a className="more" href={`/chapters/${chapter.id}/${g.slug}`}>
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
