"use client";

import { useState } from "react";
import { Lock } from "lucide-react";

export function PrivateVaultState() {
  const [following, setFollowing] = useState(false);

  return (
    <div className="flex flex-col items-center rounded-lg border border-border bg-card p-12 text-center">
      <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-muted-foreground">
        <Lock className="size-5" />
      </span>
      <div className="mt-4 text-base font-bold tracking-wide">
        PRIVATE VAULT
      </div>
      <p className="mt-1 max-w-xs text-sm text-muted-foreground">
        This gamer&apos;s vault is private.
        <br />
        Follow this gamer to see more.
      </p>
      <button
        type="button"
        onClick={() => setFollowing((v) => !v)}
        className={
          following
            ? "mt-4 rounded-md border border-border px-5 py-2 text-sm font-bold"
            : "mt-4 rounded-md bg-foreground px-5 py-2 text-sm font-bold text-background"
        }
      >
        {following ? "Requested" : "Follow"}
      </button>
    </div>
  );
}
