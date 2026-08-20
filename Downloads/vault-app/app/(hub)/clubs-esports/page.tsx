import Link from "next/link";
import { hubTournaments } from "@/lib/mock-data";
import { HubPageHeader } from "@/components/shared/hub-page-header";
import { VerifiedDot } from "@/components/shared/verified-badge";

export default function ClubsEsportsPage() {
  const organizers = Array.from(
    new Map(hubTournaments.map((t) => [t.organizerName, t])).values()
  );

  return (
    <div>
      <HubPageHeader
        title="CLUBS & ESPORTS"
        subtitle="Verified organizations competing across the VAULT tournament network."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {organizers.map((t) => (
          <Link
            key={t.organizerName}
            href={`/tournaments/${t.slug}`}
            className="rounded-lg border border-border bg-card p-5"
          >
            <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-sm font-bold">
              {t.organizerName.charAt(0)}
            </span>
            <div className="mt-3 flex items-center gap-1 text-sm font-bold">
              {t.organizerName}
              {t.organizerVerified && <VerifiedDot />}
            </div>
            <div className="mt-1 text-xs text-muted-foreground">
              Hosting {t.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
