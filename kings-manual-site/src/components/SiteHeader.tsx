"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BUNDLE } from "@/lib/products";

const NAV = [
  { href: "#volumes", label: "Volumes" },
  { href: "#inside", label: "Look inside" },
  { href: "#contents", label: "Contents" },
  { href: "#faq", label: "FAQ" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 text-ink" aria-label="The King's Manual home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink font-display text-sm text-white">KM</span>
          <span className="font-display text-[19px] tracking-[0.02em]">The King&rsquo;s Manual</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {NAV.map((item) => <Link key={item.href} href={item.href} className="text-sm font-medium text-ink/65 transition-colors hover:text-burgundy">{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={BUNDLE.gumroadUrl} className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-burgundy sm:inline-flex">Get the set · ${BUNDLE.price}</a>
          <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)} className="flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden">
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-navigation" className="border-t border-line bg-paper px-6 pb-6 pt-3 md:hidden" aria-label="Mobile navigation">
          {NAV.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block border-b border-line py-3 text-sm font-medium text-ink">{item.label}</Link>)}
          <a href={BUNDLE.gumroadUrl} className="mt-5 flex justify-center rounded-full bg-burgundy px-5 py-3 text-sm font-semibold text-white">Get the complete set · ${BUNDLE.price}</a>
        </nav>
      )}
    </header>
  );
}
