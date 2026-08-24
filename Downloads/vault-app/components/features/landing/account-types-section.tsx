import Link from "next/link";

const CARDS = [
  {
    num: "01",
    role: "GAMER",
    text: "Your gaming identity, verified game profiles and competitive history.",
    cta: "Explore Gamers →",
    href: "/discover/search?category=GAMER",
  },
  {
    num: "02",
    role: "ESPORTS CLUB",
    text: "Build your organization identity, showcase your teams and discover players.",
    cta: "View Esports Clubs →",
    href: "/discover/search?category=ESPORTS_CLUB",
  },
  {
    num: "03",
    role: "LEAGUE ORGANIZER",
    text: "Show your tournaments, leagues and competitive track record.",
    cta: "View League Organizers →",
    href: "/discover/search?category=ORGANIZER",
  },
];

export function AccountTypesSection() {
  return (
    <section
      id="roles"
      className="flex w-full flex-col items-start gap-16 border-y border-border bg-secondary px-6 py-16 sm:px-10 lg:px-20 lg:py-24"
    >
      <div className="flex max-w-[720px] flex-col items-start gap-4">
        <h2 className="text-3xl leading-[115%] font-extrabold tracking-[-0.02em] text-foreground sm:text-4xl">
          YOUR GAMES. YOUR ACHIEVEMENTS. YOUR IDENTITY.
        </h2>
        <p className="text-base leading-[150%] text-muted-foreground">
          Bring your gaming record together in one profile that you can
          share, discover and build over time.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 items-stretch gap-10 sm:grid-cols-3">
        {CARDS.map((card) => (
          <Link
            key={card.num}
            href={card.href}
            className="flex min-h-[170px] flex-col items-start gap-5 rounded-md border border-border bg-background p-6 shadow-[var(--shadow-card,0_1px_2px_rgba(0,0,0,0.05))] transition-[transform,box-shadow,border-color] duration-150 hover:-translate-y-0.5 hover:border-[#D1D5DB] hover:shadow-[var(--shadow-card-hover)]"
          >
            <span className="text-[13px] font-bold text-[color:var(--text-muted)]">
              {card.num}
            </span>
            <h3 className="text-xl font-extrabold tracking-[-0.01em] text-foreground">
              {card.role}
            </h3>
            <p className="text-sm leading-[150%] text-muted-foreground">
              {card.text}
            </p>
            <span className="mt-auto pt-3 text-[13px] font-semibold text-accent-blue">
              {card.cta}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
