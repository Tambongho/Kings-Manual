import { Suspense } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SuccessContent from "./SuccessContent";

export default function SuccessPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-2xl px-6 py-24 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Order Confirmed
          </p>
          <h1 className="mt-4 font-display text-3xl text-ink md:text-4xl">
            Welcome to The King&rsquo;s Manual.
          </h1>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Your payment went through. Download your book below — a receipt
            is also on its way to your inbox.
          </p>
          <Suspense fallback={<p className="mt-8 text-sm text-ink/50">Loading your order…</p>}>
            <SuccessContent />
          </Suspense>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/"
              className="rounded-sm border border-ink/20 px-6 py-3 text-sm tracking-wide text-ink/70 transition-colors hover:border-gold hover:text-gold"
            >
              Back to the Library
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
