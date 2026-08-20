import { Play } from "lucide-react";

export function ContinueSessionCard() {
  return (
    <div>
      <div className="text-xs font-bold tracking-wide text-muted-foreground">
        CONTINUE SESSION
      </div>
      <div className="mt-3 flex items-center gap-4 rounded-lg border border-border bg-card p-4">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
          <Play className="size-4 fill-current" />
        </span>
        <div>
          <div className="text-sm font-bold">BGMI Match Session</div>
          <div className="text-xs text-muted-foreground">
            IGL practice session · 2 hours ago · Live recording available
          </div>
        </div>
      </div>
    </div>
  );
}
