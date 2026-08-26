"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Bell, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { getProfileByUsername } from "@/lib/mock-data";
import { useSession } from "@/lib/session-context";
import { ProfileMenu } from "@/components/shared/profile-menu";
import { basePath } from "@/lib/base-path";

const BASE_NAV_ITEMS = [
  { label: "Discover", href: "/discover" },
  { label: "Tournaments Hub", href: "/tournaments" },
  { label: "Creator Zone", href: "/creator-zone" },
];

export function AppHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { session, logout } = useSession();

  const navItems = session
    ? [...BASE_NAV_ITEMS, { label: "VAULT+", href: "/vault-identity" }]
    : BASE_NAV_ITEMS;

  const profile = session ? getProfileByUsername(session.username) : undefined;

  function handleSignOut() {
    logout();
    router.push("/");
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image src={`${basePath}/logo.jpeg`} alt="VAULT" width={28} height={28} className="rounded-md" />
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => {
              const active =
                item.label === "Discover" && pathname === "/discover";
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    active
                      ? "font-bold text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            onClick={() => router.push("/discover")}
            className="text-foreground/80 hover:text-foreground"
          >
            <Search className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Notifications"
            className="text-foreground/80 hover:text-foreground"
          >
            <Bell className="size-5" />
          </button>
          {session && profile ? (
            <ProfileMenu
              username={profile.username}
              avatarGradient={profile.avatarGradient}
              initial={profile.displayName.charAt(0).toUpperCase()}
              onSignOut={handleSignOut}
            />
          ) : (
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="text-sm font-semibold text-foreground transition-opacity hover:opacity-75"
              >
                Sign In
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-xs font-bold whitespace-nowrap text-background transition-colors hover:bg-[#222222]"
              >
                Setup your VAULT
              </Link>
            </div>
          )}
        </div>
      </div>
      <nav className="flex items-center gap-5 overflow-x-auto border-t border-border px-4 py-2 lg:hidden">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="shrink-0 text-xs font-semibold whitespace-nowrap text-muted-foreground"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
