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
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          alt={item.name}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 17vw"
          loading="eager"
          src={item.image}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/65 to-transparent" />
        <Chip
          className="absolute left-2 top-2 max-w-[calc(100%-1rem)] bg-white/95 px-2 text-[9px] uppercase tracking-wider text-ink sm:left-3 sm:top-3"
          size="sm"
          variant="primary"
        >
          {item.category}
        </Chip>
        <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-white/95 px-2 py-1 text-[10px] font-bold text-ink shadow-sm backdrop-blur sm:bottom-3 sm:left-3">
          <Icon className="size-3 fill-gold text-gold" name="star" />
          {item.rating}
          <span className="text-slate-400">({item.reviewCount})</span>
        </div>
      </div>
      <Card.Content className="flex flex-1 flex-col p-3 sm:p-4">
        <div className="min-w-0">
          <h3 className="line-clamp-1 font-display text-sm font-bold leading-5 text-ink transition-colors group-hover:text-brand sm:text-base">
            {item.name}
          </h3>
        </div>
        <p className="mt-1.5 flex items-center gap-1 text-[11px] font-medium text-copy sm:text-xs">
          <Icon className="size-3.5 shrink-0" name="location" />
          <span className="line-clamp-1">{item.area}</span>
        </p>
        <p className="mt-2 line-clamp-2 min-h-9 text-xs leading-4 text-copy sm:mt-2.5">
          {item.description}
        </p>
        <Button
          fullWidth
          className="mt-3 h-8 rounded-xl text-xs sm:mt-4"
          size="sm"
          variant="outline"
        >
          Explore
          <Icon className="size-3.5" name="arrowRight" />
        </Button>
      </Card.Content>
    </Card>
  );
}
