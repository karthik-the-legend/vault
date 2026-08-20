import Link from "next/link";
import { Menu, Search } from "lucide-react";

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-lg font-black tracking-tight">
          VAULT
        </Link>
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            className="text-foreground/80 hover:text-foreground"
          >
            <Search className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Menu"
            className="text-foreground/80 hover:text-foreground"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
