import Image from "next/image";
import styles from "./app-development-gallery.module.css";

const photos = ["carousel", "ride", "wheel", "path", "flowers", "boat", "path", "wheel", "ride", "flowers", "boat", "path"];
export default function AppDevelopmentGallery() {
  return <section className={styles.section} aria-labelledby="app-gallery-heading" lang="ru">
    <div className={styles.gallery}>
      <header className={styles.heading}><h2 id="app-gallery-heading">Галерея</h2><p>Парк Гагарина — один из самых благоустроенных зелёных уголков города. В парке растут дубы, ели и клёны, по аллеям которых скачет множество белок, привыкших брать еду с рук. На водоёмах можно увидеть лебедей, а на прогулочных дорожках — найти уютное место для отдыха. Это замечательное место для семейных прогулок, любимых встреч и новых впечатлений.</p></header>
      {photos.map((name, index) => <div key={`${name}-${index}`} className={`${styles.photo} ${styles[`photo${index}`]}`}><Image src={`/images/pending-sections/${name}.webp`} alt={name === "wheel" ? "Колесо обозрения" : name === "boat" ? "Прогулка на лодке" : name === "path" ? "Зелёная аллея в парке" : name === "flowers" ? "Цветы в парке" : "Аттракцион в парке"} fill sizes="(max-width: 767px) 40vw, 20vw" className="object-cover" /></div>)}
    </div>
  </section>;
}
