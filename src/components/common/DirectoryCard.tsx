import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";

import { Icon } from "@/components/common/Icon";
import type { DirectoryItem } from "@/types/homepage";

interface DirectoryCardProps {
  item: DirectoryItem;
}

export function DirectoryCard({ item }: DirectoryCardProps) {
  return (
    <Card className="theme-card interactive-card group overflow-hidden rounded-2xl border border-slate-200 p-0">
      <div className="relative aspect-video overflow-hidden">
        <Image
          alt={item.name}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          src={item.image}
        />
        <Chip
          className="absolute left-3 top-3 bg-white/95 uppercase tracking-widest dark:text-segment"
          size="sm"
          variant="primary"
        >
          {item.category}
        </Chip>
      </div>
      <Card.Content className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-bold transition-colors group-hover:text-brand">
            {item.name}
          </h3>
          <div className="flex shrink-0 items-center gap-1 text-xs">
            <Icon className="size-4 fill-gold text-gold" name="star" />
            <strong>{item.rating}</strong>
            <span className="hidden text-copy xl:inline">
              ({item.reviewCount})
            </span>
          </div>
        </div>
        <p className="mt-2 flex items-center gap-1 text-xs text-copy">
          <Icon className="size-4" name="location" />
          {item.area}
        </p>
        <p className="mt-3 line-clamp-2 min-h-11 text-sm leading-6 text-copy">
          {item.description}
        </p>
        <Button fullWidth className="mt-5 rounded-xl" variant="outline">
          Explore Venue
        </Button>
      </Card.Content>
    </Card>
  );
}
