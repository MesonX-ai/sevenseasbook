export default function EventsPage() {
  const eventCategories = [
    {
      title: "School Visits",
      description:
        "Author visits are a fantastic way to connect teams to enterprise AI architecture. Generally, visits fall into two categories: full-team assemblies or small-group architecture workshops. Either way, they bring the Seven SEAS framework to life.",
      items: [
        "Class Assemblies: Enterprise AI & the Journey to Production",
        "Read Alouds and Architecture Talks",
        "Crafting Your Architecture: Hands-on Workshop",
        "Think it! Build it! - From Concept to System",
        "The Power of Systematic AI",
      ],
    },
    {
      title: "Virtual Author Talks (FREE)",
      description:
        "I am always happy to provide a free 30-minute Zoom visit with groups that have read Seven SEAS.",
      items: ["Just email me to suggest a date & time"],
    },
    {
      title: "In-Person Author Talks",
      description:
        "There's nothing better than being in the same room together - the excitement, the energy - visits are the most fun and engaging. Generally, it is easy for me to travel in New England (and even easier in the Boston area).",
      items: [
        "Download the School Visits PDF for more information about workshops and presentations.",
      ],
    },
    {
      title: "Consulting & Architecture Reviews",
      description:
        "For enterprise teams, Seven SEAS offers architecture reviews and workshops to assess and improve your agentic AI platform, from memory and retrieval to guardrails and observability.",
      items: [
        "Architecture review sessions",
        "RAG and retrieval pipeline audits",
        "Agent safety and guardrail assessments",
        "Observability and evaluation strategy",
      ],
    },
  ];

  return (
    <div className="page-shell page-events">
      <main className="page-main">
        <div className="section-header" style={{ marginBottom: "40px" }}>
          <p className="eyebrow">Events</p>
          <h1 className="hero-title" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", marginBottom: "12px" }}>
            Events, Talks & Workshops
          </h1>
          <p className="hero-eyebrow" style={{ marginBottom: "0" }}>
            Bringing enterprise AI architecture to teams everywhere
          </p>
        </div>

        <div className="events-layout">
          {eventCategories.map((cat) => (
            <section className="event-block" key={cat.title}>
              <h3>{cat.title}</h3>
              <p>{cat.description}</p>
              <ul className="event-list">
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}

          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <a className="btn btn-primary" href="mailto:shiva.dhanuskodi@mesonsoft.com">
              Email to Schedule a Visit
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}