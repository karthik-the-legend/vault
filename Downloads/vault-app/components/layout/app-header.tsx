"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Bell, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { currentUsername } from "@/lib/mock-data";

const NAV_ITEMS = [
  { label: "Discover", href: "/discover" },
  { label: "Gamers", href: "/discover/search?category=GAMER" },
  { label: "Esports Clubs", href: "/discover/search?category=ESPORTS_CLUB" },
  { label: "League Organizers", href: "/discover/search?category=ORGANIZER" },
  { label: "Tournaments Hub", href: "/tournaments" },
  { label: "Creator Zone", href: "/creator-zone" },
  { label: "VAULT+", href: "/vault-identity" },
];

export function AppHeader() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-8">
          <Link href="/home" className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-md bg-foreground text-sm font-black text-background">
              V
            </span>
            <span className="text-base font-black tracking-tight">
              VAULT
            </span>
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            {NAV_ITEMS.map((item) => {
              const active =
                item.label === "Discover" && pathname === "/discover";
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    active
                      ? "font-bold text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            onClick={() => router.push("/discover")}
            className="text-foreground/80 hover:text-foreground"
          >
            <Search className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Notifications"
            className="text-foreground/80 hover:text-foreground"
          >
            <Bell className="size-5" />
          </button>
          <Link
            href={`/vault/${currentUsername}`}
            className="flex size-8 items-center justify-center rounded-full font-bold text-white"
            style={{
              background: "linear-gradient(135deg, #1e3a8a, #7c3aed)",
            }}
            aria-label="Your profile"
          >
            A
          </Link>
        </div>
      </div>
      <nav className="flex items-center gap-5 overflow-x-auto border-t border-border px-4 py-2 lg:hidden">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="shrink-0 text-xs font-semibold whitespace-nowrap text-muted-foreground"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
