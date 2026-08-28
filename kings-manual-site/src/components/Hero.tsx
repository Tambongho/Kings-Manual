import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import { BUNDLE } from "@/lib/products";

const INCLUDES = [
  "All 116 chapters across three volumes",
  "The 128-page companion workbook",
  "Every future revision, included",
];

export default function Hero() {
  return (
    <section className="border-b border-line bg-[#f7f5f0]">
      <div className="mx-auto max-w-[1380px] px-4 pb-10 pt-5 sm:px-6 md:pb-14 md:pt-8">
        <div className="mb-5 flex items-center gap-4 px-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/50 sm:text-[11px]">
          <span>Independent publishing</span>
          <span className="h-px flex-1 bg-line" />
          <span>Three-volume reference</span>
        </div>

        <div className="relative overflow-hidden bg-[#f7f4ed] shadow-[0_24px_80px_rgba(34,29,22,0.12)] sm:min-h-[680px] lg:min-h-[700px]">
          <div className="relative h-[310px] sm:hidden">
            <Image src="/lifestyle/hero-editorial-v3.webp" alt="The three King's Manual volumes photographed in a modern study" fill priority sizes="100vw" className="object-cover object-[72%_center]" />
          </div>
          <Image
            src="/lifestyle/hero-editorial-v3.webp"
            alt=""
            fill
            priority
            sizes="(min-width: 640px) 100vw, 0px"
            className="hidden object-cover object-center sm:block"
          />

          <div aria-hidden className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(247,244,237,0.98)_0%,rgba(247,244,237,0.94)_40%,rgba(247,244,237,0.35)_59%,transparent_75%)] sm:block" />

          <div className="relative z-10 px-6 pb-8 pt-8 sm:flex sm:min-h-[680px] sm:max-w-[660px] sm:flex-col sm:justify-center sm:px-10 sm:py-14 lg:min-h-[700px] lg:px-16 lg:py-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold sm:text-sm">
              The complete encyclopedia of men
            </p>
            <h1 className="text-balance font-display text-[42px] leading-[0.96] tracking-[-0.03em] text-ink sm:text-6xl lg:text-[72px]">
              One clear reference for a life with many moving parts.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-foreground/75 sm:text-lg sm:leading-8">
              Biology, character, relationships, work, money, fatherhood, and
              legacy&mdash;organized across three evidence-led volumes designed
              to be used, marked up, and returned to for years.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={BUNDLE.gumroadUrl}
                className="inline-flex min-h-13 items-center justify-center bg-ink px-7 py-4 text-[15px] font-semibold tracking-wide text-white transition-colors hover:bg-burgundy"
              >
                Get all three volumes &mdash; ${BUNDLE.price}
              </a>
              <a
                href="#contents"
                className="group inline-flex min-h-13 items-center justify-center gap-2 border border-ink/30 px-6 py-4 text-[15px] font-medium text-ink transition-colors hover:border-ink hover:bg-white/35"
              >
                Look inside first
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <p className="mt-4 text-sm text-muted">
              Instant PDF delivery &middot; One-time payment &middot; Read on any device
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-ink/15 pt-5 text-xs uppercase tracking-[0.13em] text-ink/55">
              <span>500+ pages</span><span>15 parts</span><span>116 chapters</span>
            </div>
          </div>
        </div>

        <div className="mt-8 grid border-y border-line md:grid-cols-3">
          {INCLUDES.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 border-line px-1 py-4 text-sm text-ink/75 md:border-r md:px-5 md:last:border-r-0"
            >
              <Check className="h-4 w-4 shrink-0 text-gold" strokeWidth={2} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
