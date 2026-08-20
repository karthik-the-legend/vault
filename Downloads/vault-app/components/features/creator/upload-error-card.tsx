import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface UploadError {
  title: string;
  description: string;
  severity: "warning" | "danger";
  retryable?: boolean;
}

export function UploadErrorCard({
  error,
  onRetry,
}: {
  error: UploadError;
  onRetry?: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-border bg-card p-4">
      <div className="flex items-start gap-3">
        <span
          className={cn(
            "flex size-8 shrink-0 items-center justify-center rounded-full",
            error.severity === "danger"
              ? "bg-red-100 text-red-600"
              : "bg-amber-100 text-amber-600"
          )}
        >
          <AlertTriangle className="size-4" />
        </span>
        <div>
          <div className="text-sm font-bold tracking-wide">{error.title}</div>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {error.description}
          </p>
        </div>
      </div>
      {error.retryable && onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="shrink-0 rounded-md border border-border px-3.5 py-1.5 text-xs font-bold"
        >
          Try Again
        </button>
      )}
    </div>
  );
}
