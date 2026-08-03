"use client";

import { Button, SearchField } from "@heroui/react";
import { useEffect, useMemo, useState } from "react";

import { EventCard } from "@/components/common/EventCard";
import { Icon } from "@/components/common/Icon";
import { CompactCardSkeleton } from "@/components/common/LoadingSkeletons";
import type { EventItem } from "@/types/homepage";

interface EventExplorerProps {
  events: EventItem[];
  filters: string[];
}

const filterCategoryMap: Record<string, string[]> = {
  "All Events": [],
  "Food & Drink": ["Dining"],
  "Music & Nightlife": ["Live Concert"],
  Workshops: ["Workshop"],
  "Wellness & Yoga": ["Wellness"],
};

export const EVENT_FILTER_CHANGE_EVENT = "wob:event-filter-change";
const INITIAL_VISIBLE_EVENTS = 18;
const LOAD_MORE_EVENTS = 6;
const LOAD_MORE_LOADING_MS = 300;

export function EventExplorer({ events, filters }: EventExplorerProps) {
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_EVENTS);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const updateActiveFilter = (filter: string) => {
    setActiveFilter(filter);
    setVisibleCount(INITIAL_VISIBLE_EVENTS);
    setIsLoadingMore(false);
  };

  useEffect(() => {
    const handleFilterChange = (event: Event) => {
      const filter = (event as CustomEvent<string>).detail;

      if (!filters.includes(filter)) return;

      updateActiveFilter(filter);
    };

    window.addEventListener(EVENT_FILTER_CHANGE_EVENT, handleFilterChange);

    return () =>
      window.removeEventListener(EVENT_FILTER_CHANGE_EVENT, handleFilterChange);
  }, [filters]);

  const filteredEvents = useMemo(() => {
    const categories = filterCategoryMap[activeFilter];
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return events.filter((event) => {
      const matchesCategory =
        !categories?.length || categories.includes(event.category);

      if (!matchesCategory) return false;
      if (!normalizedQuery) return true;

      return [
        event.title,
        event.category,
        event.area,
        event.venue,
        event.time,
        event.price,
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);
    });
  }, [activeFilter, events, searchQuery]);

  const visibleEvents = filteredEvents.slice(0, visibleCount);
  const canLoadMore = visibleEvents.length < filteredEvents.length;
  const loadingMoreCount = Math.min(
    LOAD_MORE_EVENTS,
    filteredEvents.length - visibleEvents.length,
  );

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setVisibleCount(INITIAL_VISIBLE_EVENTS);
    setIsLoadingMore(false);
  };

  const handleLoadMore = () => {
    setIsLoadingMore(true);

    window.setTimeout(() => {
      setVisibleCount((currentCount) =>
        Math.min(currentCount + LOAD_MORE_EVENTS, filteredEvents.length),
      );
      setIsLoadingMore(false);
    }, LOAD_MORE_LOADING_MS);
  };

  return (
    <>
      <div className="sticky top-16 z-30 mb-8 pb-3 pt-1 backdrop-blur">
        <SearchField
          aria-label="Search events"
          fullWidth
          value={searchQuery}
          onChange={handleSearchChange}
        >
          <SearchField.Group className="h-12 rounded-2xl border border-slate-200/80 bg-white shadow-sm dark:border-border dark:bg-surface-secondary sm:h-14">
            <SearchField.SearchIcon className="ml-4 text-copy" />
            <SearchField.Input
              className="px-3 text-[14px]"
              placeholder="Search events, venues, areas..."
            />
            <SearchField.ClearButton className="mr-2" />
          </SearchField.Group>
        </SearchField>

        <div className="hide-scrollbar mt-3 overflow-x-auto">
          <div className="flex w-max gap-2">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <Button
                  aria-pressed={isActive}
                  className={`h-8 rounded-full border px-4 text-xs font-semibold ${
                    isActive
                      ? "border-brand bg-brand text-white"
                      : "border-slate-200 bg-white text-copy hover:border-blue-200 hover:text-brand"
                  }`}
                  key={filter}
                  size="sm"
                  variant={isActive ? "primary" : "ghost"}
                  onPress={() => updateActiveFilter(filter)}
                >
                  {filter}
                </Button>
              );
            })}
          </div>
        </div>
      </div>

      {visibleEvents.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
          {visibleEvents.map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
          {isLoadingMore
            ? Array.from({ length: loadingMoreCount }).map((_, index) => (
                <CompactCardSkeleton key={`event-loading-${index}`} />
              ))
            : null}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-5 py-12 text-center">
          <div className="mx-auto grid size-12 place-items-center rounded-full bg-blue-50 text-brand">
            <Icon className="size-6" name="search" />
          </div>
          <h2 className="mt-4 font-display text-xl font-bold text-ink">
            Event tidak ditemukan
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-copy">
            Coba kata kunci lain atau pilih filter All Events.
          </p>
          <Button
            className="mt-5 rounded-full"
            size="sm"
            variant="outline"
            onPress={() => {
              setActiveFilter(filters[0]);
              setSearchQuery("");
              setVisibleCount(INITIAL_VISIBLE_EVENTS);
            }}
          >
            Reset filter
          </Button>
        </div>
      )}

      <div className="mt-12 flex flex-col items-center gap-3">
        {canLoadMore ? (
          <Button
            className="rounded-xl px-6"
            isDisabled={isLoadingMore}
            size="md"
            variant="outline"
            onPress={handleLoadMore}
          >
            {isLoadingMore ? "Memuat..." : "Muat Lebih Banyak"}
            <Icon className="size-4" name="arrowDown" />
          </Button>
        ) : null}
        <p className="text-xs font-medium text-slate-400">
          Menampilkan {visibleEvents.length} dari {filteredEvents.length} events
        </p>
      </div>
    </>
  );
}
