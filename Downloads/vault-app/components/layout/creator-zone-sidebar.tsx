"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Shield, Users, BarChart2, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { currentUsername } from "@/lib/mock-data";

const NAV_ITEMS = [
  { label: "Discovery", href: "/creator-zone", icon: Compass },
  { label: "Identity Vault", href: `/vault/${currentUsername}`, icon: Shield },
  { label: "Verified Creators", href: "/creator-zone/creators", icon: Users },
  { label: "Analytics", href: "/creator-zone/analytics", icon: BarChart2 },
  { label: "Settings", href: "/creator-zone/settings", icon: Settings },
];

export function CreatorZoneSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-60 shrink-0 flex-col border-r border-border px-3 py-5 lg:flex">
      <nav className="space-y-1">
        {NAV_ITEMS.map((item) => {
          const active = item.href === "/creator-zone" ? pathname === "/creator-zone" : pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                active ? "bg-secondary text-foreground" : "text-foreground hover:bg-secondary/60"
              )}
            >
              <Icon className="size-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-6 border-t border-border pt-4 text-[10px] leading-relaxed text-muted-foreground">
        VAULT IDENTITY PLATFORM
        <br />
        v2.1.0-alpha · Premium Content Layer
      </div>
    </aside>
  );
}
