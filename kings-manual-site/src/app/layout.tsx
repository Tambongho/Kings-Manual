import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Analytics from "@/components/Analytics";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", display: "swap" });

const SITE_URL = "https://kingsmanual.com";
const TITLE = "The King's Manual — The Complete Encyclopedia of Men";
const DESCRIPTION =
  "A three-volume encyclopedia covering the biology, history, philosophy, and practical mastery of manhood. 116 chapters. One complete system.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — The King's Manual",
  },
  description: DESCRIPTION,
  keywords: [
    "book for men",
    "manhood",
    "encyclopedia of men",
    "self improvement for men",
    "male biology and psychology",
    "The King's Manual",
  ],
  authors: [{ name: "The King's Manual" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "The King's Manual",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/covers/bundle-3d.webp",
        width: 1421,
        height: 809,
        alt: "The King's Manual — The Complete 3-Volume Set",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/covers/bundle-3d.webp"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport = {
  themeColor: "#141615",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-body">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
