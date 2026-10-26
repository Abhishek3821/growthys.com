import type { Metadata } from "next";
import Image from "next/image";
import { withSocialMetadata } from "../../lib/social-metadata";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/navbar";
import SiteFooter from "../../components/site-footer";
import { blogArticles, getBlogArticle, getReadingTime } from "../../data/blog-articles";
import styles from "./article.module.css";
import { JsonLd } from "../../components/structured-data";
import { absoluteUrl, breadcrumbSchema, ORGANIZATION_ID, WEBSITE_ID } from "../../lib/structured-data";

type Props = { params: Promise<{ slug: string }> };
const dateFormat = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });

export function generateStaticParams() { return blogArticles.map(post => ({ slug: post.id })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogArticle((await params).slug);
  if (!post) return { title: "Article not found | Growthys" };
  return withSocialMetadata({ alternates: { canonical: `/blogs/${post.id}` }, title: `${post.title} | Growthys Journal`, description: post.excerpt }, `/blogs/${post.id}`, { image: post.image, imageAlt: post.imageAlt, publishedTime: post.publishedAt, author: post.author });
}

export default async function BlogArticlePage({ params }: Props) {
  const post = getBlogArticle((await params).slug);
  if (!post) notFound();
  const related = blogArticles.filter(article => article.id !== post.id).slice(0, 3);
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "BlogPosting", "@id": `${absoluteUrl(`/blogs/${post.id}`)}#article`, url: absoluteUrl(`/blogs/${post.id}`), headline: post.title, description: post.excerpt, image: [absoluteUrl(post.image)], datePublished: post.publishedAt, author: { "@type": "Organization", "@id": ORGANIZATION_ID, name: post.author, url: absoluteUrl("/insights") }, publisher: { "@id": ORGANIZATION_ID }, mainEntityOfPage: { "@id": `${absoluteUrl(`/blogs/${post.id}`)}#webpage` }, articleSection: post.category, inLanguage: "en" },
      { "@type": "WebPage", "@id": `${absoluteUrl(`/blogs/${post.id}`)}#webpage`, url: absoluteUrl(`/blogs/${post.id}`), name: post.title, isPartOf: { "@id": WEBSITE_ID }, mainEntity: { "@id": `${absoluteUrl(`/blogs/${post.id}`)}#article` } },
      breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blogs", path: "/blogs" }, { name: post.title, path: `/blogs/${post.id}` }]),
    ] }} />
    <div className={styles.page}>
      <header className={styles.navigation}><Navbar onHomePage={false} currentPage="/blogs" /></header>
      <main className={styles.main}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/blogs">← All articles</Link><span aria-hidden="true">/</span><span>{post.category}</span></nav>
        <article>
          <header className={styles.hero}>
            <div className={styles.cover}><Image src={post.image} alt={post.imageAlt} fill preload sizes="(max-width: 760px) 92vw, 48vw" /></div>
            <div className={styles.heroCopy}><span className={styles.category}>● {post.category}</span><h1>{post.title}</h1><p className={styles.excerpt}>{post.excerpt}</p><div className={styles.meta}><span className={styles.author}><span aria-hidden="true" className={styles.avatar}>{post.author.charAt(0)}</span>{post.author}</span><div><time dateTime={post.publishedAt}>{dateFormat.format(new Date(`${post.publishedAt}T00:00:00Z`))}</time><span>{getReadingTime(post)} min read</span></div></div></div>
          </header>
          <div className={styles.readingLayout}>
            <aside className={styles.contents}><nav aria-label="In this article"><p>In this article</p><ol>{post.sections.map((section, index) => <li key={section.heading}><a href={`#section-${index + 1}`}>{section.heading}</a></li>)}</ol></nav><Link href="/blogs">Explore the journal ↗</Link></aside>
            <div className={styles.body}>
              <p className={styles.lead}>{post.introduction[0]}</p>
              {post.introduction.slice(1).map(paragraph => <p key={paragraph} className="mb-9">{paragraph}</p>)}
              {post.sections.map((section, index) => <section key={section.heading} id={`section-${index + 1}`}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                {section.items && <ul className="my-5 list-disc space-y-2 pl-6">{section.items.map(item => <li key={item.text}>{item.label && <><strong>{item.label}:</strong>{" "}</>}{item.text}</li>)}</ul>}
                {section.groups?.map(group => <div key={group.heading} className="mt-5"><p><strong>{group.heading}</strong></p><ul className="my-5 list-disc space-y-2 pl-6">{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}
                {section.questions?.map((item, questionIndex) => <div key={item.question} className="mb-6"><h3 className="font-bold">{questionIndex + 1}. {item.question}</h3><p>{item.answer}</p></div>)}
                {section.after?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              </section>)}
              <div className={styles.articleEnd}><span>Words by <strong>{post.author}</strong></span><Link href="/blogs">← Back to all articles</Link></div>
            </div>
          </div>
        </article>
        {related.length > 0 && <section className={styles.related} aria-labelledby="related-articles-heading"><div className={styles.relatedHeading}><h2 id="related-articles-heading">Keep exploring.</h2><Link href="/blogs">View all articles →</Link></div><div className={styles.relatedGrid}>{related.map(article => <Link href={`/blogs/${article.id}`} className={styles.relatedCard} key={article.id}><div className={styles.relatedImage}><Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 760px) 92vw, 30vw" /></div><div><span>{article.category} · {getReadingTime(article)} min read</span><h3>{article.title}</h3><p>{article.excerpt}</p><b>Read story ↗</b></div></Link>)}</div></section>}
      </main>
    </div>
    <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" faqHref="/insights#faq" />
  </>;
}
