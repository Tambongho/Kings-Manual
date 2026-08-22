import Reveal from "@/components/Reveal";
import { VOLUMES } from "@/lib/products";

const CATEGORY_LINES = [
  "Body · Mind · Development",
  "History · Philosophy · Culture",
  "Relationships · Work · Wealth",
];

export default function ThreeVolumes() {
  return (
    <section className="border-b border-line-dark bg-ink py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight text-white md:text-4xl">
            Three volumes.
            <br />
            One complete map.
          </h2>
          <a
            href="#contents"
            className="mt-6 inline-block text-sm text-gold underline decoration-gold/40 underline-offset-4 transition-colors hover:text-white"
          >
            Explore all 116 chapters →
          </a>
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-3">
          {VOLUMES.map((v, i) => {
            const roman = ["I", "II", "III"][i];
            return (
              <Reveal key={v.slug} delay={i * 0.08} className="border-l border-line-dark pl-6">
                <p className="font-display text-3xl text-gold">{roman}</p>
                <p className="mt-3 text-sm font-medium uppercase tracking-[0.1em] text-white">
                  {v.title.split("—")[1]?.trim() ?? v.title}
                </p>
                <div className="mt-4 h-px w-8 bg-gold/50" />
                <p className="mt-4 text-xs uppercase tracking-[0.12em] text-white/50">
                  {CATEGORY_LINES[i]}
                </p>
                <p className="mt-3 text-sm text-white/60">{v.chapters}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
