import { notFound } from "next/navigation";
import { teams, getAllUsernames, getProfileByUsername } from "@/lib/mock-data";
import { MobileAppShell } from "@/components/layout/mobile-app-shell";
import { MSectionLabel } from "@/components/shared/mobile-ui";

export async function generateStaticParams() {
  return getAllUsernames();
}

export default async function TeamsPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const profile = getProfileByUsername(username);
  if (!profile) notFound();

  const allTeams = teams[username] ?? [];
  const current = allTeams.filter((t) => t.isActive);
  const previous = allTeams.filter((t) => !t.isActive);

  return (
    <MobileAppShell onBack={true} title="TEAMS" headerRight={<span />}>
      {current.length > 0 && (
        <div className="flex w-full flex-col gap-2">
          <MSectionLabel>CURRENT TEAM</MSectionLabel>
          {current.map((team) => (
            <div
              key={team.id}
              className="flex w-full items-center justify-between gap-3 rounded-lg border border-foreground px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-md bg-foreground text-sm font-extrabold text-white">
                  {team.logoLabel ?? team.name.charAt(0)}
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-extrabold text-foreground">{team.name}</span>
                  <span className="text-[11px] text-[#767676]">
                    {team.game} · {team.role} · {team.period}
                  </span>
                </div>
              </div>
              <span className="rounded-sm bg-[#F5F5F5] px-1.5 py-0.5 text-[9px] font-bold text-foreground">
                ACTIVE
              </span>
            </div>
          ))}
        </div>
      )}

      {previous.length > 0 && (
        <div className="flex w-full flex-col gap-2">
          <MSectionLabel>PREVIOUS TEAMS</MSectionLabel>
          {previous.map((team) => (
            <div
              key={team.id}
              className="flex w-full items-center gap-3 rounded-lg border border-[#ECECEC] px-4 py-3"
            >
              <div className="flex size-10 items-center justify-center rounded-md bg-[#F5F5F5] text-sm font-extrabold text-foreground">
                {team.logoLabel ?? team.name.charAt(0)}
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-extrabold text-foreground">{team.name}</span>
                <span className="text-[11px] text-[#767676]">
                  {team.game} · {team.role} · {team.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </MobileAppShell>
  );
}
