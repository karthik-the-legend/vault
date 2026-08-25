import Link from "next/link";

const DISCOVER_LINKS = [
  { label: "Discover", href: "#discovery" },
  { label: "Gamers", href: "#gamers" },
  { label: "Esports Clubs", href: "#clubs" },
  { label: "League Organizers", href: "#organizers" },
  { label: "VAULT+", href: "#vault-plus" },
];

const SUPPORT_LINKS = [
  { label: "Help", href: "#help" },
  { label: "Safety", href: "#safety" },
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
];

const CONNECT_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/zarxesportsforum?igsi=dXRoYmh3cmVsMTBu" },
  { label: "YouTube", href: "https://youtube.com/@zef.global?si=CPnRTgftMMvDimZi" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/zefglobal.com/" },
];

export function MarketingFooter() {
  return (
    <footer className="flex w-full flex-col items-start gap-[60px] border-t border-border bg-background px-6 pt-16 pb-10 sm:px-10 lg:px-20">
      <div className="flex w-full flex-col items-start justify-between gap-10 lg:flex-row">
        <div className="flex max-w-[320px] flex-col items-start gap-4">
          <span className="text-[22px] font-extrabold text-foreground">VAULT</span>
          <p className="text-sm leading-[150%] text-muted-foreground">
            Your gaming identity.
          </p>
        </div>

        <div className="flex flex-wrap items-start gap-16 lg:gap-20">
          <div className="flex flex-col items-start gap-4">
            <span className="text-[13px] font-bold tracking-[0.04em] text-foreground uppercase">
              Discover
            </span>
            <ul className="flex flex-col items-start gap-3">
              {DISCOVER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start gap-4">
            <span className="text-[13px] font-bold tracking-[0.04em] text-foreground uppercase">
              Support
            </span>
            <ul className="flex flex-col items-start gap-3">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start gap-4">
            <span className="text-[13px] font-bold tracking-[0.04em] text-foreground uppercase">
              Connect
            </span>
            <ul className="flex flex-col items-start gap-3">
              {CONNECT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col-reverse items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
        <span className="text-[13px] text-muted-foreground">
          © 2026 VAULT Platform Inc. All rights reserved.
        </span>
        <div className="flex items-center gap-1.5 text-[13px] text-muted-foreground">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          All Game API Integrations Operational
        </div>
      </div>
    </footer>
  );
}
