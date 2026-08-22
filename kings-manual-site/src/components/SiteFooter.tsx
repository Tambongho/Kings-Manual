import { BUNDLE, VOLUMES } from "@/lib/products";

export default function SiteFooter() {
  return (
    <footer className="bg-ink py-14 text-white/70">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="font-display text-lg text-white">
              <span className="text-gold">THE</span> KING&rsquo;S MANUAL
            </p>
            <p className="mt-3 max-w-xs text-sm text-white/50">
              The complete encyclopedia of men — three volumes, 116 chapters,
              one coherent system.
            </p>
          </div>

          <div className="text-sm">
            <p className="mb-3 font-medium uppercase tracking-[0.1em] text-white/80">
              Explore
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#contents" className="hover:text-gold">
                  The Volumes
                </a>
              </li>
              <li>
                <a href="#contents" className="hover:text-gold">
                  Complete Contents
                </a>
              </li>
              <li>
                <a href="#workbook" className="hover:text-gold">
                  Free Workbook
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gold">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <p className="mb-3 font-medium uppercase tracking-[0.1em] text-white/80">
              Purchase
            </p>
            <ul className="space-y-2">
              <li>
                <a href={BUNDLE.gumroadUrl} className="hover:text-gold">
                  Complete Set — ${BUNDLE.price}
                </a>
              </li>
              {VOLUMES.map((v, i) => (
                <li key={v.slug}>
                  <a href={v.gumroadUrl} className="hover:text-gold">
                    Volume {["I", "II", "III"][i]} — ${v.price}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-sm">
            <p className="mb-3 font-medium uppercase tracking-[0.1em] text-white/80">
              Information
            </p>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@kingsmanual.com" className="hover:text-gold">
                  Contact
                </a>
              </li>
              <li>
                <a href="mailto:info@kingsmanual.com" className="hover:text-gold">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line-dark pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} The King&rsquo;s Manual. All rights reserved.</p>
          <p>Secure digital checkout &middot; PDF &middot; Instant access &middot; Lifetime updates</p>
        </div>
      </div>
    </footer>
  );
}
