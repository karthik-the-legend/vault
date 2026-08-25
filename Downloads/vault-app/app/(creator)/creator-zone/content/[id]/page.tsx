import { notFound } from "next/navigation";
import Link from "next/link";
import { Heart, MessageCircle, MoreHorizontal, Play, Send, Share2 } from "lucide-react";
import { creatorPosts, getContentIdParams, getCreatorPostById, getProfileByUsername } from "@/lib/mock-data";
import { VerifiedDot } from "@/components/shared/verified-badge";

export async function generateStaticParams() {
  return getContentIdParams();
}

export default async function ContentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = getCreatorPostById(id);
  if (!post) notFound();

  const creator = getProfileByUsername(post.creatorUsername);
  const moreFromCreator = creatorPosts
    .filter((p) => p.creatorUsername === post.creatorUsername && p.id !== post.id)
    .slice(0, 2);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
      <div>
        <div
          className="relative flex aspect-video items-center justify-center rounded-lg"
          style={{ background: post.coverGradient }}
        >
          {post.mediaType !== "image" && (
            <span className="flex size-14 items-center justify-center rounded-full bg-white/90 text-foreground">
              <Play className="size-5 fill-current" />
            </span>
          )}
          {post.overlayLabel && (
            <span className="absolute bottom-3 left-3 rounded-md bg-black/60 px-2.5 py-1 text-[10px] font-bold tracking-wide text-white">
              {post.overlayLabel}
            </span>
          )}
        </div>

        {moreFromCreator.length > 0 && (
          <div className="mt-8">
            <div className="text-sm font-bold">
              More from {(creator?.displayName ?? post.creatorUsername).toUpperCase()}
            </div>
            <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {moreFromCreator.map((p) => (
                <Link key={p.id} href={`/creator-zone/content/${p.id}`}>
                  <div className="aspect-video rounded-md" style={{ background: p.coverGradient }} />
                  <div className="mt-1.5 text-xs font-bold">{p.caption}</div>
                  <div className="text-[11px] text-muted-foreground">482 views</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <div>
        <div className="flex items-center justify-between">
          <Link href={`/creator-zone/creators/${post.creatorUsername}`} className="flex items-center gap-2.5">
            <span
              className="flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
              style={{ background: creator?.avatarGradient }}
            >
              {(creator?.displayName ?? post.creatorUsername).charAt(0)}
            </span>
            <div>
              <div className="flex items-center gap-1 text-sm font-bold">
                {(creator?.displayName ?? post.creatorUsername).toUpperCase()}
                {creator?.verified && <VerifiedDot />}
              </div>
              <div className="text-[11px] text-muted-foreground">
                {post.game} CREATOR
              </div>
            </div>
          </Link>
          <button className="shrink-0 rounded-md bg-foreground px-3.5 py-1.5 text-xs font-bold text-background">
            Follow
          </button>
        </div>

        <p className="mt-3 text-sm">{post.caption}</p>

        <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Heart className="size-4" />
              {post.likes}
            </span>
            <span className="flex items-center gap-1.5">
              <MessageCircle className="size-4" />
              {post.commentCount}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Share2 className="size-4" />
            <MoreHorizontal className="size-4" />
          </div>
        </div>

        <div className="mt-6 border-t border-border pt-4">
          <div className="text-sm font-bold">Discussion</div>
          <div className="mt-3 space-y-3">
            {post.comments.map((c) => {
              const author = getProfileByUsername(c.authorUsername);
              return (
                <div key={c.id} className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2.5">
                    <span
                      className="flex size-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
                      style={{ background: author?.avatarGradient }}
                    >
                      {(author?.displayName ?? c.authorUsername).charAt(0)}
                    </span>
                    <div>
                      <div className="flex items-center gap-1 text-xs font-bold">
                        {(author?.displayName ?? c.authorUsername).toUpperCase()}
                        {author?.verified && <VerifiedDot />}
                      </div>
                      <div className="text-sm text-muted-foreground">{c.text}</div>
                    </div>
                  </div>
                </div>
              );
            })}
            {post.comments.length === 0 && (
              <div className="text-xs text-muted-foreground">
                No comments yet. Be the first to say something.
              </div>
            )}
          </div>

          <div className="mt-4 flex items-center gap-2">
            <input
              placeholder="Add a comment..."
              className="h-9 flex-1 rounded-md border border-border px-3 text-sm outline-none focus:border-foreground"
            />
            <button
              aria-label="Send comment"
              className="flex size-9 shrink-0 items-center justify-center rounded-md bg-foreground text-background"
            >
              <Send className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
