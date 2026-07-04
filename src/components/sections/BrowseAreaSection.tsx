import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/common/SectionHeading";
import { areas } from "@/data/promotions";

export function BrowseAreaSection() {
  return (
    <section className="theme-surface section-spacing" id="areas">
      <div className="page-container">
        <SectionHeading
          linkHref="#areas"
          linkLabel="All Areas"
          title="Browse by Area"
        />
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {areas.map((area) => (
            <Link
              className="group text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              href="#events"
              key={area.id}
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                <Image
                  alt={area.name}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  src={area.image}
                />
              </div>
              <h3 className="mt-3 text-sm font-bold transition-colors group-hover:text-brand">
                {area.name}
              </h3>
              <p className="mt-0.5 text-[10px] uppercase tracking-wide text-copy">
                {area.tagline}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
