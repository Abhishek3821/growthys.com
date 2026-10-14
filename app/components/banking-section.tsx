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
    summaryTitle: "Bank your way.",
    summaryText: "Spend, save and manage your money in one place.",
    image: personalImage,
    description: "The all-in-one plan for banking, saving, investing, and travel. Home or away, local or global — move freely between countries and currencies.",
  },
  {
    name: "Business",
    summaryTitle: "Room to grow.",
    summaryText: "Keep payments, team spending and business finances together.",
    image: businessImage,
    description: "A simpler way to run your business. Manage payments, cards and team expenses, all in one place.",
  },
  {
    name: "Freelance",
    summaryTitle: "Work your way.",
    summaryText: "Bring your projects, payments and everyday banking together.",
    image: freelanceImage,
    description: "Built for the way you work. Keep projects, payments and everyday spending together, wherever work takes you.",
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
            <p className={styles.eyebrow}>Digital Banking</p>
            <h2 id="banking-heading">
              <span>Discover the <span className={styles.freedom}>freedom<svg viewBox="0 0 200 24" fill="none" preserveAspectRatio="none" aria-hidden="true"><path d="M3 19C39 2 119 2 130 8c8 5-21 10-25 12 35-10 64-14 92-11" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg></span></span>
              <span>of banking on your terms</span>
            </h2>
          </div>
          <div className={styles.headerAction}>
            <p>Get business banking, card, bill pay, travel, and reimbursements — all in one scalable solution</p>
            <button className={styles.demoButton} type="button" disabled>Get Demo Account <span><Arrow /></span></button>
          </div>
        </header>

        <div className={styles.cards} aria-label="Banking plans">
          {plans.map((plan, index) => {
            const active = index === activePlan;
            const nextIndex = (index + 1) % plans.length;
            return (
              <article className={styles.card} data-active={active} data-plan={plan.name.toLowerCase()} key={plan.name}>
                <Image src={plan.image} alt="" fill placeholder="blur" sizes="(max-width: 760px) 94vw, (max-width: 1544px) 60vw, 920px" className={styles.cardImage} />
                <div className={styles.shade} />
                {!active && <button className={styles.planSelector} type="button" aria-label={`Show ${plan.name} banking`} aria-expanded={false} aria-controls={`banking-${index}`} onClick={() => setActivePlan(index)}><span>{plan.name}</span></button>}
                <div className={styles.details} id={`banking-${index}`} hidden={!active}>
                  <div className={styles.planCopy}><h3>{plan.name}</h3><p>{plan.description}</p></div>
                  <div className={styles.summary}>
                    <h4>{plan.summaryTitle}</h4>
                    <p>{plan.summaryText}</p>
                  </div>
                </div>
                {active && <button className={styles.nextButton} type="button" aria-label={`Show ${plans[nextIndex].name} banking`} onClick={() => setActivePlan(nextIndex)}><Arrow /></button>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
