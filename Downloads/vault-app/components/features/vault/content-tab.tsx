import { ContentItem } from "@/types";

export function ContentTab({ items }: { items: ContentItem[] }) {
  if (items.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
        No content added yet.
      </div>
    );
  }

  return (
    <div>
      <div className="text-xs font-bold tracking-wide text-muted-foreground">
        CONTENT
      </div>
      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-lg border border-border bg-card"
          >
            <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950 text-white/70">
              ▶
            </div>
            <div className="p-3">
              <div className="text-sm font-bold">{item.title}</div>
              <div className="text-xs text-muted-foreground">{item.meta}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
