"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, User, LogOut, ChevronDown } from "lucide-react";

export function ProfileMenu({
  username,
  avatarGradient,
  initial,
  onSignOut,
}: {
  username: string;
  avatarGradient?: string;
  initial: string;
  onSignOut: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Account menu"
        className="flex items-center gap-1.5 rounded-full transition-opacity hover:opacity-80"
      >
        <span
          className="flex size-9 items-center justify-center rounded-full text-sm font-bold text-white"
          style={{ background: avatarGradient }}
        >
          {initial}
        </span>
        <ChevronDown className="hidden size-3.5 text-muted-foreground lg:block" />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-[2000]" onClick={() => setOpen(false)} />
          <div className="absolute top-full right-0 z-[2100] mt-2 w-56 rounded-md border border-border bg-background py-1.5 shadow-[var(--shadow-modal)]">
            <Link
              href="/discover"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
            >
              <Search className="size-4 text-muted-foreground" />
              Search
            </Link>
            <Link
              href={`/vault/${username}`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
            >
              <User className="size-4 text-muted-foreground" />
              My Profile
            </Link>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onSignOut();
              }}
              className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-sm font-medium text-foreground hover:bg-secondary"
            >
              <LogOut className="size-4 text-muted-foreground" />
              Sign Out
            </button>
          </div>
        </>
      )}
    </div>
  );
}
