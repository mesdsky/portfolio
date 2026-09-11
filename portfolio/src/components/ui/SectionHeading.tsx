import React from "react";

interface SectionHeadingProps {
  number?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  number,
  badge,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl"}`}>
      {/* Number + Badge Line */}
      <div className={`inline-flex items-center gap-2 mb-3 ${align === "center" ? "justify-center" : ""}`}>
        {number && (
          <span className="font-meta text-xs font-bold uppercase tracking-wider text-accent-primary">
            {number}
          </span>
        )}
        {badge && (
          <span className="font-meta text-xs text-muted uppercase tracking-wider">
            // {badge}
          </span>
        )}
      </div>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-display tracking-tight text-primary">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-secondary">
          {subtitle}
        </p>
      )}
    </div>
  );
}