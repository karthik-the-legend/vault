import { ShieldCheck } from "lucide-react";

export function VerifiedSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-heading text-3xl leading-[1.1] font-black tracking-tight sm:text-4xl">
            BUILT ON VERIFIED IDENTITY.
          </h2>
          <p className="mt-5 max-w-md text-base text-muted-foreground">
            Your VAULT can become more than a profile. Verified game records,
            achievements and competitive history give your identity
            credibility.
          </p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-sm rounded-lg border border-border bg-card px-8 py-10 text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-blue-50">
              <ShieldCheck className="size-7 text-blue-600" strokeWidth={2} />
            </div>
            <div className="mt-4 flex items-center justify-center gap-1.5 text-base font-extrabold">
              <span className="text-blue-600">✓</span> VERIFIED GAMER
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Integration with official game APIs guarantees that your rank,
              hours played, and records are 100% authentic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
