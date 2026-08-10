import type { Metadata } from "next";
import { CtaBand } from "@/components/Ui";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main id="main" className="site-main">
      <header className="page-hero page-hero--about">
        <div className="shell page-hero__inner reveal" data-reveal>
          <p className="eyebrow">About</p>
          <h1>Cedar &amp; Stone</h1>
          <p>
            A renovation studio built around careful craft, plain communication,
            and homes that already feel lived in.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="shell split">
          <div className="split__copy reveal" data-reveal>
            <p className="eyebrow">Our story</p>
            <h2>
              We started on jobs where the drawings looked better than the rooms.
            </h2>
            <p>
              Cedar &amp; Stone grew out of residential carpentry in the Riverbend
              area. After years of patching poor planning on other people&apos;s
              projects, we built a studio that keeps design and build under one
              roof — so decisions stay coherent from first walkthrough to final
              coat of paint.
            </p>
            <p>
              Today we take on a limited number of kitchens, baths, and carpentry
              projects each season. That constraint is intentional: you get a crew
              that knows your house, not a rotating cast of subcontractors chasing
              the next bid.
            </p>
          </div>
          <figure className="about-figure reveal" data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about-shop.jpg"
              alt="Mill Creek shop with trim samples and tools"
              width={1100}
              height={825}
            />
            <figcaption>
              Mill Creek shop — where trim, built-ins, and finish samples live.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--muted">
        <div className="shell">
          <header className="section-head reveal" data-reveal>
            <p className="eyebrow">Principles</p>
            <h2>What we refuse to rush</h2>
          </header>
          <div className="principle-grid">
            <article className="principle reveal" data-reveal>
              <h3>Measure twice, schedule once</h3>
              <p>
                We lock scope and sequence before demo. Surprises still happen;
                chaos does not.
              </p>
            </article>
            <article className="principle reveal" data-reveal>
              <h3>Materials you can live with</h3>
              <p>
                We specify finishes for wear, cleaning, and how light hits the
                room — not just how they photograph.
              </p>
            </article>
            <article className="principle reveal" data-reveal>
              <h3>One voice on site</h3>
              <p>
                You always know who to call. Weekly updates keep decisions moving
                without weekend fire drills.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CtaBand
        title="Want to see if we are a fit?"
        text="Book a walkthrough. We will be honest about timeline, budget range, and whether your project matches how we work."
        label="Contact us"
      />
    </main>
  );
}
