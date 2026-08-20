import { profiles } from "@/lib/mock-data";
import { ProfilePreviewCard } from "@/components/features/profile-preview-card";

export function DirectorySection() {
  const featured = profiles.slice(0, 3);

  return (
    <section className="bg-secondary/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="font-heading text-3xl leading-[1.1] font-black tracking-tight sm:text-4xl">
          DISCOVER THE PEOPLE BEHIND THE GAME.
        </h2>
        <p className="mt-3 text-base text-muted-foreground">
          Browse through gaming stakeholders with verified competitive track
          records.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((profile) => (
            <ProfilePreviewCard key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
    </section>
  );
}
