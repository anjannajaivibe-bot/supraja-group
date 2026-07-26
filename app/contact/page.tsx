"use client";
import { FormEvent, useState } from "react";
import { PageHero } from "../components";

export default function ContactPage() {
  const [sent,setSent]=useState(false);
  function submit(e:FormEvent){e.preventDefault();setSent(true);}
  return <main>
    <PageHero eyebrow="Contact Supraja Group" title="Start a conversation with our team." copy="Reach us for business enquiries, partnerships, careers or information about any Supraja Group company." />
    <section className="content-section"><div className="contact-grid">
      <div className="contact-list">
        <div className="contact-item"><strong>Call</strong><a href="tel:+919052996161">+91 90529 96161</a></div>
        <div className="contact-item"><strong>Email</strong><a href="mailto:support@srisuprajainfracon.com">support@srisuprajainfracon.com</a></div>
        <div className="contact-item"><strong>Corporate Office</strong><span>H.No. 4-91, Above Parampara Mithai, Chandanagar, Hyderabad 500050</span></div>
      </div>
      {sent ? <div className="value-card"><p className="eyebrow">Thank you</p><h2>We received your enquiry.</h2><p>Our team will contact you shortly.</p></div> :
      <form className="contact-form" onSubmit={submit}>
        <label>Full name<input name="name" required autoComplete="name" /></label>
        <label>Phone number<input name="phone" required inputMode="tel" autoComplete="tel" /></label>
        <label className="full">Email address<input type="email" name="email" autoComplete="email" /></label>
        <label className="full">Enquiry about<select name="business"><option>General enquiry</option><option>Real Estate</option><option>Hospitality</option><option>Parampara</option><option>Supraja Foundation</option><option>Partnership or Careers</option></select></label>
        <label className="full">Message<textarea name="message" required /></label>
        <button className="button primary" type="submit">Send Enquiry →</button>
      </form>}
    </div></section>
  </main>;
}
