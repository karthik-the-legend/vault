"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Gamepad2, Shield, Trophy, Camera, Upload } from "lucide-react";
import { Modal } from "@/components/shared/modal";
import { useLandingModals } from "@/lib/landing-modals-context";
import { useSession } from "@/lib/session-context";
import { VerifiedDot } from "@/components/shared/verified-badge";
import { cn } from "@/lib/utils";
import { ROLE_OPTIONS } from "@/lib/constants";
import { AccountType } from "@/types";

const TYPE_CARDS: { type: AccountType; icon: typeof Gamepad2; title: string; hint: string }[] = [
  { type: "GAMER", icon: Gamepad2, title: "Gamer", hint: "Player Identity & Stats" },
  { type: "ESPORTS_CLUB", icon: Shield, title: "Esports Club", hint: "Multi-Roster Org" },
  { type: "ORGANIZER", icon: Trophy, title: "Organizer", hint: "Leagues & Events" },
];

const GAME_CHIPS = ["BGMI", "VALORANT", "FREE FIRE", "COD MOBILE", "CS2", "DOTA 2"];

const CLUB_TYPES = [
  "College Esports Club",
  "Independent Esports Club",
  "Professional Organization",
  "Community / Gaming Club",
];

const ORGANIZER_TYPES = [
  "Tournament Organizer",
  "Esports League",
  "Event Company",
  "College / Campus Organizer",
  "Community Organizer",
];

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-bold tracking-wide text-foreground uppercase">
        {label}
      </label>
      {children}
    </div>
  );
}

function TextInput({ defaultValue, type }: { defaultValue?: string; type?: string }) {
  return (
    <input
      type={type}
      defaultValue={defaultValue}
      className="h-11 rounded-sm border border-border px-3.5 text-sm text-foreground outline-none focus:border-foreground"
    />
  );
}

function HandleInput({ defaultValue }: { defaultValue?: string }) {
  return (
    <div className="relative flex items-center">
      <span className="absolute left-3.5 text-sm text-[color:var(--text-muted)]">@</span>
      <input
        defaultValue={defaultValue}
        className="h-11 w-full rounded-sm border border-border pr-3.5 pl-8 text-sm text-foreground outline-none focus:border-foreground"
      />
    </div>
  );
}

function SelectInput({ options }: { options: string[] }) {
  return (
    <select className="h-11 w-full rounded-sm border border-border bg-background px-3.5 text-sm text-foreground outline-none focus:border-foreground">
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  );
}

function TextArea({ defaultValue }: { defaultValue?: string }) {
  return (
    <textarea
      defaultValue={defaultValue}
      rows={3}
      className="resize-none rounded-sm border border-border px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-foreground"
    />
  );
}

function LogoUploadBlock({ label }: { label: string }) {
  return (
    <div className="rounded-lg border border-dashed border-border bg-secondary p-4 text-center">
      <Upload className="mx-auto mb-1.5 size-6 text-muted-foreground" strokeWidth={1.75} />
      <div className="text-[13px] font-bold text-foreground">{label}</div>
      <div className="mt-0.5 text-[11px] text-muted-foreground">PNG or JPG, square format recommended</div>
      <button
        type="button"
        className="mt-2 rounded-sm border border-border bg-background px-3 py-1.5 text-xs font-semibold"
      >
        Select Image File
      </button>
    </div>
  );
}

function GameChipsField({ games, toggleGame }: { games: string[]; toggleGame: (g: string) => void }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <label className="text-xs font-bold tracking-wide text-foreground uppercase">
          Active Games
        </label>
        <span className="text-[11px] font-bold text-accent-blue">{games.length} Selected</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {GAME_CHIPS.map((game) => {
          const selected = games.includes(game);
          return (
            <button
              key={game}
              type="button"
              onClick={() => toggleGame(game)}
              className={cn(
                "rounded-full border px-3.5 py-2 text-xs font-bold transition-colors",
                selected
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-background text-muted-foreground hover:border-[#9CA3AF]"
              )}
            >
              {selected ? "✓ " : "+ "}
              {game}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function OnboardingWizardModal() {
  const { active, close } = useLandingModals();
  const { login } = useSession();
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState<AccountType>("GAMER");
  const [games, setGames] = useState<string[]>(["BGMI", "VALORANT"]);

  function reset() {
    setStep(1);
    setAccountType("GAMER");
    setGames(["BGMI", "VALORANT"]);
  }

  function handleClose() {
    close();
    reset();
  }

  function toggleGame(game: string) {
    setGames((prev) =>
      prev.includes(game) ? prev.filter((g) => g !== game) : [...prev, game]
    );
  }

  function finish() {
    login(accountType);
    router.push("/");
    handleClose();
  }

  return (
    <Modal
      open={active === "setup"}
      onClose={handleClose}
      title="Setup your VAULT"
      maxWidth="520px"
    >
      <div className="max-h-[80vh] overflow-y-auto p-6">
        <div className="mb-6 flex gap-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={cn(
                "h-1 flex-1 rounded-full transition-colors",
                s <= step ? "bg-foreground" : "bg-border"
              )}
            />
          ))}
        </div>

        {step === 1 && (
          <div>
            <h4 className="mb-1.5 text-base font-extrabold text-foreground">
              1. Choose Account Type
            </h4>
            <p className="mb-4 text-[13px] text-muted-foreground">
              Select the persistent identity type that fits your role in the ecosystem.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {TYPE_CARDS.map((card) => {
                const Icon = card.icon;
                return (
                  <button
                    key={card.type}
                    type="button"
                    onClick={() => setAccountType(card.type)}
                    className={cn(
                      "flex flex-col items-center gap-1.5 rounded-sm border p-4 text-center transition-colors",
                      accountType === card.type
                        ? "border-foreground bg-background shadow-[0_0_0_1px_var(--foreground)]"
                        : "border-border bg-secondary hover:border-[#9CA3AF] hover:bg-background"
                    )}
                  >
                    <Icon className="size-6 text-foreground" strokeWidth={1.75} />
                    <span className="text-sm font-bold text-foreground">{card.title}</span>
                    <span className="text-[11px] text-muted-foreground">{card.hint}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 2 && accountType === "GAMER" && (
          <div className="flex flex-col gap-3.5">
            <div>
              <h4 className="mb-1 text-base font-extrabold text-foreground">
                2. Gamer Identity &amp; Games
              </h4>
              <p className="text-[13px] text-muted-foreground">
                Establish your gaming handle and select active games.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Display Name">
                <TextInput defaultValue="ANIKET" />
              </Field>
              <Field label="Custom Handle">
                <HandleInput defaultValue="aniket" />
              </Field>
            </div>
            <Field label="Primary In-Game Role">
              <SelectInput options={ROLE_OPTIONS} />
            </Field>
            <GameChipsField games={games} toggleGame={toggleGame} />
          </div>
        )}

        {step === 2 && accountType === "ESPORTS_CLUB" && (
          <div className="flex flex-col gap-3.5">
            <div>
              <h4 className="mb-1 text-base font-extrabold text-foreground">
                2. Club Identity
              </h4>
              <p className="text-[13px] text-muted-foreground">
                Establish your organization&apos;s official presence on VAULT.
              </p>
            </div>
            <Field label="Club / Organization Name">
              <TextInput defaultValue="ZARX ESPORTS" />
            </Field>
            <Field label="Custom Handle">
              <HandleInput defaultValue="zarx_esports" />
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Primary Location / City">
                <TextInput defaultValue="Mumbai, India" />
              </Field>
              <Field label="Founded Year">
                <TextInput defaultValue="2019" type="number" />
              </Field>
            </div>
            <Field label="Club Type">
              <SelectInput options={CLUB_TYPES} />
            </Field>
            <Field label="Club Description / About">
              <TextArea defaultValue="Competitive esports organization building teams across India's biggest games." />
            </Field>
          </div>
        )}

        {step === 2 && accountType === "ORGANIZER" && (
          <div className="flex flex-col gap-3.5">
            <div>
              <h4 className="mb-1 text-base font-extrabold text-foreground">
                2. Organizer Identity
              </h4>
              <p className="text-[13px] text-muted-foreground">
                Set up your tournament execution identity.
              </p>
            </div>
            <Field label="Organization / Organizer Name">
              <TextInput defaultValue="ZARX GAMING" />
            </Field>
            <Field label="Custom Handle">
              <HandleInput defaultValue="zarx_gaming" />
            </Field>
            <Field label="Organizer Type">
              <SelectInput options={ORGANIZER_TYPES} />
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Primary Location / City">
                <TextInput defaultValue="Bengaluru, India" />
              </Field>
              <Field label="Founded / Established Year">
                <TextInput defaultValue="2020" type="number" />
              </Field>
            </div>
            <Field label="About the Organization">
              <TextArea defaultValue="The authority in tier-1 community tournament execution." />
            </Field>
          </div>
        )}

        {step === 3 && accountType === "GAMER" && (
          <div className="flex flex-col gap-3.5">
            <div>
              <h4 className="mb-1 text-base font-extrabold text-foreground">
                3. Game Profile Evidence &amp; Verification
              </h4>
              <p className="text-[13px] text-muted-foreground">
                Link your verified publisher ID to authenticate tier rank and tournament history.
              </p>
            </div>
            <Field label="Krafton In-Game Character ID / Riot ID">
              <TextInput defaultValue="512398412" />
            </Field>
            <div className="rounded-lg border border-dashed border-border bg-secondary p-4 text-center">
              <Camera className="mx-auto mb-1.5 size-6 text-muted-foreground" strokeWidth={1.75} />
              <div className="text-[13px] font-bold text-foreground">
                Upload Game Career Screenshot
              </div>
              <div className="mt-0.5 text-[11px] text-muted-foreground">
                In-game tier season snapshot or tournament badge
              </div>
              <button
                type="button"
                className="mt-2 rounded-sm border border-border bg-background px-3 py-1.5 text-xs font-semibold"
              >
                Select Image File
              </button>
              <div className="mt-1.5 text-[11px] font-semibold text-accent-blue">
                career_proof_bgmi_conqueror.png (Attached)
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-md border border-[rgba(0,102,255,0.15)] bg-[rgba(0,102,255,0.06)] px-3.5 py-2.5">
              <VerifiedDot />
              <span className="text-xs font-semibold text-accent-blue">
                Status: Ready for Instant VAULT Credential Generation
              </span>
            </div>
          </div>
        )}

        {step === 3 && accountType === "ESPORTS_CLUB" && (
          <div className="flex flex-col gap-3.5">
            <div>
              <h4 className="mb-1 text-base font-extrabold text-foreground">
                3. Rosters, Links &amp; Verification
              </h4>
              <p className="text-[13px] text-muted-foreground">
                Activate your multi-roster portal and club license.
              </p>
            </div>
            <GameChipsField games={games} toggleGame={toggleGame} />
            <div className="grid grid-cols-2 gap-3">
              <Field label="Current Active Rosters">
                <TextInput defaultValue="3" type="number" />
              </Field>
              <Field label="Number of Active Players">
                <TextInput defaultValue="14" type="number" />
              </Field>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Official Social Links">
                <TextInput defaultValue="instagram.com/zarxesports" />
              </Field>
              <Field label="Official Website">
                <TextInput defaultValue="zarxesports.gg" />
              </Field>
            </div>
            <LogoUploadBlock label="Upload Club Logo" />
            <div className="rounded-lg border border-border bg-secondary p-4">
              <div className="flex items-center gap-2 text-[13px] font-bold text-foreground">
                <VerifiedDot />
                Verified Club Roster Badge: VLT-IND-902
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Your organization will have verified club status with multi-team roster management.
              </p>
            </div>
          </div>
        )}

        {step === 3 && accountType === "ORGANIZER" && (
          <div className="flex flex-col gap-3.5">
            <div>
              <h4 className="mb-1 text-base font-extrabold text-foreground">
                3. Track Record &amp; Verification
              </h4>
              <p className="text-[13px] text-muted-foreground">
                Official tournament host license and bracket operator status.
              </p>
            </div>
            <GameChipsField games={games} toggleGame={toggleGame} />
            <div className="grid grid-cols-2 gap-3">
              <Field label="Tournaments / Leagues Organized">
                <TextInput defaultValue="48" type="number" />
              </Field>
              <Field label="Number of Events Organized">
                <TextInput defaultValue="112" type="number" />
              </Field>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Total Players / Teams Hosted">
                <TextInput defaultValue="12,400" />
              </Field>
              <Field label="Major Tournaments / Leagues">
                <TextInput defaultValue="ZARX Champions League" />
              </Field>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Official Website">
                <TextInput defaultValue="zarxgaming.gg" />
              </Field>
              <Field label="Official Social Links">
                <TextInput defaultValue="instagram.com/zarxgaming" />
              </Field>
            </div>
            <LogoUploadBlock label="Upload Organization Logo" />
            <div className="rounded-lg border border-border bg-secondary p-4">
              <div className="flex items-center gap-2 text-[13px] font-bold text-foreground">
                <VerifiedDot />
                Tournament License: TL-2026-ZX
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Verified host badge enabled for custom room bracket management and prize pool escrow.
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-end gap-3">
          {step < 3 ? (
            <button
              type="button"
              onClick={() => setStep((s) => s + 1)}
              className="rounded-sm bg-foreground px-5 py-3 text-[13px] font-bold text-background transition-colors hover:bg-[#222222]"
            >
              Continue →
            </button>
          ) : (
            <button
              type="button"
              onClick={finish}
              className="rounded-sm bg-accent-blue px-5 py-3 text-[13px] font-bold text-white transition-opacity hover:opacity-90"
            >
              Complete &amp; Launch VAULT
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
}
