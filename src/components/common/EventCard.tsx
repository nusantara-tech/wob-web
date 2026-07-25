import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";

import { Icon } from "@/components/common/Icon";
import type { EventItem } from "@/types/homepage";

interface EventCardProps {
  event: EventItem;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Card className="theme-card interactive-card group overflow-hidden rounded-2xl border border-slate-200 p-0">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          alt={event.title}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          src={event.image}
        />
        <div className="absolute left-3 top-3 rounded-lg bg-white/95 px-2.5 py-1 text-center shadow-md backdrop-blur">
          <span className="block text-[10px] font-bold uppercase text-brand">
            {event.month}
          </span>
          <span className="block text-xl font-black leading-none dark:text-segment">
            {event.day}
          </span>
        </div>
        {event.status ? (
          <Chip
            className="absolute right-3 top-3"
            color="danger"
            size="sm"
            variant="primary"
          >
            {event.status}
          </Chip>
        ) : null}
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-12 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Button fullWidth className="rounded-xl" size="sm">
            {event.actionLabel}
          </Button>
        </div>
      </div>
      <Card.Content className="p-4">
        <div className="mb-2 flex items-center gap-2 text-[10px] uppercase">
          <span className="font-bold tracking-widest text-brand">
            {event.category}
          </span>
          <span className="text-slate-300">•</span>
          <span className="font-medium text-copy">{event.time}</span>
        </div>
        <h3 className="line-clamp-1 font-semibold text-ink transition-colors group-hover:text-brand">
          {event.title}
        </h3>
        <div className="mt-3 space-y-2 text-xs text-copy">
          <p className="flex items-center gap-1.5">
            <Icon className="size-4" name="location" />
            {event.area} • {event.venue}
          </p>
          <p className="flex items-center gap-1.5 font-medium text-green-600">
            <Icon className="size-4" name="shield" />
            Verified Organizer
          </p>
        </div>
        <Separator className="my-4" variant="tertiary" />
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-copy">Tickets from</span>
          <span
            className={`text-lg font-black ${
              event.price === "Gratis" ? "text-green-600" : "text-brand"
            }`}
          >
            {event.price}
          </span>
        </div>
      </Card.Content>
    </Card>
  );
}
