export interface EventItem {
  id: string;
  title: string;
  category: string;
  month: string;
  day: string;
  time: string;
  area: string;
  venue: string;
  price: string;
  image: string;
  actionLabel: string;
  status?: string;
}

export interface DirectoryItem {
  id: string;
  name: string;
  category: string;
  area: string;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
}

export interface DealItem {
  id: string;
  title: string;
  description: string;
  discount: string;
  price: string;
  originalPrice: string;
  actionLabel: string;
  image: string;
}

export interface HeroPromotion {
  id: string;
  title: string;
  description: string;
  price: string;
  originalPrice: string;
  actionLabel: string;
  image: string;
  imageAlt: string;
}

export interface AreaItem {
  id: string;
  name: string;
  tagline: string;
  image: string;
}
