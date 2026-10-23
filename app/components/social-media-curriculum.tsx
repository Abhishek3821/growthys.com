import { socialMediaContent } from "../data/social-media-content";
import Image from "next/image";
import styles from "./social-media-curriculum.module.css";

const lessons = socialMediaContent.work.items;

export default function SocialMediaCurriculum() {
  return <section className={styles.section} aria-labelledby="social-curriculum-heading"><div className={styles.layout}>
    <div className={styles.collage}>
      <span className={styles.frame} aria-hidden="true"/>
      <div className={styles.mainPhoto}><Image quality={95} src="/images/social-media/graphics/reel-campaign.webp" alt="A fashion reel campaign mockup with a smartphone and film contact sheets" fill sizes="(max-width:767px) 85vw, 34vw" className="object-cover"/></div>
      <div className={styles.designPhoto}><Image quality={95} src="/images/social-media/graphics/festive-carousel.webp" alt="A festive home decor carousel campaign with layered social post creatives" fill sizes="(max-width:767px) 42vw, 17vw" className="object-cover"/></div>
      <div className={styles.workspacePhoto}><Image quality={95} src="/images/social-media/graphics/linkedin-content.webp" alt="A professional social content system with a tablet feed and reach chart" fill sizes="(max-width:767px) 42vw, 17vw" className="object-cover"/></div>
      <div className={styles.featured}><span>FEATURED</span><strong>WORK</strong></div>
      <span className={styles.badge} aria-hidden="true">✦</span>
    </div>
    <div className={styles.content}><h2 id="social-curriculum-heading" aria-label={socialMediaContent.work.title}>Work That Speaks<br/>for Itself<span>.</span></h2>
      <ol className={styles.lessons}>{lessons.map((lesson,index)=><li key={index}><span className={styles.number}>{String(index+1).padStart(2,"0")}</span><h3>{lesson.title}</h3><p>{lesson.description}</p></li>)}</ol>
    </div>
  </div></section>;
}
