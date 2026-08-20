import { cn } from "@/lib/utils";

export function ProfileAvatar({
  name,
  gradient,
  size = "md",
  className,
}: {
  name: string;
  gradient?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}) {
  const sizeClasses = {
    sm: "size-9 text-sm",
    md: "size-11 text-base",
    lg: "size-16 text-xl",
    xl: "size-20 text-2xl",
  };

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full font-bold text-white",
        sizeClasses[size],
        className
      )}
      style={{
        background: gradient ?? "linear-gradient(135deg, #374151, #111827)",
      }}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
}
