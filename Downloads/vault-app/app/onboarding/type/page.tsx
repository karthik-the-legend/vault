"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useOnboarding } from "@/lib/onboarding-context";
import { ACCOUNT_TYPES } from "@/lib/constants";
import { SelectableTile } from "@/components/shared/selectable-tile";
import { AccountType } from "@/types";

function PreselectFromQuery() {
  const searchParams = useSearchParams();
  const { setAccountType } = useOnboarding();

  useEffect(() => {
    const as = searchParams.get("as") as AccountType | null;
    if (as && ["GAMER", "ESPORTS_CLUB", "ORGANIZER"].includes(as)) {
      setAccountType(as);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return null;
}

export default function OnboardingTypePage() {
  const router = useRouter();
  const { accountType, setAccountType } = useOnboarding();

  return (
    <div>
      <Suspense fallback={null}>
        <PreselectFromQuery />
      </Suspense>

      <h1 className="text-center text-3xl font-black tracking-tight sm:text-4xl">
        WHAT ARE YOU BUILDING?
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {ACCOUNT_TYPES.map((item) => (
          <SelectableTile
            key={item.type}
            eyebrow={item.eyebrow}
            title={item.title}
            description={item.description}
            selected={accountType === item.type}
            onClick={() => setAccountType(item.type)}
          />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button
          type="button"
          onClick={() => router.push("/onboarding/identity")}
          className="h-12 w-full max-w-xs rounded-md bg-foreground text-sm font-bold tracking-wide text-background sm:w-auto sm:px-10"
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}
