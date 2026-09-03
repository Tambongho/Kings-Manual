import { ArrowRight, Quote } from "lucide-react";

const EXTRACTS = [
  {
    chapter: "Chapter 25 · Volume I",
    claim: "Confident people just don’t feel fear.",
    extract: "Research on courage finds the opposite: people widely recognized as courageous report genuine fear during courageous acts. The distinguishing trait is acting despite it.",
  },
  {
    chapter: "Chapter 26 · Volume I",
    claim: "It takes 21 days to build a habit.",
    extract: "The real research found an average of 66 days—and a range from 18 to 254 depending on the behavior and the person.",
  },
  {
    chapter: "Chapter 22 · Volume I",
    claim: "Meaning arrives in one dramatic realization.",
    extract: "Purpose is built gradually through ordinary contribution to family, craft, and community. You do not need an epiphany. You need a place to start.",
  },
];

export default function InsideShowcase() {
  return (
    <section id="inside" className="scroll-mt-24 bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-burgundy">Read before you buy</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-none text-ink md:text-6xl">A look inside the thinking.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted">Real passages from the manuscript show how familiar claims are tested against published research and turned into useful guidance.</p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {EXTRACTS.map((item) => (
            <article key={item.chapter} className="flex min-h-[330px] flex-col rounded-[18px] border border-line bg-background p-7 md:p-8">
              <Quote className="h-8 w-8 text-burgundy/35" strokeWidth={1.4} aria-hidden />
              <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.17em] text-burgundy">{item.chapter}</p>
              <h3 className="mt-3 font-display text-2xl italic leading-tight text-ink">“{item.claim}”</h3>
              <p className="mt-5 text-sm leading-6 text-muted">{item.extract}</p>
            </article>
          ))}
        </div>
        <a href="#contents" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-burgundy">Browse the complete contents <ArrowRight className="h-4 w-4" aria-hidden /></a>
      </div>
    </section>
  );
}
