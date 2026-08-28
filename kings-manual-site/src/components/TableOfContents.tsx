"use client";

import { useState } from "react";
import type { Part } from "@/lib/products";

export default function TableOfContents({ parts }: { parts: Part[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const visibleParts = showAll ? parts : parts.slice(0, 3);

  return (
    <div className="divide-y divide-[#d7d1c6] rounded-sm border border-[#d7d1c6] bg-white">
      {visibleParts.map((part, i) => {
        const open = openIndex === i;
        return (
          <div key={part.title}>
            <button
              aria-expanded={open}
              aria-controls={`part-${i}`}
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between px-6 py-4 text-left"
            >
              <span className="text-sm font-medium text-ink/85">
                {part.title}
              </span>
              <span className={`text-xl text-gold transition-transform ${open ? "rotate-45" : ""}`}>
                +
              </span>
            </button>
            {open && (
                <div id={`part-${i}`}>
                  <ul className="space-y-2 px-6 pb-5 text-sm text-ink/55">
                    {part.chapters.map((c) => (
                      <li key={c} className="flex gap-3">
                        <span className="text-gold/60">·</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
            )}
          </div>
        );
      })}
      <button
        type="button"
        onClick={() => {
          setShowAll((value) => !value);
          setOpenIndex(null);
        }}
        className="w-full bg-paper-2 px-6 py-4 text-center text-sm font-semibold text-ink transition-colors hover:text-gold"
      >
        {showAll ? "Show fewer parts" : `View all ${parts.length} parts`}
      </button>
    </div>
  );
}
