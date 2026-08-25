import { MarketingHeader } from "@/components/layout/marketing-header";
import { MarketingFooter } from "@/components/layout/marketing-footer";
import { LandingModalsProvider } from "@/lib/landing-modals-context";
import { AuthModal } from "@/components/features/landing/auth-modal";
import { OnboardingWizardModal } from "@/components/features/landing/onboarding-wizard-modal";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LandingModalsProvider>
      <div className="flex min-h-screen flex-col">
        <MarketingHeader />
        <main className="flex-1">{children}</main>
        <MarketingFooter />
      </div>
      <AuthModal />
      <OnboardingWizardModal />
    </LandingModalsProvider>
  );
}
