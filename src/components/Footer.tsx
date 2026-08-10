import Link from "next/link";
import { nav, site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div className="site-footer__brand">
          <p className="site-footer__name">{site.name}</p>
          <p className="site-footer__text">
            Local renovation studio — kitchens, baths, and careful carpentry for
            homes already lived in.
          </p>
        </div>

        <div className="site-footer__col">
          <p className="site-footer__label">Visit</p>
          <p className="site-footer__text">
            {site.address[0]}
            <br />
            {site.address[1]}
          </p>
          <p className="site-footer__text">
            <a href={site.phoneHref}>{site.phone}</a>
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>

        <div className="site-footer__col">
          <p className="site-footer__label">Explore</p>
          <ul className="footer-menu">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="shell site-footer__bar">
        <p>
          &copy; {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
