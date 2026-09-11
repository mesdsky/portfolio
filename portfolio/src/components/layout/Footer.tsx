"use client";

import React, { useState, useEffect } from "react";
import { profileData } from "@/../data/profile";
import { Cpu, Link, Globe, Route, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(`${new Intl.DateTimeFormat("en-GB", options).format(now)} WIB (UTC+7)`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-soft bg-neutral-50 dark:bg-neutral-950/80 dark-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-accent/5 text-accent-primary flex items-center justify-center">
                <Cpu className="w-4 h-4" />
              </span>
              <span className="font-display text-lg text-primary">
                {profileData.name}
              </span>
            </div>
            <p className="text-sm text-secondary max-w-sm leading-relaxed">
              Electrical Engineering undergraduate focused on electronics, embedded systems,
              IoT, AI, and renewable energy innovation.
            </p>
            <div className="flex items-center gap-2 font-meta text-xs text-muted">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Depok / Jakarta, Indonesia</span>
              {time && <span>• {time}</span>}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-meta text-xs font-bold uppercase tracking-wide text-muted mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {["About", "Education", "Experience", "Projects", "Skills", "Honors"].map((navItem) => (
                <li key={navItem}>
                  <a
                    href={`#${navItem.toLowerCase().replace(" & ", "-")}`}
                    className="font-meta text-xs text-secondary hover:text-primary dark-transition"
                  >
                    {navItem}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Connect */}
          <div>
            <h4 className="font-meta text-xs font-bold uppercase tracking-wide text-muted mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-meta text-xs text-secondary hover:text-primary dark-transition"
              >
                <Link className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-meta text-xs text-secondary hover:text-primary dark-transition"
              >
                <Globe className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={profileData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-meta text-xs text-secondary hover:text-primary dark-transition"
              >
                <Route className="w-4 h-4" />
                <span>Instagram</span>
              </a>
              <a
                href={`mailto:${profileData.socials.email}`}
                className="flex items-center gap-2 font-meta text-xs text-secondary hover:text-primary dark-transition"
              >
                <Mail className="w-4 h-4" />
                <span>Email Direct</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-soft flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-meta text-muted">
          <div>
            © {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Built with Next.js & Tailwind CSS v4</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 text-muted hover:text-primary dark-transition text-xs font-bold uppercase tracking-wide"
            >
              Top
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}