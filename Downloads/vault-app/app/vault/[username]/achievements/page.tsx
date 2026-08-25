import { notFound } from "next/navigation";
import { Trophy, Star, Medal, Layers } from "lucide-react";
import { achievements, getAllUsernames, getProfileByUsername } from "@/lib/mock-data";
import { MobileAppShell } from "@/components/layout/mobile-app-shell";
import { MCardRow, MVerifiedBadge } from "@/components/shared/mobile-ui";

export async function generateStaticParams() {
  return getAllUsernames();
}

const CATEGORY_STYLE: Record<string, { bg: string; fg: string; icon: typeof Trophy }> = {
  trophy: { bg: "#FEF3C7", fg: "#D97706", icon: Trophy },
  star: { bg: "#DBEAFE", fg: "#2563EB", icon: Star },
  medal: { bg: "#FEE2E2", fg: "#DC2626", icon: Medal },
  milestone: { bg: "#F3F4F6", fg: "#111111", icon: Layers },
};

export default async function AchievementsPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const profile = getProfileByUsername(username);
  if (!profile) notFound();

  const items = achievements[username] ?? [];

  return (
    <MobileAppShell onBack={true} title="ACHIEVEMENTS" headerRight={<span />}>
      <div className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2">
        {items.map((achievement) => {
          const style = CATEGORY_STYLE[achievement.category ?? "trophy"];
          const Icon = style.icon;
          return (
            <MCardRow key={achievement.id} className="cursor-default hover:border-[#ECECEC] hover:bg-transparent">
              <div className="flex items-center gap-3">
                <div
                  className="flex size-9 items-center justify-center rounded-md"
                  style={{ background: style.bg, color: style.fg }}
                >
                  <Icon className="size-[18px]" strokeWidth={2} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[13px] font-extrabold text-foreground uppercase">
                    {achievement.title}
                  </span>
                  <span className="text-[11px] text-[#767676]">
                    {achievement.result} · {achievement.game} · {achievement.year}
                  </span>
                </div>
              </div>
              <MVerifiedBadge label="VERIFIED" small />
            </MCardRow>
          );
        })}
      </div>
    </MobileAppShell>
  );
}
