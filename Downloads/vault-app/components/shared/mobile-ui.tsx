"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function MSectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] font-bold tracking-[0.5px] text-[#767676] uppercase">
      {children}
    </span>
  );
}

export function MVerifiedBadge({
  label = "VERIFIED GAMER",
  className,
  small,
}: {
  label?: string;
  className?: string;
  small?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-sm border border-accent-blue bg-accent-blue/[0.04] font-bold text-accent-blue uppercase",
        small ? "px-1 py-px text-[8px]" : "px-1.5 py-[3px] text-[9px]",
        className
      )}
    >
      <Check className={small ? "size-2" : "size-2.5"} strokeWidth={3} />
      {label}
    </span>
  );
}

export function MCardBordered({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-start gap-3 rounded-xl border border-[#ECECEC] bg-background p-4 shadow-[0_1px_2px_rgba(17,17,17,0.04)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function MCardRow({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex w-full cursor-pointer items-center justify-between gap-3 rounded-lg border border-[#ECECEC] bg-background px-4 py-3 transition-colors hover:border-foreground hover:bg-secondary",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function MStatItem({
  value,
  label,
}: {
  value: string | number;
  label: string;
}) {
  return (
    <div className="flex flex-1 flex-col items-center gap-0.5 py-1 text-center">
      <span className="text-lg font-extrabold text-foreground">{value}</span>
      <span className="text-[10px] font-semibold text-[#767676] uppercase">{label}</span>
    </div>
  );
}

export function MStatsRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full items-start gap-2 border-t border-b border-[#ECECEC] py-3">
      {children}
    </div>
  );
}

export function MGamePill({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(
        "rounded-full border border-[#ECECEC] px-3.5 py-2 text-xs font-bold text-foreground transition-colors hover:border-foreground",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function MBtnDark({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(
        "flex h-10 items-center justify-center rounded-md bg-foreground px-4 text-[13px] font-bold text-white transition-colors hover:bg-[#222222]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function MBtnLight({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(
        "flex h-10 items-center justify-center rounded-md border border-[#ECECEC] bg-background px-4 text-[13px] font-semibold text-foreground transition-colors hover:border-foreground",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function MBtnOutlineDark({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(
        "flex h-9 items-center justify-center rounded-md border border-foreground px-4 text-[13px] font-bold text-foreground transition-colors hover:bg-secondary",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function MAvatarCircle({
  name,
  gradient,
  size = 44,
  className,
}: {
  name: string;
  gradient?: string;
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden rounded-full font-extrabold text-white",
        className
      )}
      style={{
        width: size,
        height: size,
        fontSize: size * 0.4,
        background: gradient ?? "linear-gradient(135deg, #111111 0%, #333333 100%)",
      }}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
}
