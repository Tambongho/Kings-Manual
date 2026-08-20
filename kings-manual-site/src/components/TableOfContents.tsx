"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Part } from "@/lib/products";

export default function TableOfContents({ parts }: { parts: Part[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[#e5e1d8] rounded-sm border border-[#e5e1d8] bg-white">
      {parts.map((part, i) => {
        const open = openIndex === i;
        return (
          <div key={part.title}>
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between px-6 py-4 text-left"
            >
              <span className="text-sm font-medium text-ink/85">
                {part.title}
              </span>
              <motion.span
                animate={{ rotate: open ? 45 : 0 }}
                transition={{ duration: 0.25 }}
                className="text-xl text-gold"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-2 px-6 pb-5 text-sm text-ink/55">
                    {part.chapters.map((c) => (
                      <li key={c} className="flex gap-3">
                        <span className="text-gold/60">·</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
