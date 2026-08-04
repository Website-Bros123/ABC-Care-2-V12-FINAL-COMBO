"use client";

import Link from "next/link";
import Layout from "@/components/Layout";
import SiteImage from "@/components/SiteImage";
import SectionHeading from "@/components/SectionHeading";
import GalleryStrip from "@/components/GalleryStrip";
import TestimonialCard from "@/components/TestimonialCard";
import DecorShapes from "@/components/DecorShapes";
import WaveDivider from "@/components/WaveDivider";
import { useLanguage } from "@/context/LanguageContext";
import { BabyIcon, BlocksIcon, PencilIcon, BackpackIcon, CloudIcon, ArrowRightIcon, SparkleIcon } from "@/components/Icons";

const pillIcons = [BabyIcon, BlocksIcon, PencilIcon, BackpackIcon];

const homeHeroShapes = [
  { type: "star", top: "8%", left: "2%", size: 22, color: "var(--gold)" },
  { type: "sparkle", top: "60%", left: "1%", size: 26, color: "var(--orange)", delay: "0.4s" },
  { type: "dots", bottom: "4%", right: "38%", size: 30, color: "var(--teal)", delay: "0.8s" },
  { type: "heart", top: "5%", right: "3%", size: 20, color: "#5b7fe0", delay: "1.1s" }
];

const ctaShapes = [
  { type: "star", top: "14%", left: "6%", size: 20, color: "var(--gold)" },
  { type: "sparkle", top: "20%", right: "8%", size: 22, color: "var(--gold)", delay: "0.5s" },
  { type: "blob", bottom: "6%", left: "12%", size: 40, color: "rgba(255,255,255,0.08)", delay: "0.9s" }
];

const homeGalleryImages = [
  "/images/classroom-rug.jpg",
  "/images/welcome-poster.jpg",
  "/images/child-pointing-chart.jpg",
  "/images/hero-playroom.jpg",
  "/images/shelf-toys.jpg",
  "/images/orange-wall-shelves.jpg",
  "/images/baby-exersaucer.jpg"
];

export default function Home() {
  const { t } = useLanguage();
  const home = t.home;

  return (
    <Layout description={home.heroParagraph}>
      {/* Hero */}
      <section className="home-hero">
        <DecorShapes items={homeHeroShapes} />
        <div className="container">
          <div className="fade-up">
            <span className="home-hero-tag">{home.eyebrowHero}</span>
            <h1>{home.titleHero}</h1>
            <h2>
              <span className="c-orange">{home.subtitlePart1}</span>{" "}
              <span className="c-teal">{home.subtitlePart2}</span>{" "}
              <span className="c-blue">{home.subtitlePart3}</span>
            </h2>
            <p className="lead">{home.heroParagraph}</p>
            <Link href="/contact" className="btn btn-primary">
              {t.common.scheduleTour}
            </Link>
          </div>

          <div className="home-hero-media fade-up delay-1">
            <SiteImage src="/images/hero-playroom.jpg" alt="ABC Care 2 playroom" />
            <div className="hero-badge">
              <strong>{home.badgeYears}</strong>
              <span>{home.badgeCaring}</span>
            </div>
            <CloudIcon className="hero-cloud" />
          </div>
        </div>
      </section>

      <WaveDivider from="var(--mint)" to="var(--yellow)" />

      {/* Welcome */}
      <section className="section bg-yellow welcome-section">
        <div className="container inner">
          <span className="eyebrow-row">
            <SparkleIcon className="eyebrow-sparkle" />
            <span className="eyebrow">{home.welcomeEyebrow}</span>
          </span>
          <h2>{home.welcomeTitle}</h2>
          <p>{home.welcomeParagraph}</p>
        </div>
      </section>

      <WaveDivider from="var(--yellow)" to="var(--cream)" />

      {/* Gallery strip */}
      <section className="section bg-cream">
        <div className="container">
          <SectionHeading eyebrow={home.galleryEyebrow} title={home.galleryTitle} subtitle={home.gallerySubtitle} />
          <GalleryStrip
            items={homeGalleryImages.map((src, i) => ({ src, caption: t.gallery.captions[i] }))}
          />
          <div className="gallery-strip-footer">
            <Link href="/gallery" className="text-link">
              {t.common.seeFullGallery} <ArrowRightIcon width={16} height={16} />
            </Link>
          </div>
        </div>
      </section>

      <WaveDivider from="var(--cream)" to="var(--peach)" />

      {/* Programs / pills */}
      <section className="section bg-peach">
        <div className="container">
          <SectionHeading eyebrow={home.programsEyebrow} title={home.programsTitle} subtitle={home.programsSubtitle} />
          <div className="pill-row">
            {home.pills.map((label, i) => {
              const Icon = pillIcons[i];
              return (
                <span className="age-pill" key={label}>
                  <Icon className="pill-icon" />
                  {label}
                </span>
              );
            })}
          </div>
          <div className="programs-footer">
            <Link href="/services" className="btn btn-primary">
              {t.common.viewAllServices} <ArrowRightIcon width={18} height={18} />
            </Link>
          </div>
        </div>
      </section>

      <WaveDivider from="var(--peach)" to="var(--mint)" />

      {/* Testimonials */}
      <section className="section bg-mint">
        <div className="container">
          <SectionHeading eyebrow={home.reviewsEyebrow} title={home.reviewsTitle} />
          <div className="testimonial-grid">
            {home.reviews.map((review) => (
              <TestimonialCard key={review.name} name={review.name} text={review.text} />
            ))}
          </div>
        </div>
      </section>

      <WaveDivider from="var(--mint)" to="var(--navy)" />

      {/* CTA */}
      <section className="section bg-navy cta-section">
        <DecorShapes items={ctaShapes} />
        <div className="container">
          <h2>{home.ctaTitle}</h2>
          <p>{home.ctaParagraph}</p>
          <Link href="/contact" className="btn btn-light">
            {t.common.scheduleTour}
          </Link>
        </div>
      </section>
    </Layout>
  );
}
