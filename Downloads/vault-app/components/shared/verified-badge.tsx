import { Check, ShieldCheck, ShieldOff } from "lucide-react";
import { cn } from "@/lib/utils";

export function VerifiedDot({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-accent-blue shadow-[0_0_0_2px_var(--background)]",
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
        "inline-flex w-fit items-center gap-1 rounded-sm border border-accent-blue bg-accent-blue/[0.06] px-2 py-[3px] text-[10px] font-bold tracking-[0.04em] text-accent-blue uppercase",
        className
      )}
    >
      <ShieldCheck className="size-2.5" strokeWidth={2.5} />
      {label}
    </span>
  );
}

export function UnverifiedPill({
  label = "UNVERIFIED",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-1 rounded-sm border border-border bg-secondary px-2 py-[3px] text-[10px] font-bold tracking-[0.04em] text-muted-foreground uppercase",
        className
      )}
    >
      <ShieldOff className="size-2.5" strokeWidth={2.5} />
      {label}
    </span>
  );
}
