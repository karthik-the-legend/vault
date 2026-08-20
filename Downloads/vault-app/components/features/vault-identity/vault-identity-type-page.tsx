import Link from "next/link";
import { Check } from "lucide-react";
import { HubPageHeader } from "@/components/shared/hub-page-header";

export function VaultIdentityTypePage({
  pageTitle,
  pageSubtitle,
  badge,
  heading,
  description,
  ctaLabel,
  ctaButtonLabel,
  checklist,
}: {
  pageTitle: string;
  pageSubtitle: string;
  badge: string;
  heading: string;
  description: string;
  ctaLabel: string;
  ctaButtonLabel: string;
  checklist: string[];
}) {
  return (
    <div>
      <HubPageHeader title={pageTitle} subtitle={pageSubtitle} />

      <Link
        href="/vault-identity"
        className="text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        ← Back to Overview
      </Link>

      <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px]">
        <div>
          <span className="rounded-md bg-blue-600 px-2.5 py-1 text-[10px] font-bold tracking-wide text-white">
            {badge}
          </span>
          <h1 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
            {heading}
          </h1>
          <p className="mt-2 max-w-lg text-sm text-muted-foreground">{description}</p>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-lg bg-secondary/60 p-5">
            <span className="text-sm font-bold">{ctaLabel}</span>
            <button className="shrink-0 rounded-md bg-foreground px-5 py-2.5 text-sm font-bold text-background">
              {ctaButtonLabel}
            </button>
          </div>
        </div>

        <div className="h-fit rounded-lg border border-border bg-card p-5">
          <div className="text-xs font-bold tracking-wide text-muted-foreground">
            VERIFICATION CHECKLIST
          </div>
          <div className="mt-3 space-y-3">
            {checklist.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-sm bg-blue-600">
                  <Check className="size-3 text-white" strokeWidth={3} />
                </span>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
