import Link from "next/link";
import { Settings, ChevronRight, Trophy } from "lucide-react";
import { Profile, GamePassport, Team, Achievement } from "@/types";
import { MobileAppShell } from "@/components/layout/mobile-app-shell";
import { VaultTabsBar } from "@/components/features/vault/vault-tabs-bar";
import {
  MVerifiedBadge,
  MCardRow,
  MStatsRow,
  MStatItem,
  MAvatarCircle,
  MBtnOutlineDark,
  MBtnLight,
} from "@/components/shared/mobile-ui";

const STAT_HREF: Record<string, string> = {
  TOURNAMENTS: "competitive",
  ACHIEVEMENTS: "achievements",
  TEAMS: "teams",
};

export function GamerVaultOwnerView({
  profile,
  primaryGame,
  team,
  achievement,
}: {
  profile: Profile;
  primaryGame?: GamePassport;
  team?: Team;
  achievement?: Achievement;
}) {
  return (
    <MobileAppShell
      title="MY VAULT"
      headerRight={
        <Link
          href={`/vault/${profile.username}/edit`}
          aria-label="Settings"
          className="text-foreground transition-opacity hover:opacity-70"
        >
          <Settings className="size-5" strokeWidth={2} />
        </Link>
      }
    >
      <div className="flex w-full flex-col items-start gap-3">
        <div className="flex w-full items-center gap-4">
          <MAvatarCircle name={profile.displayName} gradient={profile.avatarGradient} size={64} />
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-extrabold text-foreground">
                {profile.displayName.toUpperCase()}
              </span>
              {profile.verified && <MVerifiedBadge />}
            </div>
            <span className="text-[13px] font-medium text-[#767676]">@{profile.username}</span>
            <span className="text-xs font-medium text-[#767676]">
              {profile.followers} Followers · {profile.following} Following
            </span>
          </div>
        </div>
        <p className="text-[13px] leading-[140%] text-foreground">{profile.shortTag}</p>
        <div className="flex w-full gap-2">
          <Link href={`/vault/${profile.username}/edit`} className="flex-1">
            <MBtnOutlineDark className="w-full">Edit VAULT</MBtnOutlineDark>
          </Link>
          <Link href={`/vault/${profile.username}/share`} className="flex-1">
            <MBtnLight className="w-full">Share</MBtnLight>
          </Link>
        </div>
      </div>

      {primaryGame && (
        <Link href={`/vault/${profile.username}/games/${primaryGame.gameSlug}`}>
          <MCardRow>
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-md bg-foreground text-[11px] font-extrabold text-white">
                {primaryGame.gameName.slice(0, 4).toUpperCase()}
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-[13px] font-extrabold text-foreground">
                    {primaryGame.gameName}
                  </span>
                  <MVerifiedBadge small />
                </div>
                <span className="text-[11px] font-bold text-[#767676]">
                  {primaryGame.rank} · {primaryGame.role.split(" ").pop()?.replace(/[()]/g, "")}
                </span>
              </div>
            </div>
            <ChevronRight className="size-4 text-[#767676]" />
          </MCardRow>
        </Link>
      )}

      <MStatsRow>
        {profile.stats.map((stat) => (
          <Link key={stat.label} href={`/vault/${profile.username}/${STAT_HREF[stat.label] ?? ""}`}>
            <MStatItem value={stat.value} label={stat.label} />
          </Link>
        ))}
      </MStatsRow>

      <VaultTabsBar username={profile.username} active="Overview" />

      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
        {team && (
          <div className="flex w-full flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold tracking-[0.5px] text-[#767676] uppercase">
                CURRENT TEAM
              </span>
              <Link href={`/vault/${profile.username}/teams`} className="text-[11px] font-semibold text-accent-blue">
                View all →
              </Link>
            </div>
            <Link href={`/vault/${profile.username}/teams`}>
              <MCardRow>
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-md bg-foreground text-sm font-extrabold text-white">
                    {team.logoLabel ?? team.name.charAt(0)}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[13px] font-bold text-foreground">{team.name}</span>
                    <span className="text-[11px] text-[#767676]">
                      {team.game} · {team.role}
                    </span>
                  </div>
                </div>
                <ChevronRight className="size-4 text-[#767676]" />
              </MCardRow>
            </Link>
          </div>
        )}

        {achievement && (
          <div className="flex w-full flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold tracking-[0.5px] text-[#767676] uppercase">
                RECENT ACHIEVEMENT
              </span>
              <Link
                href={`/vault/${profile.username}/achievements`}
                className="text-[11px] font-semibold text-accent-blue"
              >
                View all →
              </Link>
            </div>
            <Link href={`/vault/${profile.username}/achievements`}>
              <MCardRow>
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-md bg-[#F5F5F5] text-foreground">
                    <Trophy className="size-[18px]" strokeWidth={2} />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[13px] font-bold text-foreground">{achievement.title}</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] text-[#767676]">
                        {achievement.result} · {achievement.year}
                      </span>
                      <MVerifiedBadge label="VERIFIED" small />
                    </div>
                  </div>
                </div>
                <ChevronRight className="size-4 text-[#767676]" />
              </MCardRow>
            </Link>
          </div>
        )}
      </div>
    </MobileAppShell>
  );
}
