import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function SelectableTile({
  eyebrow,
  title,
  description,
  selected,
  onClick,
  className,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex flex-col rounded-lg border p-5 text-left transition-colors",
        selected
          ? "border-2 border-foreground bg-secondary/40"
          : "border-border hover:border-foreground/40",
        className
      )}
    >
      {eyebrow && (
        <span className="text-[11px] font-semibold tracking-wide text-blue-600">
          {eyebrow}
        </span>
      )}
      <span className="mt-1 text-lg font-extrabold">{title}</span>
      <span className="mt-1.5 text-sm text-muted-foreground">
        {description}
      </span>
      {selected && (
        <span className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-600">
          <Check className="size-3.5" strokeWidth={3} />
          SELECTED
        </span>
      )}
    </button>
  );
}
