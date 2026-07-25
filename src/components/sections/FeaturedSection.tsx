import {EventCard} from "@/components/common/EventCard";
import {SectionHeading} from "@/components/common/SectionHeading";
import {events} from "@/data/events";

export function FeaturedSection() {
    return (
        <section className="theme-surface pt-4" id="events">
            <div className="page-container">
                <SectionHeading
                    description="100+ verified organizers and secure checkout"
                    title="Upcoming Events in Bali"
                    linkLabel="View All"
                    linkHref="/events"
                />
                <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-6">
                    {events.map((event) => (
                        <EventCard event={event} key={event.id}/>
                    ))}
                </div>
            </div>
        </section>
    );
}
