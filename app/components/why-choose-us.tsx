import TravelIcon from "./travel-icons";
import styles from "./why-choose-us.styles";

const stats = [
  { icon: "smile", value: "12k", lines: ["Happy and Satisfied", "Travelers"] },
  { icon: "badge", value: "10yrs", lines: ["Proven Travel", "Industry Experience"] },
  { icon: "pin", value: "50+", lines: ["Philippine Destinations", "Covered"] },
] as const;

const features = [
  {
    icon: "map",
    title: "Local Expertise",
    description: "Our Filipino travel experts craft unique experiences with insider knowledge you won't find in typical tours.",
  },
  {
    icon: "calendar",
    title: "All-in-One Booking",
    description: "Book everything in one place—easy, fast, and hassle-free, whether for quick getaways or planned vacations.",
  },
  {
    icon: "headset",
    title: "24/7 Support",
    description: "We're here anytime, anywhere. Get real-time help anytime you need it before, during, or after your trip.",
  },
] as const;

export default function WhyChooseUs() {
  return (
    <section className={styles.section} aria-labelledby="why-choose-heading">
      <div className={styles.container}>
        <div className={styles.overview}>
          <div>
            <h2 className={styles.heading} id="why-choose-heading">
              Why Thousands of Travelers Choose<br className={styles.headingBreak} />
              {" "}WANDER.ph for Their Philippine Adventures
            </h2>
            <p className={styles.intro}>
              From pristine beaches to cultural hotspots, we make exploring the
              Philippines easier, safer, and more exciting with expert-crafted
              itineraries and round-the-clock support.
            </p>
            <div className={styles.socials} aria-label="Social media">
              <TravelIcon name="instagram" title="Instagram" />
              <TravelIcon name="twitter" title="Twitter" />
              <TravelIcon name="facebook" title="Facebook" />
            </div>
          </div>

          <dl className={styles.stats}>
            {stats.map((stat) => (
              <div className={styles.stat} key={stat.value}>
                <div className={styles.statIcon}><TravelIcon name={stat.icon} /></div>
                <dt className={styles.statLabel}>{stat.lines.map((line) => <span key={line}>{line}</span>)}</dt>
                <dd className={styles.statValue}>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.features}>
          {features.map((feature) => (
            <article className={styles.feature} key={feature.title}>
              <div className={styles.featureIcon}><TravelIcon name={feature.icon} /></div>
              <div className={styles.featureContent}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
