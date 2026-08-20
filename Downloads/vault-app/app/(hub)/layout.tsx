import { HubSidebar } from "@/components/layout/hub-sidebar";

export default function HubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <HubSidebar />
      <main className="flex-1 overflow-x-hidden px-4 py-8 sm:px-8">
        {children}
      </main>
    </div>
  );
}
