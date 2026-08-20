import { notFound } from "next/navigation";
import { applicants, getProfileByUsername, recruitmentOpportunities } from "@/lib/mock-data";
import { RecruitmentManager } from "@/components/features/dashboard/recruitment-manager";

export default async function DashboardRecruitmentPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const profile = getProfileByUsername(username);
  if (!profile) notFound();

  return (
    <RecruitmentManager
      opportunities={recruitmentOpportunities[username] ?? []}
      applicantsByOpportunity={applicants}
    />
  );
}
