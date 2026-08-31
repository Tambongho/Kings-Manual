"use client";

import { useState } from "react";

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
      "Yes — each volume stands on its own at $79: Volume I covers biology and mind, Volume II covers history and philosophy, Volume III covers relationships, work, and wealth. The Complete Set bundles all three for $197, so you save $40 versus buying separately.",
  },
  {
    id: "worth-it",
    number: "04",
    question: "Is it worth $197?",
    answer:
      "The set combines 116 chapters and more than 500 pages for $20 less than buying the volumes separately. Review the full contents and start with the free 128-page workbook before deciding. It is a one-time purchase, not a subscription.",
  },
  {
    id: "workbook-relation",
    number: "05",
    question: "How does the free Workbook relate to the volumes?",
    answer:
      "The Workbook is the map — a 12-week action plan with reflection prompts and exercises. The three volumes are the territory: the full research, history, and reasoning the workbook draws from. Most people start with the free workbook, then go deeper with the volumes when they want the underlying material.",
  },
  {
    id: "refunds",
    number: "06",
    question: "What if I have a download or billing problem?",
    answer:
      "Email info@kingsmanual.com with your purchase receipt. We will replace a missing or corrupted file or review the transaction under our refund policy. Our secure payment provider handles checkout, receipts, and payment processing.",
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
              aria-expanded={isActive}
              aria-controls={`answer-${item.id}`}
              onClick={() => setActiveId(isActive ? null : item.id)}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative w-full text-left"
            >
              <div className="flex items-center gap-5 py-5 sm:gap-6">
                <div className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center sm:h-10 sm:w-10">
                  <div className={`absolute inset-0 rounded-full bg-gold transition-all ${isActive ? "scale-100 opacity-100" : isHovered ? "scale-75 opacity-15" : "scale-0 opacity-0"}`} />
                  <span
                    className={`relative z-10 text-sm font-medium tracking-wide transition-colors duration-200 ${
                      isActive ? "text-white" : "text-ink/40"
                    }`}
                  >
                    {item.number}
                  </span>
                </div>

                <h3
                  className={`font-display text-base transition-colors duration-200 sm:text-lg ${
                    isActive || isHovered ? "text-ink" : "text-ink/60"
                  }`}
                >
                  {item.question}
                </h3>

                <div className={`ml-auto flex h-7 w-7 flex-shrink-0 items-center justify-center text-gold transition-transform ${isActive ? "rotate-45" : ""}`}>
                  +
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-[#d7d1c6]" />
              <div className={`absolute bottom-0 left-0 h-px origin-left bg-gold transition-transform ${isActive ? "w-full" : isHovered ? "w-1/4" : "w-0"}`} />
            </button>

            {isActive && (
                <div id={`answer-${item.id}`}>
                  <p className="py-2 pb-6 pl-14 pr-4 text-sm leading-relaxed text-ink/55 sm:pl-16">
                    {item.answer}
                  </p>
                </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
