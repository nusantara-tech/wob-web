import { Button, Chip } from "@heroui/react";
import Image from "next/image";

import type { DealItem } from "@/types/homepage";

interface DealCardProps {
  deal: DealItem;
}

export function DealCard({ deal }: DealCardProps) {
  return (
    <article className="interactive-card group relative min-h-80 overflow-hidden rounded-2xl sm:aspect-video sm:min-h-0">
      <Image
        alt={deal.title}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        src={deal.image}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent" />
      <Chip
        className="absolute left-4 top-4 bg-gold font-bold text-ink uppercase"
        variant="primary"
      >
        {deal.discount}
      </Chip>
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <h3 className="font-display text-xl font-bold text-white">
          {deal.title}
        </h3>
        <p className="mt-1 line-clamp-1 text-sm text-white/75">
          {deal.description}
        </p>
        <div className="mt-4 flex items-end justify-between gap-4">
          <div>
            <span className="text-2xl font-black text-white">{deal.price}</span>
            <span className="ml-2 text-sm text-white/50 line-through">
              {deal.originalPrice}
            </span>
          </div>
          <Button className="rounded-xl">{deal.actionLabel}</Button>
        </div>
      </div>
    </article>
  );
}
