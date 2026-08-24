import { notFound } from "next/navigation";
import Link from "next/link";
import { Plus, ChevronRight } from "lucide-react";
import { currentUsername, gamePassports, getProfileByUsername } from "@/lib/mock-data";
import { getGameVisual } from "@/lib/game-visuals";
import { MobileAppShell } from "@/components/layout/mobile-app-shell";
import { MVerifiedBadge, MCardRow, MBtnOutlineDark } from "@/components/shared/mobile-ui";

export default async function GamesPassportsPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const profile = getProfileByUsername(username);
  if (!profile) notFound();

  const passports = gamePassports[username] ?? [];
  const isOwner = username === currentUsername;

  return (
    <MobileAppShell
      onBack={true}
      title={`GAMES (${passports.length})`}
      headerRight={
        isOwner ? (
          <Link
            href={`/vault/${username}/games/add`}
            aria-label="Add Game"
            className="text-foreground transition-opacity hover:opacity-70"
          >
            <Plus className="size-[22px]" strokeWidth={2.2} />
          </Link>
        ) : (
          <span />
        )
      }
    >
      {passports.map((passport) => {
        const visual = getGameVisual(passport.gameSlug);
        return (
          <Link key={passport.gameSlug} href={`/vault/${username}/games/${passport.gameSlug}`}>
            <MCardRow>
              <div className="flex items-center gap-3">
                <div
                  className="flex size-10 items-center justify-center rounded-md text-xs font-extrabold"
                  style={{ background: visual.bg, color: visual.fg }}
                >
                  {visual.short}
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-extrabold text-foreground">{passport.gameName}</span>
                    {passport.verified && <MVerifiedBadge small />}
                  </div>
                  <span className="text-xs font-bold text-[#767676]">{passport.rank}</span>
                </div>
              </div>
              <ChevronRight className="size-4 text-[#767676]" />
            </MCardRow>
          </Link>
        );
      })}

      {isOwner && (
        <Link href={`/vault/${username}/games/add`}>
          <MBtnOutlineDark className="w-full border-dashed">+ Add New Game</MBtnOutlineDark>
        </Link>
      )}
    </MobileAppShell>
  );
}
