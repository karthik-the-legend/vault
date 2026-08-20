import { GameConnection } from "@/types";
import { GAMES } from "@/lib/constants";

const STATUS_LABEL: Record<GameConnection["status"], string> = {
  active: "Active ID Connected",
  connected: "ID Connected",
  none: "No Connected ID",
};

export function MyGamesCard({ games }: { games: GameConnection[] }) {
  return (
    <div>
      <div className="text-xs font-bold tracking-wide text-muted-foreground">
        MY GAMES
      </div>
      <div className="mt-3 space-y-2">
        {games.map((game) => {
          const def = GAMES.find((g) => game.name.toUpperCase().includes(g.name.toUpperCase()));
          return (
            <div
              key={game.name}
              className="flex items-center gap-3 rounded-lg bg-secondary/60 p-3"
            >
              <span
                className="flex size-9 shrink-0 items-center justify-center rounded-md text-sm font-bold text-white"
                style={{ backgroundColor: def?.color ?? "#374151" }}
              >
                {game.name.charAt(0)}
              </span>
              <div>
                <div className="text-sm font-bold">{game.name}</div>
                <div
                  className={
                    game.status === "none"
                      ? "text-xs text-muted-foreground"
                      : "text-xs font-semibold text-blue-600"
                  }
                >
                  {STATUS_LABEL[game.status]}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
