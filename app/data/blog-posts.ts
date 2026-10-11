export type BlogPost = {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  author: string;
  authorPortrait: number;
  publishedAt: string;
};

// Static demo content. Append new entries to display more cards at the bottom.
// A future CMS can supply the same fields without changing the card layout.
export const blogPosts: BlogPost[] = [
  {
    id: "nature-return",
    category: "World",
    title: "When nature stops waiting for us to return",
    excerpt: "There comes a time when the wild no longer looks for us. Forests learn to grow without footsteps, and rivers forget the sound of our names.",
    image: "/images/blogs/nature-return.webp",
    imageAlt: "Sculptural glass towers between dark cliffs beside a quiet coastal inlet",
    author: "Tair",
    authorPortrait: 0,
    publishedAt: "2026-06-18",
  },
  {
    id: "seeds-whisper",
    category: "Environment",
    title: "Beneath the soil, seeds whisper about another day",
    excerpt: "Even in stillness, life speaks softly. Hidden under the quiet earth, small voices promise a future we cannot yet see.",
    image: "/images/blogs/seeds-whisper.webp",
    imageAlt: "Warm amber cubes resting on translucent ice and soft snow",
    author: "Sera",
    authorPortrait: 1,
    publishedAt: "2026-06-18",
  },
  {
    id: "stone-stories",
    category: "Fashion",
    title: "Stories the stones keep to themselves",
    excerpt: "The earth remembers everything: our footsteps, our fires, our silence. Stones keep their own kind of truth, patient and wordless.",
    image: "/images/blogs/stone-stories.webp",
    imageAlt: "Pink limestone spires above green mountain valleys beneath a coral sunset",
    author: "Nira",
    authorPortrait: 2,
    publishedAt: "2026-06-18",
  },
  {
    id: "mountain-breath",
    category: "Solitude",
    title: "When the mountains breathe at first dawn",
    excerpt: "Morning finds its way through mist and memory. The peaks rise into a gentle light, as if they are waking from an ancient dream.",
    image: "/images/blogs/mountain-breath.webp",
    imageAlt: "A woman resting with closed eyes in a white winter hood beside blue water",
    author: "Lior",
    authorPortrait: 3,
    publishedAt: "2026-06-18",
  },
  {
    id: "earth-listening",
    category: "Reflection",
    title: "Listening to the earth between storms",
    excerpt: "There is a calm voice in the pause before everything begins again. Sometimes the clearest way forward is to slow down and listen.",
    image: "/images/blogs/earth-listening.webp",
    imageAlt: "A woman wearing headphones on a bright terrace overlooking the sea",
    author: "Mira",
    authorPortrait: 4,
    publishedAt: "2026-06-18",
  },
];
