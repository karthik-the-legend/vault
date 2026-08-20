import Link from "next/link";

export function GamePillList({
  games,
  username,
}: {
  games: string[];
  username: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="text-xs font-bold tracking-wide text-muted-foreground">
          YOUR GAMES
        </div>
        <Link
          href={`/vault/${username}/games`}
          className="text-xs font-bold hover:underline"
        >
          Manage →
        </Link>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {games.map((game) => (
          <span
            key={game}
            className="rounded-md border border-border px-3.5 py-2 text-sm font-medium"
          >
            {game}
          </span>
        ))}
      </div>
    </div>
  );
}
