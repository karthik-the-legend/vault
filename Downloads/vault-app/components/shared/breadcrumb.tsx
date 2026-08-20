import Link from "next/link";
import { Fragment } from "react";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <Fragment key={item.label}>
            {i > 0 && <span className="text-muted-foreground/60">/</span>}
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:text-foreground">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "font-medium text-foreground" : ""}>
                {item.label}
              </span>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
}
