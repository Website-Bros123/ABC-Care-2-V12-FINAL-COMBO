"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  MonogramIcon,
  StarIcon
} from "@/components/Icons";
import { useLanguage } from "@/context/LanguageContext";
import { siteData, footerExploreLeft, footerExploreRight } from "@/lib/siteData";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col-brand">
            <div className="footer-brand">
              <Logo size={48} />
              <span>
                <span className="footer-brand-title">ABC Care 2</span>
                <br />
                <span className="footer-brand-sub">{t.footer.tagline}</span>
              </span>
            </div>
            <p className="footer-desc">{t.footer.description}</p>
            <div className="footer-social">
              <a href={siteData.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href={siteData.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href={siteData.social.winnie} target="_blank" rel="noreferrer" aria-label="Winnie">
                <MonogramIcon letter="W" />
              </a>
              <a href={siteData.social.yelp} target="_blank" rel="noreferrer" aria-label="Yelp">
                <StarIcon />
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">{t.footer.explore}</h4>
            <div className="footer-links">
              <ul>
                {footerExploreLeft.map((item) => (
                  <li key={item.key}>
                    <Link href={item.href}>{t.nav[item.key]}</Link>
                  </li>
                ))}
              </ul>
              <ul>
                {footerExploreRight.map((item) => (
                  <li key={item.key}>
                    <Link href={item.href}>{t.nav[item.key]}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">{t.footer.getInTouch}</h4>
            <ul className="footer-contact-list">
              <li>
                <PhoneIcon />
                <a href={siteData.phoneHref}>{siteData.phone}</a>
              </li>
              <li>
                <MailIcon />
                <a href={siteData.emailHref}>{siteData.email}</a>
              </li>
              <li>
                <MapPinIcon />
                <span>{siteData.fullAddress}</span>
              </li>
              <li>
                <ClockIcon />
                <span>
                  {t.footer.hours}
                  <br />
                  {t.footer.hoursClosed}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">{t.footer.rights}</div>
    </footer>
  );
}
