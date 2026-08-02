export type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
};

export const latestNews: NewsItem[] = [
  {
    id: "bali-weekend-guide",
    title: "Bali Weekend Guide: Sunset Spots, Dining, and Late Night Events",
    excerpt:
      "A curated roundup of what to book, where to go, and what to avoid missing across the island this weekend.",
    category: "Guide",
    date: "Dec 05",
    readTime: "4 min read",
    image: "/images/area-uluwatu.jpg",
  },
  {
    id: "ubud-wellness-rising",
    title: "Why Ubud Wellness Retreats Are Getting Fully Booked Faster",
    excerpt:
      "Travelers are planning deeper wellness experiences, from sound healing to jungle spa escapes.",
    category: "Wellness",
    date: "Dec 03",
    readTime: "3 min read",
    image: "/images/jungle-spa.jpg",
  },
  {
    id: "canggu-dining-openings",
    title: "New Canggu Dining Openings Worth Saving This Month",
    excerpt:
      "From Mediterranean grills to brunch rooms, these venues are drawing steady local buzz.",
    category: "Dining",
    date: "Dec 01",
    readTime: "5 min read",
    image: "/images/mason-canggu.jpg",
  },
  {
    id: "beach-club-booking-tips",
    title: "Beach Club Booking Tips Before Peak Season Arrives",
    excerpt:
      "Simple timing and seating tips to help travelers get better value from premium day passes.",
    category: "Tips",
    date: "Nov 29",
    readTime: "2 min read",
    image: "/images/savaya.jpg",
  },
];
