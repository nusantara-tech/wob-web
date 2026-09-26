"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import {
  languageConfig,
  type Language,
  type SiteTranslations,
} from "@/config/site";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: SiteTranslations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside Providers");
  return context;
}

interface ProvidersProps {
  children: ReactNode;
}

/**
 * HeroUI v3 uses CSS-based configuration and does not require HeroUIProvider.
 * This boundary remains available for future client-side providers.
 */
export function Providers({ children }: ProvidersProps) {
  const [language, setLanguage] = useState<Language>(languageConfig.default);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(
      "wob-language",
    ) as Language | null;
    if (savedLanguage && languageConfig.options.includes(savedLanguage))
      setLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("wob-language", language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: languageConfig.translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
