"use client";

import { CreatorZoneHeader } from "@/components/layout/creator-zone-header";
import { CreatorZoneSidebar } from "@/components/layout/creator-zone-sidebar";
import { CreatorZoneAccountGate } from "@/components/features/creator/creator-zone-account-gate";
import { useSession } from "@/lib/session-context";

export default function CreatorZoneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { session } = useSession();

  return (
    <div className="flex min-h-screen flex-col">
      <CreatorZoneHeader />
      <div className="flex flex-1">
        <CreatorZoneSidebar />
        <main className="flex-1 overflow-x-hidden px-4 py-8 sm:px-8">
          {session ? children : <CreatorZoneAccountGate />}
        </main>
      </div>
    </div>
  );
}
