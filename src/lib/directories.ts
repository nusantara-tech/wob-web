import { directories } from "@/data/directories";
import { createSlug } from "@/lib/slugs";
import type { DirectoryItem } from "@/types/homepage";

export function createDirectorySlug(name: string) {
  return createSlug(name);
}

export function getDirectoryHref(item: DirectoryItem) {
  return `/directory/${createDirectorySlug(item.name)}`;
}

export function getDirectoryBySlug(slug: string) {
  return directories.find((item) => createDirectorySlug(item.name) === slug);
}
