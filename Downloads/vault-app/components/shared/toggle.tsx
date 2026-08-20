import { cn } from "@/lib/utils";

export function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      {label && <span className="text-xs font-semibold">{label}</span>}
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className={cn(
          "flex h-6 w-11 shrink-0 items-center rounded-full px-0.5 transition-colors",
          checked ? "justify-end bg-foreground" : "justify-start bg-secondary"
        )}
      >
        <span className="size-5 rounded-full bg-background shadow" />
      </button>
    </div>
  );
}
