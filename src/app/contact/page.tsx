import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main id="main" className="site-main">
      <header className="page-hero">
        <div className="shell page-hero__inner reveal" data-reveal>
          <p className="eyebrow">Contact</p>
          <h1>Tell us about the rooms.</h1>
          <p>
            Share a few details and we will reply within one business day with
            availability and next steps.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="shell contact-layout">
          <div className="contact-layout__form reveal" data-reveal>
            <ContactForm />
          </div>
          <aside className="contact-layout__aside reveal" data-reveal>
            <div className="contact-card">
              <p className="site-footer__label">Studio</p>
              <p>
                {site.address[0]}
                <br />
                {site.address[1]}
              </p>
              <p>
                <a href={site.phoneHref}>{site.phone}</a>
                <br />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
              <p className="contact-card__note">
                Walkthroughs by appointment, Tuesday–Friday.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
