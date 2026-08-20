import { User, Gamepad2, Trophy, Star } from "lucide-react";
import { currentUsername, getProfileByUsername } from "@/lib/mock-data";
import { HubPageHeader } from "@/components/shared/hub-page-header";
import { VerifiedDot, VerifiedPill } from "@/components/shared/verified-badge";
import { CredentialStatusPill } from "@/components/features/vault-identity/credential-status-pill";

const RECORDS = [
  { icon: User, label: "Identity Verification", status: "ACTIVE" as const },
  { icon: Gamepad2, label: "Game Profile Verified", status: "ACTIVE" as const },
  { icon: Trophy, label: "Tournament Record", status: "PENDING" as const },
  { icon: Star, label: "Achievements Verified", status: "NOT_ACTIVE" as const },
];

export default function VerificationDetailsPage() {
  const profile = getProfileByUsername(currentUsername);

  return (
    <div>
      <HubPageHeader
        title="VERIFICATION DETAILS"
        subtitle="Live credential and check status review."
      />

      {profile && (
        <div className="flex items-center justify-between gap-3 rounded-lg border border-border bg-card p-5">
          <div className="flex items-center gap-3">
            <span
              className="flex size-12 shrink-0 items-center justify-center rounded-full text-base font-bold text-white"
              style={{ background: profile.avatarGradient }}
            >
              {profile.displayName.charAt(0)}
            </span>
            <div>
              <div className="flex items-center gap-1.5 text-base font-bold">
                {profile.displayName.toUpperCase()}
                {profile.verified && <VerifiedDot />}
              </div>
              <div className="text-xs text-muted-foreground">
                @{profile.username}.vault · Level 42
              </div>
            </div>
          </div>
          <VerifiedPill label="VERIFIED GAMER" />
        </div>
      )}

      <div className="mt-6 text-xs font-bold tracking-wide text-muted-foreground">
        CREDENTIAL RECORD
      </div>
      <div className="mt-3 divide-y divide-border rounded-lg border border-border bg-card">
        {RECORDS.map((record) => {
          const Icon = record.icon;
          const dim = record.status !== "ACTIVE";
          return (
            <div key={record.label} className="flex items-center justify-between gap-3 p-4">
              <span
                className={
                  dim
                    ? "flex items-center gap-2.5 text-sm text-muted-foreground"
                    : "flex items-center gap-2.5 text-sm font-medium"
                }
              >
                <Icon className="size-4" />
                {record.label}
              </span>
              <CredentialStatusPill status={record.status} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
