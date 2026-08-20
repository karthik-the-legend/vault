"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.43.34-2.09V7.07H2.18A11 11 0 0 0 1 12c0 1.77.43 3.45 1.18 4.93z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
      <path d="M16.365 1.43c0 1.14-.462 2.24-1.215 3.04-.816.87-2.16 1.53-3.27 1.44-.135-1.11.42-2.28 1.17-3.03.822-.84 2.19-1.47 3.315-1.45zM20.7 17.34c-.51 1.17-.75 1.68-1.41 2.7-.93 1.44-2.235 3.24-3.855 3.255-1.44.015-1.815-.945-3.75-.93-1.935.015-2.34.945-3.78.93-1.62-.015-2.85-1.635-3.78-3.075-2.595-3.99-2.865-8.67-1.26-11.16 1.14-1.77 2.94-2.805 4.62-2.805 1.71 0 2.79.945 4.2.945 1.365 0 2.205-.945 4.2-.945 1.5 0 3.09.825 4.215 2.25-3.705 2.03-3.105 7.33.6 8.835z" />
    </svg>
  );
}

export function AuthCard() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  return (
    <div className="w-full max-w-md">
      <h1 className="text-center text-3xl font-black tracking-tight sm:text-4xl">
        CREATE YOUR VAULT
      </h1>
      <p className="mt-2 text-center text-sm text-muted-foreground">
        Build your gaming identity in one place.
      </p>

      <div className="mt-8 space-y-3">
        <button
          type="button"
          onClick={() => router.push("/onboarding/type")}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-md border border-border text-sm font-medium hover:bg-secondary"
        >
          <GoogleIcon />
          Continue with Google
        </button>
        <button
          type="button"
          onClick={() => router.push("/onboarding/type")}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-md border border-border text-sm font-medium hover:bg-secondary"
        >
          <AppleIcon />
          Continue with Apple
        </button>
      </div>

      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="text-xs font-medium text-muted-foreground">OR</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="h-12 w-full rounded-md border border-border px-4 text-sm outline-none focus:border-foreground"
        />
        <button
          type="button"
          onClick={() => router.push("/onboarding/type")}
          className="h-12 w-full rounded-md bg-foreground text-sm font-bold tracking-wide text-background"
        >
          CONTINUE
        </button>
      </div>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have a VAULT?{" "}
        <button
          type="button"
          onClick={() => router.push("/home")}
          className="font-bold text-foreground underline"
        >
          Sign In
        </button>
      </p>
    </div>
  );
}
