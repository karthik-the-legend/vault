import { notFound } from "next/navigation";
import {
  currentUsername,
  gamePassports,
  getProfileByUsername,
} from "@/lib/mock-data";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { GamePassportCard } from "@/components/features/games/game-passport-card";

export default async function GamesPassportsPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const profile = getProfileByUsername(username);
  if (!profile) notFound();

  const passports = gamePassports[username] ?? [];
  const isOwner = username === currentUsername;

  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <Breadcrumb
          items={[
            { label: "VAULT", href: "/discover" },
            { label: username, href: `/vault/${username}` },
            { label: "Games" },
          ]}
        />
        {isOwner && (
          <button
            type="button"
            className="shrink-0 rounded-md bg-foreground px-4 py-2 text-sm font-bold text-background"
          >
            Add Game
          </button>
        )}
      </div>

      <h1 className="mt-6 text-2xl font-black tracking-tight">
        GAMES PASSPORTS
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Showing {passports.length} verified games linked to your identity
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {passports.map((passport) => (
          <GamePassportCard
            key={passport.gameSlug}
            passport={passport}
            username={username}
          />
        ))}
      </div>
    </div>
  );
}
