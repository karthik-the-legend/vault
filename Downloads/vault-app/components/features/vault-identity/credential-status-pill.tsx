import { cn } from "@/lib/utils";

export type CredentialStatus = "ACTIVE" | "PENDING" | "NOT_ACTIVE" | "FAILED";

const LABEL: Record<CredentialStatus, string> = {
  ACTIVE: "ACTIVE",
  PENDING: "PENDING",
  NOT_ACTIVE: "NOT ACTIVE",
  FAILED: "FAILED",
};

const CLASS: Record<CredentialStatus, string> = {
  ACTIVE: "bg-blue-100 text-blue-700",
  PENDING: "bg-amber-100 text-amber-700",
  NOT_ACTIVE: "bg-secondary text-secondary-foreground",
  FAILED: "bg-red-100 text-red-700",
};

export function CredentialStatusPill({ status }: { status: CredentialStatus }) {
  return (
    <span
      className={cn(
        "rounded-md px-2.5 py-1 text-[11px] font-bold tracking-wide",
        CLASS[status]
      )}
    >
      {LABEL[status]}
    </span>
  );
}
