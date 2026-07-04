"use client";

import { Button, Chip, SearchField } from "@heroui/react";
import Image from "next/image";

import { HeroPromoCarousel } from "@/components/common/HeroPromoCarousel";
import { Icon } from "@/components/common/Icon";

const trending = ["Finns Beach Club", "Savaya Bali", "Yoga Fest"];

export function HeroSection() {
  return (
    <section className="relative min-h-[644px] overflow-hidden bg-black md:min-h-[584px]">
      <Image
        priority
        alt="Uluwatu beach club at sunset"
        className="object-cover opacity-60"
        fill
        sizes="100vw"
        src="/images/hero-beach.jpg"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-black/10" />
      <div className="page-container relative z-10 grid min-h-[644px] items-center gap-10 pb-12 pt-28 md:min-h-[584px] lg:grid-cols-12">
        <div className="hero-content max-w-3xl lg:col-span-7">
          <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white/72 backdrop-blur">
            What are you looking for today?
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-[60px]">
            Find Bali&apos;s best{" "}
            <span className="bg-gradient-to-r from-amber-200 via-orange-300 to-sky-200 bg-clip-text text-transparent">
              events, places, and deals.
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-white/76 sm:text-lg">
            Discover what&apos;s happening nearby, where to go, and the offers
            worth catching today.
          </p>
          <div className="hero-search mt-7 max-w-3xl rounded-2xl p-2 shadow-2xl">
            <div className="grid gap-2 md:grid-cols-[1.4fr_1fr_auto]">
              <SearchField
                fullWidth
                aria-label="Search events, artists, or venues"
                className="w-full"
                variant="secondary"
              >
                <SearchField.Group className="hero-search-field h-12 border-0 shadow-none">
                  <SearchField.SearchIcon className="hero-search-icon" />
                  <SearchField.Input
                    className="hero-search-input"
                    placeholder="Search events, artists, venues..."
                  />
                  <SearchField.ClearButton />
                </SearchField.Group>
              </SearchField>
              <label className="hero-search-location flex h-12 items-center gap-2 border-t px-3 md:border-l md:border-t-0">
                <Icon className="hero-search-icon size-5" name="location" />
                <span className="sr-only">Area</span>
                <select className="hero-search-select h-full min-w-0 flex-1 appearance-none bg-transparent text-sm outline-none">
                  <option>All Areas</option>
                  <option>Canggu</option>
                  <option>Uluwatu</option>
                  <option>Ubud</option>
                  <option>Seminyak</option>
                </select>
                <Icon className="hero-search-icon size-4" name="arrowDown" />
              </label>
              <Button className="h-12 rounded-xl px-7">Search</Button>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
              Trending now
            </span>
            <div className="flex flex-wrap gap-2">
              {trending.map((item) => (
                <Chip
                  className="border-white/20 bg-white/10 text-white"
                  key={item}
                  size="sm"
                  variant="secondary"
                >
                  {item}
                </Chip>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-promo hidden lg:col-span-5 lg:block">
          <HeroPromoCarousel />
        </div>
      </div>
    </section>
  );
}
