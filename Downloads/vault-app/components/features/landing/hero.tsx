"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { profiles, getProfileByUsername } from "@/lib/mock-data";
import { ProfilePreviewCard } from "@/components/features/profile-preview-card";
import { useLandingModals } from "@/lib/landing-modals-context";
import { useSession } from "@/lib/session-context";

const HERO_ATTRIBUTES = [
  { label: "PRIMARY GAME", value: "BGMI" },
  { label: "RANK", value: "CONQUEROR" },
  { label: "ROLE", value: "IGL" },
];

export function Hero() {
  const { openSetup } = useLandingModals();
  const { session } = useSession();

  const featured = session ? (getProfileByUsername(session.username) ?? profiles[0]) : profiles[0];
  const attributes = !session || session.accountType === "GAMER" ? HERO_ATTRIBUTES : undefined;

  return (
    <section
      id="hero"
      className="flex w-full flex-col items-center justify-between gap-12 px-6 py-16 sm:px-10 lg:min-h-[682px] lg:flex-row lg:px-20 lg:py-24"
    >
      <div className="flex w-full max-w-[580px] flex-col items-start gap-8">
        <div className="flex w-full flex-col items-start gap-4">
          <span className="text-sm font-extrabold tracking-[0.05em] text-foreground uppercase">
            VAULT
          </span>
          <h1 className="font-heading text-5xl leading-[1.05] font-black tracking-[-0.03em] text-foreground sm:text-6xl lg:text-7xl">
            YOUR GAMING IDENTITY.
          </h1>
          <p className="max-w-[580px] text-lg leading-[150%] text-muted-foreground">
            One unified profile for your games, achievements, tournaments and
            opportunities.
          </p>
        </div>

        <div className="flex items-center gap-6">
          {session ? (
            <Link
              href={`/vault/${session.username}`}
              className="inline-flex items-center justify-center rounded-sm bg-foreground px-7 py-4 text-sm font-bold text-background transition-[transform,box-shadow,background-color] duration-150 hover:-translate-y-0.5 hover:bg-[#222222] hover:shadow-[0_8px_20px_rgba(0,0,0,0.18)]"
            >
              View My Vault
            </Link>
          ) : (
            <button
              type="button"
              onClick={openSetup}
              className="inline-flex items-center justify-center rounded-sm bg-foreground px-7 py-4 text-sm font-bold text-background transition-[transform,box-shadow,background-color] duration-150 hover:-translate-y-0.5 hover:bg-[#222222] hover:shadow-[0_8px_20px_rgba(0,0,0,0.18)]"
            >
              Create your VAULT
            </button>
          )}
          <Link
            href="/discover"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-foreground transition-transform duration-150 hover:translate-x-1"
          >
            Explore VAULT
            <ArrowRight className="size-3.5" strokeWidth={2.5} />
          </Link>
        </div>

        <p className="text-[13px] text-[color:var(--text-muted)]">
          Built for gamers, esports clubs and league organizers.
        </p>
      </div>

      <div className="w-full max-w-[440px]">
        <ProfilePreviewCard profile={featured} attributes={attributes} />
      </div>
    </section>
  );
}
