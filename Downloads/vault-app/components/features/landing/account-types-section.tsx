import Link from "next/link";
import { ACCOUNT_TYPES } from "@/lib/constants";

export function AccountTypesSection() {
  return (
    <section className="bg-secondary/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-heading text-3xl leading-[1.1] font-black tracking-tight sm:text-4xl lg:text-5xl">
          YOUR GAMES.
          <br />
          YOUR ACHIEVEMENTS.
          <br />
          YOUR IDENTITY.
        </h2>
        <p className="mt-5 max-w-xl text-base text-muted-foreground">
          Bring your gaming record together in one profile that you can
          share, discover and build over time.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {ACCOUNT_TYPES.map((item, i) => (
            <Link
              key={item.type}
              href={`/onboarding/type?as=${item.type}`}
              className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-foreground/30"
            >
              <span className="text-xs font-semibold tracking-wide text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-xl font-extrabold group-hover:text-blue-600 group-hover:underline">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
