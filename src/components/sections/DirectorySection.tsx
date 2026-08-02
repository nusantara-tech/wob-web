import { DirectoryCard } from "@/components/common/DirectoryCard";
import { SectionHeading } from "@/components/common/SectionHeading";
import { directories } from "@/data/directories";

const featuredDirectories = directories.slice(0, 12);

export function DirectorySection() {
  return (
    <section
      className="section-spacing theme-surface"
      id="directory"
    >
      <div className="page-container">
        <SectionHeading
          description="Discover the best places to eat, stay, and play with our curated list of businesses across the island."
          linkHref="/directory"
          linkLabel="View All"
          title="Directory in Bali"
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
          {featuredDirectories.map((item) => (
            <DirectoryCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
