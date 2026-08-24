import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { GameDef } from "@/types";

export function GameTile({
  game,
  selected,
  onClick,
}: {
  game: GameDef;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 rounded-lg border p-3.5 text-left transition-colors",
        selected
          ? "border-2 border-foreground"
          : "border-border hover:border-foreground/40"
      )}
    >
      <span
        className="flex size-9 shrink-0 items-center justify-center rounded-md text-sm font-bold text-white"
        style={{ backgroundColor: game.color }}
      >
        {game.letter}
      </span>
      <span className="flex-1">
        <span className="block text-sm font-bold">{game.name}</span>
        <span className="block text-xs text-muted-foreground">
          {selected ? "Ready to add" : "Click to select"}
        </span>
      </span>
      {selected ? (
        <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-accent-blue">
          <Check className="size-2.5 text-white" strokeWidth={3.5} />
        </span>
      ) : (
        <span className="size-4 shrink-0 rounded border border-border" />
      )}
    </button>
  );
}
