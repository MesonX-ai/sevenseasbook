import { chapters } from "../../../lib/sevenSeasData";

export function generateStaticParams() {
  return chapters.map((chapter) => ({ chapter: chapter.id }));
}

export default async function ChapterPage({ params }) {
  const { chapter } = await params;
  const chapterData = chapters.find((item) => item.id === chapter);
  const currentYear = new Date().getFullYear();
  const navTitles = {
    "1": "One Universal Language",
    "2": "Two Unique Languages",
    "3": "Three NIM",
    "4": "Gang of Four",
    "5": "Five Methodologies",
    "6": "Six Frameworks",
    "7": "Seven Java EE APIs",
  };

  const chapterSections = {
    "1": [
      "1. OOPS",
      "2. Core Java",
      "3. JVM and Class Loader",
      "4. Garbage Collector",
      "5. Java Collection Framework",
      "6. Java Threading Model",
    ],
    "2": [
      "7. Unified Modeling Language (UML)",
      "8. Structured Query Language (SQL)",
      "9. Procedural Language extension of SQL (PL/SQL)",
    ],
    "3": [
      "10. Computer Network",
      "11. Clustering and Load Balancing",
      "12. Continuous Integration Process",
      "13. Project Management Tools",
      "14. Unit Test",
    ],
    "4": [
      "15. Software Design Patterns",
      "16. J2EE Design Patterns with Frameworks",
    ],
    "5": [
      "17. Rational Unified Process (RUP)",
      "18. Six Sigma",
      "19. Software Development Life Cycle (SDLC)",
      "20. Agile Methodology",
      "21. Waterfall Model",
    ],
    "6": [
      "22. Struts",
      "23. Spring",
      "24. Hibernate",
      "25. iBatis",
      "26. Framework Configuration and Integration",
      "27. Apache Axis",
      "28. Jersey",
    ],
    "7": [
      "29. Messaging Service",
      "30. Enterprise Bean",
      "31. Persistence",
      "32. User Interface",
      "33. Security",
      "34. SOAP and REST",
      "35. JAXB and JAXP",
      "36. Web Service",
      "",
      "Bonus Feature",
      "37. Java Script",
      "38. jQuery",
      "39. AJAX, JSON and DOJO",
      "40. UNIX Shell Script",
    ],
  };

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
    <>
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
                  <a href={`/chapters/${item.id}`}>{navTitles[item.id]}</a>
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
              <iframe
                src={`/docs/chapters/${chapter}.pdf`}
                style={{ width: "726px", height: "908px" }}
                frameBorder="0"
                title={`Chapter ${chapter}: ${chapterData.title}`}
              />
            </article>
          </div>

          <div id="sidebar">
            <div className="sidemenu">
              <h3>Chapters</h3>
              <ul>
                {(chapterSections[chapter] || []).map((line, idx) => {
                  if (!line) {
                    return <li key={`blank-${idx}`}>&nbsp;</li>;
                  }

                  if (line === "Bonus Feature") {
                    return (
                      <li key={`bonus-${idx}`}>
                        <strong>Bonus Feature</strong>
                      </li>
                    );
                  }

                  return (
                    <li key={line}>
                      <a href="#">{line}</a>
                    </li>
                  );
                })}
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
    </>
  );
}
