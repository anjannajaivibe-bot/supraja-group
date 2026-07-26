import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leadership | Tudi Praveen, Chairman of Supraja Group",
  description:
    "Meet Tudi Praveen, Chairman and Managing Director of Supraja Group, and discover the vision of trust, integrity and responsible growth guiding the group.",
};

export default function LeadershipPage() {
  return (
    <main>
      <section className="leadership-hero">
        <div className="leadership-hero-copy">
          <p className="eyebrow light">Leadership</p>
          <h1>Building enduring value through trust and purpose.</h1>
          <p>
            A long-term vision for responsible enterprises, meaningful
            partnerships and progress that benefits generations.
          </p>
        </div>
        <div className="leadership-hero-mark" aria-hidden="true">
          <span>24+</span>
          <small>Years of legacy</small>
        </div>
      </section>

      <section className="chairman-section">
        <article className="chairman-profile">
          <div className="chairman-portrait">
            <img
              src="/images/tudi-praveen.webp"
              alt="Tudi Praveen, Chairman and Managing Director of Supraja Group"
              loading="eager"
            />
            <div className="portrait-caption">
              <strong>Tudi Praveen</strong>
              <span>Chairman &amp; Managing Director</span>
            </div>
          </div>

          <div className="chairman-message">
            <p className="eyebrow">Chairman&apos;s Message</p>
            <blockquote>
              “Over the past 24 years, our journey has been guided by a simple
              belief: trust is the foundation of every successful enterprise.”
            </blockquote>
            <div className="message-body">
              <p>
                What began as a vision to create quality communities has grown
                into a diversified group committed to shaping destinations,
                experiences and opportunities that improve the way people live.
              </p>
              <p>
                We have had the privilege of contributing to the growth of
                Hyderabad and Telangana through residential communities,
                approved developments and large-scale ventures. Today, Supraja
                IRIS, Bridge County, Sindhu Sarovar and Subhash Meadows
                represent the next chapter of that journey.
              </p>
              <p>
                As we look ahead, our commitment remains unwavering: to uphold
                the highest standards of integrity, transparency and customer
                trust across every Supraja business.
              </p>
            </div>
            <div className="chairman-signoff">
              <strong>Tudi Praveen</strong>
              <span>Chairman &amp; Managing Director, Supraja Group</span>
            </div>
          </div>
        </article>
      </section>

      <section className="leadership-principles">
        <div className="principles-heading">
          <div>
            <p className="eyebrow light">Leadership Principles</p>
            <h2>One standard across every venture.</h2>
          </div>
          <p>
            The group&apos;s growth is measured not only by scale, but by the
            confidence it earns from customers, partners and communities.
          </p>
        </div>
        <div className="principle-grid">
          <article>
            <span>01</span>
            <h3>Integrity First</h3>
            <p>Clear commitments, responsible decisions and honest execution.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Long-Term Value</h3>
            <p>Growth designed to remain meaningful for generations.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Customer Trust</h3>
            <p>Every business relationship built on confidence and service.</p>
          </article>
        </div>
      </section>

      <section className="leadership-cta">
        <div>
          <p className="eyebrow">Explore the Supraja journey</p>
          <h2>Discover the businesses shaping our next chapter.</h2>
        </div>
        <Link className="button primary" href="/businesses">
          Explore Our Businesses <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}
