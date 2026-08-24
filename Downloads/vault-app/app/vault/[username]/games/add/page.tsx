"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import { Search, Upload } from "lucide-react";
import { currentUsername, getProfileByUsername } from "@/lib/mock-data";
import { MobileAppShell } from "@/components/layout/mobile-app-shell";
import { MCardRow, MCardBordered } from "@/components/shared/mobile-ui";

const AVAILABLE_GAMES = [
  { slug: "bgmi", name: "BGMI", bg: "#111111", fg: "#FFFFFF", short: "BGMI" },
  { slug: "valorant", name: "VALORANT", bg: "#FA4454", fg: "#FFFFFF", short: "VAL" },
  { slug: "codmobile", name: "COD MOBILE", bg: "#333333", fg: "#F59E0B", short: "CODM" },
  { slug: "freefire", name: "FREE FIRE", bg: "#FF5722", fg: "#FFFFFF", short: "FF" },
];

export default function AddGamePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = use(params);
  const profile = getProfileByUsername(username);
  if (!profile || username !== currentUsername) notFound();

  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<(typeof AVAILABLE_GAMES)[number] | null>(null);

  const filtered = AVAILABLE_GAMES.filter((g) =>
    g.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <MobileAppShell onBack={true} title="ADD GAME" headerRight={<span />}>
      <div className="relative w-full">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search games..."
          className="w-full rounded-lg border border-[#ECECEC] bg-secondary py-2.5 pr-3 pl-9 font-figtree text-[13px] text-foreground outline-none placeholder:text-[#9CA3AF] focus:border-foreground"
        />
        <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-[#767676]" strokeWidth={2} />
      </div>

      <div className="flex w-full flex-col gap-2">
        {filtered.map((game) => (
          <button key={game.slug} type="button" onClick={() => setSelected(game)} className="w-full text-left">
            <MCardRow>
              <div className="flex items-center gap-2.5">
                <div
                  className="flex size-8 items-center justify-center rounded-md text-[10px] font-extrabold"
                  style={{ background: game.bg, color: game.fg }}
                >
                  {game.short}
                </div>
                <span className="text-[13px] font-bold text-foreground">{game.name}</span>
              </div>
            </MCardRow>
          </button>
        ))}
      </div>

      {selected && (
        <MCardBordered className="gap-2.5">
          <span className="text-[11px] font-bold tracking-[0.5px] text-[#767676] uppercase">
            SET UP {selected.name} PASSPORT
          </span>
          <p className="text-xs leading-[140%] text-[#767676]">
            Upload your in-game profile screenshot showing UID and level to verify ownership.
          </p>
          <div className="flex w-full flex-col items-center gap-2 rounded-lg border-2 border-dashed border-[#ECECEC] p-5">
            <Upload className="size-6 text-[#767676]" strokeWidth={2} />
            <span className="text-[13px] font-bold text-foreground">Upload Screenshot</span>
            <span className="text-[11px] text-[#767676]">PNG, JPG up to 10MB</span>
          </div>
        </MCardBordered>
      )}
    </MobileAppShell>
  );
}
