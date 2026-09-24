"use client";

import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, Download } from "lucide-react";

const links = [
  ["about", "About"],
  ["work", "Work"],
  ["experience", "Experience"],
  ["recognition", "Recognition"],
  ["education", "Education"],
  ["contact", "Contact"],
] as const;

export function Nav() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // eslint-disable-next-line react-hooks/set-state-in-effect -- standard next-themes mount guard
  useEffect(() => setMounted(true), []);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 200 && y > last);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  // Circular ink reveal from the toggle button (View Transitions API, falls back to instant swap)
  const toggleTheme = (e: React.MouseEvent) => {
    const next = isDark ? "light" : "dark";
    const doc = document as Document & { startViewTransition?: (cb: () => void) => { ready: Promise<void> } };
    if (!doc.startViewTransition || matchMedia("(prefers-reduced-motion: reduce)").matches) return setTheme(next);
    const { clientX: x, clientY: y } = e;
    const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    doc
      .startViewTransition(() => {
        flushSync(() => setTheme(next));
        document.documentElement.classList.toggle("dark", next === "dark");
        document.documentElement.style.colorScheme = next;
      })
      .ready.then(() =>
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
          { duration: 650, easing: "cubic-bezier(0.22, 0.61, 0.36, 1)", pseudoElement: "::view-transition-new(root)" }
        )
      );
  };

  return (
    <>
      <header className={`site-nav ${hidden && !open ? "is-hidden" : ""}`}>
        <nav className="nav-bar" aria-label="Primary">
          <a href="#top" className="nav-logo" onClick={() => setOpen(false)}>
            Nabil<span>.</span>
          </a>
          <div className="nav-links">
            {links.map(([id, label]) => (
              <a key={id} href={`#${id}`} className={`nav-link ${active === id ? "is-active" : ""}`}>
                {label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a href="/cv.pdf" target="_blank" rel="noreferrer" className="btn btn-solid btn-sm nav-cv">
              CV <Download size={14} />
            </a>
            <button
              type="button"
              className="icon-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
              title={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
              {mounted ? isDark ? <Sun size={18} /> : <Moon size={18} /> : <span className="block h-[18px] w-[18px]" />}
            </button>
            <button
              type="button"
              className="icon-btn menu-btn"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        {links.map(([id, label], i) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            <small>0{i + 1}</small>
            {label}
          </a>
        ))}
      </div>
    </>
  );
}
