"use client";

import { useState } from "react";
import { X, QrCode } from "lucide-react";

export function ShareProfileModal({
  open,
  onClose,
  username,
}: {
  open: boolean;
  onClose: () => void;
  username: string;
}) {
  const [copied, setCopied] = useState(false);
  const link = `vault.example/@${username}`;

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-lg border border-border bg-card p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <div className="text-base font-bold">Share Identity Profile</div>
            <p className="mt-1 text-xs text-muted-foreground">
              Invite teams, sponsors, and players to view your verified
              organizer statistics and tournament lists.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="mt-5 flex items-center gap-3 rounded-md border border-border p-3">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-md border-2 border-foreground">
            <QrCode className="size-8" />
          </span>
          <div>
            <div className="text-sm font-bold">Scan QR Code</div>
            <div className="text-xs text-muted-foreground">
              Direct link to mobile identity
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <input
            readOnly
            value={link}
            className="h-10 flex-1 rounded-md border border-border bg-secondary px-3 text-xs text-muted-foreground"
          />
          <button
            type="button"
            onClick={() => {
              navigator.clipboard?.writeText(link);
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }}
            className="h-10 shrink-0 rounded-md bg-foreground px-3.5 text-xs font-bold text-background"
          >
            {copied ? "Copied!" : "Copy Link"}
          </button>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {["Twitter", "WhatsApp", "Discord"].map((platform) => (
            <button
              key={platform}
              type="button"
              className="rounded-md border border-border py-2 text-xs font-semibold"
            >
              {platform}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
