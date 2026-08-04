"use client";

import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SiteImage from "@/components/SiteImage";
import SectionHeading from "@/components/SectionHeading";
import ExploreCard from "@/components/ExploreCard";
import { useLanguage } from "@/context/LanguageContext";
import { BookIcon, AbacusIcon, FlaskIcon, PaletteIcon, NoteIcon, HandIcon } from "@/components/Icons";

const iconMap = {
  book: { Icon: BookIcon, tone: "orange" },
  abacus: { Icon: AbacusIcon, tone: "blue" },
  flask: { Icon: FlaskIcon, tone: "mint" },
  palette: { Icon: PaletteIcon, tone: "orange" },
  note: { Icon: NoteIcon, tone: "gray" },
  hand: { Icon: HandIcon, tone: "yellow" }
};

export default function Curriculum() {
  const { t } = useLanguage();
  const c = t.curriculum;

  return (
    <Layout title={t.nav.curriculum} description={c.brightwheelParagraph}>
      <PageHero eyebrow={c.heroEyebrow} title={c.heroTitle} />

      <section className="section bg-cream">
        <div className="container media-copy">
          <div className="media-copy-media">
            <SiteImage src="/images/shelf-toys.jpg" alt="Puzzles, games and learning toys on the shelf" />
          </div>
          <div>
            <h2>{c.brightwheelTitle}</h2>
            <p>{c.brightwheelParagraph}</p>
          </div>
        </div>
      </section>

      <section className="section bg-yellow-soft">
        <div className="container">
          <SectionHeading title={c.exploreTitle} />
          <div className="explore-grid">
            {c.exploreItems.map((item) => {
              const { Icon, tone } = iconMap[item.icon];
              return <ExploreCard key={item.title} icon={<Icon />} tone={tone} title={item.title} />;
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
