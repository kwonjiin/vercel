"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Circle, X } from "lucide-react";

const TABS = [
  { href: "/", label: "home.tsx" },
  { href: "/about", label: "about.tsx" },
  { href: "/projects", label: "projects.tsx" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-stretch">
        {/* macOS 스타일 창 버튼 - 장식 */}
        <div className="flex items-center gap-2 border-r border-border px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-rose/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-cyan/70" />
        </div>

        <nav className="flex flex-1 overflow-x-auto">
          {TABS.map((tab) => {
            const active =
              tab.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(tab.href);
            return (
              <Link
                key={tab.href}
                href={tab.href}
                data-cursor="hover"
                className={`group relative flex items-center gap-2 whitespace-nowrap border-r border-border px-4 py-3 font-mono text-sm transition-colors ${
                  active
                    ? "bg-bg-elevated text-fg"
                    : "text-fg-dim hover:bg-bg-elevated/50 hover:text-fg"
                }`}
              >
                <Circle
                  size={7}
                  className={
                    active
                      ? "fill-cyan text-cyan"
                      : "fill-transparent text-fg-faint group-hover:fill-fg-dim group-hover:text-fg-dim"
                  }
                />
                {tab.label}
                <X
                  size={13}
                  className="text-fg-faint opacity-0 transition-opacity group-hover:opacity-60"
                />
                {active && (
                  <span className="absolute inset-x-0 bottom-0 h-[2px] bg-cyan" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
