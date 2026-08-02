"use client";

import { Button, SearchField } from "@heroui/react";
import { useMemo, useState } from "react";

import { DealCard } from "@/components/common/DealCard";
import { Icon } from "@/components/common/Icon";
import type { DealItem } from "@/types/homepage";

interface DealsExplorerProps {
  deals: DealItem[];
  filters: string[];
}

const INITIAL_VISIBLE_DEALS = 8;
const LOAD_MORE_DEALS = 4;

const filterMatchers: Record<string, string[]> = {
  "All Deals": [],
  "Beach Club": ["beach", "savaya", "finns", "daybed"],
  Dining: ["dinner", "feast", "brunch", "seafood", "mason", "seminyak"],
  Experience: ["surf", "workshop", "pass", "bundle", "fun"],
  Family: ["family", "kuta", "sanur"],
  Wellness: ["spa", "wellness", "yoga", "ubud", "couple"],
};

export function DealsExplorer({ deals, filters }: DealsExplorerProps) {
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_DEALS);

  const filteredDeals = useMemo(() => {
    const filterTerms = filterMatchers[activeFilter] ?? [];
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return deals.filter((deal) => {
      const haystack = [
        deal.title,
        deal.description,
        deal.discount,
        deal.price,
        deal.originalPrice,
        deal.actionLabel,
      ]
        .join(" ")
        .toLowerCase();

      const matchesFilter =
        filterTerms.length === 0 ||
        filterTerms.some((term) => haystack.includes(term));

      if (!matchesFilter) return false;
      if (!normalizedQuery) return true;

      return haystack.includes(normalizedQuery);
    });
  }, [activeFilter, deals, searchQuery]);

  const visibleDeals = filteredDeals.slice(0, visibleCount);
  const canLoadMore = visibleDeals.length < filteredDeals.length;

  const updateActiveFilter = (filter: string) => {
    setActiveFilter(filter);
    setVisibleCount(INITIAL_VISIBLE_DEALS);
  };

  const updateSearchQuery = (value: string) => {
    setSearchQuery(value);
    setVisibleCount(INITIAL_VISIBLE_DEALS);
  };

  return (
    <>
      <div className="sticky top-16 z-30 mb-8 pb-3 pt-1 backdrop-blur">
        <SearchField
          aria-label="Search hot deals"
          fullWidth
          value={searchQuery}
          onChange={updateSearchQuery}
        >
          <SearchField.Group className="h-12 rounded-2xl border border-orange-200/80 bg-white shadow-sm dark:border-border dark:bg-surface-secondary sm:h-14">
            <SearchField.SearchIcon className="ml-4 text-orange-700" />
            <SearchField.Input
              className="px-3 text-[14px]"
              placeholder="Search vouchers, beach clubs, wellness deals..."
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
                      ? "border-orange-700 bg-orange-700 text-white"
                      : "border-orange-100 bg-white text-copy hover:border-orange-200 hover:text-orange-700"
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

      {visibleDeals.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {visibleDeals.map((deal) => (
            <DealCard deal={deal} key={deal.id} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-orange-300 bg-white px-5 py-12 text-center">
          <div className="mx-auto grid size-12 place-items-center rounded-full bg-orange-50 text-orange-700">
            <Icon className="size-6" name="ticket" />
          </div>
          <h2 className="mt-4 font-display text-xl font-bold text-ink">
            Deal tidak ditemukan
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-copy">
            Coba kata kunci lain atau pilih filter All Deals.
          </p>
          <Button
            className="mt-5 rounded-full border-orange-200 text-orange-700"
            size="sm"
            variant="outline"
            onPress={() => {
              setActiveFilter(filters[0]);
              setSearchQuery("");
              setVisibleCount(INITIAL_VISIBLE_DEALS);
            }}
          >
            Reset filter
          </Button>
        </div>
      )}

      <div className="mt-12 flex flex-col items-center gap-3">
        {canLoadMore ? (
          <Button
            className="rounded-xl border-orange-200 px-6 text-orange-700 hover:bg-orange-50"
            size="md"
            variant="outline"
            onPress={() =>
              setVisibleCount((currentCount) =>
                Math.min(currentCount + LOAD_MORE_DEALS, filteredDeals.length),
              )
            }
          >
            Muat Lebih Banyak
            <Icon className="size-4" name="arrowDown" />
          </Button>
        ) : null}
        <p className="text-xs font-medium text-slate-400">
          Menampilkan {visibleDeals.length} dari {filteredDeals.length} hot deals
        </p>
      </div>
    </>
  );
}
