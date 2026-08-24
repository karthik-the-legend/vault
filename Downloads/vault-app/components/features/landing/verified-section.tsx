import { ShieldCheck } from "lucide-react";

const API_BADGES = ["Riot Games API", "Krafton BGMI", "Steam"];

export function VerifiedSection() {
  return (
    <section
      id="verification"
      className="flex w-full flex-col items-center justify-between gap-12 px-6 py-16 sm:px-10 lg:min-h-[454px] lg:flex-row lg:px-20 lg:py-24"
    >
      <div className="flex max-w-[580px] flex-1 flex-col items-start gap-6">
        <h2 className="text-3xl leading-[115%] font-extrabold tracking-[-0.02em] text-foreground sm:text-4xl">
          BUILT ON VERIFIED IDENTITY.
        </h2>
        <p className="text-base leading-[150%] text-muted-foreground">
          Your VAULT can become more than a profile. Verified game records,
          achievements and competitive history give your identity
          credibility.
        </p>
      </div>

      <div className="flex w-full max-w-[440px] flex-col items-center gap-5 rounded-lg border border-border bg-secondary p-12 text-center shadow-[var(--shadow-card,0_1px_2px_rgba(0,0,0,0.05))]">
        <div className="flex size-16 items-center justify-center rounded-full bg-accent-blue-tint text-accent-blue shadow-[var(--shadow-blue-glow)]">
          <ShieldCheck className="size-6" strokeWidth={2.2} />
        </div>
        <h3 className="text-lg font-bold text-foreground">
          ✓ VERIFIED GAMER
        </h3>
        <p className="max-w-[344px] text-[13px] leading-[16px] text-muted-foreground">
          Integration with official game APIs guarantees that your rank,
          hours played, and records are 100% authentic.
        </p>
        <div className="mt-1.5 flex flex-wrap items-center justify-center gap-2">
          {API_BADGES.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-2 py-[3px] text-[11px] font-semibold text-muted-foreground"
            >
              <span className="size-1.5 rounded-full bg-emerald-500" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
