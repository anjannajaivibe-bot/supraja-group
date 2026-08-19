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
    image: "/images/current-site/real-estate.webp",
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
          <p className="eyebrow">Established 2003 · Hyderabad</p>
          <h1>
            Building value.<br />
            <span>Shaping generations.</span>
          </h1>
          <p className="lead">
            A diversified group creating enduring value across real estate,
            food and tradition, hospitality, and community development.
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
        <div className="hero-visual" aria-label="An overview of Supraja Group businesses">
          <figure className="hero-tile hero-tile-estate">
            <img
              src="/images/Supraja Infracon Overview.webp"
              alt="Sri Supraja Infracon overview featuring major real estate developments"
              width={1600}
              height={900}
              loading="eager"
            />
            <figcaption>Sri Supraja Infracon real estate portfolio</figcaption>
          </figure>
          <figure className="hero-tile hero-tile-tradition">
            <img
              src="/images/current-site/parampara.webp"
              alt="Parampara celebrating Indian food traditions and festive mithai"
              width={700}
              height={700}
              loading="eager"
            />
            <figcaption>Celebrating authentic heritage</figcaption>
          </figure>
          <figure className="hero-tile hero-tile-hospitality">
            <img
              src="/images/portfolio/supraja-residency.webp"
              alt="Supraja Hotels hospitality property in Hyderabad"
              width={900}
              height={700}
              loading="eager"
            />
            <figcaption>Welcoming every guest</figcaption>
          </figure>
          <figure className="hero-tile hero-tile-community">
            <img
              src="/images/current-site/foundation.webp"
              alt="Supraja Foundation community support initiative"
              width={700}
              height={700}
              loading="eager"
            />
            <figcaption>Strengthening communities</figcaption>
          </figure>
        </div>
      </section>

      <section className="business-strip" aria-label="Supraja Group sectors">
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

      <section className="group-metrics" aria-label="Supraja Group at a glance">
        <div><strong>24+</strong><span>Years of legacy</span></div>
        <div><strong>4</strong><span>Core business sectors</span></div>
        <div><strong>10+</strong><span>Completed developments</span></div>
        <div><strong>10,000+</strong><span>Families served</span></div>
      </section>

      <section className="section intro-section">
        <div>
          <p className="eyebrow">One Vision, Multiple Ventures</p>
          <h2>A diversified group built on trust and thoughtful growth.</h2>
        </div>
        <div>
          <p className="section-copy">
            Since 2003, Supraja Group has grown through dependable execution,
            enduring relationships and a genuine commitment to value. Each
            venture serves a distinct need while carrying the same promise:
            transparent service, responsible growth and trust that lasts.
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
            <h2>One group. Four distinct expressions of trust.</h2>
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

      <section className="leadership-feature">
        <div className="leadership-feature-image">
          <img
            src="/images/tudi-praveen.webp"
            alt="Tudi Praveen, Chairman and Managing Director of Supraja Group"
            width={720}
            height={900}
            loading="lazy"
          />
        </div>
        <div className="leadership-feature-copy">
          <p className="eyebrow light">Leadership</p>
          <blockquote>
            “Trust is the foundation of every successful enterprise.”
          </blockquote>
          <p>
            Tudi Praveen leads Supraja Group with a long-term perspective,
            disciplined execution and an unwavering commitment to customers
            and communities.
          </p>
          <Link className="button light-button" href="/leadership">
            Read the Chairman&apos;s Message <span aria-hidden="true">→</span>
          </Link>
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
          <p className="eyebrow light">Purpose Beyond Business</p>
          <h2>Progress becomes meaningful when it improves lives.</h2>
        </div>
        <div className="legacy-points">
          <div><strong>People</strong><span>Supporting opportunity</span></div>
          <div><strong>Places</strong><span>Creating lasting value</span></div>
          <div><strong>Future</strong><span>Growing responsibly</span></div>
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
