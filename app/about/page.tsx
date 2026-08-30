import type { Metadata } from "next";
import { PageHero } from "../components";

export const metadata: Metadata = {
  title: "About Supraja Group",
  description: "Learn about Supraja Group, its journey since 2001, business areas, and principles of responsible growth.",
};

export default function AboutPage() {
  const values = [
    ["01", "Responsibility", "We communicate clearly, act responsibly, and honour our commitments."],
    ["02", "Long-Term Thinking", "We pursue opportunities that can create sustainable, long-term value."],
    ["03", "Service", "We place customers, partners, and communities at the centre of our work."],
  ];
  return (
    <main>
      <PageHero eyebrow="About Supraja Group" title="Growing with purpose since 2001." copy="From a focused beginning to a diversified group, our journey is guided by responsibility, thoughtful execution, and value that lasts." />
      <section className="content-section">
        <div className="content-grid">
          <h2>Built through long-term relationships and responsible decisions.</h2>
          <div className="prose">
            <p>Supraja Group brings together businesses in real estate, hospitality, traditional food, and community development.</p>
            <p>Across every venture, we remain committed to dependable service, transparent communication, and responsible growth. These principles have helped us build enduring relationships with customers, partners, and communities.</p>
          </div>
        </div>
        <div className="values-grid">
          {values.map(([n,title,copy]) => <article className="value-card" key={title}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>
    </main>
  );
}
