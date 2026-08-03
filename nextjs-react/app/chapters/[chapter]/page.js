import { chapters } from "../../../lib/sevenSeasData";

export function generateStaticParams() {
  return chapters.map((chapter) => ({ chapter: chapter.id }));
}

export default async function ChapterPage({ params }) {
  const { chapter } = await params;
  const chapterData = chapters.find((item) => item.id === chapter);
  const currentYear = new Date().getFullYear();
  const conceptDetails = chapterData?.conceptDetails || [chapterData?.concept];
  const implementationDetails = chapterData?.implementationDetails || [chapterData?.implementation];
  const diagramTitle = chapterData?.diagram?.title;
  const diagramSteps = chapterData?.diagram?.steps || [];
  const enterpriseScenario = chapterData?.enterpriseScenario;
  const operationalOutcomes = chapterData?.operationalOutcomes || [];
  const flowDiagrams = chapterData?.flowDiagrams || [];

  if (!chapterData) {
    return (
      <div id="content-wrap">
        <div id="content" className="clearfix">
          <div id="main">
            <article className="post">
              <div className="primary">
                <h2>Chapter Not Found</h2>
                <p>The requested chapter does not exist.</p>
                <p>
                  <a className="more" href="/">
                    Return home &raquo;
                  </a>
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-shell page-chapter">
      <div id="header-wrap">
        <header>
          <hgroup>
            <h1>
              <a href="/">Seven SEAS</a>
            </h1>
            <h3>Solutions for Enterprise Applications &amp; Services</h3>
          </hgroup>

          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
                <span></span>
              </li>
              {chapters.map((item) => (
                <li key={item.id} id={item.id === chapter ? "current" : undefined}>
                    <a href={`/chapters/${item.id}`}>{item.navTitle || item.title}</a>
                  <span></span>
                </li>
              ))}
            </ul>
          </nav>

          <form id="quick-search" method="get" action="#">
            <fieldset className="search">
              <label htmlFor="qsearch">Search:</label>
              <input
                className="tbox"
                id="qsearch"
                type="text"
                name="qsearch"
                defaultValue="Search..."
                title="Start typing and hit ENTER"
              />
              <button className="btn" title="Submit Search" type="submit">
                Search
              </button>
            </fieldset>
          </form>
        </header>
      </div>

      <div id="content-wrap">
        <div id="content" className="clearfix">
          <div id="main">
            <article className="post">
              <div className="primary">
                <h2>
                  {chapterData.id}. {chapterData.title}
                </h2>
                <p>{chapterData.summary}</p>

                <h3>The Concept</h3>
                {conceptDetails.map((paragraph, index) => (
                  <p key={`concept-${chapterData.id}-${index}`}>{paragraph}</p>
                ))}

                <h3>Technical Implementation</h3>
                {implementationDetails.map((paragraph, index) => (
                  <p key={`implementation-${chapterData.id}-${index}`}>{paragraph}</p>
                ))}

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
              </div>
            </article>
          </div>

          <div id="sidebar">
            <div className="sidemenu">
              <h3>Seven Technical Pillars</h3>
              <ul>
                {chapters.map((item) => (
                  <li key={`sidebar-${item.id}`}>
                    <a href={`/chapters/${item.id}`}>
                      {item.id}. {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="about-me">
              <h3>About Author</h3>
              <p>
                <a href="https://shiva-dhanuskodi.us" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/images/shiva_r_dhanuskodi.png"
                    width="60"
                    alt="Shiva R Dhanuskodi"
                    className="align-left"
                  />
                </a>
                Shiva R Dhanuskodi, the author of Seven SEAS book is a founder and CEO at Mesonsoft
                LLC. <a href="https://www.shiva-dhanuskodi.us" target="_blank" rel="noopener noreferrer">Learn more...</a>
              </p>
            </div>

            <p>
              <a className="more" href="/docs/SevenSEAS.pdf" target="_blank" rel="noopener noreferrer">
                Download PDF version &raquo;
              </a>
            </p>
          </div>
        </div>
      </div>

      <div id="extra-wrap">
        <div id="extra" className="clearfix">
          <div className="col first">
            <h3>Contact Info</h3>
            <p>
              <strong>E-mail: </strong>shiva.dhanuskodi@mesonsoft.com
            </p>
            <p>
              To learn more about us. Please visit{" "}
              <a href="https://shiva-dhanuskodi.us" target="_blank" rel="noopener noreferrer">
                www.shiva-dhanuskodi.us
              </a>{" "}
              or{" "}
              <a href="https://www.mesonsoft.com" target="_blank" rel="noopener noreferrer">
                www.mesonsoft.com
              </a>
            </p>

            <h3>Updates</h3>

            <ul className="subscribe-stuff">
              <li>
                <a title="RSS" href="#" rel="nofollow">
                  <img alt="RSS" title="RSS" src="/images/social_rss.png" width="25" />
                </a>
              </li>
              <li>
                <a title="Facebook" href="#" rel="nofollow">
                  <img alt="Facebook" title="Facebook" src="/images/social_facebook.png" width="25" />
                </a>
              </li>
              <li>
                <a title="Twitter" href="#" rel="nofollow">
                  <img alt="Twitter" title="Twitter" src="/images/social_twitter.png" width="25" />
                </a>
              </li>
              <li>
                <a title="E-mail this book to a friend!" href="#" rel="nofollow">
                  <img
                    alt="E-mail this book to a friend!"
                    title="E-mail this book to a friend!"
                    src="/images/social_email.png"
                    width="25"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <h3>Site Links</h3>
            <div className="footer-list">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/style-demo">Style Demo</a></li>
                <li><a href="/mcp">MCP Notes</a></li>
              </ul>
            </div>
          </div>

          <div className="col">
            <h3>Other Websites</h3>
            <div className="footer-list">
              <ul>
                <li>
                  <a href="https://www.mesonsoft.com" target="_blank" rel="noopener noreferrer">
                    Mesonsoft
                  </a>
                </li>
                <li>
                  <a href="https://www.wallofwisdom.org" target="_blank" rel="noopener noreferrer">
                    Wall of Wisdom
                  </a>
                </li>
                <li>
                  <a href="https://mysports365.app" target="_blank" rel="noopener noreferrer">
                    My Sports 365
                  </a>
                </li>
                <li>
                  <a href="https://myfamilyassistant.ai" target="_blank" rel="noopener noreferrer">
                    My Family Assistant AI
                  </a>
                </li>
                <li>
                  <a href="https://squark-browser.ai" target="_blank" rel="noopener noreferrer">
                    sQuark AI Browser
                  </a>
                </li>
                <li>
                  <a href="https://www.anishiv.com" target="_blank" rel="noopener noreferrer">
                    AniShiv
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p className="footer-left">
          Copyright &copy; {currentYear} Mesonsoft LLC. All Rights Reserved. &nbsp; &nbsp; &nbsp;
          Published by{" "}
          <a href="http://www.mesonsoft.com/" target="_blank" rel="noopener noreferrer">
            Mesonsoft LLC
          </a>{" "}
          &nbsp; &nbsp; &nbsp; Views:<span id="display_visitor_number" className="visitor"></span>
        </p>
        <p className="footer-right">
          <a href="/">Home</a> | <a href="#">Sitemap</a> | <a href="#">RSS Feed</a> |{" "}
          <a href="#top" className="back-to-top">Back to Top</a>
        </p>
      </footer>
    </div>
  );
}
