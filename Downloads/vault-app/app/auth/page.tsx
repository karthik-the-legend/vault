import Link from "next/link";
import { AuthCard } from "@/components/features/auth/auth-card";

export default function AuthPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="p-6">
        <Link href="/" className="text-lg font-black tracking-tight">
          VAULT
        </Link>
      </header>
      <main className="flex flex-1 items-start justify-center px-4 pt-12 pb-24 sm:items-center sm:pt-0">
        <AuthCard />
      </main>
    </div>
  );
}
