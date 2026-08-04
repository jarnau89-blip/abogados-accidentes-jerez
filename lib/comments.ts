import fs from "fs/promises";
import path from "path";

export interface BlogComment {
  slug: string;
  name: string;
  message: string;
  createdAt: string;
}

const commentsPath = path.join(process.cwd(), "data", "blog-comments.json");

export async function getBlogComments(): Promise<BlogComment[]> {
  try {
    await fs.mkdir(path.dirname(commentsPath), { recursive: true });
    const raw = await fs.readFile(commentsPath, "utf-8");
    const comments = JSON.parse(raw) as BlogComment[];
    return Array.isArray(comments) ? comments : [];
  } catch {
    return [];
  }
}

export async function saveBlogComments(comments: BlogComment[]) {
  await fs.mkdir(path.dirname(commentsPath), { recursive: true });
  await fs.writeFile(commentsPath, JSON.stringify(comments, null, 2), "utf-8");
}
