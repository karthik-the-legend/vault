import { HubPageHeader } from "@/components/shared/hub-page-header";
import { CredentialStatusPill } from "@/components/features/vault-identity/credential-status-pill";

const STATES = [
  {
    status: "ACTIVE" as const,
    title: "Active / Verified",
    description: "Assigned to records successfully checked and securely written on-chain.",
  },
  {
    status: "PENDING" as const,
    title: "Pending Approval",
    description: "Currently awaiting platform or manual credential validation check.",
  },
  {
    status: "NOT_ACTIVE" as const,
    title: "Not Active / Unverified",
    description: "User has not initiated verification or credential check on this node.",
  },
  {
    status: "FAILED" as const,
    title: "Verification Failed",
    description: "The checking protocol returned discrepancies or failed security requirements.",
  },
];

export default function SystemStateSheetPage() {
  return (
    <div>
      <HubPageHeader
        title="SYSTEM STATE SHEET"
        subtitle="Standard reference library of verification tags and identity states."
      />

      <div className="text-sm font-bold">STATE MATRIX REFERENCE</div>
      <p className="mt-1 text-sm text-muted-foreground">
        Standard status components utilized throughout verification protocols.
      </p>

      <div className="mt-4 divide-y divide-border rounded-lg border border-border bg-card">
        {STATES.map((state) => (
          <div key={state.status} className="flex items-center justify-between gap-4 p-5">
            <div>
              <div className="text-sm font-bold">{state.title}</div>
              <p className="mt-0.5 text-xs text-muted-foreground">{state.description}</p>
            </div>
            <CredentialStatusPill status={state.status} />
          </div>
        ))}
      </div>
    </div>
  );
}
