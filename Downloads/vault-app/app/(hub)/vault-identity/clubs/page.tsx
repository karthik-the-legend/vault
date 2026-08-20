import { VaultIdentityTypePage } from "@/components/features/vault-identity/vault-identity-type-page";

export default function VaultIdentityClubsPage() {
  return (
    <VaultIdentityTypePage
      pageTitle="VAULT+ FOR CLUBS"
      pageSubtitle="Trust metrics for official esports organizations and clans."
      badge="ORGANIZATION BADGE"
      heading="Build brand trust in esports."
      description="Verification for teams and organizations guarantees legal entity verification, safe player roster signings, and certified recruitment channels. Secure your brand, secure sponsor confidence, and shield your team from impersonation."
      ctaLabel="Verify Your Esports Organization"
      ctaButtonLabel="Get VAULT+ Club"
      checklist={[
        "Organization Verification",
        "Verified Teams",
        "Verified Roster",
        "Enhanced Organization Profile",
        "Recruitment Credibility",
      ]}
    />
  );
}
