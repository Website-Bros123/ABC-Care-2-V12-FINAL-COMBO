"use client";

import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import FAQItem from "@/components/FAQItem";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();
  const faq = t.faq;

  return (
    <Layout title={t.nav.faq} description={faq.heroSubtitle}>
      <PageHero eyebrow={faq.heroEyebrow} title={faq.heroTitle} subtitle={faq.heroSubtitle} />

      <section className="section bg-peach">
        <div className="container">
          <div className="faq-list">
            {faq.items.map((item, i) => (
              <FAQItem key={item.q} q={item.q} a={item.a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
