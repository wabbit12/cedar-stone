import Link from "next/link";
import type { Post } from "@/content/site";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="post-card reveal" data-reveal>
      <Link className="post-card__link" href={`/blog/${post.slug}`}>
        <div className="post-card__media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.image} alt="" width={640} height={420} />
        </div>
        <p className="post-card__meta">{post.dateLabel}</p>
        <h2 className="post-card__title">{post.title}</h2>
        <p className="post-card__excerpt">{post.excerpt}</p>
      </Link>
    </article>
  );
}

export function CtaBand({
  title,
  text,
  href = "/contact",
  label = "Contact the studio",
}: {
  title: string;
  text: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="cta-band">
      <div className="shell cta-band__inner reveal" data-reveal>
        <h2>{title}</h2>
        <p>{text}</p>
        <Link className="btn btn--primary" href={href}>
          {label}
        </Link>
      </div>
    </section>
  );
}
