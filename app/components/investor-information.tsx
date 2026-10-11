"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import quickLinksImage from "../../public/images/investors/quick-links.webp";
import financialsImage from "../../public/images/investors/financials.webp";
import newsImage from "../../public/images/investors/news-events.webp";
import styles from "./investor-information.module.css";

const categories = [
  {
    id: "quick-links", title: "Quick Links", image: quickLinksImage,
    description: "A clear view of our business starts with the information that matters. Explore our strategy, company updates and investor insights to understand the ideas shaping our future. This space brings our story together, connecting business progress with the people, priorities and opportunities behind it.",
  },
  {
    id: "financials", title: "Financials and Filings", image: financialsImage,
    description: "Financial reporting brings context to a company's journey. From annual performance to quarterly developments, a clear understanding of the numbers helps investors follow business priorities and long-term direction. This section focuses on financial results, reporting milestones and the disclosures that support informed conversations.",
  },
  {
    id: "shareholders", title: "Shareholder's Services", image: quickLinksImage,
    description: "Strong shareholder relationships begin with clear communication. This space focuses on the information and support shareholders need, from understanding important company updates to navigating common questions. A thoughtful approach to shareholder services helps make each interaction simpler, more accessible and easier to follow.",
  },
  {
    id: "news-events", title: "News & Events", image: newsImage,
    description: "Every milestone adds a new chapter to our story. Follow the announcements, conversations and events that reflect our evolving business and the ideas driving it forward. From company news to investor-focused discussions, this space offers a closer look at the developments shaping what comes next.",
  },
  {
    id: "governance", title: "Corporate Governance", image: financialsImage,
    description: "Good governance provides a foundation for thoughtful decisions and lasting relationships. Clear responsibilities, ethical conduct and accountable leadership help connect business ambitions with the interests of stakeholders. This section introduces the principles, policies and oversight that guide a responsible approach to building for the future.",
  },
  {
    id: "shares", title: "Shares", image: newsImage,
    description: "Understanding a company's ownership is part of understanding its journey. Share information brings together the context behind capital structure, shareholder participation and market disclosures. This space focuses on the details that help investors build a clearer picture of ownership and its connection to the wider business.",
  },
];

export default function InvestorInformation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number;
    switch (event.key) {
      case "ArrowDown": nextIndex = (index + 1) % categories.length; break;
      case "ArrowUp": nextIndex = (index - 1 + categories.length) % categories.length; break;
      case "Home": nextIndex = 0; break;
      case "End": nextIndex = categories.length - 1; break;
      default: return;
    }
    event.preventDefault();
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <section className={styles.section} id="investor-information" aria-labelledby="investor-heading">
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <h2 id="investor-heading">Investor Information</h2>
          <p className={styles.intro}>Explore our financial performance, regulatory filings, shareholder services, corporate governance practices, share details, and the latest news and events.</p>
          <div className={styles.tabs} role="tablist" aria-label="Investor information categories" aria-orientation="vertical">
            {categories.map((category, index) => (
              <button
                key={category.id}
                ref={(element) => { tabRefs.current[index] = element; }}
                className={styles.tab}
                type="button"
                role="tab"
                id={`investor-tab-${category.id}`}
                aria-controls={`investor-panel-${category.id}`}
                aria-selected={activeIndex === index}
                tabIndex={activeIndex === index ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => handleTabKey(event, index)}
              >{category.title}</button>
            ))}
          </div>
        </div>
        <div className={styles.panels}>
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={styles.panel}
              role="tabpanel"
              id={`investor-panel-${category.id}`}
              aria-labelledby={`investor-tab-${category.id}`}
              hidden={activeIndex !== index}
              tabIndex={0}
            >
              <div className={styles.visual}>
                <Image src={category.image} alt="" fill placeholder="blur" sizes="(max-width: 800px) 94vw, (max-width: 1544px) 55vw, 815px" className={styles.image} />
              </div>
              <div className={styles.panelCopy}>
                <p>{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
