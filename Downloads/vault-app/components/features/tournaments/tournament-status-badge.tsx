import { HubTournamentStatus } from "@/types";
import { cn } from "@/lib/utils";

const LABEL: Record<HubTournamentStatus, string> = {
  REGISTRATION_OPEN: "Registration Open",
  REGISTRATION_CLOSED: "Registration Closed",
  ONGOING: "Ongoing",
  COMPLETED: "Completed",
};

const CLASS: Record<HubTournamentStatus, string> = {
  REGISTRATION_OPEN: "text-blue-600",
  REGISTRATION_CLOSED: "text-muted-foreground",
  ONGOING: "text-emerald-600",
  COMPLETED: "text-muted-foreground",
};

export function TournamentStatusBadge({ status }: { status: HubTournamentStatus }) {
  return (
    <span className={cn("flex items-center gap-1 text-xs font-semibold", CLASS[status])}>
      <span className="size-1.5 rounded-full bg-current" />
      {LABEL[status]}
    </span>
  );
}
