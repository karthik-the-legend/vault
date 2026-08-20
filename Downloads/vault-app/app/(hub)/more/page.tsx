import Link from "next/link";
import {
  Sparkles,
  Video,
  Trophy,
  Users2,
  Bell,
  SlidersHorizontal,
  ShieldQuestion,
  Info,
  ChevronRight,
  LineChart,
  ShieldAlert,
  FileBadge,
  Briefcase,
  UserCog,
} from "lucide-react";
import { HubPageHeader } from "@/components/shared/hub-page-header";

const ROWS = [
  { label: "VAULT+", href: "/vault-identity", icon: Sparkles, meta: "Premium features active" },
  { label: "Creator Zone", href: "/creator-zone", icon: Video, meta: "0 registered campaigns" },
  { label: "Tournaments Hub", href: "/tournaments", icon: Trophy },
  { label: "Communities & Clubs", href: "/clubs-esports", icon: Users2 },
  { label: "Notification Feed", href: "#", icon: Bell },
  { label: "Settings", href: "/settings", icon: SlidersHorizontal },
  { label: "Help & Safety", href: "#", icon: ShieldQuestion },
  { label: "About VAULT", href: "#", icon: Info, meta: "Version 1.4.2" },
];

const COMING_SOON = [
  { label: "Advanced Performance Analytics", icon: LineChart },
  { label: "Kernel-Level Anti-Cheat", icon: ShieldAlert },
  { label: "Unified Gaming Resume", icon: FileBadge },
  { label: "Esports Job Board", icon: Briefcase },
  { label: "1-on-1 Pro Coaching", icon: UserCog },
];

export default function MorePage() {
  return (
    <div>
      <HubPageHeader
        title="MORE"
        subtitle="Explore advanced platform features and utilities."
      />

      <div className="divide-y divide-border rounded-lg border border-border bg-card">
        {ROWS.map((row) => {
          const Icon = row.icon;
          return (
            <Link
              key={row.label}
              href={row.href}
              className="flex items-center justify-between gap-3 p-4 hover:bg-secondary/40"
            >
              <span className="flex items-center gap-3 text-sm font-medium">
                <Icon className="size-4 text-muted-foreground" />
                {row.label}
              </span>
              <span className="flex items-center gap-2 text-xs text-muted-foreground">
                {row.meta}
                <ChevronRight className="size-4" />
              </span>
            </Link>
          );
        })}
      </div>

      <div className="mt-8 text-xs font-bold tracking-wide text-muted-foreground">
        COMING SOON
      </div>
      <div className="mt-3 divide-y divide-border rounded-lg border border-border bg-card opacity-60">
        {COMING_SOON.map((row) => {
          const Icon = row.icon;
          return (
            <div key={row.label} className="flex items-center justify-between gap-3 p-4">
              <span className="flex items-center gap-3 text-sm font-medium">
                <Icon className="size-4 text-muted-foreground" />
                {row.label}
              </span>
              <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-bold tracking-wide text-secondary-foreground">
                COMING SOON
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
