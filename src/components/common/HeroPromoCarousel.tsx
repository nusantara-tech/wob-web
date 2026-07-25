"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import type { CSSProperties, PointerEvent, TouchEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

import { Icon } from "@/components/common/Icon";
import { heroPromotions } from "@/data/promotions";

const AUTOPLAY_INTERVAL = 5000;
const MINIMUM_SWIPE_DISTANCE = 44;
const SWIPE_THROTTLE_MS = 320;

type DragState = {
  pointerId: number | "touch";
  startX: number;
  startY: number;
};

function getRelativeOffset(index: number, activeIndex: number, total: number) {
  const rawOffset = index - activeIndex;

  if (rawOffset > total / 2) return rawOffset - total;
  if (rawOffset < -total / 2) return rawOffset + total;

  return rawOffset;
}

export function HeroPromoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const dragStateRef = useRef<DragState | null>(null);
  const lastSwipeAtRef = useRef(0);

  const showPreviousSlide = useCallback(() => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? heroPromotions.length - 1 : currentIndex - 1,
    );
  }, []);

  const showNextSlide = useCallback(() => {
    setActiveIndex((currentIndex) =>
      currentIndex === heroPromotions.length - 1 ? 0 : currentIndex + 1,
    );
  }, []);

  const startDrag = (pointerId: DragState["pointerId"], x: number, y: number) => {
    dragStateRef.current = {
      pointerId,
      startX: x,
      startY: y,
    };
  };

  const finishDrag = (
    pointerId: DragState["pointerId"],
    x: number,
    y: number,
  ) => {
    const dragState = dragStateRef.current;

    dragStateRef.current = null;

    if (!dragState || dragState.pointerId !== pointerId) return;

    const dragDistanceX = x - dragState.startX;
    const dragDistanceY = y - dragState.startY;

    if (
      Math.abs(dragDistanceX) < MINIMUM_SWIPE_DISTANCE ||
      Math.abs(dragDistanceY) > Math.abs(dragDistanceX)
    ) {
      return;
    }

    const now = Date.now();

    if (now - lastSwipeAtRef.current < SWIPE_THROTTLE_MS) return;

    lastSwipeAtRef.current = now;

    if (dragDistanceX < 0) {
      showNextSlide();
    } else {
      showPreviousSlide();
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!event.isPrimary) return;

    startDrag(event.pointerId, event.clientX, event.clientY);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    finishDrag(event.pointerId, event.clientX, event.clientY);
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.changedTouches[0];

    if (!touch) return;

    startDrag("touch", touch.clientX, touch.clientY);
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.changedTouches[0];

    if (!touch) return;

    finishDrag("touch", touch.clientX, touch.clientY);
  };

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (isPaused || reduceMotion || heroPromotions.length < 2) return;

    const interval = window.setInterval(showNextSlide, AUTOPLAY_INTERVAL);

    return () => window.clearInterval(interval);
  }, [isPaused, showNextSlide]);

  return (
    <div
      aria-label="Featured promotions"
      aria-roledescription="carousel"
      className="hero-promo-carousel hero-promo w-full select-none"
      role="region"
      onBlur={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative overflow-hidden rounded-[1.4rem] border border-white/70 bg-white shadow-[0_18px_50px_rgb(15_23_42_/_8%)] dark:border-white/10 dark:bg-white/5 sm:rounded-[1.75rem]">
        <div
          className="hero-promo-track relative h-[172px] cursor-grab overflow-hidden active:cursor-grabbing sm:h-[232px] lg:h-[284px]"
          onPointerCancel={() => {
            dragStateRef.current = null;
          }}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onTouchEnd={handleTouchEnd}
          onTouchStart={handleTouchStart}
        >
          {heroPromotions.map((promotion, index) => {
            const isActive = index === activeIndex;
            const offset = getRelativeOffset(
              index,
              activeIndex,
              heroPromotions.length,
            );
            const isPreview = Math.abs(offset) === 1;

            return (
              <article
                aria-hidden={!isActive}
                aria-label={`${index + 1} of ${heroPromotions.length}`}
                className={`hero-promo-slide absolute inset-0 overflow-hidden ${
                  isActive ? "is-active" : ""
                } ${isPreview ? "is-preview" : ""}`}
                key={promotion.id}
                style={{ "--slide-offset": offset } as CSSProperties}
              >
                <Image
                  priority={index === 0}
                  alt={promotion.imageAlt}
                  className="object-cover"
                  draggable={false}
                  fill
                  sizes="(min-width: 1400px) 1400px, calc(100vw - 2rem)"
                  src={promotion.image}
                />
              </article>
            );
          })}
        </div>

        {heroPromotions.length > 1 ? (
          <>
            <Button
              isIconOnly
              aria-label="Show previous promotion"
              className="hero-promo-nav left-2.5 sm:left-4"
              size="sm"
              variant="ghost"
              onPress={showPreviousSlide}
            >
              <Icon className="size-3.5" name="arrowLeft" />
            </Button>
            <Button
              isIconOnly
              aria-label="Show next promotion"
              className="hero-promo-nav right-2.5 sm:right-4"
              size="sm"
              variant="ghost"
              onPress={showNextSlide}
            >
              <Icon className="size-3.5" name="arrowRight" />
            </Button>
            <div
              aria-label="Choose promotion"
              className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center gap-1.5 rounded-full border border-white/30 bg-black/18 px-2 py-1 backdrop-blur-md"
              role="group"
            >
              {heroPromotions.map((promotion, index) => (
                <Button
                  isIconOnly
                  aria-label={`Show ${promotion.title}`}
                  aria-pressed={index === activeIndex}
                  className={`hero-promo-indicator h-1.5 min-h-1.5 w-3 min-w-3 rounded-full p-0 ${
                    index === activeIndex ? "is-active" : ""
                  }`}
                  key={promotion.id}
                  size="sm"
                  variant="ghost"
                  onPress={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
