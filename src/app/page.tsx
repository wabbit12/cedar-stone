import Link from "next/link";
import { CtaBand, PostCard } from "@/components/Ui";
import { posts, services } from "@/content/site";

export default function HomePage() {
  const preview = services.slice(0, 4);

  return (
    <main id="main" className="site-main">
      <section className="hero" aria-label="Introduction">
        <div className="hero__media" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="hero__photo"
            src="/images/hero-kitchen.jpg"
            alt=""
            width={1600}
            height={900}
            fetchPriority="high"
          />
          <div className="hero__grain" />
        </div>
        <div className="shell hero__content">
          <p className="hero__brand reveal" data-reveal>
            Cedar &amp; Stone
          </p>
          <h1 className="hero__title reveal" data-reveal>
            Renovations that settle into the house you already love.
          </h1>
          <p className="hero__lede reveal" data-reveal>
            A local crew for kitchens, baths, and built-ins — planned carefully,
            finished cleanly, and scheduled around real life.
          </p>
          <div className="hero__actions reveal" data-reveal>
            <Link className="btn btn--primary" href="/contact">
              Book a walkthrough
            </Link>
            <Link className="btn btn--ghost" href="/services">
              See services
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="shell split">
          <figure className="split__media reveal" data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about-shop.jpg"
              alt="Cedar & Stone workshop with wood samples and tools"
              width={1100}
              height={825}
            />
          </figure>
          <div className="split__copy reveal" data-reveal>
            <p className="eyebrow">How we work</p>
            <h2>One studio. One crew. Clear next steps.</h2>
            <p>
              We are a small renovation studio — not a lead marketplace. You meet
              the people who will draw the plan and swing the hammers, and you get
              a single timeline from first walkthrough to final punch list.
            </p>
            <Link className="text-link" href="/about">
              Meet the studio
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="shell">
          <header className="section-head reveal" data-reveal>
            <p className="eyebrow">Services</p>
            <h2>What we build</h2>
            <p>
              Focused scopes with durable finishes — not every trade under the
              sun.
            </p>
          </header>

          <div className="service-grid">
            {preview.map((service) => (
              <article className="service-block reveal" data-reveal key={service.id}>
                <div className="service-block__media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.alt}
                    width={1100}
                    height={825}
                  />
                </div>
                <h3>{service.title}</h3>
                <p>{service.lead}</p>
              </article>
            ))}
          </div>

          <p className="section-cta reveal" data-reveal>
            <Link className="btn btn--secondary" href="/services">
              View all services
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <header className="section-head reveal" data-reveal>
            <p className="eyebrow">From the shop</p>
            <h2>Recent notes</h2>
          </header>
          <div className="post-grid">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to walk the rooms together?"
        text="Tell us what you want to change. We will reply with availability and a simple next step."
      />
    </main>
  );
}
