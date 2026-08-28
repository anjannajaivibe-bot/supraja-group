import Link from "next/link";
import styles from "./home-editorial.module.css";
import heroStyles from "./hero-editorial.module.css";
import imageStyles from "./business-image-editorial.module.css";
import compactStyles from "./business-compact.module.css";

const businesses = [
  {
    number: "01",
    name: "Real Estate",
    company: "Sri Supraja Infracon",
    copy: "Planned communities and real estate developments across Hyderabad’s emerging growth corridors.",
    href: "https://www.srisuprajainfracon.com/",
    logo: "/brand/sri-supraja-infracon.webp",
    image: "/images/Supraja Infracon Overview.webp",
  },
  {
    number: "02",
    name: "Food & Tradition",
    company: "Parampara",
    copy: "Preserving authentic flavours and food traditions that bring people together.",
    href: "https://www.paramparamithai.com/",
    logo: "/brand/parampara.webp",
    image: "/images/portfolio/parampara-mithai.webp",
  },
  {
    number: "03",
    name: "Hospitality",
    company: "Supraja Hotels",
    copy: "Comfortable stays and attentive hospitality across Hyderabad.",
    href: "https://suprajahotels.com/",
    logo: "/brand/supraja-hotels.webp",
    image: "/images/portfolio/cyber-view.webp",
  },
  {
    number: "04",
    name: "Community",
    company: "Supraja Foundation",
    copy: "Supporting meaningful initiatives that strengthen communities and create opportunity.",
    href: "/businesses#foundation",
    logo: "/brand/supraja-foundation.webp",
    image: "/images/current-site/foundation.webp",
  },
];

const brands = [
  ["/brand/supraja-group.webp", "Supraja Group"],
  ["/brand/sri-supraja-infracon.webp", "Sri Supraja Infracon"],
  ["/brand/parampara.webp", "Parampara The Mithai Shop"],
  ["/brand/supraja-hotels.webp", "Supraja Hotels"],
  ["/brand/supraja-foundation.webp", "Supraja Foundation"],
  ["/brand/supraja-iris.webp", "Supraja IRIS Resort"],
  ["/brand/lemon-tree.webp", "Lemon Tree Resorts"],
];

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={heroStyles.hero}>
        <div className={heroStyles.heroMeta}>
          <p className={heroStyles.kicker}>Established 2001 · Hyderabad</p>
          <span className={heroStyles.heroIndex}>01 / GROUP</span>
        </div>
        <div className={heroStyles.heroStatement}>
          <h1><span>Building value.</span><span>Shaping</span><em>generations.</em></h1>
        </div>
        <div className={heroStyles.heroBottom}>
          <p className={heroStyles.heroLead}>A diversified business group creating lasting value across real estate, traditional food, hospitality, and community development.</p>
          <div className={heroStyles.heroSectors} aria-label="Supraja Group sectors"><span>Real Estate</span><span>Hospitality</span><span>Food & Tradition</span><span>Community</span></div>
          <div className={heroStyles.heroActions}>
            <Link className={heroStyles.actionPrimary} href="/businesses">Explore our businesses <span aria-hidden="true">↗</span></Link>
            <Link className={heroStyles.actionSecondary} href="/about">Meet the group <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className={styles.metrics} aria-label="Supraja Group at a glance">
        <div className={styles.metric}><strong>25+</strong><span className={styles.metricLabel}>Years of legacy</span></div>
        <div className={styles.metric}><strong>10,000+</strong><span className={styles.metricLabel}>Families served</span></div>
        <div className={styles.metric}><strong>10+</strong><span className={styles.metricLabel}>Completed developments</span></div>
        <div className={styles.metric}><strong>4</strong><span className={styles.metricLabel}>Core business sectors</span></div>
      </section>

      <section className={styles.intro}>
        <div><p className={styles.sectionLabel}>02 / One vision, multiple ventures</p><h2>A diversified group built on responsibility and steady growth.</h2></div>
        <div className={styles.introCopy}><p>Since 2001, Supraja Group has grown through responsible execution, lasting relationships, and a clear commitment to creating value. Each business serves a distinct purpose while reflecting the same principles: transparency, responsibility, and long-term value.</p><Link className={styles.textLink} href="/about">Discover our journey <span aria-hidden="true">↗</span></Link></div>
      </section>

      <section className={styles.businesses}>
        <div className={styles.businessesHeader}><p className={styles.sectionLabel}>03 / Our businesses</p><h2>One group. Four distinct areas of impact.</h2></div>
        {businesses.map((business, index) => (
          <article className={`${styles.businessRow} ${index % 2 === 1 ? styles.businessRowReverse : ""} ${compactStyles.row}`} key={business.name}>
            <div className={styles.businessNumber}>{business.number}</div>
            <div className={styles.businessCopy}><p>{business.name}</p><h3>{business.company}</h3><p>{business.copy}</p><a className={styles.businessLink} href={business.href}>Explore business <span aria-hidden="true">↗</span></a></div>
            <div className={`${styles.businessVisual} ${imageStyles.visual} ${compactStyles.visual}`}><img src={business.image} alt={`${business.company} business`} loading="lazy" /><img className={styles.businessLogo} src={business.logo} alt={`${business.company} logo`} width={190} height={80} loading="lazy" /></div>
          </article>
        ))}
      </section>

      <section className={styles.leadership}>
        <div className={styles.leadershipImage}><img src="/images/tudi-praveen.webp" alt="Tudi Praveen, Chairman and Managing Director of Supraja Group" width={720} height={900} loading="lazy" /></div>
        <div className={styles.leadershipCopy}><p className={styles.sectionLabel}>04 / Leadership</p><blockquote>“Trust is the foundation of every enduring enterprise.”</blockquote><p>Tudi Praveen leads Supraja Group with a long-term perspective, disciplined execution, and a strong commitment to customers and communities.</p><Link className={styles.textLink} href="/leadership">Read the Chairman&apos;s message <span aria-hidden="true">↗</span></Link></div>
      </section>

      <section className={styles.brands}>
        <div className={styles.brandsHead}><p className={styles.sectionLabel}>05 / Brand family</p><div><h2>Distinct identities. One shared vision.</h2><p className={styles.brandLabel}>Distinct businesses united by a shared commitment to responsibility, quality, and lasting value.</p></div></div>
        <div className={styles.brandGrid}>{brands.map(([src, alt]) => (<div className={styles.brandTile} key={alt}><img src={src} alt={`${alt} logo`} width={260} height={120} loading="lazy" /></div>))}</div>
      </section>

      <section className={styles.purpose}>
        <div><p className={styles.sectionLabel}>06 / Purpose beyond business</p><h2>Progress matters most when it improves lives.</h2></div>
        <div className={styles.purposePoints}><div className={styles.purposePoint}><strong>People</strong><span>Supporting opportunity</span></div><div className={styles.purposePoint}><strong>Places</strong><span>Creating lasting value</span></div><div className={styles.purposePoint}><strong>Future</strong><span>Growing responsibly</span></div></div>
      </section>

      <section className={styles.contact}>
        <div><p className={styles.sectionLabel}>07 / Connect with Supraja Group</p><h2>Let’s build something meaningful together.</h2></div>
        <div className={styles.contactCopy}><p>Connect with our team to discuss partnerships, business enquiries, and opportunities across Supraja Group.</p><Link className={styles.contactLink} href="/contact">Contact the group <span aria-hidden="true">↗</span></Link></div>
      </section>
    </main>
  );
}
