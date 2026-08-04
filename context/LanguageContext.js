import { createContext, useContext, useEffect, useMemo, useState } from "react";
import translations from "@/lib/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem("abc-care-lang") : null;
    if (saved === "en" || saved === "es") {
      setLang(saved);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem("abc-care-lang", lang);
    document.documentElement.lang = lang;
  }, [lang, hydrated]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: translations[lang]
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
