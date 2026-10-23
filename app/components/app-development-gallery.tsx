import { appDevelopmentContent } from "../data/app-development-content";
import Image from "next/image";
import styles from "./app-development-gallery.module.css";

const photos = ["accounts", "payments", "tracking", "offline", "analytics", "app-types", "discovery", "testing", "hero", "accounts", "product-planning", "analytics"];
export default function AppDevelopmentGallery() {
  return <section className={styles.section} aria-labelledby="app-gallery-heading" lang="en">
    <div className={styles.gallery}>
      <header className={styles.heading}><h2 id="app-gallery-heading" aria-label={appDevelopmentContent.process.title}>Idea to App Store</h2><p>{appDevelopmentContent.process.intro} {appDevelopmentContent.process.steps.join(" · ")} {appDevelopmentContent.process.closing}</p></header>
      {photos.map((name, index) => <div key={`${name}-${index}`} className={`${styles.photo} ${styles[`photo${index}`]}`}><Image quality={95} src={`/images/app-development/graphics/${name}.webp`} alt={`App development: ${name.replaceAll("-", " ")}`} fill sizes="(max-width: 767px) 40vw, 20vw" className="object-cover" /></div>)}
    </div>
  </section>;
}
