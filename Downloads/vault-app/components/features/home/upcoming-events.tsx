import { EventItem } from "@/types";

export function UpcomingEvents({ events }: { events: EventItem[] }) {
  return (
    <div>
      <div className="text-xs font-bold tracking-wide text-muted-foreground">
        UPCOMING EVENTS
      </div>
      <div className="mt-3 space-y-2">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-start justify-between gap-3 rounded-lg border border-border bg-card p-4"
          >
            <div>
              <div className="text-sm font-bold">{event.title}</div>
              <div className="text-xs text-muted-foreground">
                {event.meta}
              </div>
            </div>
            <span className="shrink-0 rounded-md bg-secondary px-2 py-1 text-[10px] font-semibold tracking-wide text-secondary-foreground">
              {event.badge}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
