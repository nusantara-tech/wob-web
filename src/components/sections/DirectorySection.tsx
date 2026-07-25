import { DirectoryCard } from "@/components/common/DirectoryCard";
import { SectionHeading } from "@/components/common/SectionHeading";
import { directories } from "@/data/directories";

export function DirectorySection() {
  return (
    <section
      className="section-spacing theme-surface"
      id="directory"
    >
      <div className="page-container">
        <SectionHeading
          description="Discover the best places to eat, stay, and play with our curated list of businesses across the island."
          linkHref="#directory"
          linkLabel="View All"
          title="Directory in Bali"
        />
        <div className="grid gap-5 md:grid-cols-4">
          {directories.map((item) => (
            <DirectoryCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
