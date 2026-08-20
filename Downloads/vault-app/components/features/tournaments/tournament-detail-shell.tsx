import Link from "next/link";
import { ArrowLeft, Bell, Wallet } from "lucide-react";
import { HubTournament } from "@/types";
import { VerifiedDot } from "@/components/shared/verified-badge";
import { TournamentStatusBadge } from "@/components/features/tournaments/tournament-status-badge";
import { cn } from "@/lib/utils";

const TABS = [
  { label: "Overview", href: "" },
  { label: "Rules", href: "/rules" },
  { label: "Schedule", href: "/schedule" },
  { label: "Participants", href: "/participants" },
  { label: "Results", href: "/results" },
];

export function TournamentDetailShell({
  tournament,
  activeTab,
  children,
}: {
  tournament: HubTournament;
  activeTab: (typeof TABS)[number]["label"];
  children: React.ReactNode;
}) {
  const base = `/tournaments/${tournament.slug}`;

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4 border-b border-border pb-6">
        <div>
          <h1 className="font-heading text-2xl font-black tracking-tight sm:text-3xl">
            {tournament.title}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">{activeTab}</p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            aria-label="Notifications"
            className="flex size-9 items-center justify-center rounded-full border border-border text-foreground/80 hover:text-foreground"
          >
            <Bell className="size-4" />
          </button>
          <button
            type="button"
            className="flex h-9 items-center gap-2 rounded-full border border-border px-4 text-xs font-bold"
          >
            <Wallet className="size-3.5" />
            CONNECT WALLET
          </button>
        </div>
      </div>

      <Link
        href="/tournaments"
        className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Back to Tournaments
      </Link>

      <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-muted-foreground">
            {tournament.game}
            <span className="text-border">·</span>
            <TournamentStatusBadge status={tournament.status} />
          </div>
          <h2 className="mt-1 text-3xl font-black tracking-tight">{tournament.title}</h2>
          <div className="mt-1 text-sm text-muted-foreground">
            Organized by{" "}
            <span className="inline-flex items-center gap-1 font-bold text-foreground">
              {tournament.organizerName}
              {tournament.organizerVerified && <VerifiedDot />}
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-[10px] font-semibold tracking-wide text-muted-foreground">
            TOTAL PRIZE POOL
          </div>
          <div className="text-2xl font-black">{tournament.prizePool}</div>
        </div>
      </div>

      <div className="mt-6 flex gap-6 overflow-x-auto border-b border-border">
        {TABS.map((tab) => (
          <Link
            key={tab.label}
            href={`${base}${tab.href}`}
            className={cn(
              "shrink-0 border-b-2 pb-2 text-sm font-bold tracking-wide whitespace-nowrap transition-colors",
              activeTab === tab.label
                ? "border-blue-600 text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.label.toUpperCase()}
          </Link>
        ))}
      </div>

      <div className="mt-6">{children}</div>
    </div>
  );
}
