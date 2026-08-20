import { notFound, redirect } from "next/navigation";
import { getProfileByUsername, ownedUsernames, recruitmentOpportunities } from "@/lib/mock-data";
import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const profile = getProfileByUsername(username);

  if (!profile) notFound();
  if (!ownedUsernames.includes(username)) redirect(`/vault/${username}`);
  if (profile.type === "GAMER") redirect(`/vault/${username}`);

  const isClub = profile.type === "ESPORTS_CLUB";
  const openPositions = recruitmentOpportunities[username]?.length ?? 0;

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar
        profile={profile}
        variant={isClub ? "club" : "organizer"}
        portalLabel={isClub ? "Owner Portal" : "Organizer Console"}
        openPositions={openPositions}
      />
      <main className="flex-1 overflow-x-hidden px-6 py-8 sm:px-8">
        {children}
      </main>
    </div>
  );
}
