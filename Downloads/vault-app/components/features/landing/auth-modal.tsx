"use client";

import { useState } from "react";
import { Modal } from "@/components/shared/modal";
import { useLandingModals } from "@/lib/landing-modals-context";
import { useSession } from "@/lib/session-context";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[18px]">
      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" />
      <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.98 0 12s.45 3.84 1.25 5.42l4.03-3.15z" />
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[18px]" fill="#000000">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8.92-2.87-.9.04-1.99.6-2.63 1.35-.57.65-1.06 1.71-.93 2.74 1.01.08 2.03-.49 2.64-1.22z" />
    </svg>
  );
}

export function AuthModal() {
  const { active, close } = useLandingModals();
  const { login } = useSession();
  const [step, setStep] = useState<"email" | "otp">("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  function handleClose() {
    close();
    setStep("email");
    setEmail("");
    setOtp("");
  }

  function continueEnter() {
    login("GAMER");
    handleClose();
  }

  return (
    <Modal open={active === "auth"} onClose={handleClose} maxWidth="520px">
      <div className="flex flex-col items-center p-9">
        <div className="mb-6 flex w-full items-center justify-between">
          <span className="font-outfit text-xl font-extrabold text-foreground">VAULT</span>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close modal"
            className="flex size-8 items-center justify-center rounded-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
          >
            ✕
          </button>
        </div>

        <div className="flex w-full flex-col items-center gap-6">
          <div className="flex w-full flex-col items-center gap-2 text-center">
            <h2 className="font-outfit text-[32px] leading-[40px] font-extrabold text-foreground">
              Create your VAULT
            </h2>
            <p className="font-geist text-[15px] text-muted-foreground">
              One unified profile for your gaming identity.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3">
            <button
              type="button"
              onClick={continueEnter}
              className="font-geist flex h-12 w-full items-center justify-center gap-3 rounded-md border border-border bg-background text-sm font-medium text-foreground transition-colors hover:border-[#D1D5DB] hover:bg-secondary"
            >
              <GoogleIcon />
              Continue with Google
            </button>
            <button
              type="button"
              onClick={continueEnter}
              className="font-geist flex h-12 w-full items-center justify-center gap-3 rounded-md border border-border bg-background text-sm font-medium text-foreground transition-colors hover:border-[#D1D5DB] hover:bg-secondary"
            >
              <AppleIcon />
              Continue with Apple
            </button>
          </div>

          <div className="flex h-3.5 w-full items-center gap-4">
            <div className="h-0 flex-1 border-t border-border" />
            <span className="font-outfit text-[11px] font-bold tracking-wide text-[color:var(--text-muted)] uppercase">
              OR
            </span>
            <div className="h-0 flex-1 border-t border-border" />
          </div>

          {step === "email" ? (
            <form
              className="flex w-full flex-col items-start gap-3.5"
              onSubmit={(e) => {
                e.preventDefault();
                setStep("otp");
              }}
            >
              <div className="flex h-[46px] w-full items-center rounded-md border border-border px-4 transition-colors focus-within:border-foreground">
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="font-geist h-full w-full bg-transparent text-sm text-foreground outline-none placeholder:text-[color:var(--text-muted)]"
                />
              </div>
              <button
                type="submit"
                className="font-geist flex h-12 w-full items-center justify-center rounded-md border border-foreground bg-foreground text-sm font-semibold tracking-wide text-background uppercase transition-colors hover:bg-[#222222]"
              >
                Continue
              </button>
            </form>
          ) : (
            <form
              className="flex w-full flex-col items-start gap-3.5"
              onSubmit={(e) => {
                e.preventDefault();
                continueEnter();
              }}
            >
              <div className="font-geist flex w-full flex-col gap-1.5 rounded-md border border-[#BBF7D0] bg-[#F0FDF4] px-3.5 py-3 text-[13px] text-[#166534]">
                <span>
                  ✉️ Code sent to <strong>{email || "user@example.com"}</strong>
                </span>
                <span className="text-[11px] opacity-85">
                  (Demo code ready: <strong>482910</strong> or click instant magic link below)
                </span>
              </div>
              <div className="flex h-[46px] w-full items-center rounded-md border border-border px-4 transition-colors focus-within:border-foreground">
                <input
                  type="text"
                  required
                  maxLength={6}
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter 6-digit code"
                  className="font-geist h-full w-full bg-transparent text-sm text-foreground outline-none placeholder:text-[color:var(--text-muted)]"
                />
              </div>
              <button
                type="submit"
                className="font-geist flex h-12 w-full items-center justify-center rounded-md border border-foreground bg-foreground text-sm font-semibold tracking-wide text-background uppercase transition-colors hover:bg-[#222222]"
              >
                Verify &amp; Continue
              </button>
              <div className="flex w-full items-center justify-between text-[13px]">
                <button
                  type="button"
                  onClick={() => setStep("email")}
                  className="font-geist text-muted-foreground underline hover:text-foreground"
                >
                  ← Change email
                </button>
                <button
                  type="button"
                  onClick={continueEnter}
                  className="font-geist text-muted-foreground underline hover:text-foreground"
                >
                  ⚡ Instant Magic Link
                </button>
              </div>
            </form>
          )}

          <p className="font-geist w-full text-center text-[13px] text-muted-foreground">
            By continuing, you agree to VAULT&apos;s{" "}
            <a href="#terms" className="text-foreground underline">Terms</a> and{" "}
            <a href="#privacy" className="text-foreground underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </Modal>
  );
}
