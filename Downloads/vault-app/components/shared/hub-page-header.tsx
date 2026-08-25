import { Bell, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

export function HubPageHeader({
  title,
  subtitle,
  size = "md",
}: {
  title: string;
  subtitle: string;
  size?: "md" | "lg";
}) {
  return (
    <div
      className={cn(
        "mb-8 flex flex-wrap items-start justify-between gap-4 border-b border-border",
        size === "lg" ? "pb-8" : "pb-6"
      )}
    >
      <div>
        <h1
          className={cn(
            "font-heading font-black tracking-tight",
            size === "lg"
              ? "text-4xl sm:text-5xl"
              : "text-2xl sm:text-3xl"
          )}
        >
          {title}
        </h1>
        <p
          className={cn(
            "mt-1 text-muted-foreground",
            size === "lg" ? "text-base" : "text-sm"
          )}
        >
          {subtitle}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        <button
          type="button"
          aria-label="Notifications"
          className="flex size-9 items-center justify-center rounded-full border border-border text-foreground/80 hover:text-foreground"
        >
          <Bell className="size-4" />
        </button>
        <button
          type="button"
          className="flex h-9 items-center gap-2 rounded-full border border-border px-4 text-xs font-bold"
        >
          <Wallet className="size-3.5" />
          CONNECT WALLET
        </button>
      </div>
    </div>
  );
}
