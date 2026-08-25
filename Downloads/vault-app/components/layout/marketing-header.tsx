"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogIn, Menu, X } from "lucide-react";
import { useLandingModals } from "@/lib/landing-modals-context";
import { useSession } from "@/lib/session-context";
import { getProfileByUsername } from "@/lib/mock-data";
import { ProfileMenu } from "@/components/shared/profile-menu";
import { cn } from "@/lib/utils";

const BASE_NAV_LINKS = [
  { label: "Discover", href: "/discover" },
  { label: "Tournaments", href: "/tournaments" },
  { label: "Creator Zone", href: "/creator-zone" },
];

export function MarketingHeader() {
  const { openAuth, openSetup } = useLandingModals();
  const { session, logout } = useSession();
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = session
    ? [...BASE_NAV_LINKS, { label: "VAULT+", href: "#vault-plus" }]
    : BASE_NAV_LINKS;

  const profile = session ? getProfileByUsername(session.username) : undefined;

  function handleSignOut() {
    logout();
    router.push("/");
  }

  return (
    <header className="sticky top-0 z-40 flex h-[88px] w-full items-center justify-between border-b border-border bg-background px-6 sm:px-10 lg:px-20">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open navigation menu"
          className="flex size-8 items-center justify-center rounded-sm text-foreground transition-colors hover:bg-secondary lg:hidden"
        >
          <Menu className="size-[18px]" strokeWidth={2.2} />
        </button>
        <Link href="/" className="text-[22px] font-extrabold tracking-[-0.02em] text-foreground">
          VAULT
        </Link>
      </div>

      <nav aria-label="Main Navigation" className="hidden lg:block">
        <ul className="flex list-none items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:font-semibold hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hidden items-center gap-6 lg:flex">
        {session && profile ? (
          <ProfileMenu
            username={profile.username}
            avatarGradient={profile.avatarGradient}
            initial={profile.displayName.charAt(0).toUpperCase()}
            onSignOut={handleSignOut}
          />
        ) : (
          <>
            <button
              type="button"
              onClick={openAuth}
              className="inline-flex items-center text-sm font-semibold text-foreground transition-opacity hover:opacity-75"
            >
              <LogIn className="mr-1 size-[15px]" strokeWidth={2.5} />
              Sign In
            </button>
            <button
              type="button"
              onClick={openSetup}
              className="inline-flex items-center justify-center rounded-sm bg-foreground px-5 py-3 text-[13px] font-bold whitespace-nowrap text-background transition-[transform,box-shadow,background-color] duration-150 hover:-translate-y-px hover:bg-[#222222] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
            >
              Setup your VAULT
            </button>
          </>
        )}
      </div>

      {/* Mobile header actions */}
      <div className="flex items-center gap-4 lg:hidden">
        {session && profile ? (
          <ProfileMenu
            username={profile.username}
            avatarGradient={profile.avatarGradient}
            initial={profile.displayName.charAt(0).toUpperCase()}
            onSignOut={handleSignOut}
          />
        ) : (
          <button
            type="button"
            onClick={openAuth}
            className="inline-flex items-center rounded-sm border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Sign In
          </button>
        )}
      </div>

      {drawerOpen && (
        <div
          className="fixed inset-0 z-[2100] bg-[rgba(17,17,17,0.6)] backdrop-blur-sm lg:hidden"
          onClick={() => setDrawerOpen(false)}
        >
          <aside
            className={cn("flex h-full w-[85vw] max-w-[320px] flex-col gap-1 bg-background p-6")}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-lg font-extrabold text-foreground">VAULT</span>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
                className="flex size-8 items-center justify-center rounded-sm text-muted-foreground hover:bg-secondary"
              >
                <X className="size-4" />
              </button>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                className="rounded-sm px-2 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
              {session ? (
                <button
                  type="button"
                  onClick={() => {
                    setDrawerOpen(false);
                    handleSignOut();
                  }}
                  className="rounded-sm border border-border px-4 py-3 text-sm font-semibold text-foreground"
                >
                  Sign Out
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setDrawerOpen(false);
                    openSetup();
                  }}
                  className="rounded-sm bg-foreground px-4 py-3 text-sm font-bold text-background"
                >
                  Setup your VAULT
                </button>
              )}
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
