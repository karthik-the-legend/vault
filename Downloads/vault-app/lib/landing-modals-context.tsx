"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type LandingModal = "auth" | "setup" | null;

interface LandingModalsState {
  active: LandingModal;
  openAuth: () => void;
  openSetup: () => void;
  close: () => void;
}

const LandingModalsContext = createContext<LandingModalsState | null>(null);

export function LandingModalsProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<LandingModal>(null);

  return (
    <LandingModalsContext.Provider
      value={{
        active,
        openAuth: () => setActive("auth"),
        openSetup: () => setActive("setup"),
        close: () => setActive(null),
      }}
    >
      {children}
    </LandingModalsContext.Provider>
  );
}

export function useLandingModals() {
  const ctx = useContext(LandingModalsContext);
  if (!ctx) {
    throw new Error("useLandingModals must be used within LandingModalsProvider");
  }
  return ctx;
}
