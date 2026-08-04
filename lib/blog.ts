import fs from "fs/promises";
import path from "path";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
}

const postsPath = path.join(process.cwd(), "data", "blog-posts.json");

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    await fs.mkdir(path.dirname(postsPath), { recursive: true });
    const raw = await fs.readFile(postsPath, "utf-8");
    const posts = JSON.parse(raw) as BlogPost[];
    return Array.isArray(posts) ? posts : [];
  } catch {
    return [];
  }
}

export async function saveBlogPosts(posts: BlogPost[]) {
  await fs.mkdir(path.dirname(postsPath), { recursive: true });
  await fs.writeFile(postsPath, JSON.stringify(posts, null, 2), "utf-8");
}
