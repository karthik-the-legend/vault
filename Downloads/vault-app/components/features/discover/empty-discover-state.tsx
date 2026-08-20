import Link from "next/link";

const OPTIONS = [
  { label: "Find Gamers", category: "GAMER" },
  { label: "Find Clubs", category: "ESPORTS_CLUB" },
  { label: "Find Organizers", category: "ORGANIZER" },
  { label: "Find Tournaments", category: "TOURNAMENTS" },
];

export function EmptyDiscoverState() {
  return (
    <div className="mx-auto mt-10 max-w-sm rounded-lg border border-border bg-card p-10 text-center">
      <h2 className="font-heading text-2xl font-black tracking-tight">
        DISCOVER
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Find your people in gaming.
      </p>
      <div className="mt-5 space-y-2">
        {OPTIONS.map((opt) => (
          <Link
            key={opt.category}
            href={`/discover/search?category=${opt.category}`}
            className="block h-10 rounded-md border border-border py-2 text-sm font-bold"
          >
            {opt.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
