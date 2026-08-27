import { VOLUMES } from "@/lib/products";

const CATEGORY_LINES = [
  "Body · Mind · Development",
  "History · Philosophy · Culture",
  "Relationships · Work · Wealth",
];

export default function ThreeVolumes() {
  return (
    <section className="border-b border-line bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 border-b border-white/15 pb-10 md:grid-cols-[0.75fr_1.25fr] md:items-end">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            The architecture
          </p>
          <h2 className="max-w-3xl font-display text-4xl leading-[1.05] text-white md:text-5xl">
            Three distinct books. One continuous education.
          </h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-white/15 bg-white/15 md:grid-cols-3">
          {VOLUMES.map((volume, index) => (
            <article key={volume.slug} className="group bg-ink p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="font-display text-5xl text-gold/65">
                  0{index + 1}
                </span>
                <span className="max-w-32 text-right text-[10px] font-semibold uppercase leading-4 tracking-[0.17em] text-white/45">
                  {CATEGORY_LINES[index]}
                </span>
              </div>
              <div className="mx-auto mt-4 w-[78%] transition-transform duration-500 group-hover:-translate-y-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={volume.cover}
                  alt={volume.title}
                  className="aspect-[4/5] w-full object-contain drop-shadow-[0_24px_28px_rgba(0,0,0,0.35)]"
                />
              </div>
              <h3 className="mt-7 font-display text-2xl leading-tight text-white">
                {volume.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/58">
                {volume.subtitle}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-white/12 pt-4 text-xs text-white/48">
                <span>{volume.chapters}</span>
                <span>${volume.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
