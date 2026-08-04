"use client";

import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import InfoCard from "@/components/InfoCard";
import { useLanguage } from "@/context/LanguageContext";
import { BabyIcon, BlocksIcon, PencilIcon, BackpackIcon, AppleIcon, SunIcon } from "@/components/Icons";

const iconMap = [
  { Icon: BabyIcon, tone: "blue" },
  { Icon: BlocksIcon, tone: "mint" },
  { Icon: PencilIcon, tone: "orange" },
  { Icon: BackpackIcon, tone: "yellow" },
  { Icon: AppleIcon, tone: "orange" },
  { Icon: SunIcon, tone: "gray" }
];

export default function Services() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <Layout title={t.nav.services} description={s.heroSubtitle}>
      <PageHero eyebrow={s.heroEyebrow} title={s.heroTitle} subtitle={s.heroSubtitle} />

      <section className="section bg-cream">
        <div className="container">
          <div className="card-grid">
            {s.cards.map((card, i) => {
              const { Icon, tone } = iconMap[i];
              return (
                <InfoCard
                  key={card.title}
                  icon={<Icon />}
                  tone={tone}
                  title={card.title}
                  age={card.age}
                  desc={card.desc}
                  priceLabel={card.price ? t.common.priceContact : null}
                />
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
