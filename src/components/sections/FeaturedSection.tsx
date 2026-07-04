import { Button } from "@heroui/react";

import { EventCard } from "@/components/common/EventCard";
import { Icon } from "@/components/common/Icon";
import { SectionHeading } from "@/components/common/SectionHeading";
import { events } from "@/data/events";

export function FeaturedSection() {
  return (
    <section className="section-spacing page-container" id="events">
      <SectionHeading
        description="100+ verified organizers and secure checkout"
        title="Upcoming Events in Bali"
        linkLabel="View All"
      />
      <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {events.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button className="rounded-xl" size="lg" variant="outline">
          Load More Events
          <Icon className="size-5" name="arrowDown" />
        </Button>
      </div>
    </section>
  );
}
