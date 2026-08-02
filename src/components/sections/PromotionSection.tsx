import { DealCard } from "@/components/common/DealCard";
import { SectionHeading } from "@/components/common/SectionHeading";
import { deals } from "@/data/promotions";

const featuredDeals = deals.slice(0, 4);

export function PromotionSection() {
  return (
    <section className="section-spacing theme-surface" id="deals">
      <div className="page-container">
        <SectionHeading
          description="Limited-time offers for the biggest Bali fans."
          title="Hot Deals"
          linkLabel="View All"
          linkHref="/deals"
        />
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {featuredDeals.map((deal) => (
            <DealCard deal={deal} key={deal.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
