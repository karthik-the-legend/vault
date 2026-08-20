"use client";

import { useState } from "react";
import {
  ChevronRight,
  IdCard,
  AtSign,
  Mail,
  Lock,
} from "lucide-react";
import { HubPageHeader } from "@/components/shared/hub-page-header";
import { Toggle } from "@/components/shared/toggle";

const ACCOUNT_ROWS = [
  { label: "Gamer Profile Card", icon: IdCard, value: "Level 42 ID" },
  { label: "Change Username", icon: AtSign, value: "ANIKET" },
  { label: "Email Address", icon: Mail, value: "aniket@vaultesports.com" },
  { label: "Password & Authentication", icon: Lock, value: "Two-Factor Enabled" },
];

export default function HubSettingsPage() {
  const [privateProfile, setPrivateProfile] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);

  return (
    <div>
      <HubPageHeader
        title="SETTINGS"
        subtitle="Manage your VAULT ID, connectivity, security, and preferences."
      />

      <div className="text-xs font-bold tracking-wide text-muted-foreground">ACCOUNT</div>
      <div className="mt-3 divide-y divide-border rounded-lg border border-border bg-card">
        {ACCOUNT_ROWS.map((row) => {
          const Icon = row.icon;
          return (
            <button
              key={row.label}
              className="flex w-full items-center justify-between gap-3 p-4 text-left hover:bg-secondary/40"
            >
              <span className="flex items-center gap-3 text-sm font-medium">
                <Icon className="size-4 text-muted-foreground" />
                {row.label}
              </span>
              <span className="flex items-center gap-2 text-xs text-muted-foreground">
                {row.value}
                <ChevronRight className="size-4" />
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 text-xs font-bold tracking-wide text-muted-foreground">PRIVACY</div>
      <div className="mt-3 divide-y divide-border rounded-lg border border-border bg-card">
        <div className="flex items-center justify-between gap-3 p-4">
          <div>
            <div className="text-sm font-medium">Private VAULT Profile</div>
            <div className="text-xs text-muted-foreground">
              Restricts match history and stats viewing to verified connections.
            </div>
          </div>
          <Toggle checked={privateProfile} onChange={setPrivateProfile} />
        </div>
        <button className="flex w-full items-center justify-between gap-3 p-4 text-left hover:bg-secondary/40">
          <span className="text-sm font-medium">Who can follow your profile</span>
          <span className="flex items-center gap-2 text-xs font-semibold text-blue-600">
            Everyone
            <ChevronRight className="size-4" />
          </span>
        </button>
        <button className="flex w-full items-center justify-between gap-3 p-4 text-left hover:bg-secondary/40">
          <span className="text-sm font-medium">Who can send connection requests</span>
          <span className="flex items-center gap-2 text-xs font-semibold text-blue-600">
            Everyone
            <ChevronRight className="size-4" />
          </span>
        </button>
      </div>

      <div className="mt-8 text-xs font-bold tracking-wide text-muted-foreground">
        CONTENT &amp; DELIVERY
      </div>
      <div className="mt-3 divide-y divide-border rounded-lg border border-border bg-card">
        <button className="flex w-full items-center justify-between gap-3 p-4 text-left hover:bg-secondary/40">
          <span className="text-sm font-medium">Esports Region Focus</span>
          <span className="flex items-center gap-2 text-xs font-semibold text-blue-600">
            India (IST)
            <ChevronRight className="size-4" />
          </span>
        </button>
        <div className="flex items-center justify-between gap-3 p-4">
          <div>
            <div className="text-sm font-medium">Push Notifications</div>
            <div className="text-xs text-muted-foreground">
              Tournament launch and team status updates.
            </div>
          </div>
          <Toggle checked={pushNotifications} onChange={setPushNotifications} />
        </div>
      </div>
    </div>
  );
}
