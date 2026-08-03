export default function StyleDemoPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="page-shell page-style-demo">
      <div id="header-wrap"><header><hgroup><h1><a href="/">Seven SEAS</a></h1><h3>Solutions for Enterprise Applications &amp; Services</h3></hgroup>
        <nav><ul><li><a href="/">Home</a><span></span></li><li><a href="/chapters/1">State &amp; Memory</a><span></span></li><li><a href="/chapters/2">Tool Calls</a><span></span></li><li><a href="/chapters/3">Execution Loop</a><span></span></li><li><a href="/chapters/4">RAG Grounding</a><span></span></li><li><a href="/chapters/5">Multi-Agent</a><span></span></li><li><a href="/chapters/6">Guardrails</a><span></span></li><li><a href="/chapters/7">Observability</a><span></span></li></ul></nav>
      </header></div>

      <div id="content-wrap"><div id="content" className="clearfix"><div id="main"><article className="post"><div className="primary">
        <h2>Style Demo (Legacy Compatibility)</h2>
        <p>The original style demonstration page is preserved and available as a legacy resource.</p>
        <p><a className="more" href="/">Back to home &raquo;</a></p>
      </div></article></div></div></div>

      <div id="extra-wrap"><div id="extra" className="clearfix">
        <div className="col first"><h3>Contact Info</h3><p><strong>E-mail: </strong>shiva.dhanuskodi@mesonsoft.com</p></div>
        <div className="col"><h3>Site Links</h3><div className="footer-list"><ul><li><a href="/">Home</a></li><li><a href="/projects">Projects</a></li><li><a href="/style-demo">Style Demo</a></li><li><a href="/mcp">MCP Notes</a></li></ul></div></div>
        <div className="col"><h3>Other Websites</h3><div className="footer-list"><ul><li><a href="https://www.mesonsoft.com" target="_blank" rel="noopener noreferrer">Mesonsoft</a></li><li><a href="https://www.wallofwisdom.org" target="_blank" rel="noopener noreferrer">Wall of Wisdom</a></li></ul></div></div>
      </div></div>

      <footer><p className="footer-left">Copyright &copy; {currentYear} Mesonsoft LLC. All Rights Reserved.</p><p className="footer-right"><a href="/">Home</a> | <a href="#top" className="back-to-top">Back to Top</a></p></footer>
    </div>
  );
}
