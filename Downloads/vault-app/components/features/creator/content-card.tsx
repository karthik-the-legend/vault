import Link from "next/link";
import { Heart, MessageCircle, Play, Share2 } from "lucide-react";
import { CreatorPost } from "@/types";
import { getProfileByUsername } from "@/lib/mock-data";
import { VerifiedDot } from "@/components/shared/verified-badge";

export function ContentCard({ post }: { post: CreatorPost }) {
  const creator = getProfileByUsername(post.creatorUsername);

  return (
    <div className="rounded-lg border border-border bg-card">
      <div className="flex items-center justify-between p-4 pb-3">
        <Link href={`/creator-zone/creators/${post.creatorUsername}`} className="flex items-center gap-2">
          <span
            className="flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
            style={{ background: creator?.avatarGradient }}
          >
            {(creator?.displayName ?? post.creatorUsername).charAt(0).toUpperCase()}
          </span>
          <span className="flex items-center gap-1 text-sm font-bold">
            {(creator?.displayName ?? post.creatorUsername).toUpperCase()}
            {creator?.verified && <VerifiedDot />}
          </span>
        </Link>
        <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold tracking-wide text-muted-foreground">
          {post.game}
        </span>
      </div>

      <Link href={`/creator-zone/content/${post.id}`}>
        <div
          className="relative flex aspect-video items-center justify-center"
          style={{ background: post.coverGradient }}
        >
          {post.overlayLabel && (
            <span className="absolute bottom-3 left-3 rounded-md bg-black/60 px-2.5 py-1 text-[10px] font-bold tracking-wide text-white">
              {post.overlayLabel}
            </span>
          )}
          {post.mediaType !== "image" && (
            <span className="flex size-11 items-center justify-center rounded-full bg-white/90 text-foreground">
              <Play className="size-4 fill-current" />
            </span>
          )}
        </div>
      </Link>

      <div className="px-4 pt-3 text-sm">{post.caption}</div>

      <div className="flex items-center justify-between px-4 py-3 text-sm text-muted-foreground">
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
        <Share2 className="size-4" />
      </div>
    </div>
  );
}
