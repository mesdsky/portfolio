"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { FileDown, Menu, X, Cpu } from "lucide-react";
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
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-stone-950/90 backdrop-blur-md border-b-2 border-amber-200/80 dark:border-amber-900/80 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Monogram */}
        <Link
          href="#"
          className="group flex items-center gap-2 text-stone-900 dark:text-stone-100 font-bold tracking-tight text-sm sm:text-base focus:outline-none"
        >
          <span className="p-1.5 rounded-xl bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300 border-2 border-amber-200 dark:border-amber-800/60 group-hover:scale-110 transition-transform">
            <Cpu className="w-4 h-4" />
          </span>
          <span className="flex items-center">
            <span>NHZ</span>
            <span className="text-amber-600 dark:text-amber-400 mx-1">/</span>
            <span className="text-stone-500 dark:text-stone-400 text-xs font-normal hidden sm:inline">
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
                className={`px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all ${
                  isActive
                    ? "text-amber-800 dark:text-amber-200 bg-amber-100 dark:bg-amber-900/50 font-semibold"
                    : "text-stone-600 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-300 hover:bg-amber-50/70 dark:hover:bg-amber-950/30"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Actions (Resume, Theme Toggle, Mobile Menu) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-full bg-amber-700 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-500 text-white shadow-md transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>CV.pdf</span>
          </a>

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl border-2 border-amber-200 dark:border-amber-800 text-stone-600 dark:text-stone-400 hover:bg-amber-50 dark:hover:bg-amber-950/30 focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b-2 border-amber-200 dark:border-amber-800 bg-white dark:bg-stone-950 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-stone-700 dark:text-stone-300 hover:bg-amber-50 dark:hover:bg-amber-950/30 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t-2 border-amber-100 dark:border-amber-900">
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium rounded-xl bg-amber-700 dark:bg-amber-600 text-white hover:bg-amber-600 dark:hover:bg-amber-500 transition-colors"
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
