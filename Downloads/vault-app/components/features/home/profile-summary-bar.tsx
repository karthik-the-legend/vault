import { Profile } from "@/types";
import { ProfileAvatar } from "@/components/shared/profile-avatar";

export function ProfileSummaryBar({ profile }: { profile: Profile }) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-5">
      <ProfileAvatar
        name={profile.displayName}
        gradient={profile.avatarGradient}
        size="lg"
      />
      <div>
        <div className="flex items-center gap-2">
          <span className="text-base font-extrabold tracking-wide">
            {profile.displayName.toUpperCase()}
          </span>
          <span className="rounded-full border border-blue-600 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-blue-600">
            VERIFIED GAMER
          </span>
        </div>
        <div className="mt-0.5 text-sm text-muted-foreground">
          @{profile.username} · {profile.shortTag} · {profile.country}
        </div>
      </div>
    </div>
  );
}
