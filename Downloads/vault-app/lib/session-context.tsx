"use client";

import { createContext, useContext, useSyncExternalStore } from "react";
import { AccountType } from "@/types";

export interface Session {
  accountType: AccountType;
  username: string;
}

const STORAGE_KEY = "vault_session";

const ACCOUNT_TYPE_USERNAME: Record<AccountType, string> = {
  GAMER: "aniket",
  ESPORTS_CLUB: "zarx_esports",
  ORGANIZER: "zarx_gaming",
};

type Listener = () => void;
const listeners = new Set<Listener>();

let cachedRaw: string | null | undefined;
let cachedSession: Session | null = null;

function getSnapshot(): Session | null {
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (raw === cachedRaw) return cachedSession;
  cachedRaw = raw;
  cachedSession = raw ? (JSON.parse(raw) as Session) : null;
  return cachedSession;
}

function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function notify() {
  for (const listener of listeners) listener();
}

function writeSession(session: Session | null) {
  if (session) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  } else {
    window.localStorage.removeItem(STORAGE_KEY);
  }
  notify();
}

function getServerSnapshot(): Session | null {
  return null;
}

interface SessionContextValue {
  session: Session | null;
  login: (accountType: AccountType) => void;
  logout: () => void;
}

const SessionContext = createContext<SessionContextValue | null>(null);

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const session = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function login(accountType: AccountType) {
    writeSession({ accountType, username: ACCOUNT_TYPE_USERNAME[accountType] });
  }

  function logout() {
    writeSession(null);
  }

  return (
    <SessionContext.Provider value={{ session, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error("useSession must be used within a SessionProvider");
  return ctx;
}
