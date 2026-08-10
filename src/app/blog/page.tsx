import type { Metadata } from "next";
import { PostCard } from "@/components/Ui";
import { posts } from "@/content/site";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <main id="main" className="site-main">
      <header className="page-hero">
        <div className="shell page-hero__inner reveal" data-reveal>
          <p className="eyebrow">Blog</p>
          <h1>From the shop</h1>
          <p>
            Practical notes on planning renovations, living through them, and
            finishing well.
          </p>
        </div>
      </header>

      <div className="shell section">
        <div className="post-grid post-grid--blog">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
