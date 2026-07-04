import type { IconName } from "@/components/common/Icon";

export const bottomNavigation: {
  label: string;
  href: string;
  icon: IconName;
}[] = [
  { label: "Home", href: "#top", icon: "home" },
  { label: "Events", href: "#events", icon: "calendar" },
  { label: "Explore", href: "#directory", icon: "compass" },
  { label: "Deals", href: "#deals", icon: "ticket" },
  { label: "Profile", href: "#top", icon: "user" },
];
