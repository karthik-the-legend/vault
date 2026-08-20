import Link from "next/link";
import { CreatorPost } from "@/types";
import { getProfileByUsername } from "@/lib/mock-data";
import { VerifiedDot } from "@/components/shared/verified-badge";

export function TrendingCard({
  post,
  views,
}: {
  post: CreatorPost;
  views: string;
}) {
  const creator = getProfileByUsername(post.creatorUsername);

  return (
    <Link href={`/creator-zone/content/${post.id}`} className="block">
      <div
        className="aspect-video rounded-lg"
        style={{ background: post.coverGradient }}
      />
      <div className="mt-2 text-sm font-bold">{post.caption}</div>
      <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">
          {(creator?.displayName ?? post.creatorUsername).toUpperCase()}
        </span>
        {creator?.verified && <VerifiedDot />}
      </div>
      <div className="text-xs text-muted-foreground">{views}</div>
    </Link>
  );
}
