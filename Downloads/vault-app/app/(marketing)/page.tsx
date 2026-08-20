import { Hero } from "@/components/features/landing/hero";
import { AccountTypesSection } from "@/components/features/landing/account-types-section";
import { VerifiedSection } from "@/components/features/landing/verified-section";
import { DirectorySection } from "@/components/features/landing/directory-section";
import { CTASection } from "@/components/features/landing/cta-section";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <AccountTypesSection />
      <VerifiedSection />
      <DirectorySection />
      <CTASection />
    </>
  );
}
