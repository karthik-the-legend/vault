import Link from "next/link";

export function CTASection() {
  return (
    <section className="border-t border-border py-20 text-center sm:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <h2 className="font-heading text-3xl leading-[1.1] font-black tracking-tight sm:text-4xl">
          CREATE YOUR VAULT.
        </h2>
        <p className="mt-3 text-base text-muted-foreground">
          Your games. Your achievements. Your identity.
        </p>
        <Link
          href="/auth"
          className="mt-7 inline-flex h-11 items-center justify-center rounded-md bg-foreground px-8 text-sm font-bold text-background"
        >
          Setup your VAULT
        </Link>
      </div>
    </section>
  );
}
