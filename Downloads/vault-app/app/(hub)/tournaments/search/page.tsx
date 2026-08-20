import { Suspense } from "react";
import { TournamentSearchResults } from "@/components/features/tournaments/tournament-search-results";

export default function TournamentSearchPage() {
  return (
    <Suspense fallback={null}>
      <TournamentSearchResults />
    </Suspense>
  );
}
