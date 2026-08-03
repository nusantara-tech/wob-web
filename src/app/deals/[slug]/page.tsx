import { Card, Chip, Separator } from "@heroui/react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Icon } from "@/components/common/Icon";
import { AppHeader } from "@/components/layout/AppHeader";
import { deals } from "@/data/promotions";
import { createDealSlug, getDealBySlug } from "@/lib/deals";

interface DealDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return deals.map((deal) => ({
    slug: createDealSlug(deal.title),
  }));
}

export async function generateMetadata({
  params,
}: DealDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const deal = getDealBySlug(slug);

  if (!deal) {
    return {
      title: "Deal Not Found",
    };
  }

  return {
    title: deal.title,
    description: `${deal.discount}: ${deal.description}`,
  };
}

export default async function DealDetailPage({ params }: DealDetailPageProps) {
  const { slug } = await params;
  const deal = getDealBySlug(slug);

  if (!deal) notFound();

  return (
    <>
      <AppHeader />
      <main className="theme-surface min-h-screen pb-24 pt-28">
        <div className="page-container">
          <Link
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-blue-700"
            href="/deals"
          >
            <Icon className="size-4" name="arrowLeft" />
            Back to deals
          </Link>

          <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
                <Image
                  alt={deal.title}
                  className="object-cover"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  src={deal.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <Chip
                  className="absolute left-5 top-5 bg-gold px-3 font-bold uppercase tracking-wide text-ink"
                  size="sm"
                  variant="primary"
                >
                  {deal.discount}
                </Chip>
              </div>

              <div className="mt-8">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
                  Hot Deal
                </p>
                <h1 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
                  {deal.title}
                </h1>
                <p className="mt-4 max-w-3xl text-base leading-7 text-copy">
                  {deal.description}
                </p>
              </div>

              <Card className="theme-card mt-8 rounded-3xl border border-slate-200 p-0">
                <Card.Content className="p-6">
                  <h2 className="font-display text-2xl font-bold text-ink">
                    Deal details
                  </h2>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <DealInfo label="Discount" value={deal.discount} />
                    <DealInfo label="Current price" value={deal.price} />
                    <DealInfo label="Original price" value={deal.originalPrice} />
                    <DealInfo label="Action" value={deal.actionLabel} />
                  </div>
                </Card.Content>
              </Card>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <Card className="theme-card rounded-3xl border border-slate-200 p-0 shadow-lg">
                <Card.Content className="p-6">
                  <p className="text-xs font-medium text-copy">Deal price</p>
                  <p className="mt-1 text-3xl font-black text-brand">
                    {deal.price}
                  </p>
                  <p className="mt-1 text-sm text-copy line-through">
                    {deal.originalPrice}
                  </p>
                  <Separator className="my-5" variant="tertiary" />
                  <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                    <Icon className="size-4 text-brand" name="ticket" />
                    {deal.discount}
                  </p>
                  <Link
                    className="button button--primary mt-6 w-full rounded-xl"
                    href="#"
                  >
                    {deal.actionLabel}
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

interface DealInfoProps {
  label: string;
  value: string;
}

function DealInfo({ label, value }: DealInfoProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-border dark:bg-surface-secondary">
      <p className="text-xs font-bold uppercase tracking-widest text-copy">
        {label}
      </p>
      <p className="mt-1 font-semibold text-ink">{value}</p>
    </div>
  );
}
