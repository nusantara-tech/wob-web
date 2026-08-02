import type {Metadata} from "next";

import {AppHeader} from "@/components/layout/AppHeader";
import {EventExplorer} from "@/components/sections/EventExplorer";
import {eventFilters, events} from "@/data/events";

export const metadata: Metadata = {
    title: "Events",
    description: "Browse all upcoming Bali events, workshops, wellness sessions, and dining experiences.",
};

export default function EventsPage() {
    return (
        <>
            <AppHeader/>
            <main className="theme-surface min-h-screen pb-24 pt-28">
                <div className="page-container">
                    <section className="mb-0 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
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
                    </section>

                    <EventExplorer events={events} filters={eventFilters}/>
                </div>
            </main>
        </>
    );
}
