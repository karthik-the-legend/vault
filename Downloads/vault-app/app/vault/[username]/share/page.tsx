"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import { getProfileByUsername } from "@/lib/mock-data";
import { MobileAppShell } from "@/components/layout/mobile-app-shell";
import { MVerifiedBadge, MCardBordered, MAvatarCircle, MBtnDark, MBtnLight } from "@/components/shared/mobile-ui";

export default function ShareVaultPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = use(params);
  const profile = getProfileByUsername(username);
  if (!profile) notFound();

  const [copied, setCopied] = useState(false);
  const link = `vault.example/@${username}`;

  return (
    <MobileAppShell onBack={true} title="SHARE VAULT" headerRight={<span />}>
      <MCardBordered className="items-center gap-3.5 text-center">
        <MAvatarCircle name={profile.displayName} gradient={profile.avatarGradient} size={64} />
        <div className="flex flex-col items-center gap-0.5">
          <div className="flex items-center gap-1.5">
            <span className="text-lg font-extrabold text-foreground">
              {profile.displayName.toUpperCase()}
            </span>
            {profile.verified && <MVerifiedBadge />}
          </div>
          <span className="text-[13px] text-[#767676]">@{username}</span>
        </div>

        <div className="flex size-[172px] items-center justify-center rounded-lg border border-[#ECECEC] bg-white p-4">
          <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
            <rect width="140" height="140" fill="white" />
            <rect x="10" y="10" width="40" height="40" rx="4" fill="#111111" />
            <rect x="18" y="18" width="24" height="24" rx="2" fill="white" />
            <rect x="24" y="24" width="12" height="12" rx="1" fill="#111111" />
            <rect x="90" y="10" width="40" height="40" rx="4" fill="#111111" />
            <rect x="98" y="18" width="24" height="24" rx="2" fill="white" />
            <rect x="104" y="24" width="12" height="12" rx="1" fill="#111111" />
            <rect x="10" y="90" width="40" height="40" rx="4" fill="#111111" />
            <rect x="18" y="98" width="24" height="24" rx="2" fill="white" />
            <rect x="24" y="104" width="12" height="12" rx="1" fill="#111111" />
            <rect x="60" y="20" width="8" height="8" fill="#111111" />
            <rect x="75" y="20" width="8" height="8" fill="#111111" />
            <rect x="60" y="35" width="8" height="8" fill="#111111" />
            <rect x="20" y="60" width="8" height="8" fill="#111111" />
            <rect x="35" y="60" width="8" height="8" fill="#111111" />
            <rect x="60" y="60" width="20" height="20" rx="4" fill="#111111" />
            <rect x="90" y="60" width="8" height="8" fill="#111111" />
            <rect x="105" y="60" width="8" height="8" fill="#111111" />
            <rect x="120" y="60" width="8" height="8" fill="#111111" />
            <rect x="60" y="90" width="8" height="8" fill="#111111" />
            <rect x="75" y="105" width="8" height="8" fill="#111111" />
            <rect x="90" y="90" width="16" height="8" fill="#111111" />
            <rect x="110" y="100" width="12" height="12" fill="#111111" />
            <rect x="95" y="120" width="8" height="8" fill="#111111" />
            <rect x="115" y="120" width="10" height="10" fill="#111111" />
          </svg>
        </div>

        <div className="w-full rounded-md border border-[#ECECEC] bg-secondary px-4 py-2 font-mono text-[13px] text-foreground">
          {link}
        </div>
      </MCardBordered>

      <div className="flex w-full flex-col gap-2">
        <MBtnDark
          className="w-full"
          onClick={() => {
            navigator.clipboard?.writeText(`https://${link}`);
            setCopied(true);
          }}
        >
          {copied ? "Copied!" : "Copy Profile Link"}
        </MBtnDark>
        <MBtnLight className="w-full">Share via...</MBtnLight>
      </div>
    </MobileAppShell>
  );
}
