"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./hrms-portfolio.module.css";

const filters = ["All", "Youtube", "Vimeo", "Details", "Popup", "Soundcloud"];
const projects = [
  { image: "fishing-hut", title: "Quiet Coastal Evenings", category: "Youtube", column: 0, tall: true },
  { image: "architecture", title: "Architectural Rhythms", category: "Details", column: 0, tall: false },
  { image: "parasols", title: "Patterns And Parasol", category: "Popup", column: 1, tall: false },
  { image: "carnival", title: "A Moment In Motion", category: "Vimeo", column: 1, tall: true },
  { image: "tablet", title: "Editorial Digital Design", category: "Details", column: 2, tall: false },
  { image: "typewriter", title: "Stories And Sound", category: "Soundcloud", column: 2, tall: true },
];

export default function HrmsPortfolio() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => { if (selected && !dialogRef.current?.open) dialogRef.current?.showModal(); }, [selected]);
  const visible = projects.filter(project => filter === "All" || project.category === filter);
  return <section className={styles.section} aria-labelledby="hrms-portfolio-heading">
    <div className={styles.container}>
      <header className={styles.heading}><p>Portfolio</p><h2 id="hrms-portfolio-heading">My Amazing Works</h2></header>
      <div className={styles.filters} role="group" aria-label="Filter portfolio projects">{filters.map(category => <button key={category} type="button" aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}</div>
      <p className="sr-only" role="status">{visible.length} projects shown</p>
      <div className={styles.grid}>{[0,1,2].map(column => <div key={column} className={styles.column}>{visible.filter(project => filter === "All" ? project.column === column : visible.indexOf(project) % 3 === column).map(project => <button type="button" key={project.image} className={`${styles.project} ${project.tall ? styles.tall : styles.short}`} onClick={() => setSelected(project)} aria-label={`Preview ${project.title}`} aria-haspopup="dialog"><Image src={`/images/hrms-portfolio/${project.image}.webp`} alt={project.title} fill sizes="(max-width:600px) 90vw, (max-width:900px) 43vw, 30vw" className="object-cover"/><span className={styles.caption}><strong>{project.title}</strong><span>{project.category} <span aria-hidden="true">↗</span></span></span></button>)}</div>)}</div>
    </div>
    <dialog ref={dialogRef} className={styles.dialog} onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}>
      {selected && <div className={styles.preview}><button type="button" className={styles.close} onClick={() => dialogRef.current?.close()} aria-label="Close project preview">×</button><div className={styles.previewImage}><Image src={`/images/hrms-portfolio/${selected.image}.webp`} alt={selected.title} fill sizes="90vw" className="object-contain"/></div><h3>{selected.title}</h3><p>{selected.category}</p></div>}
    </dialog>
  </section>;
}
