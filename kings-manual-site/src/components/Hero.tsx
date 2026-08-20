"use client";

import { ImageCarouselHero } from "@/components/ui/image-carousel-hero";
import { VOLUMES, BUNDLE, WORKBOOK } from "@/lib/products";

const CAROUSEL_IMAGES = [
  { id: "vol1", src: VOLUMES[0].cover, alt: VOLUMES[0].title, rotation: -14 },
  { id: "vol2", src: VOLUMES[1].cover, alt: VOLUMES[1].title, rotation: -6 },
  { id: "bundle", src: BUNDLE.cover, alt: BUNDLE.title, rotation: 0 },
  { id: "vol3", src: VOLUMES[2].cover, alt: VOLUMES[2].title, rotation: 7 },
  { id: "workbook", src: WORKBOOK.cover, alt: WORKBOOK.title, rotation: 14 },
];

const FEATURES = [
  {
    title: "One Complete System",
    description:
      "116 chapters, three volumes, one coherent reference instead of a hundred scattered sources.",
  },
  {
    title: "Evidence, Not Hype",
    description:
      "Every chapter built on historical background, scientific evidence, and practical application.",
  },
  {
    title: "Yours for Life",
    description:
      "One-time payment, instant digital access, no subscription — reference it for decades.",
  },
];

export default function Hero() {
  return (
    <ImageCarouselHero
      subtitle="The Complete Encyclopedia of Men"
      title="Everything a man needs to understand himself, in one system."
      description="116 chapters. Three volumes. The biology of the male body and mind, the history and philosophy that shaped manhood, and the practical mastery of relationships, career, and wealth."
      ctaText={`Get the Complete Set — $${BUNDLE.price}`}
      ctaHref={BUNDLE.gumroadUrl!}
      secondaryCtaText="Start Free with the Workbook"
      secondaryCtaHref={WORKBOOK.gumroadUrl}
      images={CAROUSEL_IMAGES}
      features={FEATURES}
    />
  );
}
