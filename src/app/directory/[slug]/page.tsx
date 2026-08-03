import { Card, Chip, Separator } from "@heroui/react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Icon } from "@/components/common/Icon";
import { AppHeader } from "@/components/layout/AppHeader";
import { directories } from "@/data/directories";
import {
  createDirectorySlug,
  getDirectoryBySlug,
} from "@/lib/directories";

interface DirectoryDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return directories.map((item) => ({
    slug: createDirectorySlug(item.name),
  }));
}

export async function generateMetadata({
  params,
}: DirectoryDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getDirectoryBySlug(slug);

  if (!item) {
    return {
      title: "Directory Item Not Found",
    };
  }

  return {
    title: item.name,
    description: `${item.category} in ${item.area}. ${item.description}`,
  };
}

export default async function DirectoryDetailPage({
  params,
}: DirectoryDetailPageProps) {
  const { slug } = await params;
  const item = getDirectoryBySlug(slug);

  if (!item) notFound();

  return (
    <>
      <AppHeader />
      <main className="theme-surface min-h-screen pb-24 pt-28">
        <div className="page-container">
          <Link
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-blue-700"
            href="/directory"
          >
            <Icon className="size-4" name="arrowLeft" />
            Back to directory
          </Link>

          <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
                <Image
                  alt={item.name}
                  className="object-cover"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  src={item.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <Chip
                  className="absolute left-5 top-5 bg-white/95 px-3 uppercase tracking-wide text-ink"
                  size="sm"
                  variant="primary"
                >
                  {item.category}
                </Chip>
              </div>

              <div className="mt-8">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
                  {item.category}
                </p>
                <h1 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
                  {item.name}
                </h1>
                <p className="mt-4 max-w-3xl text-base leading-7 text-copy">
                  {item.description}
                </p>
              </div>

              <Card className="theme-card mt-8 rounded-3xl border border-slate-200 p-0">
                <Card.Content className="p-6">
                  <h2 className="font-display text-2xl font-bold text-ink">
                    Place details
                  </h2>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <DirectoryInfo
                      icon="location"
                      label="Area"
                      value={item.area}
                    />
                    <DirectoryInfo
                      icon="star"
                      label="Rating"
                      value={`${item.rating} (${item.reviewCount} reviews)`}
                    />
                    <DirectoryInfo
                      icon="compass"
                      label="Category"
                      value={item.category}
                    />
                    <DirectoryInfo
                      icon="shield"
                      label="Status"
                      value="Verified Listing"
                    />
                  </div>
                </Card.Content>
              </Card>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <Card className="theme-card rounded-3xl border border-slate-200 p-0 shadow-lg">
                <Card.Content className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium text-copy">Rating</p>
                      <p className="mt-1 flex items-center gap-2 text-3xl font-black text-ink">
                        <Icon className="size-6 fill-gold text-gold" name="star" />
                        {item.rating}
                      </p>
                    </div>
                    <Chip size="sm" variant="primary">
                      {item.reviewCount} reviews
                    </Chip>
                  </div>
                  <Separator className="my-5" variant="tertiary" />
                  <div className="space-y-3 text-sm text-copy">
                    <p className="flex items-center gap-2">
                      <Icon className="size-4 text-brand" name="location" />
                      {item.area}
                    </p>
                    <p className="flex items-center gap-2">
                      <Icon className="size-4 text-green-600" name="shield" />
                      Verified listing
                    </p>
                  </div>
                  <Link
                    className="button button--primary mt-6 w-full rounded-xl"
                    href="#"
                  >
                    Explore
                  </Link>
                </Card.Content>
              </Card>
            </aside>
          </section>
        </div>
      </main>
    </>
  );
}

interface DirectoryInfoProps {
  icon: "compass" | "location" | "shield" | "star";
  label: string;
  value: string;
}

function DirectoryInfo({ icon, label, value }: DirectoryInfoProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-border dark:bg-surface-secondary">
      <div className="mb-3 grid size-10 place-items-center rounded-full bg-blue-50 text-brand">
        <Icon className="size-5" name={icon} />
      </div>
      <p className="text-xs font-bold uppercase tracking-widest text-copy">
        {label}
      </p>
      <p className="mt-1 font-semibold text-ink">{value}</p>
    </div>
  );
}
