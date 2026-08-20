import { Community } from "@/types";

export function CommunityCard({ community }: { community: Community }) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-secondary text-sm font-bold text-secondary-foreground">
            {community.name.charAt(0)}
          </span>
          <div>
            <div className="text-sm font-bold">{community.name}</div>
            <div className="text-xs text-muted-foreground">
              {community.memberCount}
            </div>
          </div>
        </div>
        <span className="shrink-0 rounded-md bg-secondary px-2 py-1 text-[10px] font-semibold tracking-wide text-secondary-foreground">
          GAMING COMMUNITY
        </span>
      </div>

      <p className="mt-3 text-sm text-muted-foreground">
        {community.description}
      </p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {community.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-border px-2 py-0.5 text-[11px] font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      <button className="mt-3 h-9 w-full rounded-md bg-foreground text-sm font-bold text-background">
        View Community
      </button>
    </div>
  );
}
