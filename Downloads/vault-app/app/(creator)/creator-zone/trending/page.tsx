import Link from "next/link";
import { getCreatorPostById, trendingGroups, trendingViewCounts } from "@/lib/mock-data";
import { TrendingCard } from "@/components/features/creator/trending-card";

export default function TrendingPage() {
  return (
    <div className="space-y-10">
      {trendingGroups.map((group) => {
        const posts = group.postIds
          .map(getCreatorPostById)
          .filter((p): p is NonNullable<typeof p> => !!p);

        return (
          <div key={group.game}>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-black tracking-tight">
                {group.heading}
              </h2>
              <Link href="#" className="text-sm font-bold text-blue-600 hover:underline">
                View all
              </Link>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {posts.map((post) => (
                <TrendingCard
                  key={post.id}
                  post={post}
                  views={trendingViewCounts[post.id] ?? ""}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
