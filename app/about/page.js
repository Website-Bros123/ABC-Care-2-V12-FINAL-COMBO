"use client";

import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SiteImage from "@/components/SiteImage";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const about = t.about;

  return (
    <Layout title={t.nav.about} description={about.sectionBParagraphs[0]}>
      <PageHero eyebrow={about.heroEyebrow} title={about.heroTitle} subtitle={about.heroSubtitle} />

      <section className="section bg-cream">
        <div className="container media-copy">
          <div className="media-copy-media">
            <SiteImage src="/images/child-pointing-chart.jpg" alt="Child learning at the daily activity chart" />
          </div>
          <div>
            <span className="eyebrow">{about.sectionAEyebrow}</span>
            <h2>{about.sectionATitle}</h2>
            <span className="role-tag">{about.sectionARole}</span>
            <p>{about.sectionAParagraph}</p>
          </div>
        </div>
      </section>

      <section className="section bg-yellow-soft">
        <div className="container media-copy reverse">
          <div>
            <span className="eyebrow">{about.sectionBEyebrow}</span>
            <h2>{about.sectionBTitle}</h2>
            {about.sectionBParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="media-copy-media">
            <SiteImage src="/images/welcome-poster.jpg" alt="Welcome sign in many languages" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
