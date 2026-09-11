"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { FileDown, Cpu, Menu, X } from "lucide-react";
import { profileData } from "@/../data/profile";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Honors" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 dark-transition ${
        scrolled ? "glass-panel border-b border-soft" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="#"
            className="flex items-center gap-3 group dark-transition"
          >
            <span className="p-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 transition-colors">
              <Cpu className="w-4 h-4" />
            </span>
            <span className="font-display text-sm">
              {profileData.name.split(" ")[0]}
              <span className="text-accent-primary">/&</span>
              <span className="text-muted text-xs">
                EE.UI &apos;24
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`inline-flex items-center px-3 py-1.5 rounded font-meta text-xs transition-all ${
                    isActive
                      ? "text-accent-primary bg-accent/5"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-accent-primary rounded transition-all hover:bg-accent-hover dark-transition"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>CV.pdf</span>
            </a>

            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-secondary hover:text-primary dark-transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-soft glass-panel animate-in slide-in-from-top">
          <nav className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-4 text-sm font-medium text-primary hover:bg-neutral-100/50 dark:hover:bg-neutral-900/50 dark-transition"
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 py-4 border-t border-soft mt-2">
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 font-bold text-white bg-accent-primary rounded text-sm dark-transition"
              >
                <FileDown className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}