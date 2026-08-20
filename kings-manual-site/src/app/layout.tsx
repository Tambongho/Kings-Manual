import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The King's Manual — The Complete Encyclopedia of Men",
  description:
    "A three-volume encyclopedia covering the biology, history, philosophy, and practical mastery of manhood. 116 chapters. One complete system.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#fbfaf7] text-[#1a1a1a] font-body">
        {children}
      </body>
    </html>
  );
}
