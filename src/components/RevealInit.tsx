"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let observer: IntersectionObserver | null = null;
    let frame = 0;

    // Wait one frame so the new route's DOM is in place after client navigation.
    frame = window.requestAnimationFrame(() => {
      const reveals = document.querySelectorAll<HTMLElement>("[data-reveal]");

      if (reduceMotion || !("IntersectionObserver" in window)) {
        reveals.forEach((el) => el.classList.add("is-visible"));
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
      );

      reveals.forEach((el) => {
        // Above-the-fold content should show immediately on route change.
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
        if (inView) {
          el.classList.add("is-visible");
        } else {
          observer?.observe(el);
        }
      });
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
