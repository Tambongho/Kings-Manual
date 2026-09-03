import { ArrowRight, BookOpen, Download, RefreshCw, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { BUNDLE } from "@/lib/products";

const TRUST_POINTS = [
  { icon: BookOpen, label: "116 chapters", note: "Across three focused volumes" },
  { icon: Download, label: "Instant access", note: "Digital editions delivered at checkout" },
  { icon: ShieldCheck, label: "Secure checkout", note: "Payment handled by Gumroad" },
  { icon: RefreshCw, label: "Lifetime updates", note: "Future revisions included" },
];

export default function Hero() {
  return (
    <section className="bg-background pb-8 pt-4 md:pb-12 md:pt-6">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="relative min-h-[710px] overflow-hidden rounded-[22px] bg-ink md:min-h-[720px]">
          <Image
            src="/lifestyle/hero-reader-v1.webp"
            alt="A reader at home holding The King's Manual Volume I"
            fill
            priority
            sizes="(min-width: 1440px) 1392px, 100vw"
            className="object-cover object-[57%_center] md:object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(12,17,15,0.95)_0%,rgba(12,17,15,0.68)_55%,rgba(12,17,15,0.25)_100%)] md:bg-[linear-gradient(90deg,rgba(12,17,15,0.94)_0%,rgba(12,17,15,0.79)_38%,rgba(12,17,15,0.20)_66%,rgba(12,17,15,0.05)_100%)]" />

          <div className="relative z-10 flex min-h-[710px] items-end px-6 py-9 sm:px-10 md:min-h-[720px] md:items-center md:px-16 md:py-14 lg:px-20">
            <div className="max-w-[650px] text-white">
              <div className="mb-6 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.19em] text-white/80">
                <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 backdrop-blur-sm">Independent reference</span>
                <span>Three volumes · 500+ pages</span>
              </div>
              <h1 className="max-w-[630px] text-balance font-display text-[48px] leading-[0.95] tracking-[-0.035em] sm:text-6xl lg:text-[76px]">
                A complete reference for the man you&rsquo;re becoming.
              </h1>
              <p className="mt-6 max-w-[590px] text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
                Biology, character, relationships, work, money, fatherhood, and legacy—organized into one clear, evidence-led collection.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href={BUNDLE.gumroadUrl} className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-burgundy px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#963746]">
                  Get the complete set — ${BUNDLE.price}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
                <a href="#volumes" className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/35 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-ink">
                  Explore the volumes
                </a>
              </div>
              <p className="mt-4 text-xs tracking-wide text-white/55">One-time purchase · Read on any device · No subscription</p>
            </div>
          </div>
        </div>

        <div className="grid overflow-hidden rounded-b-[18px] border-x border-b border-line bg-paper sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_POINTS.map(({ icon: Icon, label, note }, index) => (
            <div key={label} className={`flex items-center gap-3 px-5 py-5 ${index > 0 ? "border-t border-line sm:border-t-0" : ""} ${index % 2 ? "sm:border-l" : ""} ${index > 1 ? "sm:border-t lg:border-t-0" : ""} ${index > 0 ? "lg:border-l" : ""}`}>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background text-burgundy"><Icon className="h-4.5 w-4.5" strokeWidth={1.7} aria-hidden /></span>
              <span><strong className="block text-sm font-semibold text-ink">{label}</strong><span className="mt-0.5 block text-xs text-muted">{note}</span></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
