import Image from "next/image";
import styles from "./ecommerce-marketing-hobbies.module.css";

const hobbies = ["Reading", "Travel", "Photography", "Hiking", "Design", "Running", "Art", "Music", "Gardening"];
const photos = [
  { name: "garden", alt: "A woman relaxing in a lush tropical garden" },
  { name: "exploring", alt: "A woman exploring a sunny rocky landscape" },
  { name: "sunshine", alt: "A woman enjoying the sunshine beside a cactus" },
  { name: "weekend", alt: "A relaxed moment on a sunlit wooden bench" },
];

export default function EcommerceMarketingHobbies() {
  return (
    <section aria-labelledby="ecommerce-hobbies-heading" className={styles.section}>
      <div className={styles.poster}>
        <div className={styles.content}>
          <h2 id="ecommerce-hobbies-heading">HOBBIES</h2>
          <p className={styles.introduction}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <div className={styles.description}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div className={styles.interests}>
            <ul aria-label="Hobbies and interests">{hobbies.map((hobby) => <li key={hobby}>{hobby}</li>)}</ul>
            <p className={styles.verticalCopy}>PERSONAL INTERESTS<br />LIFE BEYOND THE WORK<br />HASU — VOL. 05</p>
          </div>
        </div>
        <div className={styles.photos}>{photos.map((photo) => <div key={photo.name} className={styles.photo}><Image src={`/images/ecommerce-marketing/hobbies/${photo.name}.webp`} alt={photo.alt} fill sizes="(max-width: 767px) 44vw, 26vw" className="object-cover" /></div>)}</div>
        <div className={styles.footer} aria-hidden="true"><span>LET’S MAKE YOUR BRAND<br />IMPOSSIBLE TO IGNORE</span><span>DESIGNED TO LEAVE A MARK</span><span>HASU — 05</span></div>
      </div>
    </section>
  );
}
