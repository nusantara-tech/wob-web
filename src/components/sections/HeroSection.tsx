"use client";

import { Button, SearchField } from "@heroui/react";
import { useState } from "react";

import { HeroPromoCarousel } from "@/components/common/HeroPromoCarousel";
import { Icon, type IconName } from "@/components/common/Icon";

const categories = [
  "Semua",
  "Event",
  "Beach Club",
  "Wellness",
  "Dining",
  "Workshop",
  "Promo",
  "Area Populer",
];

const categoryIcons: Record<(typeof categories)[number], IconName> = {
  Semua: "sparkles",
  Event: "calendar",
  "Beach Club": "sun",
  Wellness: "heart",
  Dining: "utensils",
  Workshop: "palette",
  Promo: "ticket",
  "Area Populer": "compass",
};

export function HeroSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="hero-section theme-surface relative overflow-hidden pb-1.5 pt-18 sm:pb-2 sm:pt-20">
      <div className="page-container relative z-10 space-y-2.5 sm:space-y-3">
        <HeroPromoCarousel />

        <div className="hero-discovery rounded-[1.4rem] border p-2 sm:rounded-[1.75rem] sm:p-2.5">
          <SearchField
            fullWidth
            aria-label="Cari produk atau item"
            className="w-full"
            variant="secondary"
          >
            <SearchField.Group className="hero-search-field h-12 border-0 shadow-none sm:h-13">
              <SearchField.SearchIcon className="hero-search-icon ml-3 size-4.5" />
              <SearchField.Input
                className="hero-search-input min-w-0 px-3 text-sm font-medium"
                placeholder="Cari produk atau item..."
              />
              <SearchField.ClearButton className="mr-1" />
              <Button
                aria-label="Cari produk atau item"
                className="hero-search-button mr-1 h-9 shrink-0 rounded-full px-3 text-white sm:h-10 sm:px-5"
                size="sm"
                variant="primary"
              >
                <Icon className="size-4 sm:hidden" name="search" />
                <span className="hidden sm:inline">Cari</span>
              </Button>
            </SearchField.Group>
          </SearchField>

          <div
            aria-label="Filter kategori"
            className="hide-scrollbar mt-1.5 flex gap-1.5 overflow-x-auto pt-1 sm:mt-2 sm:gap-2"
            role="list"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <Button
                  aria-pressed={isActive}
                  className={`hero-category-pill shrink-0 rounded-full border px-4 ${
                    isActive
                      ? "is-active border-brand bg-brand text-white"
                      : "border-slate-200 bg-white/70 text-slate-600 hover:border-blue-200 hover:text-brand dark:border-white/10 dark:bg-white/5 dark:text-white/72 dark:hover:text-white"
                  }`}
                  key={category}
                  size="sm"
                  variant={isActive ? "primary" : "ghost"}
                  onPress={() => setActiveCategory(category)}
                >
                  <Icon
                    className="size-3.5 shrink-0"
                    name={categoryIcons[category]}
                  />
                  {category}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
