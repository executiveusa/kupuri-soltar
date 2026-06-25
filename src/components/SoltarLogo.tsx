interface SoltarLogoProps {
  size?: number;
  color?: string;
  showWordmark?: boolean;
  className?: string;
}

export function SoltarLogo({
  size = 32,
  color = "currentColor",
  showWordmark = true,
  className = "",
}: SoltarLogoProps) {
  return (
    <div className={`inline-flex flex-col items-center gap-1 ${className}`}>
      <svg
        width={size}
        height={size * 0.72}
        viewBox="0 0 40 29"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20 14.5C20 14.5 14 6 8 6C3.582 6 0 9.134 0 13C0 16.866 3.582 20 8 20C12 20 15.5 17.5 17.5 15.5"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M20 14.5C20 14.5 26 23 32 23C36.418 23 40 19.866 40 16C40 12.134 36.418 9 32 9C28 9 24.5 11.5 22.5 13.5"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M17.5 15.5C18.5 14.5 19.2 14.5 20 14.5C20.8 14.5 21.5 14.5 22.5 13.5"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      {showWordmark && (
        <span
          className="font-serif tracking-[0.22em] uppercase text-current"
          style={{ fontSize: size * 0.38, fontWeight: 400, letterSpacing: "0.22em" }}
        >
          SOLTAR
        </span>
      )}
    </div>
  );
}
