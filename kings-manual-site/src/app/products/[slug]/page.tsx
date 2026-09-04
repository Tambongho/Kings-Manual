import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BuyButton from "@/components/BuyButton";
import Reveal from "@/components/Reveal";
import TableOfContents from "@/components/TableOfContents";
import { ALL_PRODUCTS, getProduct, getParts } from "@/lib/products";

export function generateStaticParams() {
  return ALL_PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const canonical = `/products/${product.slug}`;
  const description = `${product.subtitle}. ${product.chapters}. Instant digital access with lifetime updates from The King's Manual.`;
  return {
    title: product.title,
    description,
    alternates: { canonical },
    keywords: [
      product.title,
      product.subtitle,
      "The King's Manual",
      "digital book for men",
      "men's personal development",
    ],
    category: "Books",
    openGraph: {
      type: product.slug === "bundle" ? "website" : "book",
      url: canonical,
      title: product.title,
      description,
      siteName: "The King's Manual",
      locale: "en_US",
      images: [{ url: product.cover, alt: product.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description,
      images: [product.cover],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const isBundle = product.slug === "bundle";
  const parts = getParts(product);
  const productUrl = `https://kingsmanual.com/products/${product.slug}`;
  const productSchema = {
    "@type": isBundle ? "Product" : ["Book", "Product"],
    "@id": `${productUrl}#product`,
    name: product.title,
    alternateName: product.subtitle,
    description: product.description,
    image: `https://kingsmanual.com${product.cover}`,
    url: productUrl,
    sku: `KM-${product.slug.toUpperCase()}`,
    category: isBundle ? "Digital book collection" : "Digital book",
    brand: { "@type": "Brand", name: "The King's Manual" },
    publisher: { "@type": "Organization", name: "The King's Manual" },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: product.price,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      url: product.gumroadUrl,
    },
    ...(isBundle
      ? {
          hasPart: ALL_PRODUCTS.filter((item) => item.slug !== "bundle").map(
            (item) => ({
              "@type": "Book",
              name: item.title,
              url: `https://kingsmanual.com/products/${item.slug}`,
            }),
          ),
        }
      : {
          bookFormat: "https://schema.org/EBook",
          inLanguage: "en",
          isPartOf: {
            "@type": "BookSeries",
            name: "The King's Manual: The Complete Encyclopedia of Men",
            url: "https://kingsmanual.com",
          },
        }),
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      productSchema,
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://kingsmanual.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: product.title,
            item: productUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(50% 40% at 90% 0%, rgba(201,164,76,0.10), transparent 60%)",
            }}
          />
          <div className="mx-auto max-w-6xl px-6 py-16">
            <Link
              href="/"
              className="text-xs uppercase tracking-widest text-ink/40 transition-colors hover:text-gold"
            >
              ← Back
            </Link>
            <div className="mt-8 grid gap-12 md:grid-cols-2">
              <Reveal className="mx-auto w-full max-w-sm">
                <a href={product.gumroadUrl} aria-label={`Buy ${product.title}`} className="block">
                  <Image
                    src={product.cover}
                    alt={product.title}
                    width={720}
                    height={900}
                    priority
                    className="w-full drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
                  />
                </a>
              </Reveal>
              <Reveal delay={0.1}>
                {isBundle && (
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">
                    Best Value
                  </p>
                )}
                <h1 className="font-display text-3xl text-ink md:text-4xl">
                  {product.title}
                </h1>
                <p className="mt-3 text-ink/60">{product.subtitle}</p>
                <p className="mt-2 text-xs uppercase tracking-wide text-gold/80">
                  {product.chapters}
                </p>

                <p className="mt-6 leading-relaxed text-ink/70">
                  {product.description}
                </p>

                <ul className="mt-6 space-y-2 text-sm text-ink/70">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="mt-1 text-gold">✦</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-sm border border-[#d7d1c6] bg-white p-6">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-3xl text-gold">
                      ${product.price}
                    </span>
                    {product.compareAt && (
                      <span className="text-ink/40 line-through">
                        ${product.compareAt}
                      </span>
                    )}
                    <span className="text-xs text-ink/40">
                      one-time payment
                    </span>
                  </div>
                  <div className="mt-4">
                    <BuyButton
                      gumroadUrl={product.gumroadUrl ?? "https://thekingsmanual.gumroad.com/l/sdapx"}
                      label="Buy Now — Secure Checkout"
                    />
                  </div>
                  <p className="mt-3 text-xs text-ink/40">
                    Instant digital access after payment. Delivered as a PDF
                    you can read on any device.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {parts.length > 0 && (
          <section className="border-t border-[#d7d1c6] py-16">
            <div className="mx-auto max-w-4xl px-6">
              <Reveal>
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                  Full Table of Contents
                </p>
                <h2 className="mt-3 font-display text-2xl text-ink">
                  What&rsquo;s inside
                </h2>
              </Reveal>
              <Reveal delay={0.1} className="mt-8">
                <TableOfContents parts={parts} />
              </Reveal>
            </div>
          </section>
        )}

        <section className="border-t border-[#d7d1c6] py-16">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <h2 className="font-display text-xl text-ink">Explore the full set</h2>
            </Reveal>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {ALL_PRODUCTS.filter((p) => p.slug !== product.slug).map(
                (p, i) => (
                  <Reveal key={p.slug} delay={i * 0.08}>
                    <Link
                      href={`/products/${p.slug}`}
                      className="group block rounded-sm border border-[#d7d1c6] bg-white p-4 transition-colors duration-300 hover:border-gold/60"
                    >
                      <div className="mx-auto flex h-24 w-full items-center justify-center">
                        <Image
                          src={p.cover}
                          alt={p.title}
                          width={240}
                          height={300}
                          className="max-h-24 max-w-full object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:-translate-y-1"
                        />
                      </div>
                      <p className="mt-3 text-center text-xs text-ink/70 group-hover:text-gold">
                        {p.title}
                      </p>
                    </Link>
                  </Reveal>
                )
              )}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
