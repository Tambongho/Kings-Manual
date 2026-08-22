import Reveal from "@/components/Reveal";

const INSIGHTS = [
  {
    chapter: "Chapter 25",
    part: "Volume I · Confidence, Fear, and Courage",
    myth: "“Confident people just don’t feel fear.”",
    truth:
      "Research on courage finds the opposite: people widely recognized as courageous report genuine fear during courageous acts — the distinguishing trait is acting despite it. And confidence itself isn’t a precondition for action; it’s the byproduct of it. Bandura’s decades of research found mastery experience — actually doing the fear-laden thing — is the strongest known source of real, earned confidence. Not affirmations. Not mindset. Action first.",
  },
  {
    chapter: "Chapter 26",
    part: "Volume I · Discipline and the Science of Habit Formation",
    myth: "“It takes 21 days to build a habit.”",
    truth:
      "That number traces to a 1960 pop-psychology book, not a study. The real research (Lally et al., 2010) found it takes 66 days on average — and anywhere from 18 to 254 depending on the behavior and the person. Expecting 21 days is a setup to quit at day 22, right before the habit would have stuck.",
  },
  {
    chapter: "Chapter 22",
    part: "Volume I · Identity, Purpose, and the Search for Meaning",
    myth: "“Meaning shows up in one dramatic realization.”",
    truth:
      "Viktor Frankl’s research on psychological survival under extreme deprivation — and everything measured since — shows purpose is built gradually, through ordinary contribution to family, craft, and community. A lack of it, not depression itself, is a distinct and underappreciated risk factor for despair. You don’t need an epiphany. You need a place to start.",
  },
];

export default function InsideShowcase() {
  return (
    <section className="border-b border-line bg-paper py-20">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="mb-12 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Inside the Manual
          </p>
          <h2 className="font-display text-2xl leading-snug text-ink md:text-3xl">
            Three things most men believe that the research doesn&rsquo;t
            support.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/70">
            A sample of what every chapter does: takes something you&rsquo;ve
            probably heard, and replaces it with what the evidence actually
            says.
          </p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {INSIGHTS.map((item, i) => (
            <Reveal key={item.chapter} delay={i * 0.1} className="h-full">
              <div className="flex h-full flex-col rounded-[8px] border border-line bg-background p-6">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-gold">
                  {item.chapter}
                </p>
                <p className="mt-1 text-xs text-muted">{item.part}</p>
                <p className="mt-4 font-display text-lg italic leading-snug text-ink/60">
                  {item.myth}
                </p>
                <div className="my-4 h-px w-8 bg-gold/40" />
                <p className="text-[15px] leading-relaxed text-foreground/80">
                  {item.truth}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
