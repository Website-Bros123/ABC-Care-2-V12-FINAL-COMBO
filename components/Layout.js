"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function Layout({ children, title, description }) {
  const { t } = useLanguage();
  const fullTitle = title ? `${title} | ${t.meta.titleSuffix}` : t.meta.titleSuffix;

  useEffect(() => {
    document.title = fullTitle;
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = description;
    }
  }, [fullTitle, description]);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
