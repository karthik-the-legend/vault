import { VaultIdentityTypePage } from "@/components/features/vault-identity/vault-identity-type-page";

export default function VaultIdentityGamersPage() {
  return (
    <VaultIdentityTypePage
      pageTitle="VAULT+ FOR GAMERS"
      pageSubtitle="Reputation and verification built directly into your game card."
      badge="GAMER PASS"
      heading="Own your competitive record."
      description="Gamer verification ensures you are who you say you are across connected Web3 games and platforms. Eliminate account impersonation and stand out when applying for elite clans, leagues, or tournaments."
      ctaLabel="Become a Verified Gamer Today"
      ctaButtonLabel="Get VAULT+ Gamer"
      checklist={[
        "Identity Verification",
        "Game Profile Verification",
        "Verified Achievements",
        "Verified Tournament Record",
        "Enhanced Profile Credibility",
      ]}
    />
  );
}
