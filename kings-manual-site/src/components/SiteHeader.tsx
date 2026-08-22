"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BUNDLE } from "@/lib/products";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "#contents", label: "The Volumes" },
    { href: "#offer", label: "The Complete Set" },
    { href: "#workbook", label: "Free Workbook" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-[#d7d1c6] bg-white/95 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-md"
          : "border-transparent bg-white/70 py-4 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-display text-lg tracking-wide text-ink">
          <span className="text-gold">THE</span> KING&rsquo;S MANUAL
        </Link>
        <nav className="hidden items-center gap-8 text-sm tracking-wide text-ink/70 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative transition-colors hover:text-gold"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={BUNDLE.gumroadUrl}
            className="hidden rounded-sm bg-ink px-4 py-2 text-sm tracking-wide text-white transition-all duration-300 hover:bg-gold sm:inline-block"
          >
            Get the Set — ${BUNDLE.price}
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="p-2 text-ink/70 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-4 space-y-1 border-t border-[#d7d1c6] px-6 pt-4 pb-2 md:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm text-ink/70 hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
