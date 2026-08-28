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
      <div className="mx-auto max-w-[1320px] px-6 pb-12 pt-8 md:pb-16 md:pt-12">
        <div className="mb-8 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/50">
          <span>Independent publishing</span>
          <span className="h-px flex-1 bg-line" />
          <span>Three-volume reference</span>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14">
          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              The complete encyclopedia of men
            </p>
            <h1 className="text-balance font-display text-[48px] leading-[0.96] tracking-[-0.03em] text-ink sm:text-6xl lg:text-[68px]">
              One clear reference for a life with many moving parts.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-foreground/78">
              Biology, character, relationships, work, money, fatherhood, and
              legacy&mdash;organized across three evidence-led volumes designed
              to be used, marked up, and returned to for years.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={BUNDLE.gumroadUrl}
                className="inline-flex min-h-13 items-center justify-center bg-ink px-7 py-4 text-[15px] font-semibold tracking-wide text-white transition-colors hover:bg-burgundy"
              >
                Get all three volumes &mdash; ${BUNDLE.price}
              </a>
              <a
                href="#contents"
                className="group inline-flex min-h-13 items-center justify-center gap-2 border border-ink/25 px-6 py-4 text-[15px] font-medium text-ink transition-colors hover:border-ink"
              >
                Look inside first
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <p className="mt-4 text-sm text-muted">
              Instant PDF delivery &middot; One-time payment &middot; Read on any device
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2px] bg-[#e8e3d9] shadow-[0_24px_80px_rgba(34,29,22,0.13)]">
              <Image
                src="/lifestyle/hero-editorial-v2.webp"
                alt="The three King's Manual volumes photographed in a modern study"
                width={1920}
                height={1280}
                priority
                className="aspect-[16/11] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 grid gap-2 bg-gradient-to-t from-black/75 via-black/45 to-transparent px-6 pb-5 pt-20 sm:grid-cols-[1fr_auto] sm:items-end sm:px-8 sm:pb-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e6c884]">
                    The complete set
                  </p>
                  <p className="mt-1 font-display text-2xl text-white">
                    500+ pages. 15 parts. 116 chapters.
                  </p>
                </div>
                <p className="font-display text-4xl text-white">${BUNDLE.price}</p>
              </div>
          </div>
        </div>

        <div className="mt-12 grid border-y border-line md:grid-cols-3">
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
