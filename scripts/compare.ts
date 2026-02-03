/**
 * Visual Comparison Script
 * เปรียบเทียบ original.png กับ generated screenshot
 *
 * Usage: npx ts-node scripts/compare.ts examples/04-siam-rent-hero
 */

import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import * as fs from 'fs';
import * as path from 'path';

async function compare(exampleDir: string) {
  const originalPath = path.join(exampleDir, 'original.png');
  const previewPath = path.join(exampleDir, 'preview.html');
  const generatedPath = path.join(exampleDir, 'generated.png');
  const diffPath = path.join(exampleDir, 'diff.png');

  // 1. Take screenshot of preview.html
  console.log('📸 Taking screenshot of preview.html...');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`file://${path.resolve(previewPath)}`);
  await page.screenshot({ path: generatedPath, fullPage: true });
  await browser.close();
  console.log(`✓ Saved to ${generatedPath}`);

  // 2. Load both images
  console.log('🔍 Comparing images...');
  const original = PNG.sync.read(fs.readFileSync(originalPath));
  const generated = PNG.sync.read(fs.readFileSync(generatedPath));

  // Resize if needed (use smaller dimensions)
  const width = Math.min(original.width, generated.width);
  const height = Math.min(original.height, generated.height);

  // 3. Compare
  const diff = new PNG({ width, height });
  const numDiffPixels = pixelmatch(
    original.data,
    generated.data,
    diff.data,
    width,
    height,
    { threshold: 0.1 }
  );

  // 4. Calculate match percentage
  const totalPixels = width * height;
  const matchPercent = ((totalPixels - numDiffPixels) / totalPixels * 100).toFixed(1);

  // 5. Save diff image
  fs.writeFileSync(diffPath, PNG.sync.write(diff));
  console.log(`✓ Diff saved to ${diffPath}`);

  // 6. Report
  console.log('\n📊 Results:');
  console.log(`   Total pixels: ${totalPixels.toLocaleString()}`);
  console.log(`   Different pixels: ${numDiffPixels.toLocaleString()}`);
  console.log(`   Match: ${matchPercent}%`);

  if (parseFloat(matchPercent) >= 95) {
    console.log('\n✅ PASS: >= 95% match');
  } else if (parseFloat(matchPercent) >= 90) {
    console.log('\n⚠️  CLOSE: >= 90% match (needs fine-tuning)');
  } else {
    console.log('\n❌ FAIL: < 90% match (needs more work)');
  }

  return parseFloat(matchPercent);
}

// Run
const exampleDir = process.argv[2] || 'examples/04-siam-rent-hero';
compare(exampleDir).catch(console.error);
