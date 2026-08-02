"use client";

import { Button, SearchField } from "@heroui/react";
import { useMemo, useState } from "react";

import { DirectoryCard } from "@/components/common/DirectoryCard";
import { Icon } from "@/components/common/Icon";
import type { DirectoryItem } from "@/types/homepage";

const INITIAL_VISIBLE_COUNT = 12;
const LOAD_MORE_COUNT = 6;

interface DirectoryBrowserProps {
  categories: string[];
  initialCategory: string;
  items: DirectoryItem[];
}

export function DirectoryBrowser({
  categories,
  initialCategory,
  items,
}: DirectoryBrowserProps) {
  const safeInitialCategory = categories.includes(initialCategory)
    ? initialCategory
    : "All";
  const [activeCategory, setActiveCategory] = useState(safeInitialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const filteredItems = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return items.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;

      if (!matchesCategory) return false;
      if (!normalizedQuery) return true;

      return [item.name, item.category, item.area, item.description]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);
    });
  }, [activeCategory, items, searchQuery]);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const handleCategoryPress = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  return (
    <>
      <div className="sticky top-16 z-30 mb-8 pb-3 pt-1 backdrop-blur ">
        <SearchField
          aria-label="Search directory"
          fullWidth
          value={searchQuery}
          onChange={handleSearchChange}
        >
          <SearchField.Group className="h-12 rounded-2xl border border-slate-200/80 bg-white shadow-sm dark:border-border dark:bg-surface-secondary sm:h-14">
            <SearchField.SearchIcon className="ml-4 text-copy" />
            <SearchField.Input
              className="px-3 text-[14px]"
              placeholder="Search beach clubs, restaurants, hotels..."
            />
            <SearchField.ClearButton className="mr-2" />
          </SearchField.Group>
        </SearchField>

        <div className="hide-scrollbar mt-3 overflow-x-auto">
          <div className="flex w-max gap-2">
            {categories.map((category) => {
              const isActive = category === activeCategory;

              return (
                <Button
                  aria-pressed={isActive}
                  className={`h-8 rounded-full border px-4 text-xs font-semibold ${
                    isActive
                      ? "border-brand bg-brand text-white"
                      : "border-slate-200 bg-white text-copy hover:border-blue-200 hover:text-brand"
                  }`}
                  key={category}
                  size="sm"
                  variant={isActive ? "primary" : "ghost"}
                  onPress={() => handleCategoryPress(category)}
                >
                  {category}
                </Button>
              );
            })}
          </div>
        </div>
      </div>

      {visibleItems.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
          {visibleItems.map((item) => (
            <DirectoryCard item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-5 py-12 text-center">
          <div className="mx-auto grid size-12 place-items-center rounded-full bg-blue-50 text-brand">
            <Icon className="size-6" name="search" />
          </div>
          <h2 className="mt-4 font-display text-xl font-bold text-ink">
            Directory tidak ditemukan
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-copy">
            Coba kata kunci lain atau pilih kategori All.
          </p>
          <Button
            className="mt-5 rounded-full"
            size="sm"
            variant="outline"
            onPress={() => {
              setActiveCategory("All");
              setSearchQuery("");
              setVisibleCount(INITIAL_VISIBLE_COUNT);
            }}
          >
            Reset filter
          </Button>
        </div>
      )}

      <div className="mt-12 flex flex-col items-center gap-3">
        {hasMore ? (
            <Button
              className="rounded-xl px-6"
              size="md"
              variant="outline"
              onPress={() =>
                setVisibleCount((current) => current + LOAD_MORE_COUNT)
              }
            >
              Muat Lebih Banyak
              <Icon className="size-4" name="arrowDown" />
            </Button>
        ) : null}
        <p className="text-xs font-medium text-slate-400">
          Menampilkan {visibleItems.length} dari {filteredItems.length} directory
        </p>
      </div>
    </>
  );
}
