import { Card, Chip, Separator } from "@heroui/react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Icon } from "@/components/common/Icon";
import { AppHeader } from "@/components/layout/AppHeader";
import { events } from "@/data/events";
import { createEventSlug, getEventBySlug } from "@/lib/events";

interface EventDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return events.map((event) => ({
    slug: createEventSlug(event.title),
  }));
}

export async function generateMetadata({
  params,
}: EventDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    return {
      title: "Event Not Found",
    };
  }

  return {
    title: event.title,
    description: `${event.category} at ${event.venue}, ${event.area}. ${event.month} ${event.day} at ${event.time}.`,
  };
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) notFound();

  const eventDate = `${event.month} ${event.day}`;

  return (
    <>
      <AppHeader />
      <main className="theme-surface min-h-screen pb-24 pt-28">
        <div className="page-container">
          <Link
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-blue-700"
            href="/events"
          >
            <Icon className="size-4" name="arrowLeft" />
            Back to events
          </Link>

          <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
                <Image
                  alt={event.title}
                  className="object-cover"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  src={event.image}
                />
                <div className="absolute left-5 top-5 rounded-2xl bg-white/95 px-4 py-3 text-center shadow-md backdrop-blur">
                  <span className="block text-xs font-bold uppercase tracking-widest text-brand">
                    {event.month}
                  </span>
                  <span className="block text-3xl font-black leading-none dark:text-segment">
                    {event.day}
                  </span>
                </div>
                {event.status ? (
                  <Chip
                    className="absolute right-5 top-5"
                    color="danger"
                    size="sm"
                    variant="primary"
                  >
                    {event.status}
                  </Chip>
                ) : null}
              </div>

              <div className="mt-8">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
                  {event.category}
                </p>
                <h1 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
                  {event.title}
                </h1>
                <p className="mt-4 max-w-3xl text-base leading-7 text-copy">
                  Join a verified Bali event at {event.venue} in {event.area}.
                  Secure your spot for {eventDate} at {event.time}.
                </p>
              </div>

              <Card className="theme-card mt-8 rounded-3xl border border-slate-200 p-0">
                <Card.Content className="p-6">
                  <h2 className="font-display text-2xl font-bold text-ink">
                    Event details
                  </h2>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <DetailItem
                      icon="calendar"
                      label="Date"
                      value={eventDate}
                    />
                    <DetailItem icon="sun" label="Time" value={event.time} />
                    <DetailItem
                      icon="location"
                      label="Location"
                      value={`${event.area} • ${event.venue}`}
                    />
                    <DetailItem
                      icon="shield"
                      label="Organizer"
                      value="Verified Organizer"
                    />
                  </div>
                </Card.Content>
              </Card>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <Card className="theme-card rounded-3xl border border-slate-200 p-0 shadow-lg">
                <Card.Content className="p-6">
                  <p className="text-xs font-medium text-copy">Tickets from</p>
                  <p
                    className={`mt-1 text-3xl font-black ${
                      event.price === "Gratis"
                        ? "text-green-600"
                        : "text-brand"
                    }`}
                  >
                    {event.price}
                  </p>
                  <Separator className="my-5" variant="tertiary" />
                  <div className="space-y-3 text-sm text-copy">
                    <p className="flex items-center gap-2">
                      <Icon className="size-4 text-brand" name="ticket" />
                      {event.actionLabel}
                    </p>
                    <p className="flex items-center gap-2">
                      <Icon className="size-4 text-green-600" name="shield" />
                      Verified organizer
                    </p>
                  </div>
                  <Link
                    className="button button--primary mt-6 w-full rounded-xl"
                    href="#"
                  >
                    {event.actionLabel}
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

interface DetailItemProps {
  icon: "calendar" | "location" | "shield" | "sun";
  label: string;
  value: string;
}

function DetailItem({ icon, label, value }: DetailItemProps) {
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
