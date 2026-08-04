import { NextResponse } from "next/server";

const ADMIN_PASSWORD = process.env.BLOG_ADMIN_PASSWORD || "L29I01A2026M";

export async function POST(request: Request) {
  const { password } = await request.json();

  if (String(password || "").trim() !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Contraseña de administrador incorrecta." }, { status: 401 });
  }

  return NextResponse.json({ ok: true });
}
