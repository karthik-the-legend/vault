"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Bell, Search, Home, Compass, Shield, MoreHorizontal } from "lucide-react";
import { currentUsername, getProfileByUsername } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "HOME", href: "/home", icon: Home },
  { label: "DISCOVER", href: "/discover", icon: Compass },
  { label: "VAULT", href: `/vault/${currentUsername}`, icon: Shield },
];

export function MobileAppShell({
  title = "VAULT",
  children,
  onBack,
  headerRight,
  bare,
}: {
  title?: string;
  children: React.ReactNode;
  onBack?: (() => void) | true;
  headerRight?: React.ReactNode;
  bare?: boolean;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const profile = getProfileByUsername(currentUsername);

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[480px] flex-col border-x border-border bg-background font-figtree">
      {bare ? null : (
        <header className="flex min-h-12 w-full items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            {onBack ? (
              <button
                type="button"
                onClick={onBack === true ? () => router.back() : onBack}
                aria-label="Back"
                className="text-foreground transition-opacity hover:opacity-70"
              >
                ←
              </button>
            ) : null}
            <span className="text-lg font-extrabold text-foreground">{title}</span>
          </div>
          {headerRight !== undefined ? (
            headerRight
          ) : (
            <div className="flex items-center gap-3.5">
              <Link
                href="/discover"
                aria-label="Search"
                className="text-foreground transition-opacity hover:opacity-70"
              >
                <Search className="size-5" strokeWidth={2.2} />
              </Link>
              <button
                type="button"
                aria-label="Notifications"
                className="text-foreground transition-opacity hover:opacity-70"
              >
                <Bell className="size-5" strokeWidth={2.2} />
              </button>
              <Link
                href={`/vault/${currentUsername}`}
                aria-label="Your profile"
                className="flex size-7 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ background: profile?.avatarGradient }}
              >
                {profile?.displayName.charAt(0)}
              </Link>
            </div>
          )}
        </header>
      )}

      <main className="flex flex-1 flex-col gap-4 px-6 pb-6">{children}</main>

      <div className="sticky bottom-0 flex w-full flex-col border-t border-[#ECECEC] bg-background">
        <div className="flex h-[50px] w-full items-center justify-between px-4 pt-2 pb-1">
          {NAV_ITEMS.map((item) => {
            const active =
              item.href === "/home" ? pathname === "/home" : pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "flex w-20 flex-col items-center gap-1 text-[10px] font-medium text-[#767676] transition-colors",
                  active && "font-bold text-foreground"
                )}
              >
                <Icon className="size-5" strokeWidth={2} fill={active ? "currentColor" : "none"} />
                {item.label}
              </Link>
            );
          })}
          <button
            type="button"
            onClick={() => router.push("/more")}
            className="flex w-20 flex-col items-center gap-1 text-[10px] font-medium text-[#767676] transition-colors hover:text-foreground"
          >
            <MoreHorizontal className="size-5" strokeWidth={2} />
            MORE
          </button>
        </div>
        <div className="flex justify-center pb-2">
          <div className="h-1 w-32 rounded-full bg-[#111111]" />
        </div>
      </div>
    </div>
  );
}
