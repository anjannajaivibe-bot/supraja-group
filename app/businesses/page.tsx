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
      "A resort-style plotted destination with lifestyle attractions and strong growth-corridor connectivity.",
    image: "/images/portfolio/supraja-iris.webp",
    href: "https://www.srisuprajainfracon.com/projects/supraja-iris-resort-plots",
  },
  {
    name: "Bridge County",
    location: "Within Supraja IRIS",
    description:
      "A serene premium plotted enclave adjacent to Woxsen University within the larger Supraja IRIS ecosystem.",
    image: "/images/portfolio/bridge-county.webp",
    href: "https://www.srisuprajainfracon.com/projects/bridge-county",
  },
  {
    name: "Sindhu Sarovar",
    location: "Mominpet",
    description:
      "A DTCP and RERA approved gated plotted community with wide roads and planned infrastructure.",
    image: "/images/portfolio/sindhu-sarovar.webp",
    href: "https://www.srisuprajainfracon.com/projects/sindhu-sarovar",
  },
  {
    name: "Subhash Meadows",
    location: "Indrakaran",
    description:
      "Affordable open plots near Hyderabad’s growth corridors in a calm, well-connected setting.",
    image: "/images/portfolio/subhash-meadows.webp",
    href: "https://www.srisuprajainfracon.com/projects/subhash-meadows",
  },
];

const hotels = [
  {
    name: "Hotel Supraja Cyber View",
    location: "Madhapur, Hitech City",
    description:
      "A convenient business stay near Hyderabad’s leading technology and commercial hubs.",
    image: "/images/portfolio/cyber-view.webp",
    href: "https://suprajahotels.com/hotels/supraja-cyber-view",
  },
  {
    name: "Hotel Supraja Residency",
    location: "Chandanagar",
    description:
      "Comfortable rooms, dependable service and convenient access for families and business travellers.",
    image: "/images/portfolio/supraja-residency.webp",
    href: "https://suprajahotels.com/hotels/supraja-residency",
  },
  {
    name: "Hotel Supraja Lodge",
    location: "Chandanagar",
    description:
      "A practical and welcoming stay designed around comfort, value and essential convenience.",
    image: "/images/portfolio/supraja-lodge.webp",
    href: "https://suprajahotels.com/hotels/supraja-lodge",
  },
  {
    name: "Saket Banquet Hall",
    location: "Hotel Supraja Residency",
    description:
      "An elegant venue for family celebrations, corporate gatherings and memorable occasions.",
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
          alt={`${item.name} official website image`}
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
        copy="Explore the companies, projects, hotels and community initiatives that form the Supraja Group."
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
            <h2>Projects positioned for long-term value.</h2>
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
            <h2>Authentic taste, crafted for every celebration.</h2>
            <p>
              Parampara brings together traditional Indian sweets, premium
              mithai, namkeens, cakes and gift hampers with a commitment to
              freshness and trusted quality.
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
              Supraja Hotels combines convenient locations, warm service and
              dependable value for business travellers, families and events.
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
              Supraja Foundation supports purpose-led initiatives designed to
              help people, expand opportunity and contribute to stronger
              communities.
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
