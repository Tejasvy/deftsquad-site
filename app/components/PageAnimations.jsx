"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function PageAnimations() {
  useGSAP(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    // Track every SplitText we create so the cleanup can revert() them.
    // Without this React's reconciler trips over the SplitText-mutated DOM
    // on Fast Refresh ("Failed to execute removeChild").
    const splits = [];
    let cancelled = false;

    // ---------- HERO HEADLINE: per-char mask reveal ----------
    const heroH1 = document.querySelector(".gsap-hero-h1");
    const runHero = () => {
      if (cancelled) return;
      if (heroH1) {
        const split = new SplitText(heroH1, { type: "chars", mask: "chars" });
        splits.push(split);
        gsap.fromTo(
          split.chars,
          { yPercent: 110 },
          { yPercent: 0, duration: 0.9, ease: "power3.out", stagger: 0.018 }
        );
      }
      // SplitText shifts layout; refresh so downstream triggers use correct positions.
      ScrollTrigger.refresh();
    };
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(runHero);
    } else {
      runHero();
    }

    // ---------- TIER 2: HERO DIVIDER LINE DRAW-IN ----------
    gsap.fromTo(
      ".gsap-divider-line",
      { scaleX: 0, transformOrigin: "left center" },
      { scaleX: 1, duration: 1, ease: "power3.out", delay: 0.3 }
    );

    // ---------- TIER 2: BAUHAUS HERO COMPOSITION ----------
    const bauhaus = gsap.utils.toArray(".gsap-bauhaus-shape");
    if (bauhaus.length) {
      gsap.fromTo(
        bauhaus,
        { scale: 0.3, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.5,
        }
      );
    }

    // ---------- TIER 2: SECTION H2 MASK REVEAL ----------
    // Wait for fonts so line measurements are correct.
    const runH2s = () => {
      if (cancelled) return;
      gsap.utils.toArray(".gsap-section-h2").forEach((h2) => {
        const split = new SplitText(h2, { type: "lines", mask: "lines" });
        splits.push(split);
        gsap.fromTo(
          split.lines,
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: h2,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
      ScrollTrigger.refresh();
    };
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(runH2s);
    } else {
      runH2s();
    }

    // ---------- STATS: block fade-up + count-up on the numeric spans ----------
    const statBlocks = gsap.utils.toArray(".gsap-stat-block");
    if (statBlocks.length) {
      gsap.fromTo(
        statBlocks,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: statBlocks[0],
            start: "top 90%",
            once: true,
          },
        }
      );
    }

    gsap.utils.toArray(".gsap-stat").forEach((el) => {
      const target = parseFloat(el.dataset.target || "0");
      const decimals = parseInt(el.dataset.decimals || "0", 10);
      const suffix = el.dataset.suffix || "";

      // Pre-set to 0 so the real value never flashes before the trigger fires.
      el.textContent = (0).toFixed(decimals) + suffix;

      const obj = { n: 0 };
      gsap.to(obj, {
        n: target,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          once: true,
        },
        onUpdate: () => {
          el.textContent = obj.n.toFixed(decimals) + suffix;
        },
        onComplete: () => {
          el.textContent = target.toFixed(decimals) + suffix;
        },
      });
    });

    // ---------- SERVICES: card stagger ----------
    const cards = gsap.utils.toArray(".gsap-service-card");
    if (cards.length) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: "#services",
            start: "top 75%",
            once: true,
          },
        }
      );
    }

    // ---------- SOLUTIONS: row stagger + number slide-in ----------
    const rows = gsap.utils.toArray(".gsap-solution-row");
    if (rows.length) {
      gsap.fromTo(
        rows,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out",
          stagger: 0.07,
          scrollTrigger: {
            trigger: "#solutions",
            start: "top 75%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".gsap-solution-num",
        { opacity: 0, x: -24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.55,
          ease: "power2.out",
          stagger: 0.07,
          scrollTrigger: {
            trigger: "#solutions",
            start: "top 75%",
            once: true,
          },
        }
      );
    }

    // Single cleanup: cancel pending async work, revert all SplitText instances
    // so React's virtual DOM matches the real DOM on unmount.
    return () => {
      cancelled = true;
      splits.forEach((s) => s.revert());
      splits.length = 0;
    };
  });

  return null;
}
