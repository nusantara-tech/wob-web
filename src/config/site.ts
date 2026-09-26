import type { IconName } from "@/components/common/Icon";

type NavigationItem = {
  key: keyof SiteTranslations;
  label: string;
  href: string;
  icon?: IconName;
  iconClassName?: string;
  labelClassName?: string;
  linkClassName?: string;
};

export type Language = "id" | "en";

export const languageConfig = {
  default: "id" as Language,
  options: ["id", "en"] as const,
  labels: { id: "ID", en: "EN" },
  translations: {
    id: {
      home: "Home",
      events: "Events",
      directory: "Directory",
      deals: "Hot Deals",
      all: "What's on Bali?",
      joinPartner: "Join Partner",
      login: "Login",
      menu: "Menu",
      switchLanguage: "Ganti bahasa",
    },
    en: {
      home: "Home",
      events: "Events",
      directory: "Directory",
      deals: "Hot Deals",
      all: "What's on Bali?",
      joinPartner: "Join Partner",
      login: "Login",
      menu: "Menu",
      switchLanguage: "Change language",
    },
  },
} as const;

export type SiteTranslations = (typeof languageConfig.translations)[Language];

export const siteConfig = {
  name: "What's On Bali",
  logo: {
    src: "/logo.png",
    src_light: "/logo-light.png",
    alt: "What's On Bali",
    width: 3543,
    height: 1747,
    invertedClassName: "h-10 w-auto brightness-100 md:h-11",
  },
  navigation: [
    { key: "home", label: "Home", href: "/", icon: "home" },
    { key: "events", label: "Events", href: "/events", icon: "calendar" },
    {
      key: "directory",
      label: "Directory",
      href: "/directory",
      icon: "compass",
    },
    { key: "deals", label: "Hot Deals", href: "/deals", icon: "ticket" },
    {
      key: "all",
      label: "What's on Bali?",
      href: "/all",
      icon: "sparkles",
      labelClassName:
        "bg-[length:200%_auto] bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-orange-400 to-amber-200 animate-gradient-x",
      iconClassName:
        "size-3 text-amber-400 animate-pulse transition-transform group-hover/wob:scale-125",
      linkClassName: "group/wob gap-1.5",
    },
  ] satisfies readonly NavigationItem[],
} as const;
