import Link from "next/link";
import { cn } from "@/lib/utils";

export function VaultTabsBar({
  username,
  active,
}: {
  username: string;
  active: "Overview" | "Games" | "Competitive" | "Content";
}) {
  const tabs = [
    { label: "Overview", href: `/vault/${username}` },
    { label: "Games", href: `/vault/${username}/games` },
    { label: "Competitive", href: `/vault/${username}/competitive` },
    { label: "Content", href: `/vault/${username}/content` },
  ] as const;

  return (
    <div className="flex w-full items-center gap-1 border-b border-[#ECECEC]">
      {tabs.map((tab) => (
        <Link
          key={tab.label}
          href={tab.href}
          className={cn(
            "border-b-2 px-3 py-2.5 text-[13px] font-bold text-[#767676] transition-colors",
            active === tab.label
              ? "border-foreground text-foreground"
              : "border-transparent hover:text-foreground"
          )}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
}
