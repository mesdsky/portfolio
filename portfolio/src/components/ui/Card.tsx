import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  borderHighlight?: boolean;
}

export function Card({
  children,
  className = "",
  hoverEffect = true,
  borderHighlight = false,
  ...props
}: CardProps) {
  return (
    <div
      className={`relative rounded-2xl bg-white dark:bg-stone-900/80 border-2 transition-all duration-300 ${
        borderHighlight
          ? "border-amber-400/60 shadow-lg shadow-amber-500/10"
          : "border-amber-100 dark:border-amber-900/50"
      } ${
        hoverEffect
          ? "hover:border-amber-400/60 dark:hover:border-amber-600/60 hover:shadow-lg hover:shadow-amber-500/10 hover:-translate-y-1"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
