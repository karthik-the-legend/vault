"use client";

import { useState } from "react";
import Link from "next/link";
import { Profile, RelationshipState } from "@/types";
import { ProfileAvatar } from "@/components/shared/profile-avatar";
import { VerifiedDot } from "@/components/shared/verified-badge";

const RELATIONSHIP_LABEL: Record<RelationshipState, string> = {
  following: "Following",
  follow_back: "Follow Back",
  connected: "Connected",
};

export function NetworkListRow({
  profile,
  relationship,
}: {
  profile: Profile;
  relationship: RelationshipState;
}) {
  const [state, setState] = useState(relationship);
  const isConnected = relationship === "connected";
  const isActionable = state === "follow_back";

  return (
    <div className="flex items-center justify-between gap-3 p-4">
      <Link href={`/vault/${profile.username}`} className="flex items-center gap-3">
        <ProfileAvatar
          name={profile.displayName}
          gradient={profile.avatarGradient}
          size="sm"
        />
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-bold">{profile.displayName}</span>
            {profile.verified && <VerifiedDot />}
          </div>
          <div className="text-xs text-muted-foreground">
            @{profile.username} · {profile.shortTag}
          </div>
        </div>
      </Link>
      <div className="flex shrink-0 flex-col items-end gap-1.5">
        {profile.verified && (
          <span className="hidden rounded-md bg-secondary px-2 py-0.5 text-[10px] font-semibold tracking-wide text-secondary-foreground sm:inline-block">
            VERIFIED {profile.typeLabel}
          </span>
        )}
        <button
          type="button"
          disabled={isConnected}
          onClick={() => setState("following")}
          className={
            isActionable
              ? "rounded-md bg-foreground px-3.5 py-1.5 text-xs font-bold text-background"
              : "rounded-md border border-border px-3.5 py-1.5 text-xs font-bold disabled:opacity-100"
          }
        >
          {RELATIONSHIP_LABEL[state]}
        </button>
      </div>
    </div>
  );
}
