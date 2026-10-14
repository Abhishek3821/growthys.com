import Link from "next/link";

export default function ArticleNotFound() {
  return <main className="grid min-h-screen place-content-center gap-5 bg-[#f8f9f7] px-6 text-center text-[#292d27]"><p className="text-sm uppercase tracking-widest">Growthys Journal · 404</p><h1 className="text-4xl font-semibold">This story could not be found.</h1><p>Explore the journal to find another thoughtful read.</p><Link href="/blogs" className="mx-auto rounded-full border border-[#829674] px-6 py-3 focus-visible:outline-2 focus-visible:outline-offset-4">← Back to blogs</Link></main>;
}
