import { events } from "@/data/events";
import { createSlug } from "@/lib/slugs";
import type { EventItem } from "@/types/homepage";

export function createEventSlug(title: string) {
  return createSlug(title);
}

export function getEventHref(event: EventItem) {
  return `/events/${createEventSlug(event.title)}`;
}

export function getEventBySlug(slug: string) {
  return events.find((event) => createEventSlug(event.title) === slug);
}
