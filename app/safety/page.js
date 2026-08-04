"use client";

import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import InfoCard from "@/components/InfoCard";
import { useLanguage } from "@/context/LanguageContext";
import { CameraIcon, LockIcon, HeartPulseIcon, FirstAidIcon, SunIcon, BadgeCheckIcon } from "@/components/Icons";

const iconMap = [
  { Icon: CameraIcon, tone: "blue" },
  { Icon: LockIcon, tone: "gray" },
  { Icon: HeartPulseIcon, tone: "orange" },
  { Icon: FirstAidIcon, tone: "mint" },
  { Icon: SunIcon, tone: "yellow" },
  { Icon: BadgeCheckIcon, tone: "orange" }
];

export default function Safety() {
  const { t } = useLanguage();
  const s = t.safety;

  return (
    <Layout title={t.nav.safety} description={s.heroSubtitle}>
      <PageHero eyebrow={s.heroEyebrow} title={s.heroTitle} subtitle={s.heroSubtitle} />

      <section className="section bg-peach">
        <div className="container">
          <div className="card-grid">
            {s.cards.map((card, i) => {
              const { Icon, tone } = iconMap[i];
              return (
                <InfoCard key={card.title} icon={<Icon />} tone={tone} title={card.title} desc={card.desc} />
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
