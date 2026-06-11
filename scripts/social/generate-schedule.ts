/**
 * generate-schedule.ts
 *
 * Pushes the 5-week SUELTA content calendar to your Postiz instance.
 *
 * Usage:
 *   POSTIZ_API_URL=https://your-postiz.com \
 *   POSTIZ_API_KEY=your-key \
 *   npx tsx scripts/social/generate-schedule.ts
 *
 * Dry run (no API calls):
 *   DRY_RUN=true npx tsx scripts/social/generate-schedule.ts
 */

import { contentCalendar, type ScheduledPost } from "../../src/content/social/content-calendar";
import { schedulePost } from "./postiz-client";

const DRY_RUN = process.env.DRY_RUN === "true";

// Map your Postiz platform integration IDs here
const PLATFORM_IDS: Record<string, string> = {
  instagram: process.env.POSTIZ_IG_ID ?? "ig-integration-id",
  tiktok: process.env.POSTIZ_TT_ID ?? "tt-integration-id",
  threads: process.env.POSTIZ_TH_ID ?? "th-integration-id",
};

const IMAGE_BASE_URL =
  process.env.IMAGE_BASE_URL ?? "https://kupuri-soltar.vercel.app/images/soltar";

function buildCaption(post: ScheduledPost): string {
  const tagLine = post.hashtags.join(" ");
  return `${post.caption}${tagLine ? `\n\n${tagLine}` : ""}`;
}

async function run() {
  const drafts = contentCalendar.filter((p) => p.status === "draft");
  console.log(`\n📅 SUELTA Content Calendar — ${drafts.length} posts to schedule\n`);

  let success = 0;
  let failed = 0;

  for (const post of drafts) {
    const platformId = PLATFORM_IDS[post.platform];
    const caption = buildCaption(post);
    const imageUrl = `${IMAGE_BASE_URL}/${post.imageRef}.png`;

    console.log(`→ [${post.id}] ${post.platform} · ${post.format} · ${post.scheduledAt.slice(0, 10)}`);
    console.log(`  "${caption.slice(0, 80)}…"`);

    if (DRY_RUN) {
      console.log("  [DRY RUN — not posted]\n");
      success++;
      continue;
    }

    try {
      const result = await schedulePost({
        content: caption,
        date: post.scheduledAt,
        platforms: [{ id: platformId }],
        image: imageUrl,
      });
      console.log(`  ✓ Scheduled — Postiz ID: ${result.id}\n`);
      success++;
    } catch (err) {
      console.error(`  ✗ Failed: ${(err as Error).message}\n`);
      failed++;
    }
  }

  console.log(`\n✅ Done — ${success} scheduled, ${failed} failed\n`);
  if (failed > 0) process.exit(1);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
