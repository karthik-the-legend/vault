import Link from "next/link";
import { Play, Calendar, ChevronRight } from "lucide-react";
import { currentUsername, getProfileByUsername, gamePassports } from "@/lib/mock-data";
import { MobileAppShell } from "@/components/layout/mobile-app-shell";
import {
  MSectionLabel,
  MVerifiedBadge,
  MCardBordered,
  MCardRow,
  MGamePill,
  MAvatarCircle,
  MBtnOutlineDark,
} from "@/components/shared/mobile-ui";

export default function HomePage() {
  const profile = getProfileByUsername(currentUsername)!;
  const games = gamePassports[currentUsername] ?? [];
  const primaryGame = games.find((g) => g.isPrimary) ?? games[0];

  return (
    <MobileAppShell>
      <MCardBordered>
        <div className="flex w-full flex-row items-center gap-3">
          <MAvatarCircle name={profile.displayName} gradient={profile.avatarGradient} size={44} />
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-1.5">
              <span className="text-base font-extrabold text-foreground">
                {profile.displayName.toUpperCase()}
              </span>
              {profile.verified && <MVerifiedBadge />}
            </div>
            <span className="text-[13px] font-medium text-[#767676]">@{profile.username}</span>
          </div>
        </div>
        <p className="text-[13px] leading-[140%] text-foreground">{profile.shortTag}</p>
        <Link
          href={`/vault/${currentUsername}`}
          className="flex h-10 w-full items-center justify-center rounded-md bg-foreground text-[13px] font-bold text-white transition-colors hover:bg-[#222222]"
        >
          [ VIEW VAULT → ]
        </Link>
      </MCardBordered>

      <div className="flex w-full flex-col gap-2">
        <MSectionLabel>CONTINUE</MSectionLabel>
        <Link
          href={primaryGame ? `/vault/${currentUsername}/games/${primaryGame.gameSlug}` : `/vault/${currentUsername}/games`}
        >
          <MCardRow>
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-full bg-[#F5F5F5] text-foreground">
                <Play className="size-4" fill="currentColor" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[13px] font-bold text-foreground">BGMI Match Session</span>
                <span className="text-[11px] text-[#767676]">IGL practice · 2 hours ago</span>
              </div>
            </div>
            <ChevronRight className="size-4 text-[#767676]" />
          </MCardRow>
        </Link>
      </div>

      <div className="flex w-full flex-col gap-2">
        <div className="flex items-center justify-between">
          <MSectionLabel>YOUR GAMES</MSectionLabel>
          <Link
            href={`/vault/${currentUsername}/games`}
            className="text-[11px] font-semibold text-accent-blue"
          >
            See all ({games.length})
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {games.map((g) => (
            <Link key={g.gameSlug} href={`/vault/${currentUsername}/games/${g.gameSlug}`}>
              <MGamePill>{g.gameName.toUpperCase()}</MGamePill>
            </Link>
          ))}
          <Link href={`/vault/${currentUsername}/games/add`}>
            <MGamePill className="border-dashed text-[#767676]">+ Add</MGamePill>
          </Link>
        </div>
      </div>

      <div className="flex w-full flex-col gap-2">
        <MSectionLabel>UPCOMING</MSectionLabel>
        <Link href={`/vault/${currentUsername}/competitive`}>
          <MCardBordered className="cursor-pointer">
            <div className="flex w-full items-start justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="size-[18px] text-foreground" strokeWidth={2} />
                <span className="text-sm font-bold text-foreground">Skyesports BGMI Pro Cup</span>
              </div>
              <span className="rounded-sm bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-bold text-emerald-500">
                REGISTERED
              </span>
            </div>
            <span className="text-xs text-[#767676]">Tomorrow, 18:00 IST · Group Stage</span>
          </MCardBordered>
        </Link>
      </div>

      <div className="flex w-full flex-col gap-2">
        <MSectionLabel>RECOMMENDED PROFILES</MSectionLabel>
        <div className="flex w-full items-center justify-between gap-3 rounded-lg border border-[#ECECEC] px-4 py-3">
          <Link href="/vault/mortal" className="flex cursor-pointer items-center gap-2.5">
            <MAvatarCircle
              name="Mortal"
              gradient="linear-gradient(135deg, #FF6B00 0%, #111111 100%)"
              size={36}
            />
            <div className="flex flex-col gap-px">
              <div className="flex items-center gap-1">
                <span className="text-[13px] font-bold text-foreground">MORTAL</span>
                <MVerifiedBadge label="" small />
              </div>
              <span className="text-[11px] text-[#767676]">BGMI Pro · Soul Esports</span>
            </div>
          </Link>
          <MBtnOutlineDark className="h-7 px-2.5 text-[11px]">+ Follow</MBtnOutlineDark>
        </div>
      </div>
    </MobileAppShell>
  );
}
