"use client";

import { motion } from "framer-motion";

export default function BuyButton({
  gumroadUrl,
  label,
}: {
  gumroadUrl: string;
  label: string;
}) {
  return (
    <motion.a
      href={gumroadUrl}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      className="flex w-full items-center justify-center gap-2 rounded-sm bg-gold px-6 py-3 text-sm font-medium tracking-wide text-ink transition-shadow duration-300 hover:shadow-[0_0_30px_-8px_rgba(201,164,76,0.6)]"
    >
      {label}
    </motion.a>
  );
}
