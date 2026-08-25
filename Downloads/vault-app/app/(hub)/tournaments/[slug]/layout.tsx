import { getTournamentSlugParams } from "@/lib/mock-data";

export async function generateStaticParams() {
  return getTournamentSlugParams();
}

export default function TournamentSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
