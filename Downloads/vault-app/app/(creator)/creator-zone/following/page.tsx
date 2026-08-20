import Link from "next/link";
import {
  creatorPosts,
  currentUsername,
  followingList,
  getProfileByUsername,
} from "@/lib/mock-data";
import { ContentCard } from "@/components/features/creator/content-card";
import { EmptyState } from "@/components/shared/empty-state";
import { Users2 } from "lucide-react";

const SUGGESTED = ["sayyara", "hydra_gaming", "viper_fps"];

export default function FollowingPage() {
  const followedUsernames = new Set([
    currentUsername,
    ...followingList.map((f) => f.profileId),
  ]);
  const posts = creatorPosts.filter((p) => followedUsernames.has(p.creatorUsername));

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full max-w-xl space-y-6 lg:mx-0">
        {posts.length === 0 ? (
          <EmptyState
            icon={Users2}
            title="No Following Content"
            description="Follow certified gaming creators to construct your specialized activity feed."
            ctaLabel="Discover Creators"
          />
        ) : (
          posts.map((post) => <ContentCard key={post.id} post={post} />)
        )}
      </div>

      <div className="h-fit rounded-lg border border-border bg-card p-4">
        <div className="text-sm font-bold">Follow more creators</div>
        <p className="mt-1 text-xs text-muted-foreground">
          Follow verified VAULT players to fill your feed with clean, personalized gameplay highlights.
        </p>
        <div className="mt-3 space-y-3">
          {SUGGESTED.map((username) => {
            const p = getProfileByUsername(username);
            if (!p) return null;
            return (
              <div key={username} className="flex items-center justify-between gap-2">
                <Link href={`/creator-zone/creators/${username}`} className="flex items-center gap-2">
                  <span
                    className="flex size-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
                    style={{ background: p.avatarGradient }}
                  >
                    {p.displayName.charAt(0)}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-bold">
                    {p.displayName.toUpperCase()}
                  </span>
                </Link>
                <button className="rounded-md bg-foreground px-2.5 py-1 text-[11px] font-bold text-background">
                  Follow
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
