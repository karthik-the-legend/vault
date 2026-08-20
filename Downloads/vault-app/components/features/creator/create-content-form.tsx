"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { UploadCloud, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { GAMES } from "@/lib/constants";
import { UploadErrorCard, UploadError } from "@/components/features/creator/upload-error-card";

const CONTENT_TYPES = [
  { id: "video", label: "Video", hint: "Long-form landscape edits" },
  { id: "short", label: "Short Video", hint: "Vertical clippable highlights" },
  { id: "image", label: "Image", hint: "Screengrabs & setups" },
  { id: "screenshot", label: "Screenshot", hint: "Metadata proof layer" },
] as const;

const MAX_BYTES = 500 * 1024 * 1024;
const ALLOWED_EXT = ["mp4", "mov", "png", "jpg", "jpeg"];

function formatSize(bytes: number) {
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function CreateContentForm() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const [contentType, setContentType] = useState<(typeof CONTENT_TYPES)[number]["id"]>("video");
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<UploadError | null>(null);
  const [caption, setCaption] = useState("");
  const [game, setGame] = useState("");
  const team = "ZARX Alpha";
  const tournament = "ZCL Winter Wars";
  const [showTeamTag, setShowTeamTag] = useState(false);
  const [showTournamentTag, setShowTournamentTag] = useState(false);

  function validateAndSetFile(selected: File) {
    const ext = selected.name.split(".").pop()?.toLowerCase() ?? "";
    if (!ALLOWED_EXT.includes(ext)) {
      setError({
        title: "UNSUPPORTED FILE",
        description:
          "This file type isn't supported. Try matching the recommended formats: MP4, MOV, PNG, or JPG.",
        severity: "danger",
      });
      setFile(null);
      return;
    }
    if (selected.size > MAX_BYTES) {
      setError({
        title: "VIDEO TOO LARGE",
        description:
          "The uploaded file exceeds our upload boundaries. Maximum file size is 500MB. Try compressing.",
        severity: "danger",
      });
      setFile(null);
      return;
    }
    setError(null);
    setFile(selected);
    setShowTeamTag(true);
    setShowTournamentTag(true);
  }

  function handleFileInput(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0];
    if (selected) validateAndSetFile(selected);
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const dropped = e.dataTransfer.files?.[0];
    if (dropped) validateAndSetFile(dropped);
  }

  function discard() {
    setFile(null);
    setError(null);
    setCaption("");
    setGame("");
    setShowTeamTag(false);
    setShowTournamentTag(false);
    if (inputRef.current) inputRef.current.value = "";
  }

  function post() {
    router.push("/creator-zone");
  }

  const hasFile = !!file;

  return (
    <div>
      <h1 className="text-2xl font-black tracking-tight">
        {hasFile ? "Preview Match Output" : "Create Content"}
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {hasFile
          ? "Confirm video details and metadata linkages before publishing to the decentralized identity feed."
          : "Upload high-fidelity gaming highlights directly to your verified VAULT Profile."}
      </p>

      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          {error && (
            <div className="mb-4">
              <UploadErrorCard error={error} onRetry={() => setError(null)} />
            </div>
          )}

          {hasFile ? (
            <div>
              <div className="flex aspect-video items-center justify-center rounded-lg bg-gradient-to-br from-slate-800 to-slate-950 text-white/70">
                ▶
              </div>
              <div className="mt-3 flex items-center justify-between gap-3 rounded-md bg-emerald-50 px-4 py-2.5 text-sm text-emerald-700">
                <span className="flex items-center gap-2">
                  ✓ {file.name} ({formatSize(file.size)}) successfully processed
                </span>
                <button
                  type="button"
                  onClick={() => inputRef.current?.click()}
                  className="shrink-0 font-bold hover:underline"
                >
                  Replace File
                </button>
              </div>
            </div>
          ) : (
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              className="flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border py-16 text-center"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-muted-foreground">
                <UploadCloud className="size-5" />
              </span>
              <div className="text-sm font-bold">Drag and drop or browse</div>
              <div className="text-xs text-muted-foreground">
                Supports MP4, MOV, PNG, or JPG (Max 500MB)
              </div>
              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                className="mt-1 rounded-md border border-border px-4 py-2 text-sm font-bold"
              >
                Select File
              </button>
            </div>
          )}
          <input
            ref={inputRef}
            type="file"
            accept=".mp4,.mov,.png,.jpg,.jpeg"
            className="hidden"
            onChange={handleFileInput}
          />

          <div className="mt-6">
            <div className="text-xs font-bold tracking-wide text-muted-foreground">
              SELECT CONTENT TYPE
            </div>
            <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {CONTENT_TYPES.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setContentType(type.id)}
                  className={cn(
                    "rounded-md border p-3 text-left transition-colors",
                    contentType === type.id
                      ? "border-2 border-foreground"
                      : "border-border hover:border-foreground/40"
                  )}
                >
                  <div className="text-sm font-bold">{type.label}</div>
                  <div className="text-xs text-muted-foreground">{type.hint}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="text-sm font-bold">Metadata Setup</div>

            <div className="mt-4">
              <label className="text-xs font-semibold tracking-wide">CAPTION</label>
              <textarea
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                rows={3}
                placeholder="Describe this highlight... Use #tags to build momentum"
                className="mt-1.5 w-full resize-none rounded-md border border-border px-3 py-2 text-sm outline-none focus:border-foreground"
              />
            </div>

            <div className="mt-4">
              <label className="text-xs font-semibold tracking-wide">
                WHICH GAME IS THIS FROM?
              </label>
              <select
                value={game}
                onChange={(e) => setGame(e.target.value)}
                className="mt-1.5 h-10 w-full rounded-md border border-border bg-background px-3 text-sm outline-none focus:border-foreground"
              >
                <option value="">Select Primary Game</option>
                {GAMES.map((g) => (
                  <option key={g.id} value={g.name}>
                    {g.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-4">
              <label className="text-xs font-semibold tracking-wide">
                ADDITIONAL METADATA TAGS
              </label>
              <div className="mt-1.5 space-y-2">
                {showTeamTag ? (
                  <div className="flex items-center justify-between rounded-md border border-border px-3 py-2 text-sm">
                    <span>
                      <span className="text-xs font-semibold text-muted-foreground">TEAM </span>
                      {team}
                    </span>
                    <button type="button" onClick={() => setShowTeamTag(false)} aria-label="Remove team tag">
                      <X className="size-3.5 text-muted-foreground" />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    disabled={!hasFile}
                    onClick={() => setShowTeamTag(true)}
                    className="flex h-9 w-full items-center gap-1 rounded-md border border-dashed border-border px-3 text-xs font-medium text-muted-foreground disabled:opacity-40"
                  >
                    + Tag Team
                  </button>
                )}

                {showTournamentTag ? (
                  <div className="flex items-center justify-between rounded-md border border-border px-3 py-2 text-sm">
                    <span>
                      <span className="text-xs font-semibold text-muted-foreground">TOURNAMENT </span>
                      {tournament}
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowTournamentTag(false)}
                      aria-label="Remove tournament tag"
                    >
                      <X className="size-3.5 text-muted-foreground" />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    disabled={!hasFile}
                    onClick={() => setShowTournamentTag(true)}
                    className="flex h-9 w-full items-center gap-1 rounded-md border border-dashed border-border px-3 text-xs font-medium text-muted-foreground disabled:opacity-40"
                  >
                    + Tag Tournament
                  </button>
                )}

                <button
                  type="button"
                  disabled={!hasFile}
                  className="flex h-9 w-full items-center gap-1 rounded-md border border-dashed border-border px-3 text-xs font-medium text-muted-foreground disabled:opacity-40"
                >
                  + Tag Player
                </button>
              </div>
            </div>

            <div className="mt-5 flex gap-2 border-t border-border pt-4">
              <button
                type="button"
                onClick={discard}
                className="h-10 flex-1 rounded-md border border-border text-sm font-bold"
              >
                Discard
              </button>
              <button
                type="button"
                disabled={!hasFile}
                onClick={post}
                className="h-10 flex-1 rounded-md bg-foreground text-sm font-bold text-background disabled:opacity-40"
              >
                POST CONTENT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
