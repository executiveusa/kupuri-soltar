"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/journey", label: "Mi camino" },
  { href: "/bitacora", label: "Bitácora" },
  { href: "/cartas", label: "Cartas" },
];

export function SiteNav({ light = false }: { light?: boolean }) {
  const pathname = usePathname();
  const base = light ? "text-ink-light hover:text-ink" : "text-cream-dim hover:text-cream";
  const activeExtra = light ? "border-b border-ink text-ink" : "border-b border-sakura text-cream";

  return (
    <nav aria-label="Navegación principal">
      <ul className="flex gap-6 text-sm font-sans" role="list">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`transition-colors duration-200 tracking-wide ${base} ${isActive ? activeExtra : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
