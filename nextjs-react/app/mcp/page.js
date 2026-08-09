export default function McpPage() {
  return (
    <div className="page-shell page-mcp">
      <main className="page-main">
        <div className="section-header" style={{ marginBottom: "40px" }}>
          <p className="eyebrow">MCP</p>
          <h1 className="hero-title" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", marginBottom: "12px" }}>
            MCP Reference
          </h1>
          <p className="hero-eyebrow" style={{ marginBottom: "0" }}>
            Model Context Protocol notes
          </p>
        </div>

        <div className="books-layout">
          <div className="event-block">
            <h3>About MCP</h3>
            <p>
              This page keeps MCP-related migration notes while the complete legacy content
              is being adapted.
            </p>
            <p>
              The Model Context Protocol (MCP) provides a standardized way for AI models to
              interact with external tools, data sources, and services through a consistent
              interface.
            </p>
          </div>

          <div className="event-block">
            <h3>Key Concepts</h3>
            <ul className="event-list">
              <li>Standardized tool invocation across AI platforms</li>
              <li>Structured data access for retrieval-augmented workflows</li>
              <li>Secure, scoped permissions for enterprise deployments</li>
              <li>Observable execution with traceable tool calls</li>
            </ul>
          </div>

          <div style={{ textAlign: "center", marginTop: "24px" }}>
            <a className="btn" href="/">
              Back to Home
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}