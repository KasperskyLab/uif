import { expect, test } from '@playwright/test';
import { readFileSync } from 'node:fs';
import path from 'node:path';

type StorybookIndex = {
  entries: Record<
    string,
    {
      id: string;
      title: string;
      name: string;
      type: string;
      tags?: string[];
    }
  >;
};

const indexPath = path.join(process.cwd(), 'storybook-static', 'index.json');

const storybookIndex = JSON.parse(
  readFileSync(indexPath, 'utf-8')
) as StorybookIndex;

const stories = Object.values(storybookIndex.entries)
  .filter((entry) => entry.type === 'story')
  .filter((entry) => !entry.tags?.includes('skip-visual'));

for (const story of stories) {
  test(`${story.title} / ${story.name}`, async ({ page }) => {
    await page.clock.install({
      time: new Date('2026-01-01T00:00:00.000Z'),
    });

    await page.goto(`/iframe.html?id=${story.id}&viewMode=story`);

    await page.addStyleTag({
      content: `
        *,
        *::before,
        *::after {
          animation-duration: 0s !important;
          animation-delay: 0s !important;
          transition-duration: 0s !important;
          transition-delay: 0s !important;
          caret-color: transparent !important;
        }
      `
    });

    await page.evaluate(async () => {
      await document.fonts?.ready;
    });

    const root = page.locator('#storybook-root, #root').first();

    await expect(root).toBeVisible();

    const delayMsRaw = await page.locator('[data-visual-root]').first().getAttribute('data-visual-delay-ms')
    const delayMs = Number(delayMsRaw);

    if (Number.isFinite(delayMs) && delayMs > 0) {
      await test.step(`wait ${delayMs}ms before screenshot`, async () => {
        await page.waitForTimeout(delayMs);
      });
    }

    await expect(root).toHaveScreenshot(`${story.id}.png`);
  });
}