import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import Image from "next/image";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import Hero from "@/components/Hero";
import InsideShowcase from "@/components/InsideShowcase";
import ThreeVolumes from "@/components/ThreeVolumes";
import TableOfContents from "@/components/TableOfContents";
import FAQ from "@/components/FAQ";
import { BUNDLE, VOLUMES, WORKBOOK, getParts } from "@/lib/products";
import { STATS } from "@/lib/stats";

const PROBLEMS = [
  "Fitness advice rarely connects to relationships. Career advice rarely connects to identity. Financial advice rarely connects to the kind of life the money is meant to support.",
  "Every source has an angle: the supplement company wants to sell you supplements, the guru wants to sell you a course, the influencer wants a following.",
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
  {
    text: "Your habit keeps failing around day three. Learn why the 21-day rule is a myth — and what actually builds one (Ch. 26)",
    volume: "Volume I",
  },
  {
    text: "You're stalling before a hard conversation. Learn why waiting to feel confident has it backwards (Ch. 25)",
    volume: "Volume I",
  },
  {
    text: "You feel like you're drifting. Build purpose the way the evidence says it actually forms — gradually, not in an epiphany (Ch. 22)",
    volume: "Volume I",
  },
  { text: "Prepare for a negotiation with a framework, not guesswork", volume: "Volume III" },
  { text: "Build a plan toward financial independence, decade by decade", volume: "Volume III" },
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

        <section className="border-b border-line bg-burgundy py-8 text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 text-center md:flex-row md:text-left">
            <div><p className="font-display text-2xl">All three volumes, one permanent reference.</p><p className="mt-1 text-sm text-white/65">Save $20 · Companion workbook included · Instant Gumroad delivery</p></div>
            <a href={BUNDLE.gumroadUrl} className="shrink-0 bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-gold">Get the Complete Set — ${BUNDLE.price}</a>
          </div>
        </section>

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

        <section className="border-b border-line py-16">
          <div className="mx-auto grid max-w-5xl gap-8 px-6 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Editorial standard</p><h2 className="mt-3 font-display text-3xl text-ink">Claims you can trace, not slogans you have to trust.</h2></div>
            <div className="space-y-4 text-[16px] leading-7 text-foreground/75"><p>Chapters separate historical context, scientific evidence, psychological interpretation, and practical application. Named sources—including Albert Bandura, Phillippa Lally, and Viktor Frankl—are surfaced in the sample material rather than hidden behind vague “research says” language.</p><p>The Manual is an independent educational reference. It does not replace medical, mental-health, legal, or financial advice. Start with the free workbook and inspect all 116 chapter titles before purchasing.</p></div>
          </div>
        </section>

        {/* Lifestyle */}
        <section className="border-b border-line bg-[#ece7de] py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[1.25fr_0.75fr]">
            <Reveal className="overflow-hidden bg-white shadow-[0_20px_60px_rgba(35,29,22,0.12)]">
              <Image src="/lifestyle/desk-editorial-v2.webp" alt="The King's Manual volumes on a real working desk" width={1920} height={1280} className="aspect-[16/11] w-full object-cover" />
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-gold">Built to be used</p>
              <h2 className="font-display text-4xl leading-tight text-ink">A working reference, not shelf decoration.</h2>
              <p className="mt-5 leading-7 text-foreground/70">Open it when a decision is real: before a difficult conversation, while building a financial plan, or when the advice around you stops fitting together.</p>
              <a href="#contents" className="mt-7 inline-flex border-b border-ink pb-1 text-sm font-semibold text-ink hover:border-gold hover:text-gold">Browse all 116 chapters</a>
            </Reveal>
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
                The moment you actually need it, this is what it&rsquo;s
                there for.
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
                Stop assembling your worldview from fragments.
              </h2>
              <p className="mt-4 leading-relaxed text-foreground/75">
                {BUNDLE.description} One reference, cited and cross-checked,
                that you open when the question actually matters — instead of
                trusting whichever algorithm served you an opinion this week.
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
                Prefer one volume? Buy{" "}
                {VOLUMES.map((v, i) => (
                  <span key={v.slug}>
                    <Link
                      href={`/products/${v.slug}`}
                      className="text-gold underline decoration-gold/40 underline-offset-2 hover:text-ink"
                    >
                      Volume {["I", "II", "III"][i]}
                    </Link>
                    {i < VOLUMES.length - 1 ? " · " : " "}
                  </span>
                ))}
                individually for $39 each.
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
              You&rsquo;re going to face these questions either way.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-foreground/70">
              The only choice is whether you meet them with a coherent,
              evidence-based reference — or the same scattered fragments
              you&rsquo;ve been running on. 116 chapters. Three volumes. One
              price, paid once.
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
