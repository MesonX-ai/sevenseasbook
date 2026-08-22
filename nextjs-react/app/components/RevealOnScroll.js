"use client";

import { useEffect } from "react";

/**
 * Adds scroll-reveal behavior to every major content block on every page.
 * Renders nothing — purely behavioral.
 */
export default function RevealOnScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    if (!("IntersectionObserver" in window)) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const targets = document.querySelectorAll(
      [
        "main section:not(.home-hero)",
        "main .chapter-article",
        "main .about-layout",
        "main .books-layout",
        "main .press-layout",
        "main .events-layout",
        "main .project-list",
        "main .resource-detail",
        "main .fact-card",
      ].join(", ")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((target) => {
      target.classList.add("reveal");
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
