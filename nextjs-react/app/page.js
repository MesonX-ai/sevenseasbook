export default function HomePage() {
  const currentYear = new Date().getFullYear();

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
              <li id="current">
                <a href="/">Home</a>
                <span></span>
              </li>
              <li>
                <a href="/chapters/1">One Universal Language</a>
                <span></span>
              </li>
              <li>
                <a href="/chapters/2">Two Unique Languages</a>
                <span></span>
              </li>
              <li>
                <a href="/chapters/3">Three NIM</a>
                <span></span>
              </li>
              <li>
                <a href="/chapters/4">Gang of Four</a>
                <span></span>
              </li>
              <li>
                <a href="/chapters/5">Five Methodologies</a>
                <span></span>
              </li>
              <li>
                <a href="/chapters/6">Six Frameworks</a>
                <span></span>
              </li>
              <li>
                <a href="/chapters/7">Seven Java EE APIs</a>
                <span></span>
              </li>
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
                <p align="left">
                  First of all, this book is not a tutorial for any frameworks, methodologies or
                  technologies that are currently in use. But, it helps sharpen Java skills and
                  prepare for future engineering challenges.
                </p>

                <p align="left">Let&apos;s dive into Seven SEAS (Solutions for Enterprise Applications &amp; Services)</p>
                <p align="left">
                  <b>1. One Platform-Independent Language</b> Java
                </p>
                <p align="left">
                  <b>2. Two Unique Languages</b> Unified Modeling Language and Structured Query
                  Language
                </p>
                <p align="left">
                  <b>3. Three-Stick NIM (Network, Integration and Management)</b> Computer
                  Networking, Clustering and Continuous Integration, Project Management, and Unit
                  Testing
                </p>
                <p align="left">
                  <b>4. Gang of Four</b> Java Design Patterns and J2EE Design Patterns
                </p>
                <p align="left">
                  <b>5. Five Methodologies</b> RUP, Six Sigma, SDLC, Waterfall, and Agile
                  Software Development
                </p>
                <p align="left">
                  <b>6. Six Frameworks</b> Struts, Spring, Hibernate, iBatis, Apache Axis, and
                  Jersey
                </p>
                <p align="left">
                  <b>7. Seven useful Java EE APIs</b> JMS, EJB, JPA/JDBC, JSF/JSP, JAAS,
                  SOAP/REST, and Web Services
                </p>
                <hr />
                <p align="left">
                  <b>Bonus Features</b> JavaScript, jQuery, AngularJS, AJAX, JSON, DOJO, and
                  UNIX Shell Scripting
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
