import Link from "next/link";
import { Play } from "lucide-react";
import { CreatorPost } from "@/types";

export function ContentThumb({ post }: { post: CreatorPost }) {
  return (
    <Link href={`/creator-zone/content/${post.id}`}>
      <div
        className="relative flex aspect-video items-center justify-center rounded-lg"
        style={{ background: post.coverGradient }}
      >
        {post.mediaType !== "image" && (
          <span className="flex size-10 items-center justify-center rounded-full bg-white/90 text-foreground">
            <Play className="size-3.5 fill-current" />
          </span>
        )}
      </div>
      <div className="mt-2 text-sm font-medium">{post.caption}</div>
    </Link>
  );
}
