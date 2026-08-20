import { LucideIcon } from "lucide-react";

export function EmptyState({
  icon: Icon,
  title,
  description,
  ctaLabel,
  onCta,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  ctaLabel: string;
  onCta?: () => void;
}) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-border bg-card p-10 text-center">
      <span className="flex size-12 items-center justify-center rounded-full bg-foreground text-background">
        <Icon className="size-5" />
      </span>
      <div className="mt-4 text-sm font-bold">{title}</div>
      <p className="mt-1 max-w-xs text-xs text-muted-foreground">
        {description}
      </p>
      <button
        type="button"
        onClick={onCta}
        className="mt-4 rounded-md bg-foreground px-4 py-2 text-xs font-bold text-background"
      >
        {ctaLabel}
      </button>
    </div>
  );
}
