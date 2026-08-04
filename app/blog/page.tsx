import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="border-b border-border bg-slate-50 py-12 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 lg:px-8 text-center">
            <Link href="/" className="mb-2 inline-block text-sm font-bold text-foreground hover:underline">
              Accidente Legal
            </Link>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">Blog</p>
            <h1 className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl">
              Noticias y artículos sobre accidentes de tráfico
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-8 text-muted-foreground">
              Encuentra contenidos prácticos, novedades legales y recursos para reclamar tu indemnización con más seguridad.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {posts.length > 0 ? (
                posts.map((post) => (
                  <article
                    key={post.slug}
                    className="flex h-full flex-col rounded-3xl border border-border bg-background p-8 shadow-sm transition hover:shadow-lg"
                  >
                    <div className="mb-4 flex items-center justify-between gap-3 text-sm text-muted-foreground">
                      <span>{post.publishedAt}</span>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">Blog</span>
                    </div>
                    <h2 className="mb-3 text-2xl font-semibold text-foreground">
                      {post.title}
                    </h2>
                    <p className="mb-6 text-sm leading-7 text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center justify-between gap-4">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-sm font-semibold text-primary transition hover:text-primary/80"
                      >
                        Leer artículo →
                      </Link>
                    </div>
                  </article>
                ))
              ) : (
                <div className="rounded-3xl border border-border bg-background p-12 text-center text-muted-foreground">
                  No hay artículos publicados todavía. Usa el panel de administración para añadir noticias.
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
