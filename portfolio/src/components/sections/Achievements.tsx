"use client";

import React from "react";
import { achievementsData } from "@/../data/achievements";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Trophy, Award, Calendar, CheckCircle2 } from "lucide-react";

export function Achievements() {
  if (!achievementsData || achievementsData.length === 0) {
    return null;
  }

  return (
    <section id="achievements" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="06"
          badge="Recognition & Honors"
          title="Honors & Achievements"
          subtitle="Innovation competition awards, robotics tournament podiums, and academic milestones."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((item) => (
            <Card
              key={item.id}
              borderHighlight={item.highlight}
              className="p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shrink-0">
                    <Trophy className="w-5 h-5" />
                  </div>
                  {item.badge && (
                    <Badge variant="amber" size="sm">
                      {item.badge}
                    </Badge>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 text-xs font-mono text-sky-600 dark:text-sky-400 font-medium mb-3">
                  <span>{item.issuer}</span>
                  <span className="text-slate-300 dark:text-slate-700">•</span>
                  <span>{item.year}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Achievement</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
