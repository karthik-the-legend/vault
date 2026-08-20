import { creatorPosts } from "@/lib/mock-data";
import { ContentCard } from "@/components/features/creator/content-card";

export default function ForYouPage() {
  return (
    <div className="mx-auto max-w-xl">
      <h1 className="font-heading text-2xl font-black tracking-tight sm:text-3xl">
        Featured Content
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Traceable game highlights and announcements from verified VAULT creators.
      </p>

      <div className="mt-6 space-y-6">
        {creatorPosts
          .filter((p) => p.isFeatured)
          .map((post) => (
            <ContentCard key={post.id} post={post} />
          ))}
      </div>
    </div>
  );
}
