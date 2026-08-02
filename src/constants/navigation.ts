import type { IconName } from "@/components/common/Icon";

export const bottomNavigation: {
  label: string;
  href: string;
  icon: IconName;
  activePath?: string;
}[] = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Events", href: "/events", icon: "calendar", activePath: "/events" },
  { label: "Explore", href: "/all", icon: "compass", activePath: "/all" },
  { label: "Deals", href: "/deals", icon: "ticket", activePath: "/deals" },
  { label: "Profile", href: "#top", icon: "user" },
];
