import { followersList } from "@/lib/mock-data";
import { NetworkListPage } from "@/components/features/discover/network-list-page";

export default function FollowersPage() {
  return (
    <NetworkListPage
      title="FOLLOWERS"
      countLabel="142 Followers"
      entries={followersList}
    />
  );
}
