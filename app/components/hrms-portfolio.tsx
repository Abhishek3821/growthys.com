"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./hrms-portfolio.module.css";
import { hrmsContent } from "../data/hrms-content";

const filters = ["All", "Attendance", "Payroll", "Leave", "People", "Insights"];
const projects = [
  { image: "attendance-tracking", alt: "A time clock, employee badge and shift timeline illustrating attendance, geo-tracking and overtime management.", ...hrmsContent.modules.items[0], category: "Attendance", column: 0, tall: true },
  { image: "payroll-management", alt: "A payroll dashboard, payslips, calculator and compliance shield illustrating automated salary processing.", ...hrmsContent.modules.items[1], category: "Payroll", column: 0, tall: false },
  { image: "leave-management", alt: "A leave calendar, mobile request card and approval checkmark illustrating leave policies and approvals.", ...hrmsContent.modules.items[2], category: "Leave", column: 1, tall: false },
  { image: "employee-records", alt: "An employee profile, document folders and lock illustrating secure employee records and contracts.", ...hrmsContent.modules.items[3], category: "People", column: 1, tall: true },
  { image: "reports-analytics", alt: "A glass dashboard with charts and headcount indicators illustrating HR reports and leadership analytics.", ...hrmsContent.modules.items[6], category: "Insights", column: 2, tall: false },
  { image: "recruitment-onboarding", alt: "Candidate profile cards following a connected path to an onboarding checklist and welcome doorway.", ...hrmsContent.modules.items[4], category: "People", column: 2, tall: true },
];

export default function HrmsPortfolio() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => { if (selected && !dialogRef.current?.open) dialogRef.current?.showModal(); }, [selected]);
  const visible = projects.filter(project => filter === "All" || project.category === filter);
  return <section className={styles.section} aria-labelledby="hrms-portfolio-heading">
    <div className={styles.container}>
      <header className={styles.heading}><p>Connected HR Workflows</p><h2 id="hrms-portfolio-heading">Explore Growthys HRMS</h2></header>
      <div className={styles.filters} role="group" aria-label="Filter HRMS workflows">{filters.map(category => <button key={category} type="button" aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}</div>
      <p className="sr-only" role="status">{visible.length} HRMS workflows shown</p>
      <div className={styles.grid}>{[0,1,2].map(column => <div key={column} className={styles.column}>{visible.filter(project => filter === "All" ? project.column === column : visible.indexOf(project) % 3 === column).map(project => <button type="button" key={project.image} className={`${styles.project} ${project.tall ? styles.tall : styles.short}`} onClick={() => setSelected(project)} aria-label={`Preview ${project.title}`} aria-haspopup="dialog"><Image src={`/images/hrms/graphics/${project.image}.webp`} quality={95} alt={project.alt} fill sizes="(max-width:600px) 90vw, (max-width:900px) 43vw, 30vw" className="object-cover"/><span className={styles.caption}><strong>{project.title}</strong><span>{project.category} <span aria-hidden="true">↗</span></span></span></button>)}</div>)}</div>
    </div>
    <dialog ref={dialogRef} className={styles.dialog} onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}>
      {selected && <div className={styles.preview}><button type="button" className={styles.close} onClick={() => dialogRef.current?.close()} aria-label="Close HRMS workflow preview">×</button><div className={styles.previewImage}><Image src={`/images/hrms/graphics/${selected.image}.webp`} quality={95} alt={selected.alt} fill sizes="90vw" className="object-contain"/></div><h3>{selected.title}</h3><p>{selected.description}</p></div>}
    </dialog>
  </section>;
}
