"use client";

export default function BuyButton({
  gumroadUrl,
  label,
}: {
  gumroadUrl: string;
  label: string;
}) {
  return (
    <a
      href={gumroadUrl}
      className="flex w-full items-center justify-center gap-2 rounded-sm bg-gold px-6 py-3 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-gold-hover hover:text-white"
    >
      {label}
    </a>
  );
}
