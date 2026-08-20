import { Suspense } from "react";
import { SearchResultsView } from "@/components/features/discover/search-results-view";

export default function SearchResultsPage() {
  return (
    <Suspense fallback={null}>
      <SearchResultsView />
    </Suspense>
  );
}
