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
      "bg-amber-50 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 border border-amber-200 dark:border-amber-800/60",
    outline:
      "bg-transparent text-stone-600 dark:text-stone-400 border border-stone-300 dark:border-stone-700",
    highlight:
      "bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200 border border-amber-300 dark:border-amber-700/60 font-medium",
    amber:
      "bg-orange-50 dark:bg-orange-950/60 text-orange-800 dark:text-orange-200 border border-orange-200 dark:border-orange-800/60 font-medium",
    green:
      "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800/60 font-medium",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full transition-all hover:scale-105 ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
