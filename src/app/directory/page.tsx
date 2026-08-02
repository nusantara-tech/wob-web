import type { Metadata } from "next";

import { DirectoryBrowser } from "@/components/sections/DirectoryBrowser";
import { AppHeader } from "@/components/layout/AppHeader";
import { directories } from "@/data/directories";

export const metadata: Metadata = {
  title: "Directory",
  description:
    "Browse Bali restaurants, beach clubs, hotels, wellness venues, attractions, and local businesses.",
};

const directoryCategories = [
  "All",
  ...Array.from(new Set(directories.map((item) => item.category))),
];

export default async function DirectoryPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const activeCategory = params?.category ?? "All";

  return (
    <>
      <AppHeader />
      <main className="theme-surface min-h-screen pb-24 pt-28">
        <div className="page-container">
          <section className="mb-0 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
                Directory
              </p>
              <h1 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                Directory in Bali
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-copy">
                Discover curated places to eat, stay, relax, explore, and plan
                your island experience.
              </p>
            </div>
          </section>

          <DirectoryBrowser
            categories={directoryCategories}
            initialCategory={activeCategory}
            items={directories}
          />
        </div>
      </main>
    </>
  );
}
