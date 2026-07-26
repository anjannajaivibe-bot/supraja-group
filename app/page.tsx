import Link from "next/link";

const businesses = [
  {
    number: "01",
    name: "Real Estate",
    company: "Sri Supraja Infracon",
    copy: "Thoughtfully planned communities and investment destinations across Hyderabad’s growth corridors.",
    href: "https://www.srisuprajainfracon.com/",
    className: "real-estate",
    logo: "/brand/sri-supraja-infracon.webp",
    image: "/images/portfolio/supraja-iris.webp",
  },
  {
    number: "02",
    name: "Food & Tradition",
    company: "Parampara",
    copy: "Celebrating authentic taste, trusted quality and the traditions that bring people together.",
    href: "https://www.paramparamithai.com/",
    className: "tradition",
    logo: "/brand/parampara.webp",
    image: "/images/portfolio/parampara-mithai.webp",
  },
  {
    number: "03",
    name: "Hospitality",
    company: "Supraja Hotels",
    copy: "Comfortable stays, warm service and dependable hospitality across Hyderabad.",
    href: "https://suprajahotels.com/",
    className: "hospitality",
    logo: "/brand/supraja-hotels.webp",
    image: "/images/portfolio/cyber-view.webp",
  },
  {
    number: "04",
    name: "Community",
    company: "Supraja Foundation",
    copy: "Supporting meaningful initiatives that strengthen communities and create opportunity.",
    href: "/businesses#foundation",
    className: "foundation",
    logo: "/brand/supraja-foundation.webp",
    image: "/images/current-site/foundation.webp",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Supraja Group</p>
          <h1>
            Progress Across Businesses.{" "}
            <span>Purpose Across Generations.</span>
          </h1>
          <p className="lead">
            Building trusted businesses that create lasting value for people,
            places and communities.
          </p>
          <div className="actions">
            <Link className="button primary" href="/businesses">
              Explore Our Businesses <span aria-hidden="true">→</span>
            </Link>
            <Link className="button secondary" href="/about">
              Meet the Group
            </Link>
          </div>
        </div>
        <div className="hero-mosaic" aria-label="Supraja Group business sectors">
          <div className="mosaic-panel panel-real">
            <span>Building places for growth</span>
          </div>
          <div className="mosaic-panel panel-food">
            <span>Celebrating authentic heritage</span>
          </div>
          <div className="mosaic-panel panel-hotel">
            <span>Creating memorable stays</span>
          </div>
          <div className="mosaic-panel panel-care">
            <span>Strengthening communities</span>
          </div>
        </div>
      </section>

      <section className="business-strip" aria-label="Our businesses">
        {businesses.map((business) => (
          <a
            key={business.name}
            className={`business-chip ${business.className}`}
            href={business.href}
          >
            <span className="chip-icon">{business.number}</span>
            <span>
              <strong>{business.name}</strong>
              <small>{business.copy.split(".")[0]}</small>
            </span>
          </a>
        ))}
      </section>

      <section className="section intro-section">
        <div>
          <p className="eyebrow">One Vision, Multiple Ventures</p>
          <h2>A diversified group built on trust and thoughtful growth.</h2>
        </div>
        <div>
          <p className="section-copy">
            Since 2003, Supraja Group has grown by staying close to what matters:
            dependable execution, long-term relationships and genuine value.
            Today, our businesses serve customers across real estate,
            hospitality, food and community initiatives.
          </p>
          <Link className="text-link" href="/about">
            Discover our journey <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="section business-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Our Businesses</p>
            <h2>Distinct ventures. Shared standards.</h2>
          </div>
          <p>
            Every Supraja business is shaped by the same commitment to
            transparency, service and sustainable value.
          </p>
        </div>
        <div className="business-grid">
          {businesses.map((business) => (
            <article className="business-card" key={business.name}>
              <div className={`card-visual ${business.className}`}>
                <img
                  className="business-photo"
                  src={business.image}
                  alt={`${business.company} business`}
                  loading="lazy"
                />
                <img
                  className="business-logo"
                  src={business.logo}
                  alt={`${business.company} logo`}
                  width={190}
                  height={80}
                  loading="lazy"
                />
              </div>
              <div className="card-body">
                <p>{business.name}</p>
                <h3>{business.company}</h3>
                <p>{business.copy}</p>
                <a href={business.href}>Explore business →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section brands-section">
        <div className="section-heading brands-heading">
          <div>
            <p className="eyebrow">Our Brand Family</p>
            <h2>Trusted identities under one group.</h2>
          </div>
          <p>
            Each brand serves a distinct audience while carrying the Supraja
            commitment to trust, quality and responsible growth.
          </p>
        </div>
        <div className="brand-family">
          {[
            ["/brand/supraja-group.webp", "Supraja Group"],
            ["/brand/sri-supraja-infracon.webp", "Sri Supraja Infracon"],
            ["/brand/parampara.webp", "Parampara The Mithai Shop"],
            ["/brand/supraja-hotels.webp", "Supraja Hotels"],
            ["/brand/supraja-foundation.webp", "Supraja Foundation"],
            ["/brand/supraja-iris.webp", "Supraja IRIS Resort"],
            ["/brand/lemon-tree.webp", "Lemon Tree Resorts"],
          ].map(([src, alt]) => (
            <div className="brand-tile" key={alt}>
              <img src={src} alt={`${alt} logo`} width={260} height={120} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section className="legacy">
        <div>
          <p className="eyebrow light">Our Foundation</p>
          <h2>Progress is meaningful when it improves lives.</h2>
        </div>
        <div className="legacy-points">
          <div><strong>2003</strong><span>Our journey began</span></div>
          <div><strong>4</strong><span>Core business sectors</span></div>
          <div><strong>1</strong><span>Shared commitment to trust</span></div>
        </div>
      </section>

      <section className="cta-section">
        <p className="eyebrow">Connect with Supraja Group</p>
        <h2>Let’s build something meaningful together.</h2>
        <p>
          Talk to our team about partnerships, business enquiries or
          opportunities across the group.
        </p>
        <Link className="button primary" href="/contact">
          Contact the Group <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}
