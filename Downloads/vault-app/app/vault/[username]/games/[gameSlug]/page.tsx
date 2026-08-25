import { notFound } from "next/navigation";
import { ShieldCheck } from "lucide-react";
import { gamePassports, getGameSlugParams, getProfileByUsername } from "@/lib/mock-data";
import { MobileAppShell } from "@/components/layout/mobile-app-shell";
import { MVerifiedBadge, MCardBordered, MAvatarCircle } from "@/components/shared/mobile-ui";

export async function generateStaticParams() {
  return getGameSlugParams();
}

export default async function GamePassportDetailPage({
  params,
}: {
  params: Promise<{ username: string; gameSlug: string }>;
}) {
  const { username, gameSlug } = await params;
  const profile = getProfileByUsername(username);
  const passport = (gamePassports[username] ?? []).find((g) => g.gameSlug === gameSlug);

  if (!profile || !passport) notFound();

  const statBoxes = [
    { label: "UID", value: passport.stats.uid },
    { label: "LEVEL", value: String(passport.stats.level) },
    { label: "K/D RATIO", value: passport.stats.kdRatio },
    { label: "MATCHES", value: passport.stats.matches.toLocaleString() },
    { label: "WINS", value: passport.stats.wins.toLocaleString() },
    { label: "SEASON", value: passport.stats.season },
  ];

  return (
    <MobileAppShell onBack={true} title={`${passport.gameName} GAME PASSPORT`}>
      <MCardBordered>
        <div className="flex w-full items-center gap-3">
          <MAvatarCircle name={profile.displayName} gradient={profile.avatarGradient} size={48} />
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-1.5">
              <span className="text-base font-extrabold text-foreground">
                {profile.displayName.toUpperCase()}
              </span>
              {profile.verified && <MVerifiedBadge />}
            </div>
            <span className="text-xs font-bold text-[#767676]">
              IGN: {passport.ign} · {passport.rank}
            </span>
          </div>
        </div>
      </MCardBordered>

      <div className="grid w-full grid-cols-2 gap-2.5">
        {statBoxes.map((box) => (
          <div
            key={box.label}
            className="flex flex-col gap-1 rounded-lg border border-[#ECECEC] p-3"
          >
            <span className="text-[10px] font-bold tracking-[0.5px] text-[#767676] uppercase">
              {box.label}
            </span>
            <span className="text-base font-extrabold text-foreground">{box.value}</span>
          </div>
        ))}
      </div>

      <div className="flex w-full flex-col gap-1.5 rounded-xl border border-accent-blue bg-accent-blue/[0.02] p-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="size-[18px] text-accent-blue" strokeWidth={2.5} />
          <span className="text-xs font-extrabold tracking-[0.5px] text-accent-blue">
            GAME PROFILE VERIFIED
          </span>
        </div>
        <span className="text-xs font-medium text-foreground">
          Source: {passport.verificationSource}
        </span>
        <span className="text-[11px] text-[#767676]">Verified Date: {passport.verifiedDate}</span>
      </div>
    </MobileAppShell>
  );
}
