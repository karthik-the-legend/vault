import { VaultIdentityTypePage } from "@/components/features/vault-identity/vault-identity-type-page";

export default function VaultIdentityOrganizersPage() {
  return (
    <VaultIdentityTypePage
      pageTitle="VAULT+ FOR ORGANIZERS"
      pageSubtitle="The standard of credibility for leagues and tournament hosters."
      badge="LEAGUE LICENSE"
      heading="The gold standard of tournament trust."
      description="Show player and sponsor communities that your operations are fully legitimate. Verified history of tournament delivery, verified match scoring integration, and escrowed transparent prize pools."
      ctaLabel="License Your Tournament Operations"
      ctaButtonLabel="Get VAULT+ Organizer"
      checklist={[
        "Organizer Verification",
        "Verified Tournament History",
        "Verified Results",
        "Enhanced Organizer Profile",
        "Event Credibility",
      ]}
    />
  );
}
