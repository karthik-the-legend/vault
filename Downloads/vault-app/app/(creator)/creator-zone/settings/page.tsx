import { currentUsername, getProfileByUsername } from "@/lib/mock-data";

export default function CreatorSettingsPage() {
  const profile = getProfileByUsername(currentUsername);

  return (
    <div className="max-w-lg">
      <h1 className="text-2xl font-black tracking-tight">Settings</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Manage your Creator Zone identity and preferences.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label className="text-xs font-semibold tracking-wide">DISPLAY NAME</label>
          <input
            defaultValue={profile?.displayName}
            className="mt-1.5 h-11 w-full rounded-md border border-border px-3.5 text-sm outline-none focus:border-foreground"
          />
        </div>
        <div>
          <label className="text-xs font-semibold tracking-wide">BIO</label>
          <textarea
            defaultValue={profile?.bio}
            rows={3}
            className="mt-1.5 w-full resize-none rounded-md border border-border px-3.5 py-2.5 text-sm outline-none focus:border-foreground"
          />
        </div>
        <button className="h-11 w-full rounded-md bg-foreground text-sm font-bold text-background">
          Save Changes
        </button>
      </div>
    </div>
  );
}
