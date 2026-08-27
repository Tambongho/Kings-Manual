import { ArrowRight, Check } from "lucide-react";
import { BUNDLE } from "@/lib/products";

const INCLUDES = [
  "All 116 chapters across three volumes",
  "The 128-page companion workbook",
  "Every future revision, included",
];

export default function Hero() {
  return (
    <section className="hero-shell border-b border-line">
      <div className="mx-auto max-w-[1240px] px-6 pb-14 pt-10 md:pb-20 md:pt-16">
        <div className="mb-9 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/55">
          <span>Independent reference work</span>
          <span className="h-px flex-1 bg-line" />
          <span>First edition</span>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div className="max-w-2xl">
            <p className="mb-5 font-display text-xl italic text-gold">
              The Complete Encyclopedia of Men
            </p>
            <h1 className="text-balance font-display text-[48px] leading-[0.98] tracking-[-0.035em] text-ink sm:text-6xl lg:text-[74px]">
              A serious reference for the questions that shape a man&rsquo;s life.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-foreground/78">
              Biology, character, relationships, work, money, fatherhood, and
              legacy&mdash;brought together in one evidence-led, three-volume
              set. Written to be consulted for years, not skimmed in a weekend.
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

          <div className="relative">
            <div className="absolute -inset-5 translate-x-3 translate-y-3 border border-gold/25" />
            <div className="relative overflow-hidden bg-navy px-5 pb-5 pt-8 sm:px-8 sm:pb-7">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/covers/bundle-3d.webp"
                alt="The King's Manual complete three-volume set"
                className="relative z-10 w-full"
              />
              <div className="relative z-10 mt-2 grid gap-3 border-t border-white/15 pt-5 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
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
