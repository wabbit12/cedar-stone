"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="shell site-header__inner">
        <div className="brand">
          <Link className="brand__name" href="/">
            {site.name}
          </Link>
          <span className="brand__tag">{site.tagline}</span>
        </div>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="nav-toggle__label">Menu</span>
          <span className="nav-toggle__bars" aria-hidden="true" />
        </button>

        <nav
          id="primary-nav"
          className={`primary-nav${open ? " is-open" : ""}`}
          aria-label="Primary"
        >
          <ul className="menu">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={active ? "is-active" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link className="btn btn--small btn--primary header-cta" href="/contact">
            Get a walkthrough
          </Link>
        </nav>
      </div>
    </header>
  );
}
