import type { MetadataRoute } from "next";
import { ALL_PRODUCTS } from "@/lib/products";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kingsmanual.com";
  const lastModified = new Date("2026-09-03T00:00:00.000Z");
  return [
    {
      url: base,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${base}/lifestyle/hero-reader-v1.webp`,
        `${base}/covers/bundle-3d.webp`,
      ],
    },
    ...ALL_PRODUCTS.map((product) => ({
      url: `${base}/products/${product.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: product.slug === "bundle" ? 0.9 : 0.8,
      images: [`${base}${product.cover}`],
    })),
    ...["privacy", "terms", "refunds"].map((policy) => ({
      url: `${base}/${policy}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
  ];
}
