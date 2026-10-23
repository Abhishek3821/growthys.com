# Performance Marketing hero

Route: `/performance-marketing`. The Services dropdown links to this page on
desktop and mobile. The hero uses Tailwind utilities and the shared navbar.

The hero uses a campaign analytics workspace graphic generated with the built-in
image generation tool, stored at
`public/images/services/performance-marketing/campaign-growth-hero.webp`.
It replaces the previous solar-panel photograph within the same layout.

The reference-inspired layout uses a warm image treatment, large heading,
desktop cutout, and three campaign feature cards. On mobile, the image and
cards stack without the desktop cutout. Both enquiry links open the existing
contact inquiry section.

All eight replacement graphics live in the same image folder, with generated
originals preserved in its `originals/` subfolder. Final WebP files are exported
at 4K dimensions using Lanczos3 upscaling, not native 4K generation.
Actual native and export sizes are in `performance-marketing-image-sizes.json`.
The complete prompts are in `performance-marketing-image-prompts.json`.
Run `node scripts/prepare-performance-images.mjs` to reproduce the exports.
