import { notFound } from "next/navigation";
import { gamePassports, getProfileByUsername } from "@/lib/mock-data";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { VerifiedPill } from "@/components/shared/verified-badge";
import { ShieldCheck } from "lucide-react";

export default async function GamePassportDetailPage({
  params,
}: {
  params: Promise<{ username: string; gameSlug: string }>;
}) {
  const { username, gameSlug } = await params;
  const profile = getProfileByUsername(username);
  const passport = (gamePassports[username] ?? []).find(
    (g) => g.gameSlug === gameSlug
  );

  if (!profile || !passport) notFound();

  const statEntries = [
    { label: "UID", value: passport.stats.uid },
    { label: "LEVEL", value: String(passport.stats.level) },
    { label: "K/D RATIO", value: passport.stats.kdRatio },
    { label: "MATCHES", value: passport.stats.matches.toLocaleString() },
    { label: "WINS", value: passport.stats.wins.toLocaleString() },
    { label: "SEASON", value: passport.stats.season },
  ];

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "VAULT", href: "/discover" },
          { label: username, href: `/vault/${username}` },
          { label: "Games", href: `/vault/${username}/games` },
          { label: passport.gameName },
        ]}
      />

      <div className="mt-4 flex items-center gap-4 rounded-lg border border-border bg-card p-5">
        <span className="flex size-14 shrink-0 items-center justify-center rounded-md bg-secondary text-lg font-bold">
          {passport.gameName.charAt(0)}
        </span>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-extrabold">
              {passport.gameName} GAME PASSPORT
            </span>
            {passport.verified && <VerifiedPill />}
          </div>
          <div className="text-sm text-muted-foreground">
            IGN: {passport.ign} · {passport.rank} RANK
          </div>
        </div>
      </div>

      <div className="mt-8 text-xs font-bold tracking-wide text-muted-foreground">
        VERIFIED GAME STATS
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {statEntries.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-border bg-card p-4"
          >
            <div className="text-[11px] font-medium tracking-wide text-muted-foreground">
              {stat.label}
            </div>
            <div className="mt-1 text-lg font-extrabold">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-lg border border-border bg-secondary/40 p-5">
        <div className="flex items-center gap-2 text-sm font-bold text-blue-600">
          <ShieldCheck className="size-4" />
          GAME PROFILE VERIFIED
        </div>
        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
          <li>· Source: {passport.verificationSource}</li>
          <li>· Verified Date: {passport.verifiedDate} by Vault Verification Engine</li>
        </ul>
      </div>
    </div>
  );
}
