"use client";

import Image from "next/image";
import { useState } from "react";
import personalImage from "../../public/images/banking/personal.webp";
import businessImage from "../../public/images/banking/business.webp";
import freelanceImage from "../../public/images/banking/freelance.webp";
import styles from "./banking-section.styles";

const plans = [
  {
    name: "Personal",
    summaryTitle: "Grow your way.",
    summaryText: "Build visibility, leads, and brand presence in one place.",
    image: personalImage,
    description: "The all-in-one plan for startups and solo founders. SEO, website, and social media — home or away, local or global.",
  },
  {
    name: "Business",
    summaryTitle: "Business to grow.",
    summaryText: "Keep marketing, sales systems, and business finances connected.",
    image: businessImage,
    description: "A simpler way to run your company's digital growth. Manage campaigns, CRM, and team systems in one place.",
  },
  {
    name: "Enterprise",
    summaryTitle: "Work your way.",
    summaryText: "Bring projects, platforms, and enterprise growth together.",
    image: freelanceImage,
    description: "Built for the way large teams work. Keep IT services company in India operations, CRM & management software, and marketing aligned — wherever work takes you.",
  },
];

function Arrow() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function BankingSection() {
  const [activePlan, setActivePlan] = useState(0);

  return (
    <section className={styles.section} id="digital-banking" aria-labelledby="banking-heading">
      <div className={styles.container}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Growth Plans</p>
            <h2 id="banking-heading">
              <span>Discover The <span className={styles.freedom}>Freedom<svg viewBox="0 0 200 24" fill="none" preserveAspectRatio="none" aria-hidden="true"><path d="M3 19C39 2 119 2 130 8c8 5-21 10-25 12 35-10 64-14 92-11" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg></span></span>
              <span>of Growing on Your Terms</span>
            </h2>
          </div>
          <div className={styles.headerAction}>
            <p>Get SEO, ads, web development, CRM & management software, and HRMS software development — all in one scalable partnership.</p>
            <button className={styles.demoButton} type="button" disabled>Get Growth Plan <span><Arrow /></span></button>
          </div>
        </header>

        <div className={styles.cards} aria-label="Growth plans">
          {plans.map((plan, index) => {
            const active = index === activePlan;
            const nextIndex = (index + 1) % plans.length;
            return (
              <article className={styles.card} data-active={active} data-plan={index === 2 ? "freelance" : plan.name.toLowerCase()} key={plan.name}>
                <Image src={plan.image} alt="" fill placeholder="blur" sizes="(max-width: 760px) 94vw, (max-width: 1544px) 60vw, 920px" className={styles.cardImage} />
                <div className={styles.shade} />
                {!active && <button className={styles.planSelector} type="button" aria-label={`Show ${plan.name} plan`} aria-expanded={false} aria-controls={`banking-${index}`} onClick={() => setActivePlan(index)}><span>{plan.name}</span></button>}
                <div className={styles.details} id={`banking-${index}`} hidden={!active}>
                  <div className={styles.planCopy}><h3>{plan.name}</h3><p>{plan.description}</p></div>
                  <div className={styles.summary}>
                    <h4>{plan.summaryTitle}</h4>
                    <p>{plan.summaryText}</p>
                  </div>
                </div>
                {active && <button className={styles.nextButton} type="button" aria-label={`Show ${plans[nextIndex].name} plan`} onClick={() => setActivePlan(nextIndex)}><Arrow /></button>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
