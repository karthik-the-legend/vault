"use client";

import { useState } from "react";
import { Profile } from "@/types";
import { VerifiedDot } from "@/components/shared/verified-badge";
import { ShareProfileModal } from "@/components/shared/share-profile-modal";

export function OrganizerProfileHeader({
  profile,
  isOwner,
}: {
  profile: Profile;
  isOwner: boolean;
}) {
  const [following, setFollowing] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card">
      <div
        className="h-32 w-full sm:h-40"
        style={{
          background:
            "repeating-linear-gradient(45deg, #0a0a0a, #0a0a0a 2px, #262626 2px, #262626 36px)",
        }}
      />
      <div className="px-5 pb-5 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-end gap-4">
            <div
              className="-mt-10 flex size-20 shrink-0 items-center justify-center rounded-xl border-4 border-card text-2xl font-black text-white sm:-mt-12 sm:size-24"
              style={{ background: profile.avatarGradient }}
            >
              {profile.displayName.charAt(0).toUpperCase()}
            </div>
            <div className="pb-1">
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-tight">
                  {profile.displayName.toUpperCase()}
                </span>
                {profile.verified && <VerifiedDot />}
              </div>
              <div className="text-sm text-muted-foreground">
                {profile.shortTag}
              </div>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2 pb-1">
            <button
              type="button"
              onClick={() => setShareOpen(true)}
              className="rounded-md border border-border px-4 py-2 text-sm font-bold"
            >
              Share Profile
            </button>
            {isOwner ? (
              <a
                href={`/dashboard/${profile.username}`}
                className="rounded-md bg-foreground px-4 py-2 text-sm font-bold text-background"
              >
                Dashboard
              </a>
            ) : (
              <button
                type="button"
                onClick={() => setFollowing((v) => !v)}
                className={
                  following
                    ? "rounded-md border border-border px-4 py-2 text-sm font-bold"
                    : "rounded-md bg-foreground px-4 py-2 text-sm font-bold text-background"
                }
              >
                {following ? "Following" : "Follow"}
              </button>
            )}
          </div>
        </div>
      </div>

      <ShareProfileModal
        open={shareOpen}
        onClose={() => setShareOpen(false)}
        username={profile.username}
      />
    </div>
  );
}
