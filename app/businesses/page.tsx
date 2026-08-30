import type { Metadata } from "next";
import { PageHero } from "../components";

export const metadata: Metadata = {
  title: "Our Businesses",
  description:
    "Explore Supraja Group companies, Sri Supraja Infracon projects, Supraja Hotels properties, Parampara Mithai and Supraja Foundation.",
};

const projects = [
  {
    name: "Supraja IRIS",
    location: "Kamkole, near Sadashivapet",
    description:
      "A resort-style plotted development with planned lifestyle attractions and connectivity to the Hyderabad-Zaheerabad growth corridor.",
    image: "/images/portfolio/supraja-iris.webp",
    href: "https://suprajairis.com/",
  },
  {
    name: "Bridge County",
    location: "Within Supraja IRIS",
    description:
      "A plotted enclave adjacent to Woxsen University within the larger Supraja IRIS development.",
    image: "/images/portfolio/bridge-county.webp",
    href: "https://www.srisuprajainfracon.com/projects/bridge-county",
  },
  {
    name: "Sindhu Sarovar",
    location: "Mominpet",
    description:
      "A DTCP- and RERA-approved gated plotted community with wide roads and planned infrastructure.",
    image: "/images/portfolio/sindhu-sarovar.webp",
    href: "https://www.srisuprajainfracon.com/projects/sindhu-sarovar",
  },
  {
    name: "Subhash Meadows",
    location: "Indrakaran",
    description:
      "Open plots in Indrakaran with access to Hyderabad’s surrounding growth corridors.",
    image: "/images/portfolio/subhash-meadows.webp",
    href: "https://www.srisuprajainfracon.com/projects/subhash-meadows",
  },
];

const hotels = [
  {
    name: "Hotel Supraja Cyber View",
    location: "Madhapur, Hitech City",
    description:
      "A convenient stay in Madhapur with access to nearby technology and commercial areas.",
    image: "/images/portfolio/cyber-view.webp",
    href: "https://suprajahotels.com/hotels/supraja-cyber-view",
  },
  {
    name: "Hotel Supraja Residency",
    location: "Chandanagar",
    description:
      "Comfortable rooms and convenient access for families and business travellers.",
    image: "/images/portfolio/supraja-residency.webp",
    href: "https://suprajahotels.com/hotels/supraja-residency",
  },
  {
    name: "Hotel Supraja Lodge",
    location: "Chandanagar",
    description:
      "A practical stay in Chandanagar offering essential comfort and convenience.",
    image: "/images/portfolio/supraja-lodge.webp",
    href: "https://suprajahotels.com/hotels/supraja-lodge",
  },
  {
    name: "Saket Banquet Hall",
    location: "Hotel Supraja Residency",
    description:
      "A venue for family celebrations, corporate gatherings, and other occasions.",
    image: "/images/portfolio/saket-banquet.webp",
    href: "https://suprajahotels.com/saket-banquet-hall",
  },
];

function PortfolioCard({
  item,
  label,
}: {
  item: (typeof projects)[number];
  label: string;
}) {
  return (
    <article className="portfolio-card">
      <a className="portfolio-image" href={item.href} aria-label={`Explore ${item.name}`}>
        <img
          src={item.image}
          alt={`${item.name} ${label.toLowerCase()} property`}
          loading="lazy"
        />
      </a>
      <div className="portfolio-body">
        <p className="portfolio-label">{label} · {item.location}</p>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <a className="portfolio-link" href={item.href}>
          Visit official page <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}

export default function BusinessesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Businesses"
        title="Distinct ventures. One shared standard."
        copy="Explore the real estate, traditional food, hospitality, and community initiatives within Supraja Group."
      />

      <section className="group-structure" aria-label="Supraja Group brand structure">
        <p className="eyebrow">The Supraja Family</p>
        <div className="structure-logos">
          {[
            ["/brand/supraja-group.webp", "Supraja Group"],
            ["/brand/sri-supraja-infracon.webp", "Sri Supraja Infracon"],
            ["/brand/parampara.webp", "Parampara The Mithai Shop"],
            ["/brand/supraja-hotels.webp", "Supraja Hotels"],
            ["/brand/supraja-foundation.webp", "Supraja Foundation"],
            ["/brand/supraja-iris.webp", "Supraja IRIS Resort"],
            ["/brand/lemon-tree.webp", "Lemon Tree Resorts"],
          ].map(([src, alt], index) => (
            <div className="structure-logo" key={alt}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <img src={src} alt={`${alt} logo`} width={220} height={100} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section className="portfolio-section" id="infracon">
        <div className="portfolio-intro">
          <div>
            <img
              className="portfolio-company-logo"
              src="/brand/sri-supraja-infracon.webp"
              alt="Sri Supraja Infracon logo"
              width={330}
              height={115}
              loading="lazy"
            />
            <h2>Plotted developments across emerging growth corridors.</h2>
          </div>
          <div>
            <p>
              Sri Supraja Infracon develops plotted communities and residential
              destinations across Hyderabad’s emerging growth corridors.
            </p>
            <a className="button secondary" href="https://www.srisuprajainfracon.com/">
              Visit Sri Supraja Infracon
            </a>
          </div>
        </div>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <PortfolioCard item={project} label="Real Estate" key={project.name} />
          ))}
        </div>
      </section>

      <section className="portfolio-section portfolio-alt" id="parampara">
        <div className="feature-business">
          <div className="feature-image">
            <img
              src="/images/portfolio/parampara-mithai.webp"
              alt="Parampara Mithai official website selection of traditional Indian sweets"
              loading="lazy"
            />
          </div>
          <div className="feature-copy">
            <img
              src="/brand/parampara.webp"
              alt="Parampara The Mithai Shop logo"
              width={300}
              height={190}
              loading="lazy"
            />
            <p className="eyebrow">Food & Tradition</p>
            <h2>Traditional flavours for everyday moments and celebrations.</h2>
            <p>
              Parampara offers traditional Indian sweets, mithai, namkeens,
              cakes, and gift hampers for everyday occasions and celebrations.
            </p>
            <a className="button primary" href="https://www.paramparamithai.com/">
              Visit Parampara Mithai
            </a>
          </div>
        </div>
      </section>

      <section className="portfolio-section" id="hotels">
        <div className="portfolio-intro">
          <div>
            <img
              className="portfolio-company-logo"
              src="/brand/supraja-hotels.webp"
              alt="Supraja Hotels logo"
              width={330}
              height={115}
              loading="lazy"
            />
            <h2>Comfortable stays across Hyderabad.</h2>
          </div>
          <div>
            <p>
              Supraja Hotels offers conveniently located accommodation for
              business travellers, families, and guests attending events.
            </p>
            <a className="button secondary" href="https://suprajahotels.com/">
              Visit Supraja Hotels
            </a>
          </div>
        </div>
        <div className="portfolio-grid">
          {hotels.map((hotel) => (
            <PortfolioCard item={hotel} label="Hospitality" key={hotel.name} />
          ))}
        </div>
      </section>

      <section className="portfolio-section portfolio-alt" id="foundation">
        <div className="feature-business reverse">
          <div className="feature-image foundation-image">
            <img
              src="/images/current-site/foundation.webp"
              alt="Representative community support initiative"
              loading="lazy"
            />
            <span className="temporary-image">Representative image</span>
          </div>
          <div className="feature-copy">
            <img
              src="/brand/supraja-foundation.webp"
              alt="Supraja Foundation logo"
              width={320}
              height={115}
              loading="lazy"
            />
            <p className="eyebrow">Community Impact</p>
            <h2>Progress that strengthens communities.</h2>
            <p>
              Supraja Foundation supports initiatives intended to expand
              opportunity and contribute to stronger communities.
            </p>
            <a className="button secondary" href="/contact">
              Connect with the Foundation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
