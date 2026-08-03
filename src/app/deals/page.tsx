import type {Metadata} from "next";

import {Icon} from "@/components/common/Icon";
import {AppHeader} from "@/components/layout/AppHeader";
import {DealsExplorer} from "@/components/sections/DealsExplorer";
import {deals} from "@/data/promotions";

export const metadata: Metadata = {
    title: "Hot Deals",
    description:
        "Browse Bali hot deals, limited-time offers, vouchers, packages, and exclusive island experiences.",
};

const dealFilters = [
    "All Deals",
    "Dining",
    "Beach Club",
    "Wellness",
    "Family",
    "Experience",
];

export default function DealsPage() {
    return (
        <>
            <AppHeader/>
            <main className="theme-surface min-h-screen pb-24 pt-28">
                <div className="page-container">
                    <section
                        className="mb-0 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-orange-700 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-white">
                                <Icon className="size-3.5" name="ticket"/>
                                Hot Deals
                            </p>
                            <h1 className="font-display text-3xl font-blod tracking-tight text-ink md:text-4xl">
                                Limited Bali offers, updated daily
                            </h1>
                            <p className="mt-2 max-w-2xl text-sm leading-6 text-copy">
                                Find flash vouchers for dining, beach clubs, wellness, family
                                trips, and island experiences.
                            </p>

                        </div>
                    </section>

                    <DealsExplorer deals={deals} filters={dealFilters}/>
                </div>
            </main>
        </>
    );
}
