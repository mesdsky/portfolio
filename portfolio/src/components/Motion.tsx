"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, SplitText, Draggable, InertiaPlugin, DrawSVGPlugin);

const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => Array.from(root.querySelectorAll<T>(sel));

// Progressive-enhancement layer: everything is readable without it.
// Declarative hooks: data-hero, data-chars, data-lines, data-reveal, data-stagger, data-words, data-count,
// data-draw, data-stamp, data-speed, data-tilt, data-magnetic, data-drag, data-float, data-cursor,
// data-clock, data-copy, data-progress-*.
export function Motion() {
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = matchMedia("(pointer: fine)").matches;
    const cleanups: (() => void)[] = [];

    // ---------- things that run regardless of motion preference ----------
    const tick = () => {
      const t = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Jakarta" }).format(new Date());
      $$("[data-clock]").forEach((el) => (el.textContent = t));
    };
    tick();
    const clockId = setInterval(tick, 20_000);
    cleanups.push(() => clearInterval(clockId));

    const onCopy = async (e: Event) => {
      const btn = (e.target as HTMLElement).closest<HTMLElement>("[data-copy]");
      if (!btn) return;
      try {
        await navigator.clipboard.writeText(btn.dataset.copy!);
        btn.dataset.tip = "Copied!";
        btn.setAttribute("aria-label", "Email copied");
        gsap.fromTo(btn, { scale: 0.85 }, { scale: 1, duration: 0.5, ease: "back.out(3)" });
        setTimeout(() => btn.setAttribute("aria-label", "Copy email address"), 1800);
        showToast("Email copied to clipboard");
      } catch {
        showToast(btn.dataset.copy!); // clipboard blocked: at least show the address
      }
    };
    document.addEventListener("click", onCopy);
    cleanups.push(() => document.removeEventListener("click", onCopy));

    // Degree progress (computed from today's date)
    const bar = document.querySelector<HTMLElement>("[data-progress-start]");
    let pct = 0;
    if (bar) {
      const a = +new Date(bar.dataset.progressStart!), b = +new Date(bar.dataset.progressEnd!);
      pct = Math.max(0, Math.min(100, ((Date.now() - a) / (b - a)) * 100));
      const label = document.querySelector("[data-progress-label]");
      if (label) label.textContent = `${Math.round(pct)}% through`;
      if (reduced) bar.style.width = `${pct}%`;
    }

    const preloader = document.querySelector<HTMLElement>(".preloader");
    if (reduced) {
      preloader?.setAttribute("hidden", "");
      return () => cleanups.forEach((f) => f());
    }

    // ---------- smooth scroll ----------
    const lenis = new Lenis({ lerp: 0.1, anchors: { offset: -20 } });
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    cleanups.push(() => { gsap.ticker.remove(raf); lenis.destroy(); });

    // Measure + split only after web fonts load, or every trigger position is stale.
    let ctx: gsap.Context | undefined;
    let dead = false;
    lenis.stop();
    document.fonts.ready.then(() => {
      if (dead) return;
      ctx = gsap.context(() => {
        // ---------- preloader → hero intro ----------
        const chars = $$("[data-chars]").map((el) => new SplitText(el, { type: "words,chars", charsClass: "char" }));
        gsap.set(chars.flatMap((s) => s.chars), { yPercent: 115, rotate: 8 });
        gsap.set("[data-hero]", { y: 30, opacity: 0 });

        const intro = gsap.timeline({ onComplete: () => { lenis.start(); preloader?.setAttribute("hidden", ""); } });
        if (preloader) {
          const counter = { v: 0 };
          const count = preloader.querySelector(".preloader-count")!;
          intro
            .to(counter, { v: 100, duration: 1.1, ease: "power2.inOut", onUpdate: () => (count.textContent = `${Math.round(counter.v)}%`) })
            .to(".battery-fill", { width: "100%", duration: 1.1, ease: "power2.inOut" }, 0)
            .to(".preloader-inner", { y: -30, opacity: 0, duration: 0.35, ease: "power2.in" }, "+=0.1")
            .to(preloader, { yPercent: -100, duration: 0.8, ease: "expo.inOut" });
        }
        intro
          .to(chars.flatMap((s) => s.chars), { yPercent: 0, rotate: 0, duration: 1, ease: "expo.out", stagger: 0.035 }, "-=0.35")
          .to("[data-hero]", { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.08 }, "-=0.8");

        // Idle float on hero stickers
        $$("[data-float]").forEach((el, i) =>
          gsap.to(el, { y: i % 2 ? 8 : -8, duration: 2.6 + i * 0.4, ease: "sine.inOut", yoyo: true, repeat: -1 })
        );

        // Hero parallax out
        gsap.to(".hero-grid", {
          yPercent: -12, opacity: 0.2, ease: "none",
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
        });

        // ---------- scroll progress ----------
        gsap.to(".scroll-progress", {
          scaleX: 1, ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
        });

        // ---------- headlines: line-by-line mask reveal ----------
        $$("[data-lines]").forEach((el) => {
          const split = new SplitText(el, { type: "lines", mask: "lines", linesClass: "split-line" });
          gsap.from(split.lines, {
            yPercent: 110, duration: 1.1, ease: "expo.out", stagger: 0.1,
            scrollTrigger: { trigger: el, start: "top 85%" },
          });
        });

        // ---------- generic reveals ----------
        $$("[data-reveal]").forEach((el) =>
          gsap.from(el, { y: 40, opacity: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } })
        );
        $$("[data-stagger]").forEach((el) =>
          gsap.from(el.children, {
            y: 50, opacity: 0, duration: 0.8, ease: "power3.out", stagger: 0.1,
            scrollTrigger: { trigger: el, start: "top 85%" },
          })
        );

        // ---------- manifesto: words ink in as you read ----------
        $$("[data-words]").forEach((el) => {
          const split = new SplitText(el, { type: "words", wordsClass: "word", smartWrap: true });
          gsap.fromTo(split.words, { opacity: 0.14 }, {
            opacity: 1, ease: "none", stagger: 0.1,
            scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: true },
          });
        });

        // ---------- counters ----------
        $$("[data-count]").forEach((el) => {
          const end = parseFloat(el.dataset.count!);
          const dec = +(el.dataset.decimals || 0);
          const o = { v: 0 };
          el.textContent = (0).toFixed(dec);
          gsap.to(o, {
            v: end, duration: end > 1000 ? 1.6 : 1.4, ease: "power3.out",
            onUpdate: () => (el.textContent = o.v.toFixed(dec)),
            scrollTrigger: { trigger: el, start: "top 90%" },
          });
        });

        // ---------- sparklines draw ----------
        $$("[data-draw]").forEach((el) =>
          gsap.from(el, { drawSVG: "0%", duration: 1.4, ease: "power2.inOut", scrollTrigger: { trigger: el, start: "top 90%" } })
        );

        // ---------- stamps ----------
        $$("[data-stamp]").forEach((el, i) =>
          gsap.from(el, {
            scale: 1.5, opacity: 0, rotate: "-=12", duration: 0.7, ease: "back.out(2.2)", delay: (i % 3) * 0.12,
            scrollTrigger: { trigger: el, start: "top 85%" },
          })
        );

        // ---------- parallax ----------
        $$("[data-speed]").forEach((el) =>
          gsap.to(el, {
            y: () => parseFloat(el.dataset.speed!) * innerHeight, ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true, invalidateOnRefresh: true },
          })
        );

        // ---------- timeline rail + lit dots ----------
        const rail = document.querySelector(".timeline");
        if (rail) {
          gsap.to(".timeline-rail > div", {
            scaleY: 1, ease: "none",
            scrollTrigger: { trigger: rail, start: "top 60%", end: "bottom 60%", scrub: true },
          });
          $$(".role").forEach((r) =>
            ScrollTrigger.create({ trigger: r, start: "top 60%", onToggle: (s) => r.classList.toggle("is-lit", s.isActive || s.progress === 1), end: "max" })
          );
        }

        // ---------- degree progress ----------
        if (bar) gsap.to(bar, { width: `${pct}%`, duration: 1.6, ease: "power3.inOut", scrollTrigger: { trigger: bar, start: "top 90%" } });

        // ---------- marquee: loops forever, scroll velocity pushes it ----------
        const track = document.querySelector<HTMLElement>(".marquee-track");
        if (track) {
          const loop = gsap.to(track, { xPercent: -50, duration: 38, ease: "none", repeat: -1 });
          ScrollTrigger.create({
            onUpdate: (self) => {
              const v = self.getVelocity() / 300;
              gsap.to(loop, { timeScale: gsap.utils.clamp(-6, 6, (self.direction || 1) * (1 + Math.abs(v))), duration: 0.2, overwrite: true });
              gsap.to(loop, { timeScale: self.direction || 1, duration: 1.2, delay: 0.2, overwrite: false });
            },
          });
        }
      });
      // Text splitting above shifts layout after earlier triggers measured; re-measure once.
      ScrollTrigger.refresh();
      // Deep links (/#work): the browser jumped before fonts swapped, so land again on the real spot.
      if (location.hash) lenis.scrollTo(location.hash, { immediate: true, force: true, offset: -20 });
    });
    cleanups.push(() => { dead = true; ctx?.revert(); });

    // ---------- pointer-only niceties ----------
    if (fine) {
      // Cursor ring
      const ring = document.querySelector<HTMLElement>(".cursor-ring")!;
      const xTo = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3" });
      const yTo = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3" });
      const move = (e: PointerEvent) => {
        xTo(e.clientX); yTo(e.clientY);
        ring.classList.add("is-active");
        const t = (e.target as HTMLElement).closest<HTMLElement>("[data-cursor], a, button, input, [data-drag]");
        const label = t?.dataset.cursor || (t?.hasAttribute("data-drag") ? "Drag" : "");
        ring.textContent = label;
        ring.classList.toggle("is-label", !!label);
        ring.classList.toggle("is-hover", !!t && !label);
      };
      const leave = () => ring.classList.remove("is-active");
      addEventListener("pointermove", move);
      document.documentElement.addEventListener("pointerleave", leave);
      cleanups.push(() => { removeEventListener("pointermove", move); document.documentElement.removeEventListener("pointerleave", leave); });

      // Magnetic buttons
      $$("[data-magnetic]").forEach((el) => {
        const mx = gsap.quickTo(el, "x", { duration: 0.5, ease: "elastic.out(1, 0.4)" });
        const my = gsap.quickTo(el, "y", { duration: 0.5, ease: "elastic.out(1, 0.4)" });
        const m = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          mx((e.clientX - r.left - r.width / 2) * 0.3);
          my((e.clientY - r.top - r.height / 2) * 0.4);
        };
        const l = () => { mx(0); my(0); };
        el.addEventListener("pointermove", m);
        el.addEventListener("pointerleave", l);
        cleanups.push(() => { el.removeEventListener("pointermove", m); el.removeEventListener("pointerleave", l); });
      });

      // 3D tilt
      $$("[data-tilt]").forEach((el) => {
        const rx = gsap.quickTo(el, "rotationX", { duration: 0.6, ease: "power3" });
        const ry = gsap.quickTo(el, "rotationY", { duration: 0.6, ease: "power3" });
        gsap.set(el, { transformPerspective: 900 });
        const m = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          ry(((e.clientX - r.left) / r.width - 0.5) * 14);
          rx(-((e.clientY - r.top) / r.height - 0.5) * 14);
        };
        const l = () => { rx(0); ry(0); };
        el.addEventListener("pointermove", m);
        el.addEventListener("pointerleave", l);
        cleanups.push(() => { el.removeEventListener("pointermove", m); el.removeEventListener("pointerleave", l); });
      });

      // Draggable toolkit stickers
      const desk = document.querySelector("[data-desk]");
      if (desk) {
        const drags = Draggable.create($$("[data-drag]"), {
          bounds: desk, inertia: true, zIndexBoost: true,
          onPress() { gsap.to(this.target, { scale: 1.08, rotate: gsap.utils.random(-8, 8), duration: 0.25 }); },
          onRelease() { gsap.to(this.target, { scale: 1, duration: 0.4, ease: "back.out(3)" }); },
        });
        cleanups.push(() => drags.forEach((d) => d.kill()));
      }
    }

    return () => cleanups.forEach((f) => f());
  }, []);

  return null;
}

function showToast(msg: string) {
  const t = document.createElement("div");
  t.setAttribute("role", "status");
  t.textContent = msg;
  Object.assign(t.style, {
    position: "fixed", left: "50%", bottom: "1.5rem", translate: "-50% 0", zIndex: "95",
    padding: ".7rem 1.2rem", background: "var(--ink)", color: "var(--bg-primary)",
    borderRadius: "999px", fontFamily: "var(--f-condensed)", fontWeight: "700",
    letterSpacing: ".1em", textTransform: "uppercase", fontSize: ".85rem",
  });
  document.body.appendChild(t);
  gsap.fromTo(t, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: "back.out(2)" });
  gsap.to(t, { y: 20, opacity: 0, delay: 1.8, duration: 0.3, onComplete: () => t.remove() });
}
