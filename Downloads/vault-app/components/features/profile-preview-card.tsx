import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Profile } from "@/types";
import { ProfileAvatar } from "@/components/shared/profile-avatar";
import { VerifiedDot, VerifiedPill, UnverifiedPill } from "@/components/shared/verified-badge";

export function ProfilePreviewCard({
  profile,
  attributes,
}: {
  profile: Profile;
  attributes?: { label: string; value: string }[];
}) {
  return (
    <article className="flex w-full flex-col items-start gap-5 rounded-lg border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-[#D1D5DB] hover:shadow-[var(--shadow-card-hover)]">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-3">
          <ProfileAvatar
            name={profile.displayName}
            gradient={profile.avatarGradient}
            size="md"
          />
          <div className="flex flex-col items-start gap-0.5">
            <div className="flex items-center gap-1.5">
              <span className="text-base font-bold text-foreground">
                {profile.displayName.toUpperCase()}
              </span>
              {profile.verified && <VerifiedDot />}
            </div>
            <span className="text-[13px] text-muted-foreground">
              @{profile.username}
            </span>
          </div>
        </div>
        <span className="shrink-0 rounded-sm border border-border bg-secondary px-2 py-1 text-[11px] font-semibold tracking-[0.02em] text-muted-foreground uppercase">
          {profile.typeLabel}
        </span>
      </div>

      {profile.verified ? <VerifiedPill /> : <UnverifiedPill />}

      <p className="text-sm text-muted-foreground">{profile.shortTag}</p>

      <hr className="w-full border-border" />

      {attributes && (
        <>
          <div className="flex w-full flex-col gap-2.5">
            {attributes.map((attr) => (
              <div key={attr.label} className="flex w-full items-center justify-between">
                <span className="text-[11px] font-semibold tracking-[0.04em] text-[color:var(--text-muted)] uppercase">
                  {attr.label}
                </span>
                <span className="text-[13px] font-semibold text-foreground">
                  {attr.value}
                </span>
              </div>
            ))}
          </div>
          <hr className="w-full border-border" />
        </>
      )}

      <div className="flex w-full items-start justify-between">
        {profile.stats.map((stat) => (
          <div key={stat.label} className="flex flex-1 flex-col items-start gap-1">
            <span className="text-lg font-bold text-foreground">{stat.value}</span>
            <span className="text-[11px] font-semibold tracking-[0.02em] text-muted-foreground uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <hr className="w-full border-border" />

      <div className="flex w-full flex-wrap items-start gap-2">
        {profile.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-sm bg-secondary px-2 py-1 text-[11px] font-medium tracking-[0.02em] text-muted-foreground transition-colors hover:bg-[#ECEFF1] hover:text-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex w-full items-center pt-2">
        <Link
          href={`/vault/${profile.username}`}
          className="inline-flex items-center gap-1.5 text-[13px] font-bold text-foreground transition-[transform,color] hover:translate-x-1 hover:text-accent-blue"
        >
          VIEW VAULT
          <ArrowRight className="size-3" strokeWidth={2.5} />
        </Link>
      </div>
    </article>
  );
}
