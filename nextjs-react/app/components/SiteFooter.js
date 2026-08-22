const currentYear = new Date().getFullYear();

export default function SiteFooter() {
  return (
    <div id="site-footer-wrap">
      <div className="footer-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" focusable="false">
          <path d="M0,52 C180,92 380,10 720,44 C1020,74 1240,14 1440,50 L1440,90 L0,90 Z" />
        </svg>
      </div>
      <footer id="site-footer">
        <div className="footer-col">
          <h4>Seven SEAS</h4>
          <p>
            Solutions for Enterprise Applications & Services. A practical architecture
            model for enterprise-grade AI systems.
          </p>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/chapters/1">Chapters</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/resources">Learning Resources</a></li>
            <li><a href="/press">Press</a></li>
            <li><a href="/events">Events</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Author</h4>
          <ul>
            <li><a href="https://shiva-dhanuskodi.us" target="_blank" rel="noopener noreferrer">Shiva R Dhanuskodi</a></li>
            <li><a href="https://www.mesonsoft.com" target="_blank" rel="noopener noreferrer">Mesonsoft</a></li>
            <li><a href="https://www.wallofwisdom.org" target="_blank" rel="noopener noreferrer">Wall of Wisdom</a></li>
            <li><a href="https://squark-browser.ai" target="_blank" rel="noopener noreferrer">sQuark AI Browser</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>
            <strong>E-mail:</strong>{" "}
            <a href="mailto:shiva.dhanuskodi@mesonsoft.com">shiva.dhanuskodi@mesonsoft.com</a>
          </p>
          <p>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </a>
          </p>
          <p>
            <a href="/docs/SevenSEAS.pdf" target="_blank" rel="noopener noreferrer">
              Download PDF
            </a>
          </p>
        </div>
      </footer>
      <div className="footer-legal">
        <p>&copy; {currentYear} Seven SEAS. All rights reserved. Published by Mesonsoft LLC.</p>
      </div>
    </div>
  );
}