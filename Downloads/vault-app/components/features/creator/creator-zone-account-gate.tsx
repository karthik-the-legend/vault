import Link from "next/link";
import { Lock } from "lucide-react";

export function CreatorZoneAccountGate() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center rounded-lg border border-border bg-card p-10 text-center">
      <span className="flex size-12 items-center justify-center rounded-full bg-foreground text-background">
        <Lock className="size-5" />
      </span>
      <div className="mt-4 text-base font-bold">Create Your Account</div>
      <p className="mt-1 text-sm text-muted-foreground">
        Set up your VAULT to unlock the Creator Zone — follow creators, browse
        trending highlights, and publish your own game moments.
      </p>
      <Link
        href="/"
        className="mt-4 rounded-md bg-foreground px-5 py-2.5 text-sm font-bold text-background"
      >
        Setup your VAULT
      </Link>
    </div>
  );
}
