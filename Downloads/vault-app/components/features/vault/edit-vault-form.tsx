"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Trash2 } from "lucide-react";
import { Profile } from "@/types";
import { MobileAppShell } from "@/components/layout/mobile-app-shell";
import { MSectionLabel, MAvatarCircle, MBtnOutlineDark } from "@/components/shared/mobile-ui";

export function EditVaultForm({
  profile,
  linkedGames,
}: {
  profile: Profile;
  linkedGames: string[];
}) {
  const router = useRouter();
  const [name, setName] = useState(profile.displayName.toUpperCase());
  const [bio, setBio] = useState(profile.shortTag);
  const [games, setGames] = useState(linkedGames);

  function removeGame(game: string) {
    setGames((prev) => prev.filter((g) => g !== game));
  }

  function save() {
    router.push(`/vault/${profile.username}`);
  }

  return (
    <MobileAppShell
      onBack={true}
      title="EDIT VAULT"
      headerRight={
        <button
          type="button"
          onClick={save}
          className="font-figtree text-[15px] font-bold text-accent-blue"
        >
          Save
        </button>
      }
    >
      <div className="flex w-full flex-col gap-3.5">
        <MSectionLabel>PROFILE DETAILS</MSectionLabel>
        <div className="flex items-center gap-3.5">
          <MAvatarCircle name={profile.displayName} gradient={profile.avatarGradient} size={52} />
          <button type="button" className="text-[13px] font-bold text-accent-blue">
            Change Photo
          </button>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="edit-mobile-name" className="text-[11px] font-bold text-[#767676]">
            NAME
          </label>
          <input
            id="edit-mobile-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-md border border-[#ECECEC] bg-secondary px-3 py-2.5 text-sm font-semibold text-foreground outline-none focus:border-foreground"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="edit-mobile-bio" className="text-[11px] font-bold text-[#767676]">
            BIO
          </label>
          <input
            id="edit-mobile-bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="rounded-md border border-[#ECECEC] bg-secondary px-3 py-2.5 text-sm font-medium text-foreground outline-none focus:border-foreground"
          />
        </div>
      </div>

      <div className="mt-2 flex w-full flex-col gap-2.5">
        <MSectionLabel>GAMES</MSectionLabel>
        {games.map((game) => (
          <div
            key={game}
            className="flex w-full items-center justify-between gap-3 rounded-lg border border-[#ECECEC] px-4 py-3"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex size-8 items-center justify-center rounded-md bg-foreground text-[10px] font-extrabold text-white">
                {game.slice(0, 4).toUpperCase()}
              </div>
              <span className="text-[13px] font-bold text-foreground">{game}</span>
            </div>
            <button
              type="button"
              onClick={() => removeGame(game)}
              aria-label={`Delete ${game}`}
              className="text-red-500 transition-opacity hover:opacity-70"
            >
              <Trash2 className="size-4" strokeWidth={2} />
            </button>
          </div>
        ))}
        <Link href={`/vault/${profile.username}/games/add`}>
          <MBtnOutlineDark className="w-full border-dashed">+ Add Game</MBtnOutlineDark>
        </Link>
      </div>
    </MobileAppShell>
  );
}
