import { Flag } from "lucide-react";
import { HubPageHeader } from "@/components/shared/hub-page-header";
import { EmptyState } from "@/components/shared/empty-state";

export default function LeaguesPage() {
  return (
    <div>
      <HubPageHeader
        title="LEAGUES"
        subtitle="Multi-season competitive ladders hosted across the VAULT network."
      />
      <EmptyState
        icon={Flag}
        title="No leagues published yet"
        description="Certified league organizers can publish season-long ladders here once available."
        ctaLabel="Browse Tournaments"
      />
    </div>
  );
}
