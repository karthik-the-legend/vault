import { ContentPost } from "@/types";
import { EmptyState } from "@/components/shared/empty-state";
import { Video } from "lucide-react";

export function ClubContentTab({ posts }: { posts: ContentPost[] }) {
  if (posts.length === 0) {
    return (
      <EmptyState
        icon={Video}
        title="No content published yet"
        description="Keep your digital headquarters updated."
        ctaLabel="Add Content"
      />
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="text-sm font-bold">Recent Content</div>
        <div className="text-xs text-muted-foreground">
          {posts.length} Publications
        </div>
      </div>
      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.id} className="overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950 text-white/70">
              ▶
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-bold tracking-wide text-secondary-foreground">
                  {post.category}
                </span>
                <span className="text-[10px] text-muted-foreground">
                  {post.date}
                </span>
              </div>
              <div className="mt-2 text-sm font-bold">{post.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
