"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BuyButton({
  slug,
  label,
}: {
  slug: string;
  label: string;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div>
      <motion.button
        onClick={handleClick}
        disabled={loading}
        whileHover={{ scale: loading ? 1 : 1.015 }}
        whileTap={{ scale: 0.98 }}
        className="flex w-full items-center justify-center gap-2 rounded-sm bg-gold px-6 py-3 text-sm font-medium tracking-wide text-ink transition-shadow duration-300 hover:shadow-[0_0_30px_-8px_rgba(201,164,76,0.6)] disabled:opacity-60"
      >
        {loading && (
          <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-[#0b0d10]/30 border-t-[#0b0d10]" />
        )}
        {loading ? "Redirecting to checkout…" : label}
      </motion.button>
      {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
    </div>
  );
}
