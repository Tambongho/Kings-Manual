"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQItem = {
  id: string;
  number: string;
  question: string;
  answer: string;
};

const ITEMS: FAQItem[] = [
  {
    id: "whats-inside",
    number: "01",
    question: "What am I actually getting?",
    answer:
      "Three volumes, 116 chapters, over 500 pages total — how testosterone actually shapes behavior across a man's life (the research, not the gym-bro version), why most discipline systems fail by week three and what holds up instead, the real relationship between physical training and mental resilience, a practical framework for financial independence, and what \"legacy\" means past the greeting-card definition. It's built to be referenced for years, not read once and shelved.",
  },
  {
    id: "format",
    number: "02",
    question: "What format is it, and how do I get it?",
    answer:
      "A PDF delivered instantly after checkout — no physical shipping, no waiting. Read it on your phone, tablet, laptop, or e-reader. Your download links are generated the moment payment clears and also available on your order confirmation page.",
  },
  {
    id: "individual",
    number: "03",
    question: "Can I buy one volume instead of all three?",
    answer:
      "Yes — each volume stands on its own at $39: Volume I covers biology and mind, Volume II covers history and philosophy, Volume III covers relationships, work, and wealth. The Complete Set bundles all three for $97 — $117 if bought separately, so you save $20.",
  },
  {
    id: "worth-it",
    number: "04",
    question: "Is it worth $97?",
    answer:
      "That's less than a single session with most trainers, coaches, or therapists — except you keep this, and you can come back to it whenever you need it. It's a one-time payment, not a subscription.",
  },
  {
    id: "workbook-relation",
    number: "05",
    question: "How does the free Workbook relate to the volumes?",
    answer:
      "The Workbook is the map — a 12-week action plan with reflection prompts and exercises. The three volumes are the territory: the full research, history, and reasoning the workbook draws from. Most people start with the free workbook, then go deeper with the volumes when they want the underlying material.",
  },
];

export default function FAQ() {
  const [activeId, setActiveId] = useState<string | null>("whats-inside");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="w-full">
      {ITEMS.map((item) => {
        const isActive = activeId === item.id;
        const isHovered = hoveredId === item.id;

        return (
          <div key={item.id} className="relative">
            <button
              onClick={() => setActiveId(isActive ? null : item.id)}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative w-full text-left"
            >
              <div className="flex items-center gap-5 py-5 sm:gap-6">
                <div className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center sm:h-10 sm:w-10">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gold"
                    initial={false}
                    animate={{
                      scale: isActive ? 1 : isHovered ? 0.85 : 0,
                      opacity: isActive ? 1 : isHovered ? 0.15 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                  <span
                    className={`relative z-10 text-sm font-medium tracking-wide transition-colors duration-200 ${
                      isActive ? "text-white" : "text-ink/40"
                    }`}
                  >
                    {item.number}
                  </span>
                </div>

                <motion.h3
                  animate={{ x: isActive || isHovered ? 4 : 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className={`font-display text-base transition-colors duration-200 sm:text-lg ${
                    isActive || isHovered ? "text-ink" : "text-ink/60"
                  }`}
                >
                  {item.question}
                </motion.h3>

                <motion.div
                  className="ml-auto flex h-7 w-7 flex-shrink-0 items-center justify-center text-gold"
                  animate={{ rotate: isActive ? 45 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  +
                </motion.div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-[#d7d1c6]" />
              <motion.div
                className="absolute bottom-0 left-0 h-px origin-left bg-gold"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isActive ? 1 : isHovered ? 0.25 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </button>

            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="py-2 pb-6 pl-14 pr-4 text-sm leading-relaxed text-ink/55 sm:pl-16">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
