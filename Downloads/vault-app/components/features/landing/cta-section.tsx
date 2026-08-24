"use client";

import { useLandingModals } from "@/lib/landing-modals-context";

export function CTASection() {
  const { openSetup } = useLandingModals();

  return (
    <section
      id="vault-plus"
      className="flex w-full flex-col items-center justify-center gap-8 px-6 py-24 text-center sm:px-10 lg:min-h-[424px] lg:py-32"
    >
      <div className="flex max-w-[617px] flex-col items-center gap-4">
        <h2 className="text-4xl leading-[1.15] font-black tracking-[-0.03em] text-foreground sm:text-5xl">
          CREATE YOUR VAULT.
        </h2>
        <p className="text-base text-muted-foreground">
          Your games. Your achievements. Your identity.
        </p>
      </div>
      <button
        type="button"
        onClick={openSetup}
        className="inline-flex items-center justify-center rounded-sm bg-foreground px-8 py-4 text-sm font-bold text-background transition-[transform,box-shadow,background-color] duration-150 hover:-translate-y-0.5 hover:bg-[#222222] hover:shadow-[0_8px_20px_rgba(0,0,0,0.18)]"
      >
        Setup your VAULT
      </button>
    </section>
  );
}
