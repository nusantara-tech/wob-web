import type {Metadata} from "next";

import {AppHeader} from "@/components/layout/AppHeader";
import {AllResultsExplorer} from "@/components/sections/AllResultsExplorer";
import {directories} from "@/data/directories";
import {events} from "@/data/events";
import {deals} from "@/data/promotions";

export const metadata: Metadata = {
    title: "All Results",
    description: "Search all events, venues, experiences, and Bali deals.",
};

const directoryResults = directories.map((data) => ({
    type: "directory" as const,
    data,
}));

const eventResults = events.map((data) => ({
    type: "event" as const,
    data,
}));

const dealResults = deals.map((data) => ({
    type: "deal" as const,
    data,
}));

const results = [
    ...directoryResults,
    ...eventResults,
    ...dealResults,
];

const resultTabs = [
    {id: "all", label: "All", href: "/all", results},
    {
        id: "directory",
        label: "Directory",
        href: "/all?tab=directory",
        results: directoryResults,
    },
    {
        id: "events",
        label: "Events",
        href: "/all?tab=events",
        results: eventResults,
    },
    {
        id: "hot-deals",
        label: "Hot Deals",
        href: "/all?tab=hot-deals",
        results: dealResults,
    },
];

type ResultTab = (typeof resultTabs)[number];

function getActiveTab(tab?: string): ResultTab {
    return resultTabs.find((item) => item.id === tab) ?? resultTabs[0];
}

export default async function AllResultsPage({
                                                 searchParams,
                                             }: {
    searchParams?: Promise<{ tab?: string }>;
}) {
    const params = await searchParams;
    const activeTab = getActiveTab(params?.tab);

    return (
        <>
            <AppHeader/>
            <main className="theme-surface min-h-screen gap-4 pb-24 pt-28">
                <AllResultsExplorer
                    initialTabId={activeTab.id}
                    resultTabs={resultTabs}
                />
            </main>
        </>
    );
}
