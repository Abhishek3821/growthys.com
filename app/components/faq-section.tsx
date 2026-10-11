"use client";

import { useState } from "react";
import styles from "./faq-section.module.css";

const questions = Array.from({ length: 4 }, (_, index) => ({
  id: index,
  question: "Placeholder question goes here?",
  answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text.",
}));

type FaqSectionProps = {
  items?: { id: number; question: string; answer: string }[];
  eyebrow?: string;
};

export default function FaqSection({ items = questions, eyebrow = "Trusted by" }: FaqSectionProps = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={styles.section} id="faq" aria-labelledby="faq-heading">
      <div className={styles.container}>
        <header className={styles.header}>
          <p>{eyebrow}</p>
          <h2 id="faq-heading">Frequently<span>Asked Questions</span></h2>
        </header>
        <div className={styles.questions}>
          {items.map((item, index) => {
            const open = openIndex === index;
            return (
              <article className={styles.questionCard} data-open={open} key={item.id}>
                <h3>
                  <button
                    className={styles.questionButton}
                    type="button"
                    id={`faq-question-${index}`}
                    aria-controls={`faq-answer-${index}`}
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? null : index)}
                  >
                    <span>{item.question}</span>
                    <span className={styles.toggle} aria-hidden="true"><svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M10 5v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></span>
                  </button>
                </h3>
                <div className={styles.answer} id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`} hidden={!open}>
                  <p>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
