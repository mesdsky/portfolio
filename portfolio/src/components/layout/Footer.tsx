"use client";

import React, { useState, useEffect } from "react";
import { profileData } from "@/../data/profile";
import { Cpu, GitPullRequest, Link, Share2, Mail, ArrowUp } from "lucide-react";

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
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/60 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-md bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                <Cpu className="w-4 h-4" />
              </span>
              <span className="font-mono font-bold text-slate-900 dark:text-slate-100">
                {profileData.name}
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              Undergraduate in Electrical Engineering at Universitas Indonesia focusing on Electronics & IC, Embedded Systems & IoT, Power Systems, and Artificial Intelligence.
            </p>
            <div className="flex items-center gap-2 font-mono text-xs text-slate-500 dark:text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Location: Depok / Jakarta, Indonesia</span>
              {time && <span className="text-slate-400 dark:text-slate-500">• {time}</span>}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  Education & Coursework
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  Organizations & Leadership
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  Featured Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  Skills Matrix
                </a>
              </li>
              <li>
                <a
                  href="#achievements"
                  className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  Awards & Honors
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Connect & Socials */}
          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3">
              Connect
            </h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                <Link className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                <GitPullRequest className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={profileData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>Instagram</span>
              </a>
              <a
                href={`mailto:${profileData.socials.email}`}
                className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email Direct</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
          <div>
            © {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Built with Next.js & Tailwind CSS</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
