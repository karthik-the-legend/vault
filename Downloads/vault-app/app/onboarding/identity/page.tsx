"use client";

import { useRouter } from "next/navigation";
import { Camera, CheckCircle2 } from "lucide-react";
import { useOnboarding } from "@/lib/onboarding-context";
import { ROLE_OPTIONS, COUNTRIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function OnboardingIdentityPage() {
  const router = useRouter();
  const {
    accountType,
    displayName,
    setDisplayName,
    username,
    setUsername,
    country,
    setCountry,
    bio,
    setBio,
    role,
    setRole,
  } = useOnboarding();

  const nameLabel = accountType === "GAMER" ? "Display Name" : "Organization Name";

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
        CREATE YOUR IDENTITY
      </h1>

      <div className="mt-8 flex items-center gap-4">
        <button
          type="button"
          className="flex size-16 shrink-0 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground"
        >
          <Camera className="size-5" />
        </button>
        <div>
          <div className="text-sm font-semibold">PROFILE PHOTO</div>
          <div className="text-xs text-muted-foreground">
            Recommended: Square JPG or PNG, max 2MB.
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-5">
        <div>
          <label className="text-xs font-semibold tracking-wide">
            {nameLabel.toUpperCase()}
          </label>
          <input
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder={nameLabel}
            className="mt-1.5 h-11 w-full rounded-md border border-border px-3.5 text-sm outline-none focus:border-foreground"
          />
        </div>

        <div>
          <label className="text-xs font-semibold tracking-wide">
            USERNAME
          </label>
          <div className="relative mt-1.5">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="@username"
              className="h-11 w-full rounded-md border border-border px-3.5 pr-9 text-sm outline-none focus:border-foreground"
            />
            {username.length > 1 && (
              <CheckCircle2 className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-emerald-600" />
            )}
          </div>
          {username.length > 1 && (
            <div className="mt-1 text-xs text-emerald-600">
              Username available
            </div>
          )}
        </div>

        <div>
          <label className="text-xs font-semibold tracking-wide">
            COUNTRY
          </label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="mt-1.5 h-11 w-full rounded-md border border-border bg-background px-3.5 text-sm outline-none focus:border-foreground"
          >
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-xs font-semibold tracking-wide">BIO</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell people about you"
            rows={3}
            className="mt-1.5 w-full resize-none rounded-md border border-border px-3.5 py-2.5 text-sm outline-none focus:border-foreground"
          />
        </div>

        {accountType === "GAMER" && (
          <div>
            <label className="text-xs font-semibold tracking-wide">
              SELECT YOUR MAIN ROLE
            </label>
            <div className="mt-2 flex flex-wrap gap-2">
              {ROLE_OPTIONS.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                    role === r
                      ? "border-foreground bg-foreground text-background"
                      : "border-border hover:border-foreground/40"
                  )}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={() => router.push("/onboarding/games")}
        className="mt-8 h-12 w-full rounded-md bg-foreground text-sm font-bold tracking-wide text-background"
      >
        CONTINUE
      </button>
    </div>
  );
}
