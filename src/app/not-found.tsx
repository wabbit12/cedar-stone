import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main id="main" className="site-main">
      <header className="page-hero">
        <div className="shell page-hero__inner reveal is-visible" data-reveal>
          <p className="eyebrow">404</p>
          <h1>That page is not on the job site.</h1>
          <p>Try the home page, or head back to services.</p>
          <p>
            <Link className="btn btn--primary" href="/">
              Back home
            </Link>
          </p>
        </div>
      </header>
    </main>
  );
}
