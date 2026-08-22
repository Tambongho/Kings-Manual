import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import Hero from "@/components/Hero";
import InsideShowcase from "@/components/InsideShowcase";
import ThreeVolumes from "@/components/ThreeVolumes";
import TableOfContents from "@/components/TableOfContents";
import FAQ from "@/components/FAQ";
import { BUNDLE, WORKBOOK, getParts } from "@/lib/products";
import { STATS } from "@/lib/stats";

const PROBLEMS = [
  "Fitness advice rarely connects to relationships. Career advice rarely connects to identity. Financial advice rarely connects to the kind of life the money is meant to support.",
  "Every source has an angle: the supplement company wants to sell you supplements, the guru wants to sell you a course, the influencer wants a following.",
  "You're making decisions about your body, your money, and your relationships without a coherent framework for any of them.",
  "Nobody handed you a manual. You've been piecing manhood together from fragments — a podcast here, a book there, trial and error everywhere.",
];

const FRAMEWORK = [
  {
    step: "01",
    title: "Historical background",
    body: "How the question has been understood across cultures and eras.",
  },
  {
    step: "02",
    title: "Scientific evidence",
    body: "What the research actually shows — not folklore, not hype.",
  },
  {
    step: "03",
    title: "Psychological and cultural context",
    body: "How the topic shows up in a man's inner life and social world.",
  },
  {
    step: "04",
    title: "Practical application",
    body: "What to actually do with the information.",
  },
];

const USE_CASES = [
  { text: "Understand testosterone without the folklore", volume: "Volume I" },
  { text: "Prepare for a difficult negotiation", volume: "Volume III" },
  { text: "Build a more durable training practice", volume: "Volume I" },
  { text: "Think clearly about marriage and fatherhood", volume: "Volume III" },
  { text: "Understand grief, depression, anxiety, and resilience", volume: "Volume I" },
  { text: "Create a plan for financial independence", volume: "Volume III" },
  { text: "Evaluate a career or business decision", volume: "Volume III" },
  { text: "Navigate the major stages of adult life", volume: "Volume III" },
  { text: "Consider legacy and estate planning", volume: "Volume III" },
];

const ALL_PARTS = getParts(BUNDLE);

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />

        <InsideShowcase />

        <ThreeVolumes />

        {/* Stats strip */}
        <section className="border-b border-line bg-paper">
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

        {/* Problem */}
        <section className="border-b border-line py-20">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal className="text-center">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold">
                The Problem
              </p>
              <h2 className="font-display text-2xl leading-snug text-ink md:text-3xl">
                Most men are building a life from disconnected advice.
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {PROBLEMS.map((p, i) => (
                <Reveal key={p} delay={i * 0.08}>
                  <div className="h-full rounded-[8px] border border-line bg-paper p-6">
                    <p className="text-[17px] leading-relaxed text-foreground/75">
                      {p}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Framework */}
        <section className="border-b border-line bg-paper py-20">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal className="mb-14 text-center">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold">
                How It&rsquo;s Built
              </p>
              <h2 className="font-display text-2xl leading-snug text-ink md:text-3xl">
                A consistent framework in every chapter.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-foreground/70">
                The same four-part structure, chapter after chapter — so
                disconnected knowledge becomes one usable reference.
              </p>
            </Reveal>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              {FRAMEWORK.map((f, i) => (
                <Reveal key={f.step} delay={i * 0.08} className="relative">
                  <p className="font-display text-4xl text-gold/40">{f.step}</p>
                  <p className="mt-3 font-display text-lg text-ink">
                    {f.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                    {f.body}
                  </p>
                  {i < FRAMEWORK.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute right-[-1rem] top-2 hidden text-gold/30 md:block"
                    >
                      →
                    </span>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="border-b border-line py-20">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal className="mb-10 text-center">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold">
                What It&rsquo;s For
              </p>
              <h2 className="font-display text-2xl leading-snug text-ink md:text-3xl">
                Built to be consulted when life asks a difficult question.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="divide-y divide-line border-y border-line">
                {USE_CASES.map((u) => (
                  <li
                    key={u.text}
                    className="flex items-center justify-between gap-4 py-4"
                  >
                    <span className="text-[17px] text-foreground/80">
                      {u.text}
                    </span>
                    <span className="whitespace-nowrap text-xs uppercase tracking-[0.15em] text-gold">
                      {u.volume}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Complete contents */}
        <section id="contents" className="border-b border-line bg-paper py-20">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal className="mb-10 text-center">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold">
                Complete Contents
              </p>
              <h2 className="font-display text-2xl leading-snug text-ink md:text-3xl">
                Explore all 116 chapters.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-foreground/70">
                Fifteen parts across three volumes. Expand any part to see
                every chapter it contains.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <TableOfContents parts={ALL_PARTS} />
            </Reveal>
          </div>
        </section>

        {/* Complete-set offer */}
        <section
          id="offer"
          className="relative overflow-hidden border-b border-line py-20"
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
                The Complete Set
              </span>
              <h2 className="mt-4 font-display text-3xl text-ink md:text-4xl">
                All three volumes. One complete reference.
              </h2>
              <p className="mt-4 leading-relaxed text-foreground/75">
                {BUNDLE.description}
              </p>
              <ul className="mt-6 space-y-2 text-[17px] text-foreground/75">
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
                <span className="text-xs text-muted">one-time payment</span>
              </div>
              <a
                href={BUNDLE.gumroadUrl}
                className="mt-6 inline-block rounded-[6px] bg-ink px-7 py-3.5 text-[16px] font-medium tracking-wide text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-graphite"
              >
                Get the Complete Set — ${BUNDLE.price}
              </a>
              <p className="mt-3 text-xs text-muted">
                Instant PDF delivery after checkout, readable on any device.
                Clicking the button securely opens checkout.
              </p>
              <p className="mt-2 text-xs text-muted">
                Prefer one volume? Each is available individually for $39.
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
        <section id="workbook" className="border-t border-line bg-paper py-20">
          <Reveal className="mx-auto grid max-w-5xl items-center gap-10 rounded-[8px] border border-line bg-background p-10 md:grid-cols-[auto_1fr] md:p-14">
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
                Free &middot; No Credit Card
              </p>
              <h2 className="font-display text-2xl text-ink">
                Start with the Companion Workbook.
              </h2>
              <p className="mt-3 leading-relaxed text-foreground/70">
                {WORKBOOK.subtitle}. A no-risk way to experience the King&rsquo;s
                Manual approach before you commit to a volume — reflection
                prompts and exercises drawn straight from the encyclopedia.
              </p>
              <a
                href={WORKBOOK.gumroadUrl}
                className="mt-6 inline-block rounded-[6px] border border-ink px-7 py-3.5 text-[16px] tracking-wide text-ink transition-all duration-200 hover:bg-ink hover:text-white"
              >
                Download the Free Workbook
              </a>
            </div>
          </Reveal>
        </section>

        {/* Final CTA */}
        <section className="border-t border-line py-24">
          <Reveal className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="font-display text-3xl leading-snug text-ink md:text-4xl">
              Stop piecing it together from fragments.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-foreground/70">
              Get one coherent reference for the questions that shape a
              man&rsquo;s life. 116 chapters. Three volumes. One price.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={BUNDLE.gumroadUrl}
                className="rounded-[6px] bg-ink px-8 py-3.5 text-[16px] font-medium tracking-wide text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-graphite"
              >
                Get the Complete Set — ${BUNDLE.price}
              </a>
              <a
                href={WORKBOOK.gumroadUrl}
                className="rounded-[6px] border border-ink px-8 py-3.5 text-[16px] tracking-wide text-ink transition-all duration-200 hover:bg-ink hover:text-white"
              >
                Download the Free Workbook
              </a>
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
