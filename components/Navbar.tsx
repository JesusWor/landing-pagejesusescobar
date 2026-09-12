"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal } from "lucide-react";
import { navItems, socialNetworks } from "@/data/data";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-surfaceLine bg-[#282828]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2.5">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 text-ink">
            <Terminal size={22} className="text-accent" strokeWidth={2} />
            <span className="font-display text-base font-bold tracking-tight">
              escobar<span className="text-accent">.dev</span>
            </span>
          </Link>

          <ul className="hidden gap-1 text-sm font-medium sm:flex">
            {navItems.map((item) => {
              const active =
                item.link === "/" ? pathname === "/" : pathname.startsWith(item.link);
              return (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className={
                      "rounded-md px-3 py-1.5 transition-colors " +
                      (active
                        ? "bg-surface text-ink"
                        : "text-muted hover:bg-surface/60 hover:text-ink")
                    }
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center gap-4 text-muted">
          {socialNetworks.map((s) => (
            <a
              key={s.id}
              href={s.src}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="hover:text-accent"
            >
              {s.logo}
            </a>
          ))}
        </div>
      </nav>

      <ul className="flex gap-1 overflow-x-auto border-t border-surfaceLine px-4 py-1.5 text-xs font-medium sm:hidden">
        {navItems.map((item) => (
          <li key={item.id} className="shrink-0">
            <Link href={item.link} className="rounded px-2 py-1 text-muted hover:bg-surface hover:text-ink">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
