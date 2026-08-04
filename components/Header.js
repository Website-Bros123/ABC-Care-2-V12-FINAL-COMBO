"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { MenuIcon } from "@/components/Icons";
import { useLanguage } from "@/context/LanguageContext";
import { navItems, contactNav } from "@/lib/siteData";

export default function Header() {
  const { t, lang, setLang } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Logo />
          <span>
            <span className="brand-text-title">ABC Care 2</span>
            <br />
            <span className="brand-text-sub">BOTHELL &amp; MILL CREEK</span>
          </span>
        </Link>

        <nav className={`main-nav${open ? " open" : ""}`} aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={isActive(item.href) ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {t.nav[item.key]}
            </Link>
          ))}
          <Link href={contactNav.href} className="contact-btn" onClick={() => setOpen(false)}>
            {t.nav.contact}
          </Link>
        </nav>

        <div className="header-right">
          <div className="lang-toggle" role="group" aria-label="Language">
            <span className={`lang-pill${lang === "es" ? " es" : ""}`} aria-hidden="true" />
            <button type="button" className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>
              ENG
            </button>
            <button type="button" className={lang === "es" ? "active" : ""} onClick={() => setLang("es")}>
              SPA
            </button>
          </div>

          <button
            type="button"
            className="nav-burger"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon width={22} height={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
