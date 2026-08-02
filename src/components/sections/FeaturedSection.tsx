import {EventCard} from "@/components/common/EventCard";
import {SectionHeading} from "@/components/common/SectionHeading";
import {events} from "@/data/events";

const featuredEvents = events.slice(0, 12);

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
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
                    {featuredEvents.map((event) => (
                        <EventCard event={event} key={event.id}/>
                    ))}
                </div>
            </div>
        </section>
    );
}
