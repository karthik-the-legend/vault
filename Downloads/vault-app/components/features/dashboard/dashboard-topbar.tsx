import Link from "next/link";

export function DashboardTopBar({
  title,
  subtitle,
  username,
  actionLabel,
  actionHref,
}: {
  title: string;
  subtitle: string;
  username: string;
  actionLabel?: string;
  actionHref?: string;
}) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div>
        <h1 className="text-2xl font-black tracking-tight">{title}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <Link
          href={`/vault/${username}`}
          className="rounded-md border border-border px-4 py-2 text-sm font-bold"
        >
          View Public VAULT
        </Link>
        {actionLabel && actionHref && (
          <Link
            href={actionHref}
            className="rounded-md bg-foreground px-4 py-2 text-sm font-bold text-background"
          >
            + {actionLabel}
          </Link>
        )}
      </div>
    </div>
  );
}
