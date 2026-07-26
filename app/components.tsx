"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Our Businesses", "/businesses"],
  ["Leadership", "/leadership"],
  ["Contact", "/contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Supraja Group home">
        <img
          className="brand-logo"
          src="/brand/supraja-group.webp"
          alt="Supraja Group, 24 years of legacy"
          width={210}
          height={90}
          loading="eager"
        />
      </Link>
      <span className="header-legacy">24+ years of trust</span>
      <button
        className="menu-button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={open ? "nav open" : "nav"} aria-label="Main navigation">
        {nav.map(([label, href]) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
        <Link className="nav-cta" href="/contact">
          Connect With Us
        </Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Link className="brand footer-brand" href="/">
            <img
              className="footer-logo"
              src="/brand/supraja-group.webp"
              alt="Supraja Group"
              width={210}
              height={90}
              loading="lazy"
            />
          </Link>
          <p>
            Building trusted businesses that create lasting value for people,
            places and communities.
          </p>
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/about">About the Group</Link>
          <Link href="/businesses">Our Businesses</Link>
          <Link href="/leadership">Leadership</Link>
        </div>
        <div>
          <h2>Connect</h2>
          <Link href="/contact">Contact Us</Link>
          <a href="tel:+919052996161">+91 90529 96161</a>
          <a href="mailto:support@srisuprajainfracon.com">
            support@srisuprajainfracon.com
          </a>
        </div>
        <div>
          <h2>Corporate Office</h2>
          <p>H.No. 4-91, Above Parampara Mithai, Chandanagar, Hyderabad 500050</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Supraja Group. All rights reserved.</span>
        <span>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
        </span>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{copy}</p>
      </div>
    </section>
  );
}
