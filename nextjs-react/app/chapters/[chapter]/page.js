import { chapters } from "../../../lib/sevenSeasData";
import { chapterExtras } from "../../../lib/chapterExtras";

export function generateStaticParams() {
  return chapters.map((chapter) => ({ chapter: chapter.id }));
}

export default async function ChapterPage({ params }) {
  const { chapter } = await params;
  const chapterData = chapters.find((item) => item.id === chapter);
  const conceptDetails = chapterData?.conceptDetails || [chapterData?.concept];
  const implementationDetails = chapterData?.implementationDetails || [chapterData?.implementation];
  const diagramTitle = chapterData?.diagram?.title;
  const diagramSteps = chapterData?.diagram?.steps || [];
  const enterpriseScenario = chapterData?.enterpriseScenario;
  const operationalOutcomes = chapterData?.operationalOutcomes || [];
  const flowDiagrams = chapterData?.flowDiagrams || [];
  const advancedTopics = chapterData?.advancedTopics || [];
  const applicationExamples = chapterData?.applicationExamples || [];
  const videoSuggestions = chapterData?.videoSuggestions || [];
  const extra = chapterExtras[chapterData?.id] || {};
  const keyTerms = extra.keyTerms || [];
  const codeExample = extra.codeExample || null;
  const pitfalls = extra.pitfalls || [];
  const furtherReading = extra.furtherReading || [];

  if (!chapterData) {
    return (
      <div className="page-shell">
        <main className="page-main">
          <div className="chapter-article">
            <h2>Chapter Not Found</h2>
            <p>The requested chapter does not exist.</p>
            <p>
              <a className="more" href="/">
                Return home &rarr;
              </a>
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="page-shell page-chapter">
      <main className="page-main">
        <article className="chapter-article">
          <p className="eyebrow">Chapter {chapterData.id}</p>
          <h2>{chapterData.title}</h2>
          <p>{chapterData.summary}</p>

          <h3>The Concept</h3>
          {conceptDetails.map((paragraph, index) => (
            <p key={`concept-${chapterData.id}-${index}`}>{paragraph}</p>
          ))}

          <h3>Technical Implementation</h3>
          {implementationDetails.map((paragraph, index) => (
            <p key={`implementation-${chapterData.id}-${index}`}>{paragraph}</p>
          ))}

          {keyTerms.length > 0 ? (
            <>
              <h3>Key Terms</h3>
              <dl className="chapter-keyterms">
                {keyTerms.map((item, index) => (
                  <div className="chapter-keyterm" key={`term-${chapterData.id}-${index}`}>
                    <dt>{item.term}</dt>
                    <dd>{item.definition}</dd>
                  </div>
                ))}
              </dl>
            </>
          ) : null}

          {codeExample ? (
            <>
              <h3>Code Example</h3>
              <figure className="chapter-code">
                <figcaption>
                  <span className="chapter-code-dot" aria-hidden="true" />
                  {codeExample.title}
                  <span className="chapter-code-lang">{codeExample.language}</span>
                </figcaption>
                <pre>
                  <code>{codeExample.code}</code>
                </pre>
              </figure>
            </>
          ) : null}

          {pitfalls.length > 0 ? (
            <>
              <h3>Common Pitfalls</h3>
              <ul className="chapter-pitfalls">
                {pitfalls.map((pitfall, index) => (
                  <li key={`pitfall-${chapterData.id}-${index}`}>{pitfall}</li>
                ))}
              </ul>
            </>
          ) : null}

          {diagramSteps.length > 0 ? (
            <>
              <h3>{diagramTitle || "Architecture Diagram"}</h3>
              <div className="chapter-diagram" role="img" aria-label={diagramTitle || "Chapter architecture diagram"}>
                {diagramSteps.map((step, index) => (
                  <div className="chapter-diagram-step" key={`diagram-${chapterData.id}-${index}`}>
                    <span className="chapter-diagram-node">{step}</span>
                    {index < diagramSteps.length - 1 ? <span className="chapter-diagram-arrow">&rarr;</span> : null}
                  </div>
                ))}
              </div>
            </>
          ) : null}

          {enterpriseScenario ? (
            <>
              <h3>Enterprise Scenario</h3>
              <p>{enterpriseScenario}</p>
            </>
          ) : null}

          {operationalOutcomes.length > 0 ? (
            <>
              <h3>Operational Outcomes</h3>
              <ul className="chapter-outcomes">
                {operationalOutcomes.map((outcome, index) => (
                  <li key={`outcome-${chapterData.id}-${index}`}>{outcome}</li>
                ))}
              </ul>
            </>
          ) : null}

          {advancedTopics.length > 0 ? (
            <>
              <h3>Neural Networks, LLMs, and Agentic Insights</h3>
              <ul className="chapter-outcomes">
                {advancedTopics.map((topic, index) => (
                  <li key={`advanced-topic-${chapterData.id}-${index}`}>{topic}</li>
                ))}
              </ul>
            </>
          ) : null}

          {applicationExamples.length > 0 ? (
            <>
              <h3>Applications</h3>
              <ul className="chapter-outcomes">
                {applicationExamples.map((example, index) => (
                  <li key={`application-example-${chapterData.id}-${index}`}>{example}</li>
                ))}
              </ul>
            </>
          ) : null}

          {flowDiagrams.length > 0 ? (
            <>
              <h3>Flow Diagrams</h3>
              <div className="chapter-flow-grid">
                {flowDiagrams.map((flow, flowIndex) => (
                  <section className="chapter-flow-card" key={`flow-${chapterData.id}-${flowIndex}`}>
                    <h4>{flow.title}</h4>
                    <div className="chapter-diagram" role="img" aria-label={flow.title}>
                      {(flow.steps || []).map((step, stepIndex) => (
                        <div className="chapter-diagram-step" key={`flow-step-${chapterData.id}-${flowIndex}-${stepIndex}`}>
                          <span className="chapter-diagram-node">{step}</span>
                          {stepIndex < flow.steps.length - 1 ? <span className="chapter-diagram-arrow">&rarr;</span> : null}
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </>
          ) : null}

          {furtherReading.length > 0 ? (
            <>
              <h3>Further Reading</h3>
              <ul className="chapter-reading-list">
                {furtherReading.map((item, index) => (
                  <li key={`reading-${chapterData.id}-${index}`}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          {videoSuggestions.length > 0 ? (
            <>
              <h3>YouTube Suggestions</h3>
              <p>Explore these popular topic videos for deeper learning on this chapter.</p>
              <ul className="chapter-video-list">
                {videoSuggestions.map((video, index) => (
                  <li key={`video-suggestion-${chapterData.id}-${index}`}>
                    <a href={video.url} target="_blank" rel="noopener noreferrer">
                      {video.title}
                    </a>
                    <span>{video.channel}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          <hr />

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              {parseInt(chapterData.id) > 1 ? (
                <a className="more" href={`/chapters/${parseInt(chapterData.id) - 1}`}>
                  &larr; Previous Chapter
                </a>
              ) : null}
            </div>
            <div>
              <a className="btn btn-sm" href="/docs/SevenSEAS.pdf" target="_blank" rel="noopener noreferrer">
                Download PDF
              </a>
            </div>
            <div>
              {parseInt(chapterData.id) < chapters.length ? (
                <a className="more" href={`/chapters/${parseInt(chapterData.id) + 1}`}>
                  Next Chapter &rarr;
                </a>
              ) : null}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}