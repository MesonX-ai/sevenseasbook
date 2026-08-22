"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "sevenseas-ocean-theme";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
  );
}

export default function OceanThemeToggle() {
  const [theme, setTheme] = useState("sunny");

  useEffect(() => {
    let stored = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      stored = null;
    }
    if (stored === "midnight") {
      setTheme("midnight");
      document.documentElement.removeAttribute("data-ocean-theme");
    } else {
      // Default (and any unknown/stored value) is sunny.
      setTheme("sunny");
      document.documentElement.setAttribute("data-ocean-theme", "sunny");
    }
  }, []);

  const isSunny = theme === "sunny";

  const toggleTheme = () => {
    const next = isSunny ? "midnight" : "sunny";
    setTheme(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      // Private browsing etc. — theme still switches for this visit.
    }
    if (next === "sunny") {
      document.documentElement.setAttribute("data-ocean-theme", "sunny");
    } else {
      document.documentElement.removeAttribute("data-ocean-theme");
    }
  };

  return (
    <button
      type="button"
      className="ocean-theme-toggle"
      role="switch"
      aria-checked={isSunny}
      aria-label={isSunny ? "Switch to midnight ocean theme" : "Switch to sunny ocean theme"}
      title={isSunny ? "Switch to midnight ocean" : "Switch to sunny ocean"}
      onClick={toggleTheme}
    >
      <span className={`ot-option ot-sun ${isSunny ? "is-active" : ""}`}>
        <SunIcon />
      </span>
      <span className={`ot-option ot-moon ${!isSunny ? "is-active" : ""}`}>
        <MoonIcon />
      </span>
    </button>
  );
}
