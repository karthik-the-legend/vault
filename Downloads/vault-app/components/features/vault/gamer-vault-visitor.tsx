"use client";

import { useState } from "react";
import Link from "next/link";
import { Share2, MapPin, ChevronRight, Lock, Trophy } from "lucide-react";
import { Profile, GamePassport, Achievement } from "@/types";
import { MobileAppShell } from "@/components/layout/mobile-app-shell";
import { VaultTabsBar } from "@/components/features/vault/vault-tabs-bar";
import {
  MVerifiedBadge,
  MCardRow,
  MStatsRow,
  MStatItem,
  MAvatarCircle,
  MBtnDark,
  MBtnLight,
} from "@/components/shared/mobile-ui";

export function GamerVaultVisitorView({
  profile,
  primaryGame,
  achievement,
  isPrivate,
}: {
  profile: Profile;
  primaryGame?: GamePassport;
  achievement?: Achievement;
  isPrivate?: boolean;
}) {
  const [following, setFollowing] = useState(false);
  const [connected, setConnected] = useState(false);

  return (
    <MobileAppShell
      onBack={true}
      title={`@${profile.username}`}
      headerRight={
        <Link
          href={`/vault/${profile.username}/share`}
          aria-label="Share"
          className="text-foreground transition-opacity hover:opacity-70"
        >
          <Share2 className="size-[18px]" strokeWidth={2} />
        </Link>
      }
    >
      <div className="flex w-full flex-col items-center gap-2 pt-2 text-center">
        <MAvatarCircle name={profile.displayName} gradient={profile.avatarGradient} size={80} />
        <div className="flex items-center gap-1.5">
          <span className="text-xl font-extrabold text-foreground">
            {profile.displayName.toUpperCase()}
          </span>
          {profile.verified && <MVerifiedBadge />}
        </div>
        <span className="text-[13px] font-medium text-[#767676]">@{profile.username}</span>
        <p className="mt-1 text-[13px] leading-[140%] text-foreground">{profile.shortTag}</p>
        {profile.country && (
          <div className="flex items-center gap-1 text-xs text-[#767676]">
            <MapPin className="size-3" strokeWidth={2} />
            <span>{profile.country}</span>
          </div>
        )}

        <div className="mt-2 flex w-full gap-2">
          <MBtnDark className="flex-1" onClick={() => setFollowing((v) => !v)}>
            {following ? "Following" : "+ Follow"}
          </MBtnDark>
          <MBtnLight className="flex-1" onClick={() => setConnected((v) => !v)}>
            {connected ? "Connected" : "Connect"}
          </MBtnLight>
          <Link href={`/vault/${profile.username}/share`}>
            <MBtnLight className="w-11 px-0" aria-label="Share">
              <Share2 className="size-[18px]" strokeWidth={2} />
            </MBtnLight>
          </Link>
        </div>
      </div>

      {isPrivate ? (
        <div className="flex w-full flex-col items-center gap-3 rounded-xl border border-[#ECECEC] p-8 text-center">
          <span className="flex size-11 items-center justify-center rounded-full bg-[#F5F5F5] text-[#767676]">
            <Lock className="size-5" strokeWidth={2} />
          </span>
          <div className="text-sm font-extrabold tracking-wide text-foreground">PRIVATE VAULT</div>
          <p className="max-w-[220px] text-xs text-[#767676]">
            This gamer&apos;s vault is private. Follow this gamer to see more.
          </p>
        </div>
      ) : (
        <>
          <MStatsRow>
            {profile.stats.map((stat) => (
              <MStatItem key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </MStatsRow>

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

          <VaultTabsBar username={profile.username} active="Overview" />

          {achievement && (
            <div className="flex w-full flex-col gap-2">
              <span className="text-[11px] font-bold tracking-[0.5px] text-[#767676] uppercase">
                RECENT ACHIEVEMENT
              </span>
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
        </>
      )}
    </MobileAppShell>
  );
}
