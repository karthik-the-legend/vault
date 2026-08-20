import Link from "next/link";
import { Profile } from "@/types";
import { ProfileAvatar } from "@/components/shared/profile-avatar";

export function GamerDirectoryList({ profiles }: { profiles: Profile[] }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="text-xs font-bold tracking-wide text-muted-foreground">
          GAMER DIRECTORY
        </div>
        <Link href="/discover" className="text-xs font-bold hover:underline">
          View All
        </Link>
      </div>
      <div className="mt-3 space-y-3">
        {profiles.map((profile) => (
          <Link
            key={profile.id}
            href={`/vault/${profile.username}`}
            className="flex items-center gap-3"
          >
            <ProfileAvatar
              name={profile.displayName}
              gradient={profile.avatarGradient}
              size="sm"
            />
            <div>
              <div className="text-sm font-bold">{profile.displayName}</div>
              <div className="text-xs text-muted-foreground">
                {profile.shortTag}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
