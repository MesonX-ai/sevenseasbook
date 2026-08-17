"use client";

import { useState } from "react";
import { acronymSections, chapters } from "../lib/sevenSeasData";

const frameworkThemes = [
  {
    title: "Clarity over hype",
    description:
      "Translate AI ambition into an architecture people can actually build, evaluate, and defend.",
  },
  {
    title: "Reliability over novelty",
    description:
      "Design systems that survive tool failures, ambiguity, policy constraints, and real-world pressure.",
  },
  {
    title: "Adoption over experimentation",
    description:
      "Give teams a shared operating model for memory, retrieval, orchestration, and rollout.",
  },
];

const readerTakeaways = [
  "A practical language for discussing enterprise AI without oversimplifying the complexity.",
  "Implementation patterns for grounding, tool use, planning, memory, deployment, and observability.",
  "Real-world examples for product teams, architects, founders, and technical leaders.",
];

const audienceGroups = [
  "AI architects mapping systems from prototype to production",
  "Product leaders building dependable copilots and agents",
  "Engineering teams seeking clear technical architecture patterns",
];

const featuredInsights = [
  {
    title: "The architecture behind reliable AI agents",
    blurb:
      "A practical look at how memory, tool contracts, and execution loops make agentic systems dependable in production.",
    href: "/chapters/1",
  },
  {
    title: "Why grounding matters in enterprise workflows",
    blurb:
      "How retrieval-based evidence, policy constraints, and citation discipline improve trust in high-stakes AI applications.",
    href: "/chapters/4",
  },
  {
    title: "From prototype to operating system",
    blurb:
      "What it takes to turn early AI experiments into trusted platforms that can scale across teams and use cases.",
    href: "/resources",
  },
];

export default function HomePage() {
  const [hasVideoSource, setHasVideoSource] = useState(true);

  return (
    <div className="page-shell page-home">
      <main className="page-main-wide">
        {/* ===== HERO SECTION ===== */}
        <section className="home-hero" aria-label="Seven SEAS hero">
          <div className="hero-bg" aria-hidden="true">
            <img src="/images/hero-bg.png" alt="" />
          </div>
          {hasVideoSource ? (
            <div className="hero-video-wrap" aria-hidden="true">
              <video
                className="hero-video"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/images/hero-bg.png"
                onError={() => setHasVideoSource(false)}
              >
                <source src="/videos/clouds.mp4" type="video/mp4" />
              </video>
            </div>
          ) : null}
          <div className="hero-overlay" aria-hidden="true"></div>

          <div className="hero-content">
            <h1 className="hero-title">
              Enterprise AI Architecture for Dependable Agentic Systems
            </h1>
            <p className="hero-subcopy">
              Seven SEAS is a practical framework for designing enterprise AI platforms with memory,
              retrieval, orchestration, policy controls, and measurable quality for production-ready systems.
              It helps teams move from flashy demos to durable, explainable, and governable AI operations.
            </p>
            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href="/docs/SevenSEAS.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Architecture PDF
              </a>
              <a className="btn" href="/chapters/1">
                Explore the 7 Pillars
              </a>
            </div>
          </div>
        </section>

        {/* ===== 7 PILLARS ===== */}
        <section className="featured-pillars" aria-label="Seven key technical pillars">
          <div className="section-header section-header-with-art">
            <div className="section-art" aria-hidden="true">
              <img src="/images/7_seas.png" alt="" />
            </div>
            <p className="eyebrow">AI Industry</p>
            <h2>Seven Eternal Terms in AI Industry</h2>
            <p>
              These seven concepts define how modern AI systems are built, connected, and scaled
              across the industry.
            </p>
          </div>

          <div className="ai-terms">
            <article className="ai-card">
              <div className="ai-card-media">
                <img src="/images/A2A.jpeg" alt="Agentic AI (A2A)" />
              </div>
              <div className="ai-card-body">
                <h3>Agentic AI (A2A)</h3>
                <p>Agent-to-Agent systems let autonomous AI agents plan, delegate, and coordinate tasks across tools and services — turning a single model into a team that gets real work done.</p>
              </div>
            </article>

            <div className="ai-grid-2">
              <article className="ai-card">
                <div className="ai-card-media">
                  <img src="/images/LRM.jpeg" alt="Large Reasoning Models (LLMs)" />
                </div>
                <div className="ai-card-body">
                  <h3>Large Reasoning Models (LLMs)</h3>
                  <p>Reasoning-tuned foundation models go beyond next-token prediction, applying step-by-step chain-of-thought, planning, and self-correction to solve complex problems.</p>
                </div>
              </article>
              <article className="ai-card">
                <div className="ai-card-media">
                  <img src="/images/RAG.jpeg" alt="Retrieval Augmented Generation (RAG)" />
                </div>
                <div className="ai-card-body">
                  <h3>Retrieval Augmented Generation (RAG)</h3>
                  <p>RAG grounds generation in trusted external knowledge, retrieving relevant documents and augmenting responses with verified context to reduce hallucination.</p>
                </div>
              </article>
            </div>

            <article className="ai-card">
              <div className="ai-card-media ai-card-media-dual">
                <img src="/images/VD1.jpeg" alt="Vector database" />
                <img src="/images/VD2.jpeg" alt="Embedding models" />
              </div>
              <div className="ai-card-body">
                <h3>Vector Databases (Embedding Models)</h3>
                <p>Embedding models turn text, images, and code into vectors that vector databases index and search by semantic similarity — powering retrieval, memory, and long-term context.</p>
              </div>
            </article>

            <div className="ai-grid-2">
              <article className="ai-card">
                <div className="ai-card-media">
                  <img src="/images/MCP.jpeg" alt="Model Context Protocol (MCP)" />
                </div>
                <div className="ai-card-body">
                  <h3>Model Context Protocol (MCP)</h3>
                  <p>MCP is an open standard that connects AI models to tools, data sources, and external systems through one uniform interface, replacing brittle custom integrations.</p>
                </div>
              </article>
              <article className="ai-card">
                <div className="ai-card-media">
                  <img src="/images/MOE.jpeg" alt="Mixture of Experts (MoE)" />
                </div>
                <div className="ai-card-body">
                  <h3>Mixture of Experts (MoE)</h3>
                  <p>MoE activates specialized sub-networks per input instead of the full model, delivering greater scale and efficiency at lower inference cost.</p>
                </div>
              </article>
            </div>

            <article className="ai-card">
              <div className="ai-card-media">
                <img src="/images/ASI.jpeg" alt="Artificial Super Intelligence (ASI)" />
              </div>
              <div className="ai-card-body">
                <h3>Artificial Super Intelligence (ASI)</h3>
                <p>ASI describes a hypothetical future AI that surpasses human intelligence across every domain — the aspirational frontier these seven terms are building toward.</p>
              </div>
            </article>
          </div>
        </section>

        {/* ===== ACRONYM ===== */}
        <section className="section section-alt" aria-label="Seven SEAS acronym breakdown">
          <div className="acronym-band">
            <div className="section-header section-header-with-art">
              <div className="section-art" aria-hidden="true">
                <img src="/images/ss_symbol.png" alt="" />
              </div>
              <p className="eyebrow">What is Seven SEAS?</p>
              <h2>Structural Embeddings, Expanded Retrieval, Agentic Execution, Scalable Deployment</h2>
            </div>
            <div className="acronym-grid">
              {acronymSections.map((section) => (
                <article className="acronym-card" key={`${section.letter}-${section.title}`}>
                  <span className="acronym-letter">{section.letter}</span>
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHY IT MATTERS ===== */}
        <section className="section" aria-label="Why the framework matters">
          <div className="insight-band">
            <div className="section-header section-header-with-art">
              <div className="section-art" aria-hidden="true">
                <img src="/images/content-bg.png" alt="" />
              </div>
              <p className="eyebrow">Why it matters</p>
              <h2>Built for leaders, architects, and builders</h2>
              <p>
                The most useful AI systems are not the loudest ones. They are the ones that stay coherent,
                auditable, and resilient when the work becomes real.
              </p>
            </div>

            <div className="insight-grid">
              {frameworkThemes.map((theme) => (
                <article className="insight-card" key={theme.title}>
                  <h3>{theme.title}</h3>
                  <p>{theme.description}</p>
                </article>
              ))}
            </div>

            <div className="insight-quote">
              <p>
                “The future of enterprise AI will be shaped by teams that can design systems with discipline,
                memory, and operational care.”
              </p>
              <span>— Seven SEAS</span>
            </div>
          </div>
        </section>

        {/* ===== SYSTEM FLOW ===== */}
        <section className="section section-alt" aria-label="Seven SEAS system flow">
          <div className="journey-strip">
            <div className="section-header section-header-with-art">
              <div className="section-art" aria-hidden="true">
                <img src="/images/content-bg.png" alt="" />
              </div>
              <p className="eyebrow">System Flow</p>
              <h2>From Data Input to Production AI</h2>
            </div>
            <div className="system-flow">
              <span>[ DATA INPUT ]</span>
              <i>&rarr;</i>
              <span>Structural Embeddings</span>
              <i>&rarr;</i>
              <span>Expanded Retrieval</span>
              <i>&rarr;</i>
              <span>Agentic Execution</span>
              <i>&rarr;</i>
              <span>Scalable Deployment</span>
              <i>&rarr;</i>
              <span>[ PRODUCTION AI ]</span>
            </div>

            <div style={{ textAlign: "center", marginTop: "28px" }}>
              <a
                className="btn btn-outline-accent"
                href="/docs/SevenSEAS.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download PDF Version
              </a>
            </div>
          </div>
        </section>

        {/* ===== READER TAKEAWAYS ===== */}
        <section className="section" aria-label="What readers will learn">
          <div className="reader-band">
            <div className="section-header section-header-with-art">
              <div className="section-art" aria-hidden="true">
                <img src="/images/quote.png" alt="" />
              </div>
              <p className="eyebrow">What readers will find</p>
              <h2>More than a framework — a practical playbook</h2>
              <p>
                This work is written for people who want to build AI systems that keep working long after the
                first demo is over.
              </p>
            </div>

            <div className="reader-columns">
              <div className="reader-stack">
                <h3>Key takeaways</h3>
                <ul>
                  {readerTakeaways.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="reader-stack">
                <h3>Built for</h3>
                <ul>
                  {audienceGroups.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STORYLINE ===== */}
        <section className="storyline-band" aria-label="Architecture storyline">
          <div className="section-header section-header-with-art">
            <div className="section-art" aria-hidden="true">
              <img src="/images/quote.png" alt="" />
            </div>
            <p className="eyebrow">Architecture Storyline</p>
            <h2>Each Pillar Compounds the Next</h2>
            <p>
              Creating an end-to-end enterprise AI operating model from reasoning through
              production operations.
            </p>
          </div>
          <ol className="storyline-list">
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
        </section>

        {/* ===== INSIGHTS ===== */}
        <section className="section" aria-label="Featured insights">
          <div className="insight-band">
            <div className="section-header section-header-with-art">
              <div className="section-art" aria-hidden="true">
                <img src="/images/content-bg.png" alt="" />
              </div>
              <p className="eyebrow">Featured insights</p>
              <h2>Thoughtful essays for builders and decision-makers</h2>
              <p>
                These pieces explore the practical side of AI architecture, from stateful agent design to the
                operating habits that keep systems trustworthy over time.
              </p>
            </div>

            <div className="insight-grid">
              {featuredInsights.map((item) => (
                <article className="insight-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.blurb}</p>
                  <a className="more" href={item.href}>
                    Read more &rarr;
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== NEWSLETTER ===== */}
        <section className="section section-alt" aria-label="Newsletter signup">
          <div className="newsletter-band">
            <div className="section-header section-header-with-art">
              <div className="section-art" aria-hidden="true">
                <img src="/images/quote.png" alt="" />
              </div>
              <p className="eyebrow">Stay close to the work</p>
              <h2>Join the Seven SEAS newsletter</h2>
              <p>
                Get practical essays, architecture notes, and launch updates for enterprise AI systems that are
                grounded in real implementation.
              </p>
            </div>

            <form className="newsletter-form" action="https://formspree.io/f/your-form-id" method="POST">
              <input type="email" name="email" placeholder="Enter your email" aria-label="Email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="cta-band" aria-label="Call to action">
          <h2>Ready to build dependable enterprise AI?</h2>
          <p>
            Explore the complete Seven SEAS architecture framework with practical implementation
            guidance for memory, retrieval, orchestration, safety, and observability.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/chapters/1">
              Start with Chapter 1
            </a>
            <a
              className="btn"
              href="/docs/SevenSEAS.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download the PDF
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}