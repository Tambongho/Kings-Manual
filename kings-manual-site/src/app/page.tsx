import { ArrowRight, Check, Download } from "lucide-react";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import InsideShowcase from "@/components/InsideShowcase";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import TableOfContents from "@/components/TableOfContents";
import ThreeVolumes from "@/components/ThreeVolumes";
import { BUNDLE, VOLUMES, WORKBOOK, getParts } from "@/lib/products";

const CATEGORIES = [
  { number: "01", title: "Foundations", body: "Body, brain, health, identity, discipline, and development.", color: "bg-navy", volume: VOLUMES[0] },
  { number: "02", title: "Civilization", body: "History, philosophy, faith, institutions, and the ideas that shaped men.", color: "bg-burgundy", volume: VOLUMES[1] },
  { number: "03", title: "Practice", body: "Relationships, career, leadership, wealth, service, and legacy.", color: "bg-forest", volume: VOLUMES[2] },
];

const METHOD = [
  ["01", "Context", "Start with the history behind the question."],
  ["02", "Evidence", "Separate published research from familiar claims."],
  ["03", "Meaning", "Place the evidence in psychological and cultural context."],
  ["04", "Practice", "Turn the conclusion into something you can use."],
];

const ALL_PARTS = getParts(BUNDLE);

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ThreeVolumes />

        <section className="bg-background py-8 md:py-12">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
            <div className="relative min-h-[650px] overflow-hidden rounded-[22px] bg-ink md:min-h-[690px]">
              <Image src="/lifestyle/reader-volume3-v1.webp" alt="A reader studying The King's Manual Volume III at home" fill sizes="(min-width: 1440px) 1392px, 100vw" className="object-cover object-[62%_center] md:object-right" />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(13,18,16,0.94)_0%,rgba(13,18,16,0.48)_54%,transparent_82%)] md:bg-[linear-gradient(90deg,rgba(13,18,16,0.93)_0%,rgba(13,18,16,0.76)_42%,rgba(13,18,16,0.08)_72%)]" />
              <div className="relative z-10 flex min-h-[650px] items-end px-7 py-10 text-white md:min-h-[690px] md:items-center md:px-16 lg:px-20">
                <div className="max-w-[570px]">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">A reference that lives with you</p>
                  <h2 className="mt-5 text-balance font-display text-4xl leading-[0.98] md:text-6xl">For the questions that do not fit into one category.</h2>
                  <p className="mt-6 max-w-lg text-base leading-7 text-white/72">The Manual connects the biological, historical, and practical parts of a man&rsquo;s life—so advice about health, work, relationships, and purpose stops competing for attention.</p>
                  <a href="#inside" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-background">Look inside the manuscript <ArrowRight className="h-4 w-4" aria-hidden /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-burgundy">Explore by subject</p>
            <div className="mt-5 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-3xl font-display text-4xl leading-none text-ink md:text-6xl">Start where life is asking more of you.</h2>
              <p className="max-w-sm text-sm leading-6 text-muted">Each volume stands on its own and connects naturally to the next.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {CATEGORIES.map((category) => (
                <a key={category.title} href={category.volume.gumroadUrl} className={`${category.color} group flex min-h-[330px] flex-col rounded-[18px] p-7 text-white transition-transform duration-300 hover:-translate-y-1 md:p-8`}>
                  <div className="flex items-center justify-between"><span className="text-xs font-semibold tracking-[0.18em] text-white/55">{category.number}</span><ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden /></div>
                  <div className="mt-auto"><h3 className="font-display text-4xl">{category.title}</h3><p className="mt-3 max-w-xs text-sm leading-6 text-white/68">{category.body}</p><p className="mt-7 text-sm font-semibold">Volume {category.number.slice(-1)} · ${category.volume.price}</p></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <InsideShowcase />

        <section className="bg-background py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-[22px] border border-line bg-paper p-7 md:p-12">
              <div className="grid gap-8 border-b border-line pb-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-burgundy">The chapter method</p>
                <h2 className="font-display text-4xl leading-none text-ink md:text-5xl">The same clear structure, chapter after chapter.</h2>
              </div>
              <div className="grid gap-0 md:grid-cols-4">
                {METHOD.map(([number, title, body], index) => (
                  <div key={number} className={`py-7 md:px-6 md:py-10 ${index > 0 ? "border-t border-line md:border-l md:border-t-0" : ""}`}>
                    <span className="text-xs font-semibold tracking-[0.18em] text-burgundy">{number}</span><h3 className="mt-5 font-display text-2xl text-ink">{title}</h3><p className="mt-3 text-sm leading-6 text-muted">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contents" className="scroll-mt-24 bg-paper py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-burgundy">Complete contents</p><h2 className="mt-4 font-display text-4xl leading-none text-ink md:text-5xl">116 chapters across 15 parts.</h2><p className="mt-5 max-w-md text-sm leading-6 text-muted">Open any section to see the chapters inside. The first three parts are shown by default; the complete table expands in place.</p></div>
            <TableOfContents parts={ALL_PARTS} />
          </div>
        </section>

        <section id="offer" className="bg-background py-8 md:py-12">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-[22px] bg-[#e8decd] px-7 py-12 md:px-14 md:py-16 lg:min-h-[610px] lg:px-20">
              <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
                <div className="relative z-10">
                  <span className="inline-flex rounded-full bg-burgundy px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">Best value</span>
                  <h2 className="mt-5 max-w-xl font-display text-5xl leading-[0.95] text-ink md:text-6xl">Keep the complete reference within reach.</h2>
                  <p className="mt-6 max-w-lg text-sm leading-6 text-ink/65">All three digital volumes, the companion workbook, and every future revision in one permanent collection.</p>
                  <ul className="mt-7 space-y-3">
                    {BUNDLE.highlights.map((item) => <li key={item} className="flex items-start gap-3 text-sm text-ink/72"><Check className="mt-0.5 h-4 w-4 shrink-0 text-burgundy" aria-hidden />{item}</li>)}
                  </ul>
                  <div className="mt-8 flex items-end gap-3"><span className="text-4xl font-semibold text-ink">${BUNDLE.price}</span><span className="pb-1 text-lg text-ink/35 line-through">${BUNDLE.compareAt}</span><span className="pb-1 text-xs text-muted">one-time</span></div>
                  <a href={BUNDLE.gumroadUrl} className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-burgundy">Get the complete set <ArrowRight className="h-4 w-4" aria-hidden /></a>
                </div>
                <Image src={BUNDLE.cover} alt="The complete three-volume King's Manual set" width={1421} height={809} className="relative z-0 w-full mix-blend-multiply drop-shadow-[0_34px_34px_rgba(29,24,18,0.18)]" />
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 bg-paper py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-burgundy">Questions</p><h2 className="mt-4 font-display text-4xl leading-none text-ink md:text-5xl">Everything to know before you buy.</h2></div>
            <FAQ />
          </div>
        </section>

        <section id="workbook" className="bg-background py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-9 px-6 md:grid-cols-[220px_1fr_auto]">
            <Image src={WORKBOOK.cover} alt={WORKBOOK.title} width={600} height={780} className="mx-auto h-[230px] w-auto object-contain drop-shadow-[0_18px_22px_rgba(25,21,18,0.18)]" />
            <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-burgundy">Free companion workbook</p><h2 className="mt-3 font-display text-3xl text-ink">Experience the method before you commit.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-muted">128 pages of reflection prompts and practical exercises drawn from the three-volume collection.</p></div>
            <a href={WORKBOOK.gumroadUrl} className="inline-flex items-center justify-center gap-2 rounded-full border border-ink px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white"><Download className="h-4 w-4" aria-hidden /> Download free</a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
