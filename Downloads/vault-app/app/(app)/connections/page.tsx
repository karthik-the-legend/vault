import { connectionsList } from "@/lib/mock-data";
import { NetworkListPage } from "@/components/features/discover/network-list-page";

export default function ConnectionsPage() {
  return (
    <NetworkListPage
      title="CONNECTIONS"
      countLabel="34 Connections"
      description="People and organizations you have a mutual professional/gaming relationship with."
      entries={connectionsList}
    />
  );
}
