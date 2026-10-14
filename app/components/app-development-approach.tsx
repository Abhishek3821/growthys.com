import Image from "next/image";
import styles from "./app-development-approach.module.css";

export default function AppDevelopmentApproach() {
  return (
    <section aria-labelledby="app-approach-heading" className={styles.section}>
      <div className={styles.layout}>
        <div className={styles.content}>
          <h2 id="app-approach-heading">Our<br />Approach</h2>
          <div className={styles.description}>
            <p>From the first idea to the final experience, we bring a thoughtful approach to everything we create.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel neque at sapien luctus volutpat eget nec mi. Vestibulum interdum augue at felis pellentesque, lobortis consequat erat posuere. Integer vel erat id turpis tincidunt dignissim. Aenean euismod nibh eget leo gravida, vitae tempor sem pellentesque. Suspendisse potenti. Duis sit amet augue sed sapien cursus ullamcorper a vitae neque.</p>
            <p>We combine simple, purposeful design with a clear understanding of your goals to create experiences that feel right for your brand.</p>
          </div>
        </div>
        <div className={styles.photos}>
          <div className={styles.lampPhoto}>
            <Image src="/images/app-development/approach/lamp-chair.webp" alt="A black tripod floor lamp beside a modern chair with a mustard yellow cushion" fill sizes="(max-width: 767px) 43vw, 25vw" className="object-cover" />
          </div>
          <div className={styles.armchairPhoto}>
            <Image src="/images/app-development/approach/teal-armchair.webp" alt="A deep teal velvet wingback armchair in a minimal grey interior" fill sizes="(max-width: 767px) 43vw, 25vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
