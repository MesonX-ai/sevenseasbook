import { chapters } from "../../lib/sevenSeasData";
import { chapterGuides } from "../../lib/topicGuides";

export async function generateMetadata() {
  return {
    title: "AI, Made Simple",
    description:
      "Seven short, friendly lessons that explain AI with everyday analogies, hands-on activities, and quick quizzes — written for curious learners of any age.",
    alternates: {
      canonical: "/students",
    },
  };
}

const studentLessons = chapters
  .map((chapter) => ({
    chapter,
    guide: (chapterGuides[chapter.id] || []).find((g) => g.slug === "made-simple"),
  }))
  .filter((row) => Boolean(row.guide));

const lessonFlavors = [
  {
    title: "On your own 🎒",
    text: "Start with Lesson 1 — each one is a 5-minute read with a quick quiz at the end. No coding and no math needed.",
  },
  {
    title: "With your class 🏫",
    text: "Each lesson has a hands-on 'Try It Yourself' activity. Great for pairs, small groups, or a 20-minute lesson block.",
  },
  {
    title: "With your family 🏠",
    text: "Read the analogy together, then run the activity at the dinner table. The quizzes make great conversation starters.",
  },
];

export default function StudentsPage() {
  return (
    <div className="page-shell page-students">
      <main className="page-main">
        <div className="section-header" style={{ marginBottom: "48px" }}>
          <p className="eyebrow">Made Simple</p>
          <h1
            className="hero-title"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", marginBottom: "12px" }}
          >
            AI, Made Simple
          </h1>
          <p className="hero-eyebrow" style={{ marginBottom: "0" }}>
            Seven short lessons about the big ideas behind AI — with analogies, hands-on activities, and quizzes.
          </p>
        </div>

        <section className="section" aria-label="About these lessons">
          <div className="students-intro">
            <p>
              How does a chatbot remember you? How can an AI check its facts before it answers? How do robot
              helpers stay safe? These seven lessons turn big AI ideas into everyday stories you already know —
              school desks, lunch forms, video games, sports film rooms, and playgrounds.
            </p>
            <p>
              <strong>Who is this for?</strong> Curious learners of any age — students, teachers, and parents
              who want a friendly way into AI. Each lesson takes about 5 minutes to read.
            </p>
          </div>
        </section>

        <section className="section section-alt" aria-label="The seven lessons">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">The 7 lessons</p>
              <h2>Pick a lesson and jump in</h2>
              <p>
                Each lesson connects to one chapter of the Seven SEAS book — the professional version is always
                one click away if you want to go deeper.
              </p>
            </div>

            <div className="students-grid">
              {studentLessons.map(({ chapter, guide }, index) => (
                <article className="students-card" key={chapter.id}>
                  <div className="students-card-top">
                    <span className="students-chip students-chip-lesson">Lesson {index + 1}</span>
                    <span className="students-chip">Chapter {chapter.id}</span>
                    <span className="students-chip">{guide.minutes} min</span>
                  </div>
                  <h3>{guide.title}</h3>
                  <p>{guide.intro}</p>
                  <p className="students-card-analogy">
                    <strong>The analogy:</strong> {guide.analogy ? guide.analogy.title : ""}
                  </p>
                  <ul className="students-card-features">
                    <li>💡 One big analogy</li>
                    <li>🛠️ A hands-on activity</li>
                    <li>📝 A 3-question quiz</li>
                  </ul>
                  <p className="students-card-link">
                    <a className="more" href={`/chapters/${chapter.id}/${guide.slug}`}>
                      Start lesson {index + 1} &rarr;
                    </a>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-label="How to use these lessons">
          <div className="reader-band">
            <div className="section-header section-header-with-art">
              <div className="section-art" aria-hidden="true">
                <img src="/images/quote.png" alt="" />
              </div>
              <p className="eyebrow">Ways to learn</p>
              <h2>Three ways to use these lessons</h2>
            </div>

            <div className="insight-grid">
              {lessonFlavors.map((flavor) => (
                <article className="insight-card" key={flavor.title}>
                  <h3>{flavor.title}</h3>
                  <p>{flavor.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band" aria-label="Continue learning">
          <h2>Ready to see the professional version?</h2>
          <p>
            Each easy lesson is the friendly front door to a full Seven SEAS chapter on dependable AI
            systems. Go deeper whenever you are curious.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/chapters/1">
              Explore the chapters
            </a>
            <a className="btn" href="/eternal-terms">
              Discover eternal AI terms
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}