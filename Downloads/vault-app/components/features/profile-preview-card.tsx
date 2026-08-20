import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Profile } from "@/types";
import { ProfileAvatar } from "@/components/shared/profile-avatar";
import { VerifiedDot, VerifiedPill } from "@/components/shared/verified-badge";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function ProfilePreviewCard({ profile }: { profile: Profile }) {
  return (
    <div className="flex flex-col rounded-lg border border-border bg-card p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <ProfileAvatar
            name={profile.displayName}
            gradient={profile.avatarGradient}
            size="md"
          />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-extrabold tracking-wide">
                {profile.displayName.toUpperCase()}
              </span>
              {profile.verified && <VerifiedDot />}
            </div>
            <div className="text-xs text-muted-foreground">
              @{profile.username}
            </div>
          </div>
        </div>
        <Badge
          variant="outline"
          className="shrink-0 rounded-md px-2 py-1 text-[10px] font-semibold tracking-wide text-muted-foreground"
        >
          {profile.typeLabel}
        </Badge>
      </div>

      {profile.verified && <VerifiedPill className="mt-3 w-fit" />}

      <p className="mt-3 text-sm text-muted-foreground">{profile.shortTag}</p>

      <Separator className="my-4" />

      <div className="grid grid-cols-3 gap-2">
        {profile.stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-lg font-extrabold sm:text-xl">
              {stat.value}
            </div>
            <div className="text-[10px] font-medium tracking-wide text-muted-foreground">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <Separator className="my-4" />

      <div className="flex flex-wrap gap-1.5">
        {profile.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-secondary px-2 py-1 text-[11px] font-medium text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={`/vault/${profile.username}`}
        className="mt-4 flex items-center gap-1 text-sm font-bold hover:underline"
      >
        VIEW VAULT
        <ArrowRight className="size-3.5" />
      </Link>
    </div>
  );
}
