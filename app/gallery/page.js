"use client";

import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SiteImage from "@/components/SiteImage";
import { useLanguage } from "@/context/LanguageContext";

const photos = [
  "/images/classroom-rug.jpg",
  "/images/welcome-poster.jpg",
  "/images/child-pointing-chart.jpg",
  "/images/hero-playroom.jpg",
  "/images/shelf-toys.jpg",
  "/images/orange-wall-shelves.jpg",
  "/images/baby-exersaucer.jpg"
];

export default function Gallery() {
  const { t } = useLanguage();
  const g = t.gallery;

  return (
    <Layout title={t.nav.gallery} description={g.heroSubtitle}>
      <PageHero eyebrow={g.heroEyebrow} title={g.heroTitle} subtitle={g.heroSubtitle} />

      <section className="section bg-cream">
        <div className="container">
          <div className="gallery-grid">
            {photos.map((src, i) => (
              <div className="gallery-tile" key={src}>
                <SiteImage src={src} alt={g.captions[i]} />
                <div className="gallery-tile-caption">{g.captions[i]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
