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
      className={`relative rounded-lg bg-surface border transition-all duration-300 ${
        hoverEffect
          ? "hover:border-accent-primary/30 dark:hover:border-accent-primary/30"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}