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
    <section id="preview" className="border-b border-line bg-paper py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 border-b border-line pb-10 md:grid-cols-[0.7fr_1.3fr] md:items-end">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Read before you buy</p>
          <div><h2 className="font-display text-4xl leading-tight text-ink">Three extracts from the actual manuscript.</h2><p className="mt-3 max-w-2xl text-foreground/65">These are representative passages, not promotional summaries. Each shows how the Manual tests a familiar claim against published work.</p></div>
        </div>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {INSIGHTS.map((item) => (
            <article key={item.chapter} className="grid gap-5 py-8 md:grid-cols-[190px_1fr] md:gap-10">
              <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{item.chapter}</p><p className="mt-2 text-xs leading-5 text-muted">{item.part}</p></div>
              <div><h3 className="font-display text-2xl italic text-ink">{item.myth}</h3><p className="mt-4 max-w-3xl text-[16px] leading-7 text-foreground/78">{item.truth}</p></div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 text-sm text-foreground/60 sm:flex-row sm:items-center">
          <p>Published independently by The King&rsquo;s Manual editorial project. Sources are attributed within the chapters.</p>
          <a href="#contents" className="shrink-0 font-semibold text-ink underline decoration-gold/50 underline-offset-4">Review the complete contents</a>
        </div>
      </div>
    </section>
  );
}
