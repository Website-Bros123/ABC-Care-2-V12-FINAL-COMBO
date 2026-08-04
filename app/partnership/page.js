"use client";

import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { PhoneIcon, BadgeCheckIcon } from "@/components/Icons";
import { useLanguage } from "@/context/LanguageContext";
import { partner } from "@/lib/siteData";

export default function Partnership() {
  const { t } = useLanguage();
  const p = t.partnership;

  return (
    <Layout title={t.nav.partnership} description={p.paragraph}>
      <PageHero eyebrow={p.heroEyebrow} title={p.heroTitle} subtitle={p.heroSubtitle} />

      <section className="section bg-cream">
        <div className="container media-copy">
          <div>
            <p>{p.paragraph}</p>
          </div>
          <div className="media-copy-media">
            <div className="partner-card">
              <div className="icon-badge cutout-badge tone-orange">
                <BadgeCheckIcon />
              </div>
              <h3>{p.cardTitle}</h3>
              <span className="role-tag">{p.cardSubtitle}</span>
              <a className="btn btn-primary" href={partner.phoneHref}>
                <PhoneIcon width={18} height={18} /> {partner.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
