import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "highlight" | "amber" | "green";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  size = "sm",
  className = "",
}: BadgeProps) {
  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-xs sm:text-sm",
  };

  const variantStyles = {
    default:
      "font-bold text-accent-primary bg-accent/5 border border-soft",
    outline:
      "text-muted bg-transparent border border-soft",
    highlight:
      "font-medium text-accent-primary bg-accent/5 border border-soft",
    amber:
      "font-medium text-orange-800 dark:text-orange-300 bg-orange-50 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/60",
    green:
      "font-medium text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full transition-all ${
        sizeStyles[size]} ${variantStyles[variant]} ${className}
      `}
    >
      {children}
    </span>
  );
}