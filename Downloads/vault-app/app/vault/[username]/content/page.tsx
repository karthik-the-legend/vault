import { notFound } from "next/navigation";
import { Play } from "lucide-react";
import { contentItems, getProfileByUsername } from "@/lib/mock-data";
import { MobileAppShell } from "@/components/layout/mobile-app-shell";

export default async function ContentPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const profile = getProfileByUsername(username);
  if (!profile) notFound();

  const items = contentItems[username] ?? [];

  return (
    <MobileAppShell onBack={true} title="CONTENT" headerRight={<span />}>
      <div className="grid w-full grid-cols-2 gap-3">
        {items.map((item) => (
          <button key={item.id} type="button" className="flex flex-col items-start gap-1.5 text-left">
            <div
              className="flex aspect-video w-full items-center justify-center rounded-lg"
              style={{ background: item.gradient ?? "#111111" }}
            >
              <span className="flex size-8 items-center justify-center rounded-full bg-white/20 text-white">
                <Play className="size-3.5" fill="currentColor" strokeWidth={0} />
              </span>
            </div>
            <span className="text-xs font-bold text-foreground">{item.title}</span>
            <span className="text-[11px] text-[#767676]">
              {item.tag} · {item.duration}
            </span>
          </button>
        ))}
      </div>
    </MobileAppShell>
  );
}
