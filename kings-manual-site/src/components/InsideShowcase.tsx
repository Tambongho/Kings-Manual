import Reveal from "@/components/Reveal";

export default function InsideShowcase() {
  return (
    <section className="border-b border-line bg-paper py-14">
      <Reveal className="mx-auto max-w-2xl px-6 text-center">
        <p className="font-display text-xl italic leading-snug text-ink/85 sm:text-2xl">
          &ldquo;One coherent reference instead of a hundred scattered
          sources.&rdquo;
        </p>
        <p className="mt-4 text-xs font-medium uppercase tracking-[0.3em] text-gold">
          The King&rsquo;s Manual Approach
        </p>
      </Reveal>
    </section>
  );
}
