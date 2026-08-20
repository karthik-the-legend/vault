"use client";

import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { useOnboarding } from "@/lib/onboarding-context";
import { GAMES } from "@/lib/constants";
import { GameTile } from "@/components/features/onboarding/game-tile";

export default function OnboardingGamesPage() {
  const router = useRouter();
  const { accountType, selectedGames, toggleGame } = useOnboarding();

  const heading =
    accountType === "GAMER"
      ? "WHICH GAMES DO YOU PLAY?"
      : accountType === "ESPORTS_CLUB"
        ? "WHICH GAMES DOES YOUR CLUB COMPETE IN?"
        : "WHICH GAMES DO YOUR EVENTS COVER?";

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-center text-3xl font-black tracking-tight sm:text-4xl">
        {heading}
      </h1>
      <p className="mt-2 text-center text-sm text-muted-foreground">
        Choose the games you want to add to your VAULT.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {GAMES.map((game) => (
          <GameTile
            key={game.id}
            game={game}
            selected={selectedGames.includes(game.slug)}
            onClick={() => toggleGame(game.slug)}
          />
        ))}
      </div>

      <button
        type="button"
        className="mt-6 flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <Plus className="size-4" />
        Add another game
      </button>

      <div className="mt-10 flex justify-center">
        <button
          type="button"
          onClick={() => router.push("/home")}
          className="h-12 w-full max-w-xs rounded-md bg-foreground text-sm font-bold tracking-wide text-background sm:w-auto sm:px-10"
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}
