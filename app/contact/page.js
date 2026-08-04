"use client";

import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ContactCard from "@/components/ContactCard";
import SectionHeading from "@/components/SectionHeading";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  FacebookIcon,
  InstagramIcon,
  MonogramIcon,
  StarIcon
} from "@/components/Icons";
import { useLanguage } from "@/context/LanguageContext";
import { siteData } from "@/lib/siteData";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <Layout title={t.nav.contact} description={c.heroSubtitle}>
      <PageHero eyebrow={c.heroEyebrow} title={c.heroTitle} subtitle={c.heroSubtitle} />

      <section className="section bg-cream">
        <div className="container">
          <div className="contact-cards">
            <ContactCard icon={<PhoneIcon />} tone="teal" title={c.cardPhone} href={siteData.phoneHref}>
              {siteData.phone}
            </ContactCard>
            <ContactCard icon={<MailIcon />} tone="gold" title={c.cardEmail} href={siteData.emailHref}>
              {siteData.email}
            </ContactCard>
            <ContactCard icon={<MapPinIcon />} tone="orange" title={c.cardVisit} href={siteData.mapsUrl}>
              {siteData.fullAddress}
            </ContactCard>
          </div>

          <div className="contact-grid-lower">
            <div className="hours-card">
              <h3>{c.hoursTitle}</h3>
              {c.days.map((day, i) => (
                <div className="hours-row" key={day}>
                  <span>{day}</span>
                  {i < 5 ? (
                    <span className="time">{siteData.weekdayHours}</span>
                  ) : (
                    <span className="time off">{t.common.closed}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="connect-card">
              <h3>{c.connectTitle}</h3>
              <p>{c.connectText}</p>
              <div className="social-buttons">
                <a className="social-btn facebook" href={siteData.social.facebook} target="_blank" rel="noreferrer">
                  <FacebookIcon /> Facebook
                </a>
                <a className="social-btn instagram" href={siteData.social.instagram} target="_blank" rel="noreferrer">
                  <InstagramIcon /> Instagram
                </a>
                <a className="social-btn winnie" href={siteData.social.winnie} target="_blank" rel="noreferrer">
                  <MonogramIcon letter="W" /> Winnie
                </a>
                <a className="social-btn yelp" href={siteData.social.yelp} target="_blank" rel="noreferrer">
                  <StarIcon /> Yelp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section map-section bg-mint">
        <div className="container">
          <SectionHeading title={c.mapTitle} />
          <div className="map-wrap">
            <div className="map-visual">
              <div className="map-card">
                <h4>{siteData.addressLine1}</h4>
                <p>
                  {siteData.addressLine1}
                  <br />
                  {siteData.addressLine2}
                </p>
                <a className="btn btn-primary" href={siteData.mapsUrl} target="_blank" rel="noreferrer">
                  {t.common.openInMaps}
                </a>
              </div>
              <div className="map-pin">
                <MapPinIcon />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
