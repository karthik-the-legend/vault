"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { AccountType, RoleOption } from "@/types";

interface OnboardingState {
  accountType: AccountType;
  setAccountType: (t: AccountType) => void;
  displayName: string;
  setDisplayName: (v: string) => void;
  username: string;
  setUsername: (v: string) => void;
  country: string;
  setCountry: (v: string) => void;
  bio: string;
  setBio: (v: string) => void;
  role: RoleOption;
  setRole: (v: RoleOption) => void;
  selectedGames: string[];
  toggleGame: (slug: string) => void;
}

const OnboardingContext = createContext<OnboardingState | null>(null);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [accountType, setAccountType] = useState<AccountType>("GAMER");
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [country, setCountry] = useState("India");
  const [bio, setBio] = useState("");
  const [role, setRole] = useState<RoleOption>("IGL");
  const [selectedGames, setSelectedGames] = useState<string[]>([]);

  function toggleGame(slug: string) {
    setSelectedGames((prev) =>
      prev.includes(slug) ? prev.filter((g) => g !== slug) : [...prev, slug]
    );
  }

  return (
    <OnboardingContext.Provider
      value={{
        accountType,
        setAccountType,
        displayName,
        setDisplayName,
        username,
        setUsername,
        country,
        setCountry,
        bio,
        setBio,
        role,
        setRole,
        selectedGames,
        toggleGame,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const ctx = useContext(OnboardingContext);
  if (!ctx) {
    throw new Error("useOnboarding must be used within OnboardingProvider");
  }
  return ctx;
}
