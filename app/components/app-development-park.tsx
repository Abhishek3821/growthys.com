import Image from "next/image";
import Link from "next/link";
import styles from "./app-development-park.module.css";

const attractions = [
  { title: "Семейные аттракционы", image: "family-ride", alt: "A colourful balloon-themed amusement park ride", color: "#ffa5aa" },
  { title: "Экстрим-аттракционы", image: "roller-coaster", alt: "A red roller coaster on a steep track with green supports", color: "#9bb9cd" },
  { title: "Другие развлечения", image: "bicycle", alt: "A turquoise city bicycle with thin black wheels", color: "#e884b2" },
];

export default function AppDevelopmentPark() {
  return (
    <section aria-labelledby="app-park-heading" className={styles.section} lang="ru">
      <div className={styles.container}>
        <h2 id="app-park-heading">Чем заняться в парке</h2>
        <p className={styles.description}>Посетители могут взять напрокат лодку или водные велосипеды и поплавать в искусственном канале.<br className="hidden lg:block" /> Для малышей можно арендовать яркие электро-паровозики.<br className="hidden lg:block" /> В парке можно покататься на лошадях и пони, а также совершить обычную туристическую поездку в паровозике. Зимой на дорожках возле стадиона действует открытый каток.<br className="hidden lg:block" /> Также в парке есть множество аттракционов на любой вкус и возраст.</p>
        <div className={styles.cards}>
          {attractions.map((attraction) => (
            <article key={attraction.image} className={styles.card} style={{ backgroundColor: attraction.color }}>
              <h3>{attraction.title}</h3>
              <Link href="/contact#contact-inquiry" className={styles.viewLink} aria-label={`Посмотреть: ${attraction.title}`}>Посмотреть</Link>
              <div className={styles.imageArea}>
                <span className={styles.arch} aria-hidden="true" />
                <Image src={`/images/app-development/park/${attraction.image}.webp`} alt={attraction.alt} fill sizes="(max-width: 767px) 85vw, 31vw" className="object-contain object-bottom" />
              </div>
            </article>
          ))}
        </div>
        <Link href="/contact#contact-inquiry" className={styles.allLink}>Все аттракционы</Link>
      </div>
    </section>
  );
}
