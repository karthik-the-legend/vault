import { followingList } from "@/lib/mock-data";
import { NetworkListPage } from "@/components/features/discover/network-list-page";

export default function FollowingPage() {
  return (
    <NetworkListPage
      title="FOLLOWING"
      countLabel="89 Following"
      entries={followingList}
      showTypeTabs
    />
  );
}
