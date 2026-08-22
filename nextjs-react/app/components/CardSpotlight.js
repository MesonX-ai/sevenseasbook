"use client";

import { useEffect } from "react";

/**
 * Cursor-following spotlight for the "Seven Eternal Terms" cards.
 * Writes --spot-x / --spot-y custom properties on each .ai-card,
 * which the CSS uses to position a radial highlight overlay.
 * Only attaches fine-pointer listeners (no-op on touch devices).
 */
export default function CardSpotlight() {
  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const cards = Array.from(document.querySelectorAll(".ai-card"));
    if (cards.length === 0) return undefined;

    const finePointer =
      typeof window.matchMedia === "function" && window.matchMedia("(pointer: fine)").matches;

    const cleanups = [];

    cards.forEach((card) => {
      const onMove = (event) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
        card.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
      };
      const onEnter = () => card.classList.add("is-spotlit");
      const onLeave = () => card.classList.remove("is-spotlit");

      if (finePointer) card.addEventListener("pointermove", onMove, { passive: true });
      card.addEventListener("pointerenter", onEnter);
      card.addEventListener("pointerleave", onLeave);

      cleanups.push(() => {
        if (finePointer) card.removeEventListener("pointermove", onMove);
        card.removeEventListener("pointerenter", onEnter);
        card.removeEventListener("pointerleave", onLeave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
