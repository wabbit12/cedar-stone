import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/content/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main id="main" className="site-main">
      <article className="single-post">
        <header className="page-hero">
          <div className="shell page-hero__inner reveal" data-reveal>
            <p className="eyebrow">{post.dateLabel}</p>
            <h1>{post.title}</h1>
          </div>
        </header>

        <div className="shell prose-wrap section reveal" data-reveal>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="single-post__thumb"
            src={post.image}
            alt=""
            width={1200}
            height={675}
          />
          <div className="entry-content">
            {post.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <footer className="entry-footer">
            <p>
              <Link className="text-link" href="/blog">
                Back to the blog
              </Link>
            </p>
          </footer>
        </div>
      </article>
    </main>
  );
}
