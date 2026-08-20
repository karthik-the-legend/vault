import { creatorDirectory, trendingCreatorGames } from "@/lib/mock-data";
import { DiscoverCreatorsView } from "@/components/features/creator/discover-creators-view";

export default function CreatorsDirectoryPage() {
  return (
    <DiscoverCreatorsView entries={creatorDirectory} trendingGames={trendingCreatorGames} />
  );
}
