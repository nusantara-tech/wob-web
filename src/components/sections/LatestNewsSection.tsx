import { Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/common/SectionHeading";
import { latestNews } from "@/data/news";

const [featuredNews, ...secondaryNews] = latestNews;
const newsItems = [featuredNews, ...secondaryNews];

export function LatestNewsSection() {
  return (
    <section className="theme-surface pb-6 pt-2 sm:pb-8 sm:pt-3" id="news">
      <div className="page-container">
        <SectionHeading
          description="Fresh island updates, local guides, and curated travel notes."
          linkHref="#news"
          linkLabel="View All"
          title="Latest News"
        />

        <div className="grid gap-3 md:grid-cols-4">
          {newsItems.map((news) => (
            <Link
              className="interactive-card group grid grid-cols-[112px_1fr] overflow-hidden rounded-2xl border border-slate-200 bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:grid-cols-[148px_1fr]"
              href="#news"
              key={news.id}
            >
              <div className="relative min-h-32 overflow-hidden sm:min-h-36">
                <Image
                  priority={news.id === featuredNews.id}
                  alt={news.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  fill
                  sizes="(max-width: 640px) 112px, 148px"
                  src={news.image}
                />
                <div className="absolute left-2 top-2">
                  <Chip
                    className="bg-white/95 text-[10px] font-bold text-ink shadow-sm"
                    size="sm"
                    variant="primary"
                  >
                    {news.category}
                  </Chip>
                </div>
              </div>
              <div className="flex min-w-0 flex-col justify-center p-3 sm:p-4">
                <div className="flex items-center gap-2 text-[10px] font-semibold text-slate-400">
                  <span>{news.date}</span>
                  <span className="size-1 rounded-full bg-slate-300" />
                  <span>{news.readTime}</span>
                </div>
                <h3 className="mt-1.5 line-clamp-2 font-display text-sm font-bold leading-5 text-ink transition-colors group-hover:text-brand sm:text-base sm:leading-6">
                  {news.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs leading-5 text-copy sm:mt-1.5">
                  {news.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
