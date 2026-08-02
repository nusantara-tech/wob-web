"use client";

import { Button, Card, SearchField } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { Icon } from "@/components/common/Icon";
import type { DealItem, DirectoryItem, EventItem } from "@/types/homepage";

type Result =
  | { type: "directory"; data: DirectoryItem }
  | { type: "event"; data: EventItem }
  | { type: "deal"; data: DealItem };

type ResultTab = {
  id: string;
  label: string;
  href: string;
  results: Result[];
};

const INITIAL_VISIBLE_RESULTS = 6;
const LOAD_MORE_RESULTS = 6;

function FiltersPanel({
  activeTab,
  resultTabs,
  onTabChange,
  compact = false,
}: {
  activeTab: ResultTab;
  resultTabs: ResultTab[];
  onTabChange: (tab: ResultTab) => void;
  compact?: boolean;
}) {
  return (
    <nav
      aria-label="Result categories"
      className={compact ? "hide-scrollbar overflow-x-auto" : "pr-2"}
    >
      {!compact ? (
        <h2 className="mb-4 flex items-center gap-2 font-display text-[18px] font-bold">
          <Icon className="size-5" name="compass" />
          Browse Results
        </h2>
      ) : null}
      <div
        className={
          compact
            ? "flex w-max min-w-full gap-1 rounded-xl border border-slate-200/80 bg-white p-1 shadow-sm dark:border-border dark:bg-surface-secondary"
            : "flex flex-col gap-1"
        }
      >
        {resultTabs.map((tab) => {
          const isActive = tab.id === activeTab.id;

          return (
            <Link
              aria-current={isActive ? "page" : undefined}
              className={`flex items-center justify-between rounded-xl text-[13px] font-semibold transition-colors ${
                compact
                  ? "h-10 min-w-24 justify-center px-4"
                  : "min-h-11 px-3 py-2"
              } ${
                isActive
                  ? "bg-brand text-white shadow-sm"
                  : "text-slate-500 hover:bg-slate-100 hover:text-ink dark:text-slate-300 dark:hover:bg-surface-secondary dark:hover:text-white"
              }`}
              href={tab.href}
              key={tab.id}
              onClick={() => onTabChange(tab)}
            >
              <span>{tab.label}</span>
              <span
                className={`ml-2 rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-slate-200 text-slate-500 dark:bg-white/10 dark:text-slate-300"
                }`}
              >
                {tab.results.length}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

function ResultBadge({ type }: { type: Result["type"] }) {
  const styles = {
    directory: "bg-ocean text-white",
    event: "bg-brand text-white",
    deal: "bg-orange-700 text-white",
  };

  const labels = {
    directory: "Directory",
    event: "Event",
    deal: "Hot Deal",
  };

  return (
    <span
      className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase ${styles[type]}`}
    >
      {labels[type]}
    </span>
  );
}

function UnifiedResultCard({ result }: { result: Result }) {
  if (result.type === "directory") {
    const item = result.data;

    return (
      <Card className="theme-card interactive-card group overflow-hidden rounded-xl border border-slate-200 p-0 shadow-sm">
        <div className="relative h-48 overflow-hidden">
          <Image
            alt={item.name}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            src={item.image}
          />
          <ResultBadge type="directory" />
          <button
            aria-label={`Save ${item.name}`}
            className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white/20 text-white backdrop-blur transition-colors hover:bg-white hover:text-brand"
            type="button"
          >
            <Icon className="size-5" name="star" />
          </button>
        </div>
        <Card.Content className="flex flex-col gap-1.5 p-4">
          <div className="flex items-center gap-2 text-[12px]">
            <span className="flex items-center gap-1 font-bold text-gold">
              <Icon className="size-4 fill-gold" name="star" />
              {item.rating}
            </span>
            <span className="text-slate-400">({item.reviewCount} reviews)</span>
          </div>
          <h3 className="font-display text-[18px] font-semibold leading-6 transition-colors group-hover:text-brand">
            {item.name}
          </h3>
          <p className="flex items-center gap-1.5 text-[12px] text-copy">
            <Icon className="size-4" name="location" />
            {item.area} • {item.category}
          </p>
          <p className="mt-1 line-clamp-2 min-h-10 text-[13px] leading-5 text-copy">
            {item.description}
          </p>
          <div className="mt-3 border-t border-slate-200 pt-3 dark:border-border">
            <Button fullWidth className="rounded-lg text-[12px]" size="sm" variant="outline">
              View Menu & Reservation
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }

  if (result.type === "event") {
    const event = result.data;

    return (
      <Card className="theme-card interactive-card group overflow-hidden rounded-xl border border-slate-200 p-0 shadow-sm">
        <div className="relative h-48 overflow-hidden">
          <Image
            alt={event.title}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            src={event.image}
          />
          <ResultBadge type="event" />
        </div>
        <Card.Content className="flex flex-col gap-1.5 p-4">
          <p className="text-[12px] font-bold uppercase text-brand">
            {event.month} {event.day} • {event.time}
          </p>
          <h3 className="font-display text-[18px] font-semibold leading-6 transition-colors group-hover:text-brand">
            {event.title}
          </h3>
          <p className="flex items-center gap-1.5 text-[12px] text-copy">
            <Icon className="size-4" name="calendar" />
            {event.venue} • {event.area}
          </p>
          <div className="mt-3 flex items-center justify-between gap-3">
            <span
              className={`text-[14px] font-bold ${
                event.price === "Gratis" ? "text-green-600" : "text-ink"
              }`}
            >
              {event.price}
            </span>
            <Button className="rounded-lg text-[12px]" size="sm" variant="ghost">
              {event.actionLabel}
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }

  const deal = result.data;

  return (
    <Card className="theme-card interactive-card group overflow-hidden rounded-xl border border-slate-200 p-0 shadow-sm">
      <div className="relative h-48 overflow-hidden">
        <Image
          alt={deal.title}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          src={deal.image}
        />
        <ResultBadge type="deal" />
        <span className="absolute bottom-3 left-3 rounded-lg bg-red-600 px-3 py-1 text-xs font-bold text-white">
          {deal.discount}
        </span>
      </div>
      <Card.Content className="flex flex-col gap-1.5 p-4">
        <h3 className="font-display text-[18px] font-semibold leading-6 transition-colors group-hover:text-brand">
          {deal.title}
        </h3>
        <p className="line-clamp-2 min-h-10 text-[13px] leading-5 text-copy">
          {deal.description}
        </p>
        <div className="mt-2 flex items-center gap-2">
          <span className="font-bold text-ink">{deal.price}</span>
          <span className="text-xs text-slate-400 line-through">
            {deal.originalPrice}
          </span>
        </div>
        <Button className="mt-2 rounded-lg text-[12px]" size="sm">
          {deal.actionLabel}
        </Button>
      </Card.Content>
    </Card>
  );
}

function resultMatchesQuery(result: Result, normalizedQuery: string) {
  if (!normalizedQuery) return true;

  const searchableFields =
    result.type === "directory"
      ? [
          result.data.name,
          result.data.category,
          result.data.area,
          result.data.description,
          String(result.data.rating),
        ]
      : result.type === "event"
        ? [
            result.data.title,
            result.data.category,
            result.data.area,
            result.data.venue,
            result.data.time,
            result.data.price,
          ]
        : [
            result.data.title,
            result.data.description,
            result.data.discount,
            result.data.price,
            result.data.originalPrice,
            result.data.actionLabel,
          ];

  return searchableFields.join(" ").toLowerCase().includes(normalizedQuery);
}

export function AllResultsExplorer({
  initialTabId,
  resultTabs,
}: {
  initialTabId: string;
  resultTabs: ResultTab[];
}) {
  const [activeTabId, setActiveTabId] = useState(initialTabId);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_RESULTS);

  const activeTab =
    resultTabs.find((item) => item.id === activeTabId) ?? resultTabs[0];

  const filteredResults = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return activeTab.results.filter((result) =>
      resultMatchesQuery(result, normalizedQuery),
    );
  }, [activeTab.results, searchQuery]);

  const visibleResults = filteredResults.slice(0, visibleCount);
  const canLoadMore = visibleResults.length < filteredResults.length;

  const handleTabChange = (tab: ResultTab) => {
    setActiveTabId(tab.id);
    setVisibleCount(INITIAL_VISIBLE_RESULTS);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setVisibleCount(INITIAL_VISIBLE_RESULTS);
  };

  return (
    <div className="page-container flex">
      <aside className="sticky top-[112px] hidden h-[calc(100vh-140px)] w-[280px] shrink-0 overflow-y-auto lg:block">
        <FiltersPanel
          activeTab={activeTab}
          resultTabs={resultTabs}
          onTabChange={handleTabChange}
        />
      </aside>

      <section className="min-w-0 flex-1">
        <div className="sticky top-16 z-30 bg-white backdrop-blur pb-6 pt-2">
          <div className="flex flex-col gap-3">
            <SearchField
              aria-label="Search all results"
              fullWidth
              value={searchQuery}
              onChange={handleSearchChange}
            >
              <SearchField.Group className="h-16 rounded-2xl border border-slate-200/80 bg-white shadow-sm dark:border-border dark:bg-surface-secondary">
                <SearchField.SearchIcon className="ml-5 text-copy" />
                <SearchField.Input
                  className="px-4 text-[14px]"
                  placeholder="Search events, villas, restaurants..."
                />
                <SearchField.ClearButton className="mr-2" />
              </SearchField.Group>
            </SearchField>

            <div className="flex flex-col gap-2">
              <p className="px-1 text-xs font-medium text-slate-400">
                Showing{" "}
                <span className="font-bold text-ink">
                  {filteredResults.length}
                </span>{" "}
                results for "{activeTab.label}"
              </p>
            </div>

            <div className="lg:hidden">
              <FiltersPanel
                activeTab={activeTab}
                resultTabs={resultTabs}
                compact
                onTabChange={handleTabChange}
              />
            </div>
          </div>
        </div>

        {visibleResults.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {visibleResults.map((result, index) => (
              <UnifiedResultCard
                key={`${activeTab.id}-${result.type}-${result.data.id}-${index}`}
                result={result}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-5 py-12 text-center">
            <div className="mx-auto grid size-12 place-items-center rounded-full bg-blue-50 text-brand">
              <Icon className="size-6" name="search" />
            </div>
            <h2 className="mt-4 font-display text-xl font-bold text-ink">
              Result tidak ditemukan
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-copy">
              Coba kata kunci lain atau pilih kategori All.
            </p>
            <Button
              className="mt-5 rounded-full"
              size="sm"
              variant="outline"
              onPress={() => {
                setActiveTabId("all");
                setSearchQuery("");
                setVisibleCount(INITIAL_VISIBLE_RESULTS);
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
              size="md"
              variant="outline"
              onPress={() =>
                setVisibleCount((currentCount) =>
                  Math.min(
                    currentCount + LOAD_MORE_RESULTS,
                    filteredResults.length,
                  ),
                )
              }
            >
              Muat Lebih Banyak
              <Icon className="size-4" name="arrowDown" />
            </Button>
          ) : null}
          <p className="text-xs font-medium text-slate-400">
            Menampilkan {visibleResults.length} dari {filteredResults.length}{" "}
            result {activeTab.label}
          </p>
        </div>
      </section>
    </div>
  );
}
