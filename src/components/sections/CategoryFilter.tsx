"use client";

import { Button } from "@heroui/react";
import { useEffect, useRef, useState } from "react";

import { eventFilters } from "@/data/events";

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
      {/*<div aria-hidden="true" className="h-px" ref={sentinelRef} />*/}
      <div
        className={`category-filter sticky top-16 z-40 overflow-x-auto border-b hide-scrollbar ${
          isStuck
            ? "is-stuck backdrop-blur-xl backdrop-saturate-150"
            : "backdrop-blur-xl backdrop-saturate-150"
        }`}
      >
        <div className="page-container flex min-w-max items-center gap-1 py-3 lg:justify-center">
          {eventFilters.map((filter, index) => (
            <div className="flex items-center gap-1" key={filter}>
              {index === 3 ? (
                <span
                  aria-hidden="true"
                  className="mx-2 h-5 w-px bg-white/15"
                />
              ) : null}
              <Button
                className={`rounded-full ${
                  activeFilter === filter
                    ? "text-white"
                    : "text-white/78 hover:text-muted"
                }`}
                size="sm"
                variant={activeFilter === filter ? "primary" : "ghost"}
                onPress={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
