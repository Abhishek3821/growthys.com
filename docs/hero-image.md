# Hero background

- Asset: `public/images/forest-cabin.webp` (1672 × 941, 471 KB).
- Generated using the built-in Imagegen tool, with the supplied screenshot as a visual reference. This is a recreated photograph, not the original photograph.
- The original generated PNG remains in the tool's generated-images directory; the project uses the optimized WebP.

## Final generation prompt

Use case: photorealistic-natural. Asset type: photographic background for an implemented website hero. Input image 1 is a composition reference, NOT a target UI to reproduce. Generate ONLY the full-bleed landscape photograph inside its rounded card, aspect ratio approximately 16:9, high resolution. Match the photograph in the reference as closely as possible: a small tall weathered rustic timber wilderness hut with sloping grey corrugated metal roof at center-left (roof reaches around 27% from top, cabin spans x 28%-55%), nestled in dense lush temperate Australian rainforest, dark trunks on both edges and right side, drooping fern-like canopy above, mossy green ground and rocks, a single small hiker with mustard ochre jacket, backpack and dark pants walking away from camera toward the cabin at x 39%, y 76%, small wooden footbridge to right of cabin. Wide documentary landscape photo, realistic texture, subdued natural overcast light, muted olive greens and charcoal browns, deep moody forest. Preserve framing and subjects from reference. Crucially REMOVE ALL lettering, navigation, headings, paragraphs, logos, lines, arrows, icons, page frame and grey outside background. Photo only, no text or graphics anywhere. Do not recreate the website screenshot. The full image is the forest photograph.

## Scope

The home page hero is implemented as a reusable client component. Story controls cycle the three featured headings. A separate Navbar component matches the supplied pill navigation reference and sits at the top center. Its reference labels and section anchors are ready for future content; only the home target exists currently. On mobile, the navigation scrolls horizontally. Social buttons open sharing dialogs.
