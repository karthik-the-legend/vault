import Link from "next/link";
import { ContentPost } from "@/types";
import { EmptyState } from "@/components/shared/empty-state";
import { Newspaper } from "lucide-react";

export function OrganizerContentTab({ posts }: { posts: ContentPost[] }) {
  if (posts.length === 0) {
    return (
      <EmptyState
        icon={Newspaper}
        title="No announcements yet"
        description="Publish news and highlights to keep your community updated."
        ctaLabel="Add Content"
      />
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="text-sm font-bold">
          Organizer updates &amp; announcements
        </div>
        <Link href="#" className="text-xs font-bold text-accent-blue hover:underline">
          View all news
        </Link>
      </div>
      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {posts.map((post) => (
          <div key={post.id} className="overflow-hidden rounded-lg border border-border bg-card">
            <div
              className="flex aspect-video items-center justify-center text-white/20"
              style={{
                background: "radial-gradient(circle at 30% 70%, #1e1b4b, #020617 70%)",
              }}
            >
              <Newspaper className="size-7" strokeWidth={1.5} />
            </div>
            <div className="p-3">
              <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-bold tracking-wide text-secondary-foreground">
                {post.category}
              </span>
              <div className="mt-2 text-sm font-bold">{post.title}</div>
              <div className="mt-1 text-[10px] text-muted-foreground">
                {post.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
