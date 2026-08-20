import type { Metadata } from "next";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  title: "VAULT — Your Gaming Identity",
  description:
    "One unified profile for your games, achievements, tournaments and opportunities.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
