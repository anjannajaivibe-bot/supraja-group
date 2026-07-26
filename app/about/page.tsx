import type { Metadata } from "next";
import { PageHero } from "../components";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Supraja Group’s journey, purpose and values.",
};

export default function AboutPage() {
  const values = [
    ["01", "Trust", "We communicate clearly, act responsibly and honour every commitment."],
    ["02", "Thoughtful Growth", "We pursue opportunities that create sustainable long-term value."],
    ["03", "Service", "We place customers, partners and communities at the centre of our work."],
  ];
  return (
    <main>
      <PageHero eyebrow="About Supraja Group" title="Growing with purpose since 2003." copy="From a focused beginning to a diversified group, our journey is guided by trust, thoughtful execution and value that lasts." />
      <section className="content-section">
        <div className="content-grid">
          <h2>A group shaped by long-term relationships, not short-term thinking.</h2>
          <div className="prose">
            <p>Supraja Group brings together businesses in real estate, hospitality, food and tradition, and community development.</p>
            <p>Across every venture, we remain committed to dependable service, transparent communication and responsible growth. These principles have helped us build enduring relationships with customers, partners and communities.</p>
          </div>
        </div>
        <div className="values-grid">
          {values.map(([n,title,copy]) => <article className="value-card" key={title}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>
    </main>
  );
}
