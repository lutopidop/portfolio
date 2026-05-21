import "../styles/globals.css";

import type { Metadata } from "next";
import { Mulish } from "next/font/google";

import Analytics from "./Analytics";
import Providers from "./Providers";

const mulish = Mulish({ subsets: ["latin"] });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | Jing An Lam",
    default: "Jing An Lam",
  },
  description:
    "Portfolio of Jing An Lam (林静安) — Shopify app & theme developer, AI integration specialist.",
  icons: ["/svg/logo-new.svg"],
  keywords: [
    "Shopify",
    "Shopify developer",
    "React",
    "Next.js",
    "Jing An Lam",
    "林静安",
    "AI integration",
  ],
  authors: [
    {
      name: "Jing An Lam",
    },
  ],
  creator: "Jing An Lam",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Jing An Lam | Shopify Developer",
    description:
      "Portfolio of Jing An Lam — Shopify app & theme developer building e-commerce and AI-powered solutions.",
    siteName: "Jing An Lam",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <Analytics />
      <body className={mulish.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
