import { Button, Chip } from "@heroui/react";
import Image from "next/image";

import type { DealItem } from "@/types/homepage";

interface DealCardProps {
  deal: DealItem;
}

export function DealCard({ deal }: DealCardProps) {
  return (
    <article className="interactive-card group relative aspect-[4/5] min-h-[200px] overflow-hidden rounded-2xl sm:min-h-[220px] md:aspect-[4/3] md:min-h-[230px]">
      <Image
        alt={deal.title}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        loading="eager"
        src={deal.image}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/5" />
      <Chip
        className="absolute left-2 top-2 bg-gold px-2 text-[9px] font-bold text-ink uppercase tracking-wide sm:left-3 sm:top-3 sm:text-[10px]"
        size="sm"
        variant="primary"
      >
        {deal.discount}
      </Chip>
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
        <h3 className="line-clamp-2 font-display text-xs font-bold leading-4 text-white sm:text-base sm:leading-5">
          {deal.title}
        </h3>
        <p className="mt-1 hidden text-xs leading-4 text-white/72 sm:line-clamp-1">
          {deal.description}
        </p>
        <div className="mt-2 space-y-1.5 sm:mt-3 sm:space-y-2">
          <div className="min-w-0">
            <span className="block truncate text-sm font-black leading-none text-white sm:text-lg">
              {deal.price}
            </span>
            <span className="mt-0.5 block truncate text-[10px] text-white/50 line-through sm:mt-1 sm:text-xs">
              {deal.originalPrice}
            </span>
          </div>
          <Button
            fullWidth
            className="h-7 rounded-lg text-[10px] sm:h-8 sm:rounded-xl sm:text-xs"
            size="sm"
          >
            {deal.actionLabel}
          </Button>
        </div>
      </div>
    </article>
  );
}
