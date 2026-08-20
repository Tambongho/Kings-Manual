"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageCard {
  id: string;
  src: string;
  alt: string;
  rotation: number;
}

interface ImageCarouselHeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  images: ImageCard[];
  features?: Array<{
    title: string;
    description: string;
  }>;
}

export function ImageCarouselHero({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  images,
  features = [],
}: ImageCarouselHeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [rotatingCards, setRotatingCards] = useState<number[]>(() =>
    images.map((_, i) => i * (360 / images.length))
  );

  // Continuous rotation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingCards((prev) => prev.map((v) => (v + 0.25) % 360));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }

  return (
    <div className="relative w-full overflow-hidden bg-[#fbfaf7]">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-[#1e3a5f]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
        {/* Carousel */}
        <div
          className="relative mb-12 h-72 w-full max-w-3xl sm:mb-16 sm:h-96"
          style={{ perspective: "1200px" }}
          onMouseMove={handleMouseMove}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {images.map((image, index) => {
              const angle = (rotatingCards[index] || 0) * (Math.PI / 180);
              const radius = 150;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius * 0.4;
              const perspectiveX = (mousePosition.x - 0.5) * 16;
              const perspectiveY = (mousePosition.y - 0.5) * 16;

              return (
                <div
                  key={image.id}
                  className="absolute h-40 w-28 transition-transform duration-300 sm:h-52 sm:w-36"
                  style={{
                    transform: `translate(${x}px, ${y}px) rotateX(${perspectiveY}deg) rotateY(${perspectiveX}deg) rotateZ(${image.rotation}deg)`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div
                    className={cn(
                      "group relative h-full w-full cursor-default overflow-hidden rounded-sm",
                      "shadow-[0_20px_45px_-15px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-110 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.35)]"
                    )}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index < 3}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-20 mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            {subtitle}
          </p>
          <h1 className="mb-4 font-display text-4xl leading-[1.1] text-ink sm:mb-6 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mb-8 text-lg text-ink/60 sm:text-xl">{description}</p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={ctaHref}
              className={cn(
                "group inline-flex items-center gap-2 rounded-full px-8 py-3",
                "bg-ink font-medium text-white",
                "transition-all duration-300 hover:scale-105 hover:bg-gold hover:shadow-lg",
                "active:scale-95"
              )}
            >
              {ctaText}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            {secondaryCtaText && secondaryCtaHref && (
              <a
                href={secondaryCtaHref}
                className="rounded-full border border-ink/20 px-8 py-3 text-sm tracking-wide text-ink/80 transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                {secondaryCtaText}
              </a>
            )}
          </div>
        </div>

        {/* Features */}
        {features.length > 0 && (
          <div className="relative z-20 mt-4 grid w-full max-w-4xl grid-cols-1 gap-6 sm:mt-8 sm:grid-cols-3 sm:gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={cn(
                  "group rounded-sm border border-[#e5e1d8] bg-white p-6 text-center",
                  "transition-all duration-300 hover:border-gold/60 hover:shadow-[0_20px_45px_-25px_rgba(169,130,47,0.35)]"
                )}
              >
                <h3 className="mb-2 font-display text-lg text-ink transition-colors group-hover:text-gold">
                  {feature.title}
                </h3>
                <p className="text-sm text-ink/60">{feature.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
