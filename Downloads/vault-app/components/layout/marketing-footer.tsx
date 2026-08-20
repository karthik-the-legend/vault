import Link from "next/link";

const columns = [
  {
    title: "DISCOVER",
    links: ["Discover", "Gamers", "Esports Clubs", "League Organizers", "VAULT+"],
  },
  {
    title: "SUPPORT",
    links: ["Help", "Safety", "Privacy", "Terms"],
  },
  {
    title: "CONNECT",
    links: ["Instagram", "YouTube", "LinkedIn"],
  },
];

export function MarketingFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-lg font-black tracking-tight">VAULT</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Your gaming identity.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-bold tracking-wide text-foreground">
                {col.title}
              </div>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-xs text-muted-foreground">
          © 2026 VAULT Platform Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
