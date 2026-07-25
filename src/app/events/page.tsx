import { Button, Chip } from "@heroui/react";
import type { Metadata } from "next";

import { EventCard } from "@/components/common/EventCard";
import { Icon } from "@/components/common/Icon";
import { AppHeader } from "@/components/layout/AppHeader";
import { eventFilters, events } from "@/data/events";

export const metadata: Metadata = {
  title: "Events",
  description: "Browse all upcoming Bali events, workshops, wellness sessions, and dining experiences.",
};

export default function EventsPage() {
  return (
    <>
      <AppHeader />
      <main className="page-container min-h-screen pb-24 pt-28">
        <section className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
              Events
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Upcoming Events in Bali
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-copy">
              Discover verified concerts, workshops, wellness sessions, dining
              events, and island experiences.
            </p>
          </div>
          <Button className="w-fit rounded-xl" variant="outline">
            This Weekend
            <Icon className="size-4" name="calendar" />
          </Button>
        </section>

        <div className="hide-scrollbar mb-8 overflow-x-auto">
          <div className="flex w-max gap-2">
            {eventFilters.map((filter, index) => (
              <Chip
                className={
                  index === 0
                    ? "bg-brand text-white"
                    : "bg-white text-copy dark:bg-surface-secondary dark:text-slate-300"
                }
                key={filter}
                variant="primary"
              >
                {filter}
              </Chip>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3">
          <Button className="rounded-xl px-6" size="md" variant="outline">
            Muat Lebih Banyak
            <Icon className="size-4" name="arrowDown" />
          </Button>
          <p className="text-xs font-medium text-slate-400">
            Menampilkan {events.length} events
          </p>
        </div>
      </main>
    </>
  );
}
