import { creatorPosts, currentUsername } from "@/lib/mock-data";

export default function CreatorAnalyticsPage() {
  const myPosts = creatorPosts.filter((p) => p.creatorUsername === currentUsername);
  const totalLikes = myPosts.reduce(
    (sum, p) => sum + (parseFloat(p.likes) || 0) * (p.likes.includes("K") ? 1000 : 1),
    0
  );
  const totalComments = myPosts.reduce((sum, p) => sum + p.commentCount, 0);

  const stats = [
    { label: "Content Posted", value: String(myPosts.length) },
    { label: "Total Likes", value: totalLikes >= 1000 ? `${(totalLikes / 1000).toFixed(1)}K` : String(totalLikes) },
    { label: "Total Comments", value: String(totalComments) },
    { label: "Followers", value: "1.2K" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-black tracking-tight">Analytics</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Performance across your published VAULT content.
      </p>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg border border-border bg-card p-4">
            <div className="text-xs font-medium text-muted-foreground">{stat.label}</div>
            <div className="mt-1 text-2xl font-black">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
