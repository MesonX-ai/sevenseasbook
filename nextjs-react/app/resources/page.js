"use client";

import { useMemo, useState } from "react";
import { chapters } from "../../lib/sevenSeasData";

function getDifficultyLevel(title, channel) {
  const text = `${title} ${channel}`.toLowerCase();

  if (
    text.includes("beginner") ||
    text.includes("introduction") ||
    text.includes("intro") ||
    text.includes("fundamentals") ||
    text.includes("basics")
  ) {
    return "Beginner";
  }

  if (
    text.includes("advanced") ||
    text.includes("production") ||
    text.includes("agent") ||
    text.includes("architecture") ||
    text.includes("scaling") ||
    text.includes("optimization")
  ) {
    return "Advanced";
  }

  return "Intermediate";
}

const allResources = chapters.flatMap((chapter) =>
  (chapter.videoSuggestions || []).map((video) => ({
    ...video,
    chapterId: chapter.id,
    chapterLabel: chapter.navTitle || chapter.title,
    chapterTitle: chapter.title,
    difficulty: getDifficultyLevel(video.title, video.channel),
  })),
);

export default function ResourcesPage() {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("all");
  const [level, setLevel] = useState("all");

  const topicOptions = useMemo(
    () =>
      chapters
        .filter((chapter) => (chapter.videoSuggestions || []).length > 0)
        .map((chapter) => ({
          id: chapter.id,
          label: chapter.navTitle || chapter.title,
        })),
    [],
  );

  const filteredResources = useMemo(() => {
    const search = query.trim().toLowerCase();

    return allResources.filter((item) => {
      const matchesTopic = topic === "all" || item.chapterId === topic;
      const matchesLevel = level === "all" || item.difficulty === level;
      const matchesSearch =
        !search ||
        item.title.toLowerCase().includes(search) ||
        item.channel.toLowerCase().includes(search) ||
        item.chapterTitle.toLowerCase().includes(search);

      return matchesTopic && matchesLevel && matchesSearch;
    });
  }, [query, topic, level]);

  const featuredPlaylists = useMemo(
    () => [
      {
        title: "Neural Networks Foundations",
        description: "Core intuition: perceptrons, backpropagation, and modern deep learning stacks.",
        url: "https://www.youtube.com/results?search_query=neural+networks+playlist",
      },
      {
        title: "LLM Engineering and Prompting",
        description: "Prompt design, evaluation, guardrails, and production LLM app workflows.",
        url: "https://www.youtube.com/results?search_query=LLM+engineering+playlist",
      },
      {
        title: "RAG Systems End to End",
        description: "Chunking, retrieval quality, ranking, vector stores, and grounded generation.",
        url: "https://www.youtube.com/results?search_query=RAG+pipeline+playlist",
      },
      {
        title: "Agentic AI in Production",
        description: "Planning, tool use, memory, orchestration, and reliability patterns.",
        url: "https://www.youtube.com/results?search_query=agentic+ai+playlist",
      },
    ],
    [],
  );

  return (
    <div className="page-shell page-resources">
      <main className="page-main">
        <div className="section-header" style={{ marginBottom: "40px" }}>
          <p className="eyebrow">Resources</p>
          <h1 className="hero-title" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", marginBottom: "12px" }}>
            Learning Resources
          </h1>
          <p className="hero-eyebrow" style={{ marginBottom: "0" }}>
            Curated YouTube suggestions mapped to Seven SEAS pillars
          </p>
        </div>

        {/* Featured playlists */}
        <div className="event-block" style={{ marginBottom: "28px" }}>
          <h3>Featured Learning Paths</h3>
          <div className="chapter-index-grid">
            {featuredPlaylists.map((item) => (
              <div className="chapter-index-card" key={item.title}>
                <h3>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="event-block">
          <h3>Browse Videos</h3>
          <p style={{ marginBottom: "16px" }}>
            Filter by topic, difficulty, or search to find the right learning resource.
          </p>

          <div className="resource-quick-topics" role="group" aria-label="Quick topic filters">
            <button
              key="all"
              type="button"
              onClick={() => {
                setTopic("all");
                setQuery("");
              }}
              style={{
                border: "1px solid var(--line)",
                borderRadius: "999px",
                padding: "7px 12px",
                background: topic === "all" ? "var(--ink)" : "var(--surface)",
                color: topic === "all" ? "#fff" : "var(--ink)",
                cursor: "pointer",
                fontWeight: 500,
                fontSize: "0.8rem",
              }}
            >
              All
            </button>
            {topicOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => {
                  setTopic(option.id);
                  setQuery("");
                }}
                style={{
                  border: "1px solid var(--line)",
                  borderRadius: "999px",
                  padding: "7px 12px",
                  background: topic === option.id ? "var(--ink)" : "var(--surface)",
                  color: topic === option.id ? "#fff" : "var(--ink)",
                  cursor: "pointer",
                  fontWeight: 500,
                  fontSize: "0.8rem",
                }}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 220px 180px",
              gap: "10px",
              margin: "16px 0",
            }}
          >
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by title, channel, or topic"
              aria-label="Search learning resources"
              style={{
                border: "1px solid var(--line)",
                borderRadius: "12px",
                padding: "10px 12px",
                font: "inherit",
                fontSize: "0.9rem",
              }}
            />
            <select
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
              aria-label="Filter by topic"
              style={{
                border: "1px solid var(--line)",
                borderRadius: "12px",
                padding: "10px 12px",
                font: "inherit",
                fontSize: "0.9rem",
              }}
            >
              <option value="all">All Topics</option>
              {topicOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            <select
              value={level}
              onChange={(event) => setLevel(event.target.value)}
              aria-label="Filter by difficulty"
              style={{
                border: "1px solid var(--line)",
                borderRadius: "12px",
                padding: "10px 12px",
                font: "inherit",
                fontSize: "0.9rem",
              }}
            >
              <option value="all">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          {filteredResources.length > 0 ? (
            <div className="chapter-index-grid">
              {filteredResources.map((item, index) => (
                <div className="chapter-index-card" key={`${item.chapterId}-${index}`}>
                  <h3>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  </h3>
                  <p>
                    <em
                      style={{
                        display: "inline-block",
                        borderRadius: "999px",
                        padding: "3px 9px",
                        fontSize: "0.72rem",
                        fontStyle: "normal",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.03em",
                        marginBottom: "8px",
                        color:
                          item.difficulty === "Beginner"
                            ? "#0f5132"
                            : item.difficulty === "Advanced"
                            ? "#7f1d1d"
                            : "#92400e",
                        background:
                          item.difficulty === "Beginner"
                            ? "rgba(34,197,94,0.16)"
                            : item.difficulty === "Advanced"
                            ? "rgba(239,68,68,0.2)"
                            : "rgba(245,158,11,0.2)",
                      }}
                    >
                      {item.difficulty}
                    </em>
                  </p>
                  <p>{item.channel}</p>
                  <p>
                    Related chapter:{" "}
                    <a href={`/chapters/${item.chapterId}`}>{item.chapterLabel}</a>
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p>No matching videos found. Try another keyword or topic.</p>
          )}
        </div>
      </main>
    </div>
  );
}