"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Trophy, Shield, Flag, BadgeCheck, Menu, SlidersHorizontal, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { currentUsername, getProfileByUsername } from "@/lib/mock-data";

const NAV_ITEMS = [
  { label: "Tournaments", href: "/tournaments", icon: Trophy, dot: true },
  { label: "Clubs & Esports", href: "/clubs-esports", icon: Shield },
  { label: "Leagues", href: "/leagues", icon: Flag },
  { label: "VAULT Identity", href: "/vault-identity", icon: BadgeCheck },
  { label: "More", href: "/more", icon: Menu },
  { label: "Settings", href: "/settings", icon: SlidersHorizontal },
];

export function HubSidebar() {
  const pathname = usePathname();
  const profile = getProfileByUsername(currentUsername);

  return (
    <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col overflow-y-auto border-r border-border lg:flex">
      <div className="flex items-center gap-2 px-5 py-5">
        <span className="flex size-7 items-center justify-center rounded-md bg-foreground text-sm font-black text-background">
          V
        </span>
        <span className="text-base font-black tracking-tight">VAULT</span>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors",
                active ? "bg-secondary text-foreground" : "text-foreground/80 hover:bg-secondary/60"
              )}
            >
              <span className="flex items-center gap-2.5">
                <Icon className="size-4" />
                {item.label}
              </span>
              {item.dot && <span className="size-1.5 rounded-full bg-accent-blue" />}
            </Link>
          );
        })}
      </nav>

      {profile && (
        <div className="flex items-center justify-between border-t border-border px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span
              className="flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
              style={{ background: profile.avatarGradient }}
            >
              {profile.displayName.charAt(0)}
            </span>
            <div>
              <div className="text-xs font-bold">{profile.displayName.toUpperCase()}</div>
              <div className="text-[10px] text-muted-foreground">Level 42 ID</div>
            </div>
          </div>
          <LogOut className="size-4 text-muted-foreground" />
        </div>
      )}
    </aside>
  );
}
