"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Plus, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { currentUsername } from "@/lib/mock-data";
import { basePath } from "@/lib/base-path";

const TABS = [
  { label: "For You", href: "/creator-zone" },
  { label: "Following", href: "/creator-zone/following" },
  { label: "Trending", href: "/creator-zone/trending" },
];

export function CreatorZoneHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
        <Link href="/creator-zone" className="flex items-center gap-2">
          <Image src={`${basePath}/logo.jpeg`} alt="VAULT" width={28} height={28} className="rounded-md" />
          <span className="hidden text-[11px] font-semibold tracking-wide text-muted-foreground sm:inline">
            CREATOR ZONE
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {TABS.map((tab) => {
            const active = pathname === tab.href;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={cn(
                  "border-b-2 py-1 text-xs font-bold tracking-wide transition-colors",
                  active
                    ? "border-foreground text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                {tab.label.toUpperCase()}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/creator-zone/upload"
            aria-label="Create content"
            className="flex size-8 items-center justify-center rounded-full border border-border text-foreground/80 hover:text-foreground"
          >
            <Plus className="size-4" />
          </Link>
          <div className="relative hidden sm:block">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-3.5 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Search identity..."
              className="h-9 w-44 rounded-md border border-border bg-secondary/40 pl-8 text-xs outline-none focus:border-foreground"
            />
          </div>
          <Link
            href={`/vault/${currentUsername}`}
            className="flex size-8 items-center justify-center rounded-full font-bold text-white"
            style={{ background: "linear-gradient(135deg, #1e3a8a, #7c3aed)" }}
            aria-label="Your profile"
          >
            A
          </Link>
        </div>
      </div>

      <nav className="flex items-center justify-center gap-6 border-t border-border py-2 md:hidden">
        {TABS.map((tab) => {
          const active = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={cn(
                "text-xs font-bold tracking-wide",
                active ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {tab.label.toUpperCase()}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
