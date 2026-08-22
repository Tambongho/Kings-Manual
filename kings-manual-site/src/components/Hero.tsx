"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BUNDLE } from "@/lib/products";
import Reveal from "@/components/Reveal";

const PROOF = [
  { label: "3 VOLUMES", value: "Biology to legacy" },
  { label: "116 CHAPTERS", value: "One coherent reference" },
  { label: "INSTANT ACCESS", value: "Read on any device" },
  { label: "FREE UPDATES", value: "Future revisions included" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:gap-10 md:py-24">
        {/* Copy */}
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gold">
            The Complete Encyclopedia of Men
          </p>
          <h1 className="font-display text-[42px] leading-[1.05] tracking-[-0.01em] text-ink sm:text-5xl md:text-6xl">
            The reference work every man wishes he&rsquo;d been given.
          </h1>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-foreground/75">
            Most advice on being a man is folklore repeated with confidence —
            a podcast take, a guru&rsquo;s opinion, a 21-day-habit myth passed
            around until it sounds true. This is 116 chapters built the other
            way: real research, 2,500 years of philosophy, and a consistent
            framework you can actually trust when it matters.
          </p>
          <p className="mt-4 text-sm text-muted">
            3 digital volumes &middot; 500+ pages &middot; PDF &middot;
            lifetime access
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={BUNDLE.gumroadUrl}
              className="inline-flex items-center justify-center rounded-[6px] bg-ink px-7 py-3.5 text-[16px] font-medium tracking-wide text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-graphite"
            >
              Get the Complete Set — ${BUNDLE.price}
            </a>
            <a
              href="#contents"
              className="group inline-flex items-center gap-1.5 text-[15px] text-ink/80 transition-colors hover:text-gold"
            >
              Read the table of contents
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <p className="mt-4 text-sm text-muted">
            One-time payment. Instant access on any device.
          </p>

          <div className="mt-3">
            <a
              href="#contents"
              className="text-sm text-ink/70 underline decoration-line underline-offset-4 transition-colors hover:text-gold"
            >
              See all 116 chapters →
            </a>
          </div>

          {/* Proof rail */}
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-8 sm:grid-cols-4">
            {PROOF.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.05}>
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-gold">
                  {item.label}
                </p>
                <p className="mt-1.5 text-sm text-foreground/70">
                  {item.value}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Product presentation — real 3D hardcover render, used consistently sitewide */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/covers/bundle-3d.webp"
            alt="The King's Manual — Volumes I, II, and III hardcover set"
            className="w-full drop-shadow-[0_35px_45px_rgba(20,22,21,0.28)]"
          />

          {/* PDF badge */}
          <div className="absolute right-4 top-4 z-30 flex items-center gap-1.5 rounded-full border border-line-dark bg-paper/90 px-3 py-1.5 text-[11px] font-medium tracking-wide text-ink/70 shadow-sm backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            PDF &middot; INSTANT DOWNLOAD
          </div>
        </motion.div>
      </div>
    </section>
  );
}
