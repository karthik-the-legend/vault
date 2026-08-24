import { Trophy } from "lucide-react";

export function Trophy2Placeholder() {
  return (
    <div
      className="flex aspect-[21/9] items-center justify-center text-white/20"
      style={{
        background:
          "radial-gradient(circle at 30% 30%, #312e81, #0f172a 70%)",
      }}
    >
      <Trophy className="size-9" strokeWidth={1.5} />
    </div>
  );
}
