// Generates public/favicon.ico and public/apple-touch-icon.png from public/logo.svg.
// Run with: node scripts/gen-icons.mjs
import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const svg = readFileSync(join(root, "public/logo.svg"));

// --- favicon.ico: PNG-encoded entries at 16/32/48 px (supported by all modern browsers) ---
const sizes = [16, 32, 48];
const pngs = await Promise.all(
  sizes.map((s) => sharp(svg).resize(s, s).png().toBuffer()),
);

const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(pngs.length, 4); // image count

let offset = 6 + 16 * pngs.length;
const entries = pngs.map((png, i) => {
  const e = Buffer.alloc(16);
  e.writeUInt8(sizes[i], 0); // width
  e.writeUInt8(sizes[i], 1); // height
  e.writeUInt8(0, 2); // palette colors
  e.writeUInt8(0, 3); // reserved
  e.writeUInt16LE(1, 4); // color planes
  e.writeUInt16LE(32, 6); // bits per pixel
  e.writeUInt32LE(png.length, 8); // image data size
  e.writeUInt32LE(offset, 12); // image data offset
  offset += png.length;
  return e;
});

writeFileSync(
  join(root, "public/favicon.ico"),
  Buffer.concat([header, ...entries, ...pngs]),
);

// --- apple-touch-icon.png: 180x180, flattened on the brand background ---
await sharp(svg)
  .resize(180, 180)
  .flatten({ background: "#0f172a" })
  .png()
  .toFile(join(root, "public/apple-touch-icon.png"));

console.log("Generated public/favicon.ico and public/apple-touch-icon.png");
