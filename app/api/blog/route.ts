import { NextResponse } from "next/server";
import { getBlogPosts, saveBlogPosts, type BlogPost } from "@/lib/blog";

function createSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80);
}

export async function GET() {
  const posts = await getBlogPosts();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const body = await request.json();
  const title = String(body.title || "").trim();
  const excerpt = String(body.excerpt || "").trim();
  const content = String(body.content || "").trim();

  if (!title || !excerpt || !content) {
    return NextResponse.json({ error: "Título, resumen y contenido son obligatorios." }, { status: 400 });
  }

  const posts = await getBlogPosts();
  const baseSlug = createSlug(title) || `post-${Date.now()}`;
  let slug = baseSlug;
  let suffix = 1;

  while (posts.some((post) => post.slug === slug)) {
    slug = `${baseSlug}-${suffix}`;
    suffix += 1;
  }

  const publishedAt = new Date().toISOString().split("T")[0];
  const newPost: BlogPost = {
    slug,
    title,
    excerpt,
    content,
    publishedAt,
  };

  const updatedPosts = [newPost, ...posts];
  await saveBlogPosts(updatedPosts);
  return NextResponse.json(newPost, { status: 201 });
}
