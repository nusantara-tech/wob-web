import { deals } from "@/data/promotions";
import { createSlug } from "@/lib/slugs";
import type { DealItem } from "@/types/homepage";

export function createDealSlug(title: string) {
  return createSlug(title);
}

export function getDealHref(deal: DealItem) {
  return `/deals/${createDealSlug(deal.title)}`;
}

export function getDealBySlug(slug: string) {
  return deals.find((deal) => createDealSlug(deal.title) === slug);
}
