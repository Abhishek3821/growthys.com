# Blog feed assets and static content

The Breaking News section is rendered directly below the Blogs hero on `/blogs`. The supplied reference guides the stacked article cards, Flash News, Top Authors, social badges and Trending Topics sidebar.

## Adding a card

Append a new entry to `blogPosts` in `app/data/blog-posts.ts`. The list renders every item in order, so the new card appears below the existing cards. Give it a unique `id`, title, category, excerpt, image path, image alt text, author name, portrait index (0–7), and ISO publication date. Images belong under `public/images/blogs/`. No backend or CMS is connected. The content and author details are static demo data; social badges are presentation-only until profile URLs are provided.

## Images

Mode: built-in image_gen, generate. Generated artwork was optimized to local WebP images. The existing project portrait atlas supplies author portraits. Main article images are reused for the static sidebar thumbnails and trending topic.

### nature-return

Saved path: `public/images/blogs/nature-return.webp`

Final prompt:

Use case: stylized-concept. Asset type: landscape editorial image for a contemplative blog card. Primary request: a futuristic tall sculptural glass building made of slender translucent vertical prisms standing between two monumental dark natural rock cliffs beside a calm shallow coastal inlet; geometric glass towers reflect soft gold and pale blue, still black rocks scattered in foreground water, misty open sea beyond. Composition: landscape 4:3, building centered between cliffs, rocky water in foreground, pale overcast sky. Style: photorealistic architectural visualization, poetic restrained sci-fi, quiet cinematic daylight, slate blue and gray palette with small warm golden accents. No text, no UI, no logos, no watermark.

### seeds-whisper

Saved path: `public/images/blogs/seeds-whisper.webp`

Final prompt:

Use case: stylized-concept. Asset type: landscape surreal editorial blog photograph. Primary request: a small translucent golden amber cube delicately balanced above a larger pale honey-colored cube, both resting on a clear melting block of ice among crystalline white snow and soft ice formations, rippling water reflecting the golden shapes in foreground. Composition: landscape 4:3, centered sculpture, macro still life, softly blurred ice and snow background, serene diffuse winter daylight, tactile frosty textures, subtle warm-versus-cold colors. Elegant conceptual art photography. No text, no UI, no logos, no watermark.

### stone-stories

Saved path: `public/images/blogs/stone-stories.webp`

Final prompt:

Use case: photorealistic-natural. Asset type: landscape editorial blog photograph. Primary request: an elevated view of dramatic jagged pale pink-gray limestone rock spires in a peaceful mountain landscape, layered dark green mountains stretching far into the distance, a spectacular soft coral orange and violet sunset across the horizon, delicate wispy clouds in the pink sky. Composition: landscape 4:3, angular rock formations rise from lower right foreground, distant mountain valleys on left, sky occupies upper third, gentle evening light, poetic realistic nature travel photography. No people, no buildings, no text, no UI, no logos, no watermark.

### mountain-breath

Saved path: `public/images/blogs/mountain-breath.webp`

Final prompt:

Use case: photorealistic-natural. Asset type: landscape editorial blog photograph. Primary request: close-up portrait of a young adult woman wearing a puffy white winter hood zipped around her face, eyes peacefully closed, pale natural skin, serene expression, a delicate small pale flower resting beside the edge of the hood near her temple. Background: calm deep blue-green open sea or alpine lake, no land visible. Composition: landscape 4:3, upper body and face centered slightly left, water fills background. Cool soft daylight, quiet introspective cinematic fashion editorial photography, natural realistic face and skin. No text, no UI, no logos, no watermark.

### earth-listening

Saved path: `public/images/blogs/earth-listening.webp`

Final prompt:

Use case: photorealistic-natural. Asset type: landscape editorial blog photograph. Primary request: a young adult woman with tied-back brown hair wearing minimal over-ear silver headphones and a simple light sleeveless top, standing quietly on a sunlit modern outdoor terrace beside a thin metal railing, looking toward the sea with relaxed expression. Composition: landscape 4:3, woman framed from waist up on left-center, clean railing rises diagonally on right, vivid pale blue sky and turquoise sea behind. Minimal Mediterranean summer atmosphere, natural candid editorial photography, soft warm sunlight. No text, no UI, no logos, no watermark.

