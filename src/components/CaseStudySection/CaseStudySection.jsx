import styles from './CaseStudySection.module.css';

export default function CaseStudySection({ id, label, children }) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.column}>
        <p className={styles.kicker}>{label}</p>
        <div className={`${styles.body} case-study-section`}>{children}</div>
      </div>
    </section>
  );
}
