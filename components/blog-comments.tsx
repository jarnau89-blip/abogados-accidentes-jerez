"use client";

import { FormEvent, useEffect, useState } from "react";

interface Comment {
  slug: string;
  name: string;
  message: string;
  createdAt: string;
}

export function BlogComments({ slug }: { slug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchComments();
  }, [slug]);

  async function fetchComments() {
    setLoading(true);
    const response = await fetch(`/api/blog/comments?slug=${encodeURIComponent(slug)}`, {
      cache: "no-store",
    });
    if (response.ok) {
      const data = await response.json();
      setComments(data);
    }
    setLoading(false);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);

    if (!message.trim()) {
      setStatus("Escribe un comentario antes de enviar.");
      return;
    }

    const response = await fetch("/api/blog/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, name: name.trim() || "Anónimo", message }),
    });

    if (response.ok) {
      setMessage("");
      setName("");
      setStatus("Comentario enviado. Gracias por participar.");
      fetchComments();
    } else {
      const data = await response.json();
      setStatus(data.error || "No se pudo enviar el comentario.");
    }
  }

  return (
    <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground">Comentarios</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Déjanos tu opinión o pregunta sobre este artículo. Otros lectores podrán ver los comentarios.
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-foreground">Nombre (opcional)</label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-border bg-slate-50 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
            placeholder="Tu nombre o Anónimo"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground">Comentario</label>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={4}
            className="mt-2 w-full rounded-3xl border border-border bg-slate-50 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
            placeholder="Escribe tu comentario aquí..."
          />
        </div>
        <div className="flex items-center justify-between gap-4">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
          >
            Enviar comentario
          </button>
          {status && <p className="text-sm text-muted-foreground">{status}</p>}
        </div>
      </form>

      <div className="mt-10">
        <h3 className="mb-4 text-xl font-semibold text-foreground">Comentarios recientes</h3>
        {loading ? (
          <p className="text-sm text-muted-foreground">Cargando comentarios...</p>
        ) : comments.length === 0 ? (
          <p className="text-sm text-muted-foreground">Sé el primero en comentar este artículo.</p>
        ) : (
          <div className="space-y-4">
            {comments.map((comment, index) => (
              <div key={`${comment.createdAt}-${index}`} className="rounded-3xl border border-border bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-3 text-sm text-muted-foreground">
                  <span>{comment.name || "Anónimo"}</span>
                  <span>{new Date(comment.createdAt).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}</span>
                </div>
                <p className="mt-2 text-sm leading-7 text-foreground">{comment.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
