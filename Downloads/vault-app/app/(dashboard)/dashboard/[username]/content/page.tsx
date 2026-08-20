import { notFound } from "next/navigation";
import {
  clubContent,
  getProfileByUsername,
  organizerContent,
} from "@/lib/mock-data";

export default async function DashboardContentPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const profile = getProfileByUsername(username);
  if (!profile) notFound();

  const posts =
    profile.type === "ESPORTS_CLUB"
      ? clubContent[username] ?? []
      : organizerContent[username] ?? [];

  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-xl font-black tracking-tight">Content</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage published updates, clips and announcements.
          </p>
        </div>
        <button className="shrink-0 rounded-md bg-foreground px-4 py-2 text-sm font-bold text-background">
          + New Post
        </button>
      </div>

      <div className="mt-4 divide-y divide-border rounded-lg border border-border bg-card">
        {posts.map((post) => (
          <div key={post.id} className="flex items-center justify-between gap-3 p-4">
            <div>
              <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-bold tracking-wide text-secondary-foreground">
                {post.category}
              </span>
              <div className="mt-1 text-sm font-bold">{post.title}</div>
              <div className="text-xs text-muted-foreground">{post.date}</div>
            </div>
            <button className="shrink-0 rounded-md border border-border px-3.5 py-1.5 text-xs font-bold">
              Edit
            </button>
          </div>
        ))}
        {posts.length === 0 && (
          <div className="p-8 text-center text-sm text-muted-foreground">
            No content published yet.
          </div>
        )}
      </div>
    </div>
  );
}
