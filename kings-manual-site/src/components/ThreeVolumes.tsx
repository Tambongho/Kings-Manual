import { VOLUMES } from "@/lib/products";
import Image from "next/image";

const CATEGORY_LINES = [
  "Body · Mind · Development",
  "History · Philosophy · Culture",
  "Relationships · Work · Wealth",
];

export default function ThreeVolumes() {
  return (
    <section id="volumes" className="scroll-mt-24 border-b border-line bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 border-b border-line pb-10 md:grid-cols-[0.75fr_1.25fr] md:items-end">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            The architecture
          </p>
          <h2 className="max-w-3xl font-display text-4xl leading-[1.05] text-ink md:text-5xl">
            Choose the volume that meets you where you are.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {VOLUMES.map((volume, index) => (
            <article key={volume.slug} className="group border-t border-line pt-6">
              <div className="flex items-start justify-between gap-4">
                <span className="font-display text-5xl text-gold/65">
                  0{index + 1}
                </span>
                <span className="max-w-32 text-right text-[10px] font-semibold uppercase leading-4 tracking-[0.17em] text-ink/45">
                  {CATEGORY_LINES[index]}
                </span>
              </div>
              <div className="mx-auto mt-4 w-[78%] transition-transform duration-500 group-hover:-translate-y-1">
                <Image
                  src={volume.cover}
                  alt={volume.title}
                  width={720}
                  height={900}
                  className="aspect-[4/5] w-full object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.18)]"
                />
              </div>
              <h3 className="mt-7 font-display text-2xl leading-tight text-ink">
                {volume.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-foreground/65">
                {volume.subtitle}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-xs text-ink/50">
                <span>{volume.chapters}</span>
                <span>${volume.price}</span>
              </div>
              <a href={volume.gumroadUrl} className="mt-5 inline-flex items-center text-sm font-semibold text-ink hover:text-gold">
                Buy Volume {index + 1} <span aria-hidden className="ml-2">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
