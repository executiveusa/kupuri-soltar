/**
 * Postiz API client — SUELTA / Kupuri Media
 *
 * Postiz is a self-hosted open-source social media scheduler.
 * Self-host: https://postiz.com  |  Docker: docker pull postiz/postiz
 *
 * Environment variables required:
 *   POSTIZ_API_URL   — your Postiz instance URL (e.g. https://social.kupurimedia.com)
 *   POSTIZ_API_KEY   — API key from your Postiz dashboard
 */

const POSTIZ_API_URL = process.env.POSTIZ_API_URL ?? "http://localhost:3000";
const POSTIZ_API_KEY = process.env.POSTIZ_API_KEY ?? "";

export interface PostizPost {
  content: string;
  date: string; // ISO
  platforms: { id: string }[];
  image?: string;
  tags?: string[];
}

export interface PostizResult {
  id: string;
  status: "scheduled" | "published" | "failed";
  url?: string;
}

async function postizFetch(path: string, init: RequestInit): Promise<unknown> {
  const res = await fetch(`${POSTIZ_API_URL}/api${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${POSTIZ_API_KEY}`,
      ...(init.headers ?? {}),
    },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Postiz API error ${res.status}: ${body}`);
  }
  return res.json();
}

export async function schedulePost(post: PostizPost): Promise<PostizResult> {
  const data = await postizFetch("/posts", {
    method: "POST",
    body: JSON.stringify(post),
  }) as PostizResult;
  return data;
}

export async function listScheduledPosts(): Promise<PostizResult[]> {
  const data = await postizFetch("/posts?status=scheduled", {
    method: "GET",
  }) as { posts: PostizResult[] };
  return data.posts ?? [];
}

export async function deletePost(postId: string): Promise<void> {
  await postizFetch(`/posts/${postId}`, { method: "DELETE" });
}
