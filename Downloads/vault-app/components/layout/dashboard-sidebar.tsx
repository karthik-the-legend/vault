"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  Shield,
  Users,
  UserPlus,
  Video,
  Settings,
  Layers,
  Trophy,
  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Profile } from "@/types";

export function DashboardSidebar({
  profile,
  variant,
  portalLabel,
  openPositions = 0,
}: {
  profile: Profile;
  variant: "club" | "organizer";
  portalLabel: string;
  openPositions?: number;
}) {
  const pathname = usePathname();
  const base = `/dashboard/${profile.username}`;

  const navItems =
    variant === "club"
      ? [
          { label: "Overview", href: base, icon: LayoutGrid },
          { label: "Teams", href: `${base}/teams`, icon: Shield },
          { label: "Roster", href: `${base}/roster`, icon: Users },
          { label: "Recruitment", href: `${base}/recruitment`, icon: UserPlus, badge: openPositions },
          { label: "Content", href: `${base}/content`, icon: Video },
          { label: "Settings", href: `${base}/settings`, icon: Settings },
        ]
      : [
          { label: "Overview", href: base, icon: LayoutGrid },
          { label: "Leagues", href: `${base}/leagues`, icon: Layers },
          { label: "Tournaments", href: `${base}/tournaments`, icon: Trophy },
          { label: "Results", href: `${base}/results`, icon: BarChart3 },
          { label: "Content", href: `${base}/content`, icon: Video },
          { label: "Settings", href: `${base}/settings`, icon: Settings },
        ];

  return (
    <aside className="flex w-60 shrink-0 flex-col border-r border-border bg-card">
      <div className="flex items-center gap-2 px-5 py-5">
        <span className="flex size-7 items-center justify-center rounded-md bg-foreground text-sm font-black text-background">
          V
        </span>
        <div>
          <div className="text-sm font-black tracking-tight">VAULT</div>
          <div className="text-[10px] font-medium tracking-wide text-muted-foreground">
            {portalLabel}
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {navItems.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors",
                active
                  ? "bg-foreground text-background"
                  : "text-foreground hover:bg-secondary"
              )}
            >
              <span className="flex items-center gap-2.5">
                <Icon className="size-4" />
                {item.label}
              </span>
              {!!item.badge && (
                <span
                  className={cn(
                    "flex size-4 items-center justify-center rounded-full text-[10px] font-bold",
                    active
                      ? "bg-background text-foreground"
                      : "bg-accent-blue text-white"
                  )}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-2.5 border-t border-border px-5 py-4">
        <span
          className="flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
          style={{ background: profile.avatarGradient }}
        >
          {profile.displayName.charAt(0)}
        </span>
        <div>
          <div className="text-xs font-bold">{profile.displayName}</div>
          <div className="text-[10px] text-muted-foreground">
            @{profile.username}
          </div>
        </div>
      </div>
    </aside>
  );
}
