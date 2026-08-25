import { notFound } from "next/navigation";
import { matchHistory, getAllUsernames, getProfileByUsername } from "@/lib/mock-data";
import { MobileAppShell } from "@/components/layout/mobile-app-shell";
import { MCardRow, MVerifiedBadge } from "@/components/shared/mobile-ui";

export async function generateStaticParams() {
  return getAllUsernames();
}

export default async function CompetitivePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const profile = getProfileByUsername(username);
  if (!profile) notFound();

  const matches = matchHistory[username] ?? [];

  return (
    <MobileAppShell onBack={true} title="COMPETITIVE" headerRight={<span />}>
      <div className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2">
        {matches.map((match) => (
          <MCardRow key={match.id} className="cursor-default hover:border-[#ECECEC] hover:bg-transparent">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-md bg-[#F5F5F5] text-[13px] font-extrabold text-foreground">
                {match.badge ?? match.placement}
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[13px] font-extrabold text-foreground">{match.event}</span>
                <span className="text-[11px] text-[#767676]">
                  {match.game} / {match.placement}
                  {match.team ? ` · ${match.team}` : ""}
                </span>
              </div>
            </div>
            <MVerifiedBadge label="VERIFIED" small />
          </MCardRow>
        ))}
      </div>
    </MobileAppShell>
  );
}
