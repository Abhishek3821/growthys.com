"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import quickLinksImage from "../../public/images/homepage/why-partnership.webp";
import financialsImage from "../../public/images/homepage/why-team.webp";
import newsImage from "../../public/images/homepage/why-india.webp";
import styles from "./investor-information.styles";

const categories = [
  {
    id: "quick-links", title: "One Partner for Marketing and Technology", image: quickLinksImage,
    description: "Most businesses hire one agency for digital marketing and another for software development. Growthys handles both. As an IT solutions company in India and a digital marketing company, we build your website, CRM & management software, and campaigns — without the back-and-forth between vendors.",
  },
  {
    id: "financials", title: "A Team You Can Trust", image: financialsImage,
    description: "We are a reliable IT company in India with a proven track record across SEO, paid ads, web design, and HRMS software development. Our clients stay because we deliver what we promise — on time and within budget.",
  },
  {
    id: "shareholders", title: "Strategy Backed by Real Data", image: quickLinksImage,
    description: "No guesswork. Every campaign and every software development project starts with research — audience behavior, search trends, and competitor analysis. This is what makes us a professional IT solutions provider in India rather than just another agency.",
  },
  {
    id: "news-events", title: "Local Presence, Pan-India Reach", image: newsImage,
    description: "Based in Gurugram, Haryana, we serve clients across Delhi NCR and pan-India. Searching for an IT company in Gurugram, an IT company in Gaon (Gurgaon), or an IT company in Gurugram, Haryana? We're local, accessible, and we understand the market.",
  },
  {
    id: "governance", title: "Complete Services Under One Roof", image: financialsImage,
    description: "From SEO and performance marketing to CRM & management software, HRMS software development, and best design agency-quality creative — we cover the full stack. As a software development company and IT consulting company, we support every stage of your growth.",
  },
  {
    id: "shares", title: "Transparent Reporting and Ongoing Support", image: quickLinksImage,
    description: "You see the same numbers we see. Monthly reports, clear KPIs, and honest updates — even when results are slow. Our IT support services company in India-style maintenance keeps your systems running long after launch.",
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
          <h2 id="investor-heading">Why Choose Growthys</h2>
          <p className={styles.intro}>Marketing, technology, and ongoing support from one team.</p>
          <div className={styles.tabs} role="tablist" aria-label="Reasons to choose Growthys" aria-orientation="vertical">
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
