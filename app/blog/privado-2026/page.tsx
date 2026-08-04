"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
}

export default function BlogAdminPage() {
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem("blog-admin-logged-in");
    if (saved === "true") {
      setLoggedIn(true);
    }
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const response = await fetch("/api/blog");
    if (response.ok) {
      const data = await response.json();
      setPosts(data);
    }
  }

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const response = await fetch("/api/blog/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (response.ok) {
      setLoggedIn(true);
      window.localStorage.setItem("blog-admin-logged-in", "true");
      setStatus("Has iniciado sesión correctamente.");
    } else {
      const data = await response.json();
      setError(data.error || "Contraseña incorrecta.");
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    setError(null);

    if (!password) {
      setError("Necesitas iniciar sesión con la contraseña de administrador.");
      return;
    }

    const response = await fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, excerpt, content, password }),
    });

    if (response.ok) {
      setTitle("");
      setExcerpt("");
      setContent("");
      setStatus("Artículo publicado correctamente.");
      fetchPosts();
    } else {
      const data = await response.json();
      setError(data.error || "No se pudo publicar el artículo.");
    }
  }

  function handleLogout() {
    window.localStorage.removeItem("blog-admin-logged-in");
    setLoggedIn(false);
    setStatus("Sesión cerrada.");
  }

  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl rounded-3xl border border-border bg-white p-8 shadow-xl">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Administración del blog</p>
            <h1 className="mt-3 text-3xl font-bold text-foreground">Publicar noticias sin tocar código</h1>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Solo un administrador puede publicar artículos. También puedes ver los artículos publicados y gestionar el blog.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/blog"
              className="inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Volver a Blog
            </Link>
            {loggedIn && (
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Cerrar sesión
              </button>
            )}
          </div>
        </div>

        {!loggedIn ? (
          <form className="space-y-6 rounded-3xl border border-border bg-slate-50 p-6" onSubmit={handleLogin}>
            <h2 className="text-xl font-semibold text-foreground">Acceso de administrador</h2>
            <p className="text-sm text-muted-foreground">
              Introduce la contraseña para acceder al panel de publicación.
            </p>
            <label className="block">
              <span className="text-sm font-medium text-foreground">Contraseña</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                placeholder="Contraseña de administrador"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
            >
              Entrar como administrador
            </button>
            {error && <p className="text-sm text-destructive">{error}</p>}
          </form>
        ) : (
          <>
            <form className="space-y-6 rounded-3xl border border-border bg-slate-50 p-6" onSubmit={handleSubmit}>
              <div className="grid gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-foreground">Título</span>
                  <input
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                    placeholder="Ej: Novedades en el baremo 2026"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-foreground">Resumen</span>
                  <input
                    value={excerpt}
                    onChange={(event) => setExcerpt(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                    placeholder="Ej: Todo lo que debes saber para reclamar después de un accidente"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-medium text-foreground">Contenido completo</span>
                <textarea
                  value={content}
                  onChange={(event) => setContent(event.target.value)}
                  rows={8}
                  className="mt-2 w-full rounded-3xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                  placeholder="Escribe aquí el contenido del artículo..."
                />
              </label>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
                >
                  Publicar artículo
                </button>
                {(status || error) && (
                  <p className={`text-sm ${error ? "text-destructive" : "text-foreground"}`}>
                    {error || status}
                  </p>
                )}
              </div>
            </form>

            <div className="mt-12 rounded-3xl border border-border bg-slate-50 p-6">
              <h2 className="mb-4 text-xl font-semibold text-foreground">Artículos publicados</h2>
              <div className="space-y-4">
                {posts.map((post) => (
                  <div key={post.slug} className="rounded-3xl border border-border bg-white p-4">
                    <div className="flex items-center justify-between gap-3 text-sm text-muted-foreground">
                      <span>{post.publishedAt}</span>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">{post.slug}</span>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-foreground">{post.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
                  </div>
                ))}
                {posts.length === 0 && (
                  <p className="text-sm text-muted-foreground">No hay artículos publicados todavía.</p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
