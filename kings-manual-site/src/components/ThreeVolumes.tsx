import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { VOLUMES } from "@/lib/products";

const DETAILS = [
  { eyebrow: "Body · mind · development", bg: "bg-[#e8edf2]" },
  { eyebrow: "History · philosophy · culture", bg: "bg-[#f1e6e5]" },
  { eyebrow: "Relationships · work · wealth", bg: "bg-[#e5ece7]" },
];

export default function ThreeVolumes() {
  return (
    <section id="volumes" className="scroll-mt-24 bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-burgundy">Featured collection</p>
            <h2 className="mt-4 max-w-3xl text-balance font-display text-4xl leading-none text-ink md:text-6xl">Three volumes. One connected life.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted">Begin with the area you need now, or choose the complete collection for the full reference.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {VOLUMES.map((volume, index) => (
            <article key={volume.slug} className="group overflow-hidden rounded-[18px] border border-line bg-white transition-transform duration-300 hover:-translate-y-1">
              <div className={`relative flex min-h-[390px] items-center justify-center p-8 ${DETAILS[index].bg}`}>
                <span className="absolute left-6 top-5 text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">Volume 0{index + 1}</span>
                <Image src={volume.cover} alt={volume.title} width={720} height={900} className="h-[315px] w-auto object-contain drop-shadow-[0_24px_26px_rgba(24,25,22,0.22)] transition-transform duration-300 group-hover:scale-[1.025]" />
              </div>
              <div className="p-6 md:p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-burgundy">{DETAILS[index].eyebrow}</p>
                <h3 className="mt-3 font-display text-[28px] leading-tight text-ink">{volume.title.replace(/^Volume [IVX]+ — /, "")}</h3>
                <p className="mt-3 min-h-12 text-sm leading-6 text-muted">{volume.subtitle}</p>
                <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                  <div><span className="text-xl font-semibold text-ink">${volume.price}</span><span className="ml-2 text-xs text-muted">digital edition</span></div>
                  <a href={volume.gumroadUrl} aria-label={`Buy ${volume.title}`} className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-burgundy"><ArrowUpRight className="h-4 w-4" aria-hidden /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
