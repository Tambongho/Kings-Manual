import { BUNDLE, WORKBOOK } from "@/lib/products";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#e5e1d8] bg-white py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-lg text-ink">
              <span className="text-gold">THE</span> KING&rsquo;S MANUAL
            </p>
            <p className="mt-3 max-w-xs text-sm text-ink/50">
              The Complete Encyclopedia of Men — three volumes, 116 chapters,
              one system for the biology, history, and practice of manhood.
            </p>
          </div>
          <div className="text-sm text-ink/60">
            <p className="mb-3 font-medium text-ink/80">Get Started</p>
            <ul className="space-y-2">
              <li>
                <a href={WORKBOOK.gumroadUrl} className="hover:text-gold">
                  Free Companion Workbook
                </a>
              </li>
              <li>
                <a href={BUNDLE.gumroadUrl} className="hover:text-gold">
                  Complete 3-Volume Set — ${BUNDLE.price}
                </a>
              </li>
            </ul>
          </div>
          <div className="text-sm text-ink/60">
            <p className="mb-3 font-medium text-ink/80">Info</p>
            <ul className="space-y-2">
              <li>
                <a href="#whats-inside" className="hover:text-gold">
                  What&rsquo;s Inside
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gold">
                  FAQ
                </a>
              </li>
              <li>
                <a href="mailto:bluehorixon@yahoo.com" className="hover:text-gold">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-[#e5e1d8] pt-6 text-xs text-ink/40">
          © {new Date().getFullYear()} The King&rsquo;s Manual. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
