import SocialIcon from "./social-icon";
import { socialLinks } from "../data/social-links";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "../data/blog-posts";
import growthysIcon from "../icon.png";
import styles from "./blog-feed.styles";

const dateFormat = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

const flashNews = blogPosts;

const authors = Array.from(new Set(blogPosts.map(post => post.author))).map(name => ({
  name, detail: "Growthys editorial team", articles: blogPosts.filter(post => post.author === name).length,
}));

function AuthorPortrait({ small = false }: { small?: boolean }) {
  return (
    <span className={`${styles.portrait} ${small ? styles.smallPortrait : ""}`} aria-hidden="true">
      <Image src={growthysIcon} alt="" sizes="48px" style={{ width: "100%", height: "100%", objectFit: "contain", left: 0, top: 0 }} />
    </span>
  );
}


export default function BlogFeed() {
  return (
    <section className={styles.section} aria-labelledby="blog-feed-heading">
      <div className={styles.inner}>
        <div className={styles.sectionTitle}>
          <h2 id="blog-feed-heading"><span aria-hidden="true">#</span> Breaking News</h2>
          <span className={styles.rule} aria-hidden="true" />
        </div>

        <div className={styles.layout}>
          <div className={styles.posts}>
            {blogPosts.map((post) => (
              <article className={`${styles.post} relative`} key={post.id} id={`post-${post.id}`}>
                <Link href={`/blogs/${post.id}`} aria-label={`Read ${post.title}`} className="absolute inset-0 z-10 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#587a5a]" />
                <div className={styles.postImage}>
                  <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 45vw, 33vw" />
                </div>
                <div className={styles.postContent}>
                  <span className={styles.category}><i aria-hidden="true" />{post.category}</span>
                  <h3>{post.title}</h3>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  <div className={styles.postMeta}>
                    <span className={styles.postAuthor}><AuthorPortrait small />{post.author}</span>
                    <time dateTime={post.publishedAt}><span aria-hidden="true">•</span> {dateFormat.format(new Date(`${post.publishedAt}T00:00:00Z`))}</time>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className={styles.sidebar} aria-label="More from the journal">
            <section className={styles.sidebarSection} aria-labelledby="flash-news-heading">
              <h2 id="flash-news-heading" className={styles.sidebarHeading}>Flash news</h2>
              <div className={styles.newsList}>
                {flashNews.map((news) => (
                  <article className={`${styles.newsItem} relative`} key={news.title}>
                    <Link href={`/blogs/${news.id}`} aria-label={`Read ${news.title}`} className="absolute inset-0 z-10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#587a5a]" />
                    <div><h3>{news.title}</h3><p><span aria-hidden="true">•</span> {dateFormat.format(new Date(`${news.publishedAt}T00:00:00Z`))}</p></div>
                    <div className={styles.newsImage}><Image src={news.image} alt="" fill sizes="80px" /></div>
                  </article>
                ))}
              </div>
            </section>

            <section className={styles.sidebarSection} aria-labelledby="top-authors-heading">
              <h2 id="top-authors-heading" className={styles.sidebarHeading}>Top authors</h2>
              <ol className={styles.authors}>
                {authors.map((author, index) => (
                  <li key={author.name}>
                    <span className={styles.rank}>{index + 1}</span>
                    <div className={styles.authorDetails}><h3>{author.name}</h3><p>{author.detail}<span>{author.articles} {author.articles === 1 ? "article" : "articles"}</span></p></div>
                    <AuthorPortrait />
                  </li>
                ))}
              </ol>
            </section>

            <section className={styles.sidebarSection} aria-labelledby="follow-us-heading">
              <h2 id="follow-us-heading" className={styles.sidebarHeading}>Follow us</h2>
              <div className={styles.socials}>
                {socialLinks.map(({ name, href }) => <a className={styles.social} key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Growthys on ${name}`}><SocialIcon name={name} /><span>{name}</span></a>)}
              </div>
            </section>

            <section className={styles.sidebarSection} aria-labelledby="trending-topics-heading">
              <h2 id="trending-topics-heading" className={styles.sidebarHeading}>Trending topics</h2>
              <div className={styles.topicImage}><Image src={blogPosts[0].image} alt={blogPosts[0].imageAlt} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 30vw" /></div>
              <h3 className={styles.topicTitle}>{blogPosts[0].category}</h3>
              <p className={styles.topicDescription}>{blogPosts[0].excerpt}</p>
            </section>
          </aside>
        </div>
      </div>
    </section>
  );
}
