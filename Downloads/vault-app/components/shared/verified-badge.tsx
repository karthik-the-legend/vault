import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function VerifiedDot({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-blue-600",
        className
      )}
    >
      <Check className="size-2.5 text-white" strokeWidth={3.5} />
    </span>
  );
}

export function VerifiedPill({
  label = "VERIFIED",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-blue-600 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-blue-600",
        className
      )}
    >
      <Check className="size-3" strokeWidth={3} />
      {label}
    </span>
  );
}
