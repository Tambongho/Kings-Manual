"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type Order = {
  productTitle: string;
  email: string | null;
  files: string[];
};

function fileLabel(file: string) {
  const map: Record<string, string> = {
    "volume-1.pdf": "Volume I — The Making of a Man",
    "volume-2.pdf": "Volume II — Man in Civilization",
    "volume-3.pdf": "Volume III — Man in Practice",
  };
  return map[file] ?? file;
}

export default function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [order, setOrder] = useState<Order | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const error = sessionId ? fetchError : "Missing order reference.";

  useEffect(() => {
    if (!sessionId) return;
    fetch(`/api/order?session_id=${encodeURIComponent(sessionId)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) setFetchError(data.error);
        else setOrder(data);
      })
      .catch(() => setFetchError("Unable to load your order."));
  }, [sessionId]);

  if (error) {
    return (
      <p className="mt-8 text-sm text-red-500">
        {error} If you were just charged, check your email for a receipt or
        contact us and we&rsquo;ll sort it out.
      </p>
    );
  }

  if (!order) {
    return <p className="mt-8 text-sm text-ink/50">Loading your order…</p>;
  }

  return (
    <div className="mt-8 rounded-sm border border-[#e5e1d8] bg-white p-6 text-left">
      <p className="text-xs uppercase tracking-widest text-gold">
        {order.productTitle}
      </p>
      {order.email && (
        <p className="mt-1 text-xs text-ink/40">
          Receipt sent to {order.email}
        </p>
      )}
      <div className="mt-4 space-y-3">
        {order.files.map((file) => (
          <a
            key={file}
            href={`/api/download?session_id=${encodeURIComponent(
              sessionId ?? ""
            )}&file=${encodeURIComponent(file)}`}
            className="block rounded-sm border border-gold/40 px-4 py-3 text-sm text-gold transition-colors hover:bg-gold hover:text-white"
          >
            Download {fileLabel(file)} (PDF) ↓
          </a>
        ))}
      </div>
    </div>
  );
}
