"use client";

import Link from "next/link";

interface QuietButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "pill" | "pill-light" | "ghost" | "ghost-light";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  "aria-label"?: string;
  disabled?: boolean;
}

export function QuietButton({
  href,
  onClick,
  variant = "pill",
  children,
  className = "",
  type = "button",
  "aria-label": ariaLabel,
  disabled = false,
}: QuietButtonProps) {
  const variantClass =
    variant === "pill" ? "pill-btn" :
    variant === "pill-light" ? "pill-btn pill-btn-light" :
    variant === "ghost" ? "font-serif text-cream underline-offset-4 hover:underline text-base tracking-wide" :
    "font-serif text-ink underline-offset-4 hover:underline text-base tracking-wide";

  const classes = `${variantClass} ${disabled ? "opacity-40 cursor-not-allowed pointer-events-none" : ""} ${className}`;

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
