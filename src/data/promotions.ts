import type { AreaItem, DealItem, HeroPromotion } from "@/types/homepage";

export const heroPromotions: HeroPromotion[] = [
  {
    id: "savaya-sunset",
    title: "Savaya Sunset",
    description:
      "Experience Uluwatu's breathtaking cliffside beats with priority entry.",
    price: "Rp448.000",
    originalPrice: "Rp720.000",
    actionLabel: "Claim",
    image: "/images/savaya.jpg",
    imageAlt: "Savaya sunset promotion",
  },
  {
    id: "finns-day-pass",
    title: "Finns Day Pass",
    description:
      "Iconic beach club access with premium seating and food credit included.",
    price: "Rp560.000",
    originalPrice: "Rp800.000",
    actionLabel: "Claim",
    image: "/images/area-canggu.jpg",
    imageAlt: "Finns beach club day pass promotion",
  },
  {
    id: "ubud-jungle-spa",
    title: "Ubud Jungle Spa",
    description:
      "Rejuvenate with a signature massage overlooking Ubud's rice fields.",
    price: "Rp672.000",
    originalPrice: "Rp960.000",
    actionLabel: "Book",
    image: "/images/jungle-spa.jpg",
    imageAlt: "Ubud jungle spa promotion",
  },
];

export const deals: DealItem[] = [
  {
    id: "mason-feast",
    title: "Mason Canggu • Mediterranean Feast",
    description:
      "The ultimate Mediterranean feast for two at Bali's most social hotspot.",
    discount: "Save 25%",
    price: "Rp1.440.000",
    originalPrice: "Rp1.920.000",
    actionLabel: "Claim Deal",
    image: "/images/savaya.jpg",
  },
  {
    id: "ubud-escape",
    title: "Royal Kamuela Ubud • Luxury Escape",
    description:
      "Two-night luxury escape with gourmet breakfast and signature spa treatments.",
    discount: "Save 40%",
    price: "Rp3.360.000",
    originalPrice: "Rp5.600.000",
    actionLabel: "Get Voucher",
    image: "/images/hero-ubud.jpg",
  },
];

export const areas: AreaItem[] = [
  {
    id: "uluwatu",
    name: "Uluwatu",
    tagline: "Cliffs & Surf",
    image: "/images/area-uluwatu.jpg",
  },
  {
    id: "canggu",
    name: "Canggu",
    tagline: "Vibrant & Social",
    image: "/images/area-canggu.jpg",
  },
  {
    id: "seminyak",
    name: "Seminyak",
    tagline: "Luxury & Style",
    image: "/images/area-seminyak.jpg",
  },
  {
    id: "ubud",
    name: "Ubud",
    tagline: "Jungle & Spirit",
    image: "/images/area-ubud.jpg",
  },
  {
    id: "kuta",
    name: "Kuta",
    tagline: "Sun & Fun",
    image: "/images/area-kuta.jpg",
  },
  {
    id: "sanur",
    name: "Sanur",
    tagline: "Peaceful Shore",
    image: "/images/area-sanur.jpg",
  },
];
