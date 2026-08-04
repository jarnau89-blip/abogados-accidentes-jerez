import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getBlogPosts } from "@/lib/blog";
import { BlogComments } from "../../../components/blog-comments";

interface BlogPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const posts = await getBlogPosts();
  const post = posts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="border-b border-border bg-slate-50 py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 lg:px-8">
            <Link href="/blog" className="text-sm font-semibold text-primary hover:text-primary/80">
              ← Volver al blog
            </Link>
            <div className="mt-6">
              <p className="text-sm uppercase tracking-[0.3em] text-primary">Blog</p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
                {post.title}
              </h1>
              <p className="mt-3 text-sm text-muted-foreground">Publicado el {post.publishedAt}</p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="prose max-w-none prose-slate text-muted-foreground">
              <p>{post.content}</p>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <BlogComments slug={post.slug} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
