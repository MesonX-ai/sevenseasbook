import { associatedSites } from "../../lib/sevenSeasData";

const siteNames = {
  "https://www.mesonsoft.com/": "Mesonsoft",
  "https://www.squark-browser.ai/": "sQuark AI Browser",
  "https://myfamilyassistant.ai/": "My Family Assistant AI",
  "https://www.wallofwisdom.org/": "Wall of Wisdom",
  "https://mysports365.app/": "My Sports 365",
  "https://respofit.com/": "RespoFit",
  "https://www.warriorscricketclub.us/": "Warriors Cricket Club",
  "https://www.sevenseasbook.us/": "Seven SEAS Book",
  "https://myartroom.anishiv.com/": "My Art Room",
  "https://mythoughts.anishiv.com/": "My Thoughts",
  "https://mylab.anishiv.com/": "My Lab",
};

export default function ProjectsPage() {
  return (
    <div className="page-shell page-projects">
      <main className="page-main">
        <div className="section-header" style={{ marginBottom: "40px" }}>
          <p className="eyebrow">Projects</p>
          <h1 className="hero-title" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", marginBottom: "12px" }}>
            Projects & Associated Websites
          </h1>
          <p className="hero-eyebrow" style={{ marginBottom: "0" }}>
            The Seven SEAS ecosystem and related Mesonsoft initiatives
          </p>
        </div>

        <div className="books-layout">
          <p className="lead" style={{ fontFamily: "var(--serif)", fontSize: "1.2rem", lineHeight: "1.7", marginBottom: "24px" }}>
            This page centralizes the Seven SEAS ecosystem and related websites associated with
            Shiva Dhanuskodi and Mesonsoft initiatives.
          </p>

          <ul className="project-list">
            {associatedSites.map((site) => (
              <li key={site}>
                <a href={site} target="_blank" rel="noopener noreferrer">
                  {siteNames[site] || site}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <a
              className="btn btn-primary"
              href="https://anishiv.com/progress_monitor.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              AniShiv Progress Monitor →
            </a>
          </div>

          <div style={{ textAlign: "center", marginTop: "16px" }}>
            <a className="btn" href="/">
              Back to Home
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}