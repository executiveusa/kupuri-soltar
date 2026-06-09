"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/journey", label: "Mi camino" },
  { href: "/bitacora", label: "Bitácora" },
  { href: "/cartas", label: "Cartas" },
  { href: "/progress", label: "Progreso" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Navegación principal">
      <ul className="flex gap-6 text-sm" role="list">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`transition-colors duration-200 ${
                  isActive
                    ? "text-charcoal-ink border-b border-clay"
                    : "text-clay hover:text-charcoal-ink"
                }`}
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
