import type { Metadata } from "next";
import { CtaBand } from "@/components/Ui";
import { services } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <main id="main" className="site-main">
      <header className="page-hero page-hero--services">
        <div className="page-hero__bg" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/service-wholehome.jpg"
            alt=""
            width={1600}
            height={900}
          />
        </div>
        <div className="shell page-hero__inner reveal" data-reveal>
          <p className="eyebrow">Services</p>
          <h1>Focused scopes. Durable finishes.</h1>
          <p>
            Five offerings — enough range for most homes, narrow enough that we
            stay excellent at each.
          </p>
        </div>
      </header>

      <nav
        className="shell service-jump reveal"
        data-reveal
        aria-label="Service sections"
      >
        {services.map((service) => (
          <a key={service.id} href={`#${service.id}`}>
            {service.title}
          </a>
        ))}
      </nav>

      {services.map((service, index) => (
        <section
          id={service.id}
          key={service.id}
          className={`section${index % 2 === 1 ? " section--muted" : ""}`}
        >
          <div className="shell service-detail service-detail--media reveal" data-reveal>
            <div className="service-detail__copy">
              <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
              <h2>{service.title}</h2>
              <p className="service-detail__lead">{service.lead}</p>
              <p>{service.body}</p>
            </div>
            <figure className="service-detail__figure">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={service.image}
                alt={service.alt}
                width={1100}
                height={825}
              />
            </figure>
          </div>
        </section>
      ))}

      <CtaBand
        title="Not sure which service fits?"
        text="Describe the rooms and the problem. We will recommend a path — or tell you if you need someone else."
        label="Start a conversation"
      />
    </main>
  );
}
