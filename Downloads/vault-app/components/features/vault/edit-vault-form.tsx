"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Camera, Trash2 } from "lucide-react";
import { Profile } from "@/types";
import { ProfileAvatar } from "@/components/shared/profile-avatar";

export function EditVaultForm({
  profile,
  linkedGames,
}: {
  profile: Profile;
  linkedGames: string[];
}) {
  const router = useRouter();
  const [name, setName] = useState(profile.displayName);
  const [bio, setBio] = useState(profile.shortTag);
  const [games, setGames] = useState(linkedGames);
  const [youtube, setYoutube] = useState(profile.youtubeUrl ?? "");
  const [twitch, setTwitch] = useState(profile.twitchUrl ?? "");

  function removeGame(game: string) {
    setGames((prev) => prev.filter((g) => g !== game));
  }

  function save() {
    router.push(`/vault/${profile.username}`);
  }

  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          <span>VAULT</span> / <span>{profile.username}</span> /{" "}
          <span className="font-medium text-foreground">Edit</span>
        </div>
        <button
          type="button"
          onClick={save}
          className="shrink-0 rounded-md bg-blue-600 px-5 py-2 text-sm font-bold text-white hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>

      <h1 className="mt-6 text-2xl font-black tracking-tight">
        EDIT YOUR VAULT
      </h1>

      <div className="mt-8 space-y-8">
        <section>
          <div className="text-xs font-bold tracking-wide text-muted-foreground">
            PROFILE DETAILS
          </div>
          <div className="mt-3 flex items-center gap-4">
            <ProfileAvatar
              name={profile.displayName}
              gradient={profile.avatarGradient}
              size="lg"
            />
            <button
              type="button"
              className="flex items-center gap-1.5 text-sm font-bold text-blue-600"
            >
              <Camera className="size-4" />
              Change Photo
            </button>
          </div>

          <div className="mt-5 space-y-4">
            <div>
              <label className="text-xs font-semibold tracking-wide">
                NAME
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1.5 h-11 w-full rounded-md border border-border px-3.5 text-sm outline-none focus:border-foreground"
              />
            </div>
            <div>
              <label className="text-xs font-semibold tracking-wide">
                BIO
              </label>
              <input
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="mt-1.5 h-11 w-full rounded-md border border-border px-3.5 text-sm outline-none focus:border-foreground"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="text-xs font-bold tracking-wide text-muted-foreground">
            YOUR LINKED GAMES
          </div>
          <div className="mt-3 space-y-2">
            {games.map((game) => (
              <div
                key={game}
                className="flex items-center justify-between rounded-md border border-border px-4 py-3"
              >
                <span className="text-sm font-bold">{game}</span>
                <button
                  type="button"
                  aria-label={`Remove ${game}`}
                  onClick={() => removeGame(game)}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            ))}
            <button
              type="button"
              className="flex h-11 w-full items-center justify-center rounded-md border border-dashed border-border text-sm font-bold text-muted-foreground hover:text-foreground"
            >
              + Add Game
            </button>
          </div>
        </section>

        <section>
          <div className="text-xs font-bold tracking-wide text-muted-foreground">
            SOCIAL &amp; PLATFORMS
          </div>
          <div className="mt-3 space-y-4">
            <div>
              <label className="text-xs font-semibold tracking-wide">
                YOUTUBE CHANNEL URL
              </label>
              <input
                value={youtube}
                onChange={(e) => setYoutube(e.target.value)}
                placeholder="youtube.com/c/aniket_gaming"
                className="mt-1.5 h-11 w-full rounded-md border border-border px-3.5 text-sm outline-none focus:border-foreground"
              />
            </div>
            <div>
              <label className="text-xs font-semibold tracking-wide">
                TWITCH USERNAME
              </label>
              <input
                value={twitch}
                onChange={(e) => setTwitch(e.target.value)}
                placeholder="twitch.tv/aniket_igl"
                className="mt-1.5 h-11 w-full rounded-md border border-border px-3.5 text-sm outline-none focus:border-foreground"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
