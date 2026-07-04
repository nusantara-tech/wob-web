"use client";

import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { heroPromotions } from "@/data/promotions";

const AUTOPLAY_INTERVAL = 5000;

export function HeroPromoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (isPaused || reduceMotion || heroPromotions.length < 2) return;

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) =>
        currentIndex === heroPromotions.length - 1 ? 0 : currentIndex + 1,
      );
    }, AUTOPLAY_INTERVAL);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      aria-label="Featured promotions"
      aria-roledescription="carousel"
      className="ml-auto max-w-sm"
      role="region"
      onBlur={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="hero-promo-card relative overflow-hidden rounded-2xl border p-4 pb-5 shadow-2xl backdrop-blur">
        <div className="relative min-h-[320px]">
          {heroPromotions.map((promotion, index) => {
            const isActive = index === activeIndex;

            return (
              <article
                aria-hidden={!isActive}
                aria-label={`${index + 1} of ${heroPromotions.length}`}
                className={`hero-promo-slide absolute inset-0 flex flex-col ${
                  isActive ? "is-active" : ""
                }`}
                key={promotion.id}
              >
                <div className="relative aspect-[21/9] overflow-hidden rounded-xl">
                  <Image
                    alt={promotion.imageAlt}
                    className="object-cover"
                    fill
                    sizes="380px"
                    src={promotion.image}
                  />
                  <Chip
                    className="absolute left-3 top-3 bg-gold text-[#191c1e]"
                    size="sm"
                    variant="primary"
                  >
                    Promoted
                  </Chip>
                </div>
                <div className="flex flex-1 flex-col px-1 pb-1 pt-4">
                  <h2 className="hero-promo-title font-display text-lg font-bold">
                    {promotion.title}
                  </h2>
                  <p className="hero-promo-description mt-2 text-xs leading-5">
                    {promotion.description}
                  </p>
                  <div className="hero-promo-footer mt-auto flex items-center justify-between gap-4 border-t pt-5">
                    <div>
                      <span className="text-xl font-black text-brand">
                        {promotion.price}
                      </span>
                      <span className="hero-promo-original-price ml-2 text-xs line-through">
                        {promotion.originalPrice}
                      </span>
                    </div>
                    <Button
                      className="rounded-xl"
                      isDisabled={!isActive}
                      size="sm"
                    >
                      {promotion.actionLabel}
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {heroPromotions.length > 1 ? (
        <div
          aria-label="Choose promotion"
          className="mt-4 flex items-center justify-center gap-2"
          role="group"
        >
          {heroPromotions.map((promotion, index) => (
            <Button
              isIconOnly
              aria-label={`Show ${promotion.title}`}
              aria-pressed={index === activeIndex}
              className={`hero-promo-indicator h-2 min-h-2 w-6 min-w-6 rounded-full p-0 ${
                index === activeIndex ? "is-active" : ""
              }`}
              key={promotion.id}
              size="sm"
              variant="ghost"
              onPress={() => setActiveIndex(index)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
