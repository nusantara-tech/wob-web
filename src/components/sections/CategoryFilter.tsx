"use client";

import { Button } from "@heroui/react";
import { useEffect, useRef, useState } from "react";

import { Icon, type IconName } from "@/components/common/Icon";
import { eventFilters } from "@/data/events";

const filterIcons: Record<string, IconName> = {
  "All Events": "ticket",
  Today: "sun",
  "This Weekend": "calendar",
  "Music & Nightlife": "music",
  "Wellness & Yoga": "heart",
  "Food & Drink": "utensils",
  Workshops: "palette",
  Festivals: "sparkles",
};

export function CategoryFilter() {
  const [activeFilter, setActiveFilter] = useState(eventFilters[0]);
  const [isStuck, setIsStuck] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;

    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStuck(!entry.isIntersecting && entry.boundingClientRect.top < 64);
      },
      {
        rootMargin: "-64px 0px 0px 0px",
        threshold: 0,
      },
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div aria-hidden="true" className="h-px" ref={sentinelRef} />
      <div
        className={`sticky top-16 z-40 pb-2 pt-0 ${isStuck ? "is-stuck" : ""}`}
      >
        <div className="page-container">
          <div
            className={`category-filter overflow-x-auto rounded-[1.5rem] border hide-scrollbar ${
              isStuck
                ? "is-stuck backdrop-blur-xl backdrop-saturate-150"
                : "backdrop-blur-xl backdrop-saturate-150"
            }`}
          >
            <div className="flex min-w-max items-center gap-1 px-3 py-3 lg:justify-center">
              {eventFilters.map((filter, index) => (
                <div className="flex items-center gap-1" key={filter}>
                  {index === 3 ? (
                    <span
                      aria-hidden="true"
                      className="category-filter-divider mx-2 h-5 w-px"
                    />
                  ) : null}
                  <Button
                    className={`category-filter-button rounded-full ${
                      activeFilter === filter
                        ? "is-active text-white"
                        : "text-slate-600 hover:text-brand"
                    }`}
                    size="sm"
                    variant={activeFilter === filter ? "primary" : "ghost"}
                    onPress={() => setActiveFilter(filter)}
                  >
                    <Icon
                      className="category-filter-icon size-3.5 shrink-0"
                      name={filterIcons[filter] ?? "ticket"}
                    />
                    {filter}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
