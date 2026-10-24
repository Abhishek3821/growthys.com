import Image from "next/image";
import { teamMembers } from "../data/team-members";
import styles from "./company-team.module.css";

function PortraitPlaceholder({ variant }: { variant: number }) {
  return (
    <svg viewBox="0 0 320 440" className={styles.placeholder} aria-hidden="true">
      <ellipse cx="160" cy="433" rx="122" ry="8" fill="#d9d9d7" />
      <path d="M119 176h82l14 43-55 47-55-47z" fill="#c4c5c2" />
      <path d="M119 202 76 221Q48 235 43 291L30 440h260l-13-149q-5-56-33-70l-43-19-41 39z" fill={variant % 2 ? "#6f7778" : "#969a98"} />
      <path d="m119 202 41 39-26 76-41-91zm82 0-41 39 26 76 41-91z" fill={variant % 2 ? "#858d8e" : "#abb0ad"} />
      <path d="M109 100q0-58 51-58t51 58l-4 59q-7 45-47 45t-47-45z" fill="#d1d2ce" />
      <path d={variant % 2 ? "M106 122q-15-85 53-91 70 0 57 92l-19-46q-46 20-76 6z" : "M107 125q-27-91 52-94 74 0 58 95l-22-55q-38 38-71 22z"} fill="#6d7270" />
      <path d="M81 270 65 413m174-143 16 143M160 283v157" fill="none" stroke="#ffffff" strokeOpacity=".17" strokeWidth="2" />
    </svg>
  );
}

export default function CompanyTeam() {
  return (
    <section id="our-team" className={styles.section} aria-labelledby="team-heading">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div>
            <h2 id="team-heading">Member<span className={styles.period}>.</span></h2>
            <p className={styles.eyebrow}>THE PEOPLE BEHIND GROWTHYS</p>
          </div>
          <p className={styles.intro}>Different minds. Shared ambition.<br />Meet the people who bring growth to life.</p>
        </header>

        <div className={styles.stage}>
          <div className={styles.grid}>
            {teamMembers.map((member, index) => (
              <article key={member.id} className={styles.card} tabIndex={0} aria-label={`${member.name}, ${member.role}`}>
                <span className={styles.vertical}>{member.name.split(" ").map((part, partIndex) => <span key={partIndex}>{part}</span>)}</span>
                <div className={styles.portrait}>
                  {member.photo ? <Image src={member.photo} alt={member.name} fill sizes="(max-width: 600px) 80vw, (max-width: 900px) 45vw, 30vw" className={styles.photo} /> : <PortraitPlaceholder variant={index} />}
                </div>
                <div className={styles.caption}>
                  <p className={styles.joined}>{member.joined ? `Joined ${member.joined}` : "Growthys team"}</p>
                  <h3>{member.name}</h3>
                  <p className={styles.role}>{member.role}</p>
                  <p className={styles.department}>{member.department}</p>
                  {!member.photo && <span className={styles.sample}>MEMBER PLACEHOLDER</span>}
                </div>
              </article>
            ))}
          </div>
        </div>

        <footer className={styles.footer}>
          <p>Great work starts with great people.</p>
        </footer>
      </div>
    </section>
  );
}
