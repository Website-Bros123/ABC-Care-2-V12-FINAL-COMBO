"use client";

import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SiteImage from "@/components/SiteImage";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/lib/siteData";

export default function Subsidized() {
  const { t } = useLanguage();
  const sub = t.subsidized;

  return (
    <Layout title={t.nav.subsidized} description={sub.paragraph}>
      <PageHero eyebrow={sub.heroEyebrow} title={sub.heroTitle} subtitle={sub.heroSubtitle} />

      <section className="section bg-cream">
        <div className="container media-copy">
          <div>
            <p>{sub.paragraph}</p>
            <div className="callout-box">
              <h4>{sub.calloutTitle}</h4>
              <p>
                {t.common.callUsAt}{" "}
                <a href={siteData.phoneHref}>{siteData.phone}</a> {t.common.walkThrough}
              </p>
            </div>
          </div>
          <div className="media-copy-media">
            <SiteImage src="/images/orange-wall-shelves.jpg" alt="Children playing with blocks and toys" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
