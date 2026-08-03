import { associatedSites, chapters } from "../../lib/sevenSeasData";

const chapterNav = chapters.map((chapter) => ({
  id: chapter.id,
  label: chapter.navTitle || chapter.title,
}));

export default function ProjectsPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="page-shell page-projects">
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
              {chapterNav.map((item) => (
                <li key={item.id}>
                  <a href={`/chapters/${item.id}`}>{item.label}</a>
                  <span></span>
                </li>
              ))}
            </ul>
          </nav>

          <form id="quick-search" method="get" action="#">
            <fieldset className="search">
              <label htmlFor="qsearch">Search:</label>
              <input className="tbox" id="qsearch" type="text" name="qsearch" defaultValue="Search..." title="Start typing and hit ENTER" />
              <button className="btn" title="Submit Search" type="submit">Search</button>
            </fieldset>
          </form>
        </header>
      </div>

      <div id="content-wrap">
        <div id="content" className="clearfix">
          <div id="main">
            <article className="post">
              <div className="primary">
                <h2>Projects and Associated Websites</h2>
                <p>
                  This page centralizes the Seven SEAS ecosystem and related websites associated with
                  Shiva Dhanuskodi and Mesonsoft initiatives.
                </p>
                <ul>
                  {associatedSites.map((site) => (
                    <li key={site}>
                      <a href={site} target="_blank" rel="noopener noreferrer">{site}</a>
                    </li>
                  ))}
                </ul>
                <p>
                  <a className="more" href="/">Back to home &raquo;</a>
                </p>
              </div>
            </article>
          </div>

          <div id="sidebar">
            <div className="sidemenu">
              <h3>Quote</h3>
              <blockquote>
                <p>If necessity is the Mother of Invention then curiosity is the Father and we&apos;re their Kids!</p>
                <p className="author">
                  Visit us at <a href="https://www.wallofwisdom.org" target="_blank" rel="noopener noreferrer">www.wallofwisdom.org</a>
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <div id="extra-wrap">
        <div id="extra" className="clearfix">
          <div className="col first">
            <h3>Contact Info</h3>
            <p><strong>E-mail: </strong>shiva.dhanuskodi@mesonsoft.com</p>
            <p>
              To learn more about us. Please visit <a href="https://shiva-dhanuskodi.us" target="_blank" rel="noopener noreferrer">www.shiva-dhanuskodi.us</a> or <a href="https://www.mesonsoft.com" target="_blank" rel="noopener noreferrer">www.mesonsoft.com</a>
            </p>
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
                <li><a href="https://www.mesonsoft.com" target="_blank" rel="noopener noreferrer">Mesonsoft</a></li>
                <li><a href="https://www.wallofwisdom.org" target="_blank" rel="noopener noreferrer">Wall of Wisdom</a></li>
                <li><a href="https://mysports365.app" target="_blank" rel="noopener noreferrer">My Sports 365</a></li>
                <li><a href="https://myfamilyassistant.ai" target="_blank" rel="noopener noreferrer">My Family Assistant AI</a></li>
                <li><a href="https://squark-browser.ai" target="_blank" rel="noopener noreferrer">sQuark AI Browser</a></li>
                <li><a href="https://www.anishiv.com" target="_blank" rel="noopener noreferrer">AniShiv</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p className="footer-left">
          Copyright &copy; {currentYear} Mesonsoft LLC. All Rights Reserved. &nbsp; &nbsp; &nbsp;
          Published by <a href="http://www.mesonsoft.com/" target="_blank" rel="noopener noreferrer">Mesonsoft LLC</a> &nbsp; &nbsp; &nbsp;
          Views:<span id="display_visitor_number" className="visitor"></span>
        </p>
        <p className="footer-right">
          <a href="/">Home</a> | <a href="#">Sitemap</a> | <a href="#">RSS Feed</a> | <a href="#top" className="back-to-top">Back to Top</a>
        </p>
      </footer>
    </div>
  );
}
