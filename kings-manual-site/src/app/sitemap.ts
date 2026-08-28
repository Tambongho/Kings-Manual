import type { MetadataRoute } from "next";
import { ALL_PRODUCTS } from "@/lib/products";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kingsmanual.com";
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    ...ALL_PRODUCTS.map((p) => ({ url: `${base}/products/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...["privacy", "terms", "refunds"].map((p) => ({ url: `${base}/${p}`, changeFrequency: "yearly" as const, priority: 0.2 })),
  ];
}
