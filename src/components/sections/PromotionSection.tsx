import { DealCard } from "@/components/common/DealCard";
import { SectionHeading } from "@/components/common/SectionHeading";
import { deals } from "@/data/promotions";

export function PromotionSection() {
  return (
    <section className="section-spacing bg-soft" id="deals">
      <div className="page-container">
        <SectionHeading
          description="Limited-time offers for the biggest Bali fans."
          title="Hot Deals"
          linkLabel="View All"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {deals.map((deal) => (
            <DealCard deal={deal} key={deal.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
