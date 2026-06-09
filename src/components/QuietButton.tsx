"use client";

import Link from "next/link";

interface QuietButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  "aria-label"?: string;
  disabled?: boolean;
}

export function QuietButton({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  type = "button",
  "aria-label": ariaLabel,
  disabled = false,
}: QuietButtonProps) {
  const base =
    "inline-block px-6 py-3 rounded text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-3";

  const variants = {
    primary:
      "bg-clay text-parchment hover:bg-clay-dark disabled:opacity-50 disabled:cursor-not-allowed",
    secondary:
      "border border-clay text-clay-dark hover:bg-beige disabled:opacity-50 disabled:cursor-not-allowed",
    ghost:
      "text-clay-dark underline-offset-4 hover:underline disabled:opacity-50 disabled:cursor-not-allowed",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
