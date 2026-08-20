import Link from "next/link";
import { profiles } from "@/lib/mock-data";
import { ProfilePreviewCard } from "@/components/features/profile-preview-card";

export function Hero() {
  const featured = profiles[0];

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="font-heading text-4xl leading-[1.05] font-black tracking-tight sm:text-5xl lg:text-6xl">
            YOUR GAMING
            <br />
            IDENTITY.
          </h1>
          <p className="mt-5 max-w-md text-base text-muted-foreground sm:text-lg">
            One unified profile for your games, achievements, tournaments and
            opportunities.
          </p>
          <div className="mt-8">
            <Link
              href="/auth"
              className="flex h-12 w-full items-center justify-center rounded-md bg-foreground px-8 text-sm font-bold tracking-wide text-background sm:w-auto sm:inline-flex"
            >
              [&nbsp;Create your VAULT&nbsp;]
            </Link>
          </div>
          <Link
            href="/discover"
            className="mt-4 block text-center text-sm font-bold hover:underline sm:text-left"
          >
            Explore VAULT →
          </Link>
        </div>
        <div className="mx-auto w-full max-w-sm">
          <ProfilePreviewCard profile={featured} />
        </div>
      </div>
    </section>
  );
}
