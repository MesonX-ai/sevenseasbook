import { acronymSections, chapters } from "../lib/sevenSeasData";

export default function HomePage() {
  const currentYear = new Date().getFullYear();
  const journeyStages = [
    {
      title: "Foundation",
      detail: "Model semantics and structural embeddings establish a stable reasoning substrate.",
    },
    {
      title: "Grounding",
      detail: "Retrieval orchestration injects factual, current, and policy-compliant enterprise context.",
    },
    {
      title: "Autonomy",
      detail: "Agentic planning loops coordinate deterministic tools under safety and observability boundaries.",
    },
  ];
  const spotlightSections = [
    {
      key: "state",
      tone: "light",
      chapter: chapters[0],
      eyebrow: "State Intelligence",
      headline: "Memory layers that persist intent across every agent step.",
      body: "Persistent state transforms short interactions into long-horizon execution with continuity, context, and explainability.",
      caption: "WORKING / EPISODIC / SEMANTIC",
      points: ["Session continuity", "Cross-step recall", "Policy-scoped memory"],
      image: "/images/7_seas_logo.png",
      imageAlt: "7 SEAS logo",
    },
    {
      key: "execution",
      tone: "dark",
      chapter: chapters[2],
      eyebrow: "Execution Discipline",
      headline: "Plan, act, evaluate, and self-correct with deterministic rigor.",
      body: "Agent loops become production-safe when orchestration, retries, and objective checks are explicit and traceable.",
      caption: "PLAN / ACT / OBSERVE / REPLAN",
      points: ["Deterministic orchestration", "Adaptive replanning", "Failure-aware loops"],
      image: "/images/seven_seas.png",
      imageAlt: "Seven SEAS architecture diagram",
    },
    {
      key: "safety",
      tone: "light",
      chapter: chapters[5],
      eyebrow: "Operational Trust",
      headline: "Guardrails and observability keep autonomy safe at enterprise scale.",
      body: "Safety controls and telemetry provide the confidence to move autonomous systems from pilot to critical operations.",
      caption: "POLICY / SECURITY / EVALUATION",
      points: ["Policy enforcement", "Runtime defenses", "Continuous evaluation"],
      image: "/images/ss_symbol.png",
      imageAlt: "Seven SEAS symbol",
    },
  ];

  const visualGallery = [
    {
      src: "/images/7_seas_logo.png",
      alt: "7 SEAS identity mark",
      title: "Identity",
      description: "A modern identity for a practical enterprise AI framework.",
    },
    {
      src: "/images/seven_seas.png",
      alt: "Seven SEAS system architecture",
      title: "Architecture",
      description: "The transition from model reasoning to production systems.",
    },
    {
      src: "/images/shiva_r_dhanuskodi.png",
      alt: "Shiva R Dhanuskodi",
      title: "Author",
      description: "Built from practitioner experience in real enterprise deployments.",
    },
  ];

  return (
    <div className="page-shell page-home">
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
              <li id="current">
                <a href="/">Home</a>
                <span></span>
              </li>
              {chapters.map((chapter) => (
                <li key={chapter.id}>
                  <a href={`/chapters/${chapter.id}`}>{chapter.navTitle || chapter.title}</a>
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

      <section className="home-hero full-bleed" aria-label="Seven SEAS hero">
        <div className="hero-content">
          <p className="hero-eyebrow">Seven SEAS for Enterprise AI</p>
          <h2>From foundation models to production-grade autonomous systems.</h2>
          <p className="hero-subcopy">
            A premium blueprint for designing dependable agentic platforms with memory,
            retrieval, orchestration, policy controls, and measurable quality.
          </p>
          <div className="hero-actions">
            <a className="more" href="/docs/SevenSEAS.pdf" target="_blank" rel="noopener noreferrer">
              Download Architecture PDF &raquo;
            </a>
            <a className="hero-link" href="/chapters/1">Explore the 7 Pillars</a>
          </div>
        </div>
      </section>

      <div id="content-wrap">
        <div id="content" className="clearfix">
          <div id="main">
            <article className="post">
              <div className="primary">
                <p align="left">
                  SevenSEAS is a practical architecture model for enterprise-grade AI systems. It
                  bridges foundation-model theory and production implementation through a clear
                  engineering path from data ingestion to real-world deployment.
                </p>

                <p align="left">
                  7 SEAS now frames the updated AI lifecycle from foundational embeddings through
                  scalable production deployment.
                </p>

                <p align="left">
                  Let&apos;s dive into SevenSEAS (Structural Embeddings, Expanded Retrieval,
                  Agentic Execution, and Scalable Deployment).
                </p>

                <div className="story-grid">
                  {acronymSections.map((section) => (
                    <article className="story-card" key={`${section.letter}-${section.title}`}>
                      <p align="left">
                        <b>
                          {section.letter} - {section.title}
                        </b>{" "}
                        {section.description}
                      </p>
                      {section.title === "Scalable Deployment" ? (
                        <p align="left">
                          <img
                            src="/images/seven_seas.png"
                            alt="Seven SEAS architecture overview"
                            style={{ maxWidth: "100%", height: "auto" }}
                          />
                        </p>
                      ) : null}
                    </article>
                  ))}
                </div>

                <section className="journey-band" aria-label="Seven SEAS journey stages">
                  {journeyStages.map((stage) => (
                    <article className="journey-card" key={stage.title}>
                      <h3>{stage.title}</h3>
                      <p>{stage.detail}</p>
                    </article>
                  ))}
                </section>

                <hr />
                <p align="left">
                  To build resilient, enterprise-grade agents today, your architecture must master
                  these 7 key technical pillars:
                </p>

                <ul>
                  {chapters.map((chapter) => (
                    <li key={`pillar-${chapter.id}`}>
                      <b>{chapter.id}. {chapter.title}</b> - {chapter.summary}
                    </li>
                  ))}
                </ul>

                <p align="left" className="system-flow">
                  [ DATA INPUT ] -&gt; Structural Embeddings -&gt; Expanded Retrieval -&gt; Agentic
                  Execution -&gt; Scalable Deployment -&gt; [ PRODUCTION AI ]
                </p>

                <p>
                  <a className="more" href="/docs/SevenSEAS.pdf" target="_blank" rel="noopener noreferrer">
                    Download PDF version &raquo;
                  </a>
                </p>
              </div>
            </article>
          </div>

          <div id="sidebar">
            <div className="sidemenu">
              <h3>Quote</h3>
              <blockquote>
                <p>
                  If necessity is the Mother of Invention then curiosity is the Father and
                  we&apos;re their Kids!
                </p>
                <p className="author">
                  Visit us at{" "}
                  <a href="https://www.wallofwisdom.org" target="_blank" rel="noopener noreferrer">
                    www.wallofwisdom.org
                  </a>
                </p>
              </blockquote>
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
                Shiva R Dhanuskodi, the author of Seven SEAS, is founder and CEO at Mesonsoft LLC.
                <a href="https://www.shiva-dhanuskodi.us" target="_blank" rel="noopener noreferrer">
                  {" "}Learn more...
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="home-timeline full-bleed" aria-label="SEAS progression timeline">
        <div className="timeline-content">
          <h3>Architecture Storyline</h3>
          <p>Each pillar compounds the next, creating an end-to-end enterprise AI operating model.</p>
          <ol>
            {chapters.map((chapter) => (
              <li key={`timeline-${chapter.id}`}>
                <span>{chapter.id}</span>
                <div>
                  <strong>{chapter.navTitle || chapter.title}</strong>
                  <p>{chapter.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="apple-spotlight full-bleed" aria-label="Seven SEAS featured architecture moments">
        <div className="spotlight-content">
          {spotlightSections.map((spotlight, index) => (
            <article
              key={spotlight.key}
              className={`spotlight-row ${spotlight.tone === "dark" ? "is-dark" : "is-light"}`}
            >
              <div className="spotlight-copy">
                <p className="spotlight-eyebrow">{spotlight.eyebrow}</p>
                <h3>{spotlight.headline}</h3>
                <p>{spotlight.body}</p>
                <ul className="spotlight-points">
                  {spotlight.points.map((point) => (
                    <li key={`${spotlight.key}-${point}`}>{point}</li>
                  ))}
                </ul>
                <a href={`/chapters/${spotlight.chapter.id}`} className="hero-link">
                  Read {spotlight.chapter.navTitle || spotlight.chapter.title}
                </a>
              </div>
              <div className="spotlight-visual-wrap">
                <div className="spotlight-visual" aria-label={spotlight.caption} role="img">
                  <span className="spotlight-index">0{index + 1}</span>
                  <img src={spotlight.image} alt={spotlight.imageAlt} className="spotlight-image" />
                  <strong>{spotlight.chapter.navTitle || spotlight.chapter.title}</strong>
                  <p>{spotlight.caption}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-gallery full-bleed" aria-label="Seven SEAS visual gallery">
        <div className="gallery-content">
          <h3>Designed for Real-World AI Delivery</h3>
          <p>
            Seven SEAS combines conceptual clarity with implementation realism. These visuals map
            the journey from architecture thinking to production-grade execution.
          </p>
          <div className="gallery-grid">
            {visualGallery.map((item) => (
              <article key={item.title} className="gallery-card">
                <img src={item.src} alt={item.alt} />
                <div className="gallery-card-body">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
