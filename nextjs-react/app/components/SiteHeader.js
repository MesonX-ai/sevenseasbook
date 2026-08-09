"use client";

import { usePathname } from "next/navigation";
import { chapters } from "../../lib/sevenSeasData";

const chapterNav = chapters.map((chapter) => ({
  id: chapter.id,
  label: chapter.navTitle || chapter.title,
}));

export default function SiteHeader() {
  const pathname = usePathname();

  const isCurrent = (key) => {
    if (key === "home") return pathname === "/";
    if (key === "about") return pathname === "/about";
    if (key === "books") return pathname === "/books";
    if (key === "news") return pathname === "/news";
    if (key === "press") return pathname === "/press";
    if (key === "events") return pathname === "/events";
    if (key === "projects") return pathname === "/projects";
    if (key === "resources") return pathname === "/resources";
    if (key.startsWith("chapter-")) {
      return pathname === `/chapters/${key.replace("chapter-", "")}`;
    }
    return false;
  };

  return (
    <div id="site-header-wrap">
      <header id="site-header">
        <div className="logo-block">
          <a href="/" className="logo-link">
            <span className="logo-mark">
              SEVEN
              <span className="logo-lighthouse-wrap" aria-hidden="true">
                <img src="/images/lighthouse.png" alt="" className="logo-lighthouse" />
                <span className="logo-light-flash" />
              </span>
              <span className="logo-gradient"> SEAS</span>
            </span>
          </a>
          <span className="logo-tagline">Solutions for Enterprise Applications & Services</span>
        </div>

        {/* Animated gradient underline */}
        <div className="header-rainbow-line" aria-hidden="true"></div>

        <nav className="main-nav" aria-label="Main navigation">
          <ul>
            <li className={isCurrent("home") ? "is-current" : ""}>
              <a href="/">
                <span className="nav-dot" aria-hidden="true"></span>Home
              </a>
            </li>
            <li className={isCurrent("about") ? "is-current" : ""}>
              <a href="/about">
                <span className="nav-dot" aria-hidden="true"></span>About
              </a>
            </li>
            <li className={isCurrent("books") ? "is-current" : ""}>
              <a href="/books">
                <span className="nav-dot" aria-hidden="true"></span>Books
              </a>
            </li>
            <li className={isCurrent("news") ? "is-current" : ""}>
              <a href="/news">
                <span className="nav-dot" aria-hidden="true"></span>News
              </a>
            </li>
            <li className={isCurrent("press") ? "is-current" : ""}>
              <a href="/press">
                <span className="nav-dot" aria-hidden="true"></span>Press
              </a>
            </li>
            <li className={isCurrent("events") ? "is-current" : ""}>
              <a href="/events">
                <span className="nav-dot" aria-hidden="true"></span>Events
              </a>
            </li>
            <li className={isCurrent("projects") ? "is-current" : ""}>
              <a href="/projects">
                <span className="nav-dot" aria-hidden="true"></span>Projects
              </a>
            </li>
            <li className={isCurrent("resources") ? "is-current" : ""}>
              <a href="/resources">
                <span className="nav-dot" aria-hidden="true"></span>Resources
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-chapter-links">
          {chapterNav.map((item) => (
            <a
              key={item.id}
              href={`/chapters/${item.id}`}
              className={isCurrent(`chapter-${item.id}`) ? "is-current" : ""}
            >
              {item.id}. {item.label}
            </a>
          ))}
        </div>
      </header>
    </div>
  );
}
