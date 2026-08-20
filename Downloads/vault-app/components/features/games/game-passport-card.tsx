import Link from "next/link";
import { GamePassport } from "@/types";
import { VerifiedPill } from "@/components/shared/verified-badge";

export function GamePassportCard({
  passport,
  username,
}: {
  passport: GamePassport;
  username: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-base font-extrabold">{passport.gameName}</div>
          <div className="text-sm text-muted-foreground">
            {passport.rank}
          </div>
        </div>
        {passport.verified && <VerifiedPill />}
      </div>
      <div className="mt-3 text-sm text-muted-foreground">
        Role: {passport.role} · Verified {passport.verifiedDate}
      </div>
      <Link
        href={`/vault/${username}/games/${passport.gameSlug}`}
        className="mt-4 flex h-10 w-full items-center justify-center rounded-md bg-foreground text-sm font-bold text-background"
      >
        View Passport
      </Link>
    </div>
  );
}
