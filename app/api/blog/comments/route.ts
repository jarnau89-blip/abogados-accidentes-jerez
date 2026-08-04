import { NextResponse } from "next/server";
import { getBlogComments, saveBlogComments, type BlogComment } from "@/lib/comments";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const slug = url.searchParams.get("slug") || "";

  if (!slug) {
    return NextResponse.json({ error: "Falta el parámetro slug." }, { status: 400 });
  }

  const comments = await getBlogComments();
  const postComments = comments.filter((comment) => comment.slug === slug);
  return NextResponse.json(postComments);
}

export async function POST(request: Request) {
  const body = await request.json();
  const slug = String(body.slug || "").trim();
  const name = String(body.name || "Anónimo").trim();
  const message = String(body.message || "").trim();

  if (!slug || !message) {
    return NextResponse.json({ error: "Slug y mensaje son obligatorios." }, { status: 400 });
  }

  const comments = await getBlogComments();
  const newComment: BlogComment = {
    slug,
    name: name || "Anónimo",
    message,
    createdAt: new Date().toISOString(),
  };

  const updatedComments = [newComment, ...comments];
  await saveBlogComments(updatedComments);

  return NextResponse.json(newComment, { status: 201 });
}
