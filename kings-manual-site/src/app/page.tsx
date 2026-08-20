import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import { VOLUMES, BUNDLE, WORKBOOK } from "@/lib/products";
import { STATS } from "@/lib/stats";

const PROBLEMS = [
  "You've read the fitness advice, the money advice, and the \"be a better man\" advice — and none of it connects to any of the others.",
  "Every source has an angle: the supplement company wants to sell you supplements, the guru wants to sell you a course, the influencer wants a following.",
  "You're making decisions about your body, your money, and your relationships without a coherent framework for any of them.",
  "Nobody handed you a manual. You've been figuring out manhood from fragments — a podcast here, a book there, trial and error everywhere.",
];

const BENEFITS = [
  {
    title: "One system instead of a hundred sources",
    body: "Every chapter is built the same way: historical background, scientific evidence, psychological and cultural context, and practical application. You stop cross-referencing five different books and start using one.",
  },
  {
    title: "The biology, explained without hype",
    body: "What testosterone actually does. How the adolescent brain works. What the research really says about resilience, discipline, and habit formation — not gym-bro folklore, the evidence.",
  },
  {
    title: "3,000 years of how men actually lived",
    body: "From Aristotle and the Stoics to Bushido and Confucianism, from ancient Mesopotamia to the industrial revolution — the traditions and history that shaped what manhood has meant, so you're building on something instead of guessing.",
  },
  {
    title: "A practical playbook for the decisions that matter",
    body: "Marriage and fatherhood. Leadership and negotiation. Investing, real estate, and estate planning. A decade-by-decade map of a man's life from childhood to old age.",
  },
  {
    title: "Reference material, not a one-time read",
    body: "116 chapters organized so you can go straight to what you need — the chapter on negotiation before a raise conversation, the chapter on grief when you need it, the chapter on the forties when you get there.",
  },
  {
    title: "One payment. Yours for life.",
    body: "No subscription, no recurring charge, no paywalled \"premium\" tier. You buy it once and it's on your device permanently, including future revisions.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />

        {/* Stats strip */}
        <section className="border-y border-[#e5e1d8] bg-white">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 py-10 sm:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="text-center">
                <p className="font-display text-3xl text-gold md:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-ink/50">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Problem / agitation */}
        <section className="border-b border-[#e5e1d8] py-20">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal className="text-center">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold">
                The Real Problem
              </p>
              <h2 className="font-display text-2xl leading-snug text-ink md:text-3xl">
                Most men are winging it — and calling it instinct.
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {PROBLEMS.map((p, i) => (
                <Reveal key={p} delay={i * 0.08}>
                  <div className="h-full rounded-sm border border-[#e5e1d8] bg-white p-6">
                    <p className="text-sm leading-relaxed text-ink/70">{p}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why this exists */}
        <section className="border-b border-[#e5e1d8] bg-white py-20">
          <Reveal className="mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold">
              The Approach
            </p>
            <h2 className="font-display text-2xl leading-snug text-ink md:text-3xl">
              Most books about manhood pick one lane.
            </h2>
            <p className="mt-5 leading-relaxed text-ink/60">
              A fitness book, or a philosophy book, or a money book. The
              King&rsquo;s Manual is different: it is a single, coherent
              reference work — every chapter built on historical background,
              scientific evidence, psychological and cultural perspective, and
              practical application — so the biology, the history, and the
              day-to-day decisions all connect into one system instead of
              scattered advice.
            </p>
          </Reveal>
        </section>

        {/* What's inside — the three volumes */}
        <section id="whats-inside" className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="mb-12 text-center">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                What&rsquo;s Inside
              </p>
              <h2 className="mt-3 font-display text-3xl text-ink">
                Three volumes. Every angle covered.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-ink/60">
                Together, the three volumes form one complete encyclopedia —
                116 chapters across 15 parts, none of them filler.
              </p>
            </Reveal>
            <div className="grid gap-8 md:grid-cols-3">
              {VOLUMES.map((v, i) => (
                <Reveal key={v.slug} delay={i * 0.12}>
                  <TiltCard maxTilt={5}>
                    <div className="group flex h-full flex-col overflow-hidden rounded-sm border border-[#e5e1d8] bg-white transition-colors duration-300 hover:border-gold/60 hover:shadow-[0_20px_45px_-20px_rgba(169,130,47,0.25)]">
                      <div className="flex justify-center bg-[#f3f1ea] px-6 pb-2 pt-10">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={v.cover}
                          alt={v.title}
                          className="w-44 drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="p-6">
                      <h3 className="font-display text-lg text-ink">{v.title}</h3>
                      <p className="mt-2 text-sm text-ink/50">{v.subtitle}</p>
                      <p className="mt-3 text-xs uppercase tracking-wide text-gold/80">
                        {v.chapters}
                      </p>
                      <ul className="mt-4 space-y-1.5 text-sm text-ink/60">
                        {v.highlights.slice(0, 3).map((h) => (
                          <li key={h} className="flex items-start gap-2">
                            <span className="mt-1 text-gold">✦</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex items-center justify-between border-t border-[#e5e1d8] pt-4">
                        <span className="font-display text-xl text-ink">
                          ${v.price}
                        </span>
                        <span className="text-xs text-ink/40">
                          included in the Complete Set
                        </span>
                      </div>
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-y border-[#e5e1d8] bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="mb-12 text-center">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                Why It Works
              </p>
              <h2 className="mt-3 font-display text-3xl text-ink">
                What you actually get
              </h2>
            </Reveal>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {BENEFITS.map((b, i) => (
                <Reveal key={b.title} delay={i * 0.06}>
                  <div className="h-full">
                    <p className="font-display text-base text-ink">{b.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink/60">
                      {b.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Offer / Bundle */}
        <section
          id="offer"
          className="relative overflow-hidden border-b border-[#e5e1d8] py-20"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]"
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
            <Reveal className="mx-auto w-full max-w-md">
              <TiltCard maxTilt={6}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={BUNDLE.cover}
                  alt={BUNDLE.title}
                  className="w-full drop-shadow-[0_30px_70px_rgba(0,0,0,0.2)]"
                />
              </TiltCard>
            </Reveal>
            <Reveal delay={0.15}>
              <span className="inline-block rounded-full bg-gold/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-gold">
                Best Value
              </span>
              <h2 className="mt-4 font-display text-3xl text-ink md:text-4xl">
                {BUNDLE.title}
              </h2>
              <p className="mt-4 leading-relaxed text-ink/70">
                {BUNDLE.description}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-ink/70">
                {BUNDLE.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <span className="mt-1 text-gold">✦</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-4">
                <span className="font-display text-3xl text-gold">
                  ${BUNDLE.price}
                </span>
                <span className="text-ink/40 line-through">
                  ${BUNDLE.compareAt}
                </span>
                <span className="text-xs text-ink/40">one-time payment</span>
              </div>
              <a
                href={BUNDLE.gumroadUrl}
                className="mt-6 inline-block rounded-sm bg-ink px-6 py-3 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:scale-[1.02] hover:bg-gold"
              >
                Get the Complete Set — ${BUNDLE.price}
              </a>
              <p className="mt-3 text-xs text-ink/40">
                Instant digital access after checkout. Delivered as a PDF you
                can read on any device.
              </p>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal className="mb-10 text-center">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                Questions
              </p>
              <h2 className="mt-3 font-display text-3xl text-ink">
                Before you decide
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <FAQ />
            </Reveal>
          </div>
        </section>

        {/* Free workbook */}
        <section id="workbook" className="border-t border-[#e5e1d8] bg-white py-20">
          <Reveal className="mx-auto grid max-w-5xl items-center gap-10 rounded-sm border border-[#e5e1d8] bg-[#fbfaf7] p-10 md:grid-cols-[auto_1fr] md:p-14">
            <div className="mx-auto w-44">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={WORKBOOK.cover}
                alt={WORKBOOK.title}
                className="w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
              />
            </div>
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-gold">
                Free — No Credit Card
              </p>
              <h2 className="font-display text-2xl text-ink">{WORKBOOK.title}</h2>
              <p className="mt-3 leading-relaxed text-ink/60">
                {WORKBOOK.subtitle}. A no-risk way to experience the King&rsquo;s
                Manual approach before you commit to a volume — reflection
                prompts and exercises drawn straight from the encyclopedia.
              </p>
              <a
                href={WORKBOOK.gumroadUrl}
                className="mt-6 inline-block rounded-sm border border-gold px-6 py-3 text-sm tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-white"
              >
                Download the Free Workbook
              </a>
            </div>
          </Reveal>
        </section>

        {/* Final CTA */}
        <section className="border-t border-[#e5e1d8] py-24">
          <Reveal className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="font-display text-3xl leading-snug text-ink md:text-4xl">
              You can keep piecing it together from fragments —
              <br className="hidden sm:block" />
              or get the whole system at once.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-ink/60">
              116 chapters. Three volumes. One price. Instant access the
              moment you check out.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={BUNDLE.gumroadUrl}
                className="rounded-sm bg-ink px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:scale-[1.02] hover:bg-gold"
              >
                Get the Complete Set — ${BUNDLE.price}
              </a>
              <a
                href={WORKBOOK.gumroadUrl}
                className="rounded-sm border border-ink/20 px-8 py-3.5 text-sm tracking-wide text-ink/80 transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                Try the Free Workbook First
              </a>
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
