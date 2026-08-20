import { Bell, Wallet } from "lucide-react";

export function HubPageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-start justify-between gap-4 border-b border-border pb-6">
      <div>
        <h1 className="font-heading text-2xl font-black tracking-tight sm:text-3xl">
          {title}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
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
