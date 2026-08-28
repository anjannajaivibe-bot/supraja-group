import type { Metadata } from "next";
import { PageHero } from "../components";

export const metadata: Metadata = {
  title: "Contact Supraja Group",
  description: "Contact Supraja Group for business enquiries, partnerships, careers, or information about its companies.",
};

export default function ContactPage() {
  return <main>
    <PageHero eyebrow="Contact Supraja Group" title="Start a conversation with our team." copy="Contact us about business enquiries, partnerships, careers, or any Supraja Group company." />
    <section className="content-section"><div className="contact-grid">
      <div className="contact-list">
        <div className="contact-item"><strong>Call</strong><a href="tel:+919052996161">+91 90529 96161</a></div>
        <div className="contact-item"><strong>Email</strong><a href="mailto:info@srisuprajainfracon.com">info@srisuprajainfracon.com</a></div>
        <div className="contact-item"><strong>Corporate Office</strong><span>H.No. 4-91, Above Parampara Mithai, Chandanagar, Hyderabad 500050</span></div>
      </div>
      <div className="value-card">
        <p className="eyebrow">How We Can Help</p>
        <h2>Reach the relevant Supraja team.</h2>
        <p>Call or email us with the business name and a short description of your enquiry. Our team will direct it to the appropriate company.</p>
        <a className="button primary" href="mailto:info@srisuprajainfracon.com">Email Supraja Group <span aria-hidden="true">→</span></a>
      </div>
    </div></section>
  </main>;
}
