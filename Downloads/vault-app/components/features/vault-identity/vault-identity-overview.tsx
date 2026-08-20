import Link from "next/link";
import { Check } from "lucide-react";
import { HubPageHeader } from "@/components/shared/hub-page-header";

const PROFILE_TYPES = [
  {
    slug: "gamers",
    title: "Gamers",
    description: "Elevate your personal gaming reputation.",
    items: ["Verified Gamer Tag & ID", "On-chain Tournament Records", "Anticheat Credibility Badge"],
    cta: "Get VAULT+ Gamer",
    primary: true,
  },
  {
    slug: "clubs",
    title: "Esports Clubs",
    description: "Recruit safely and verify organization assets.",
    items: ["Verified Team Roster Logs", "Corporate & Org KYC", "Esports Business Passport"],
    cta: "Get VAULT+ Club",
    primary: false,
  },
  {
    slug: "organizers",
    title: "Organizers",
    description: "Ensure fair play and verified payouts.",
    items: ["Verified Tournament History", "Escrow & Prize Pool Trust Badge", "Anti-Sybil Registration Filters"],
    cta: "Get VAULT+ Organizer",
    primary: false,
  },
];

export function VaultIdentityOverview() {
  return (
    <div>
      <HubPageHeader
        title="VAULT+"
        subtitle="The verification and credibility layer of your Web3 gaming identity."
      />

      <div className="rounded-lg bg-secondary/60 p-6">
        <span className="rounded-md bg-blue-600 px-2.5 py-1 text-[10px] font-bold tracking-wide text-white">
          CREDIBILITY LAYER
        </span>
        <h1 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
          MAKE YOUR VAULT OFFICIAL.
        </h1>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground">
          Verified identity and competitive credibility for gamers, clubs and organizers. Stand out
          from the noise with transparent, on-chain credential checks.
        </p>
      </div>

      <div className="mt-8">
        <div className="text-xs font-bold tracking-wide text-muted-foreground">
          SELECT YOUR PROFILE TYPE
        </div>
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {PROFILE_TYPES.map((type) => (
            <div key={type.slug} className="rounded-lg border border-border bg-card p-5">
              <div className="text-base font-black">{type.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{type.description}</p>
              <ul className="mt-4 space-y-2">
                {type.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <Check className="size-3.5 shrink-0 text-blue-600" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={`/vault-identity/${type.slug}`}
                className={
                  type.primary
                    ? "mt-5 flex h-10 w-full items-center justify-center rounded-md bg-foreground text-sm font-bold text-background"
                    : "mt-5 flex h-10 w-full items-center justify-center rounded-md border border-border text-sm font-bold"
                }
              >
                {type.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
