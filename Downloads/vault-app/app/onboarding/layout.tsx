import Link from "next/link";
import { OnboardingProvider } from "@/lib/onboarding-context";

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <OnboardingProvider>
      <div className="flex min-h-screen flex-col">
        <header className="p-6">
          <Link href="/" className="text-lg font-black tracking-tight">
            VAULT
          </Link>
        </header>
        <main className="flex flex-1 justify-center px-4 pt-8 pb-24">
          <div className="w-full max-w-3xl">{children}</div>
        </main>
      </div>
    </OnboardingProvider>
  );
}
