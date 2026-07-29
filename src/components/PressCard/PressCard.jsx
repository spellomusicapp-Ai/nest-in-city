import styles from './PressCard.module.css';

export default function PressCard({ card }) {
  return (
    <div className={styles.card} style={{ background: card.bg }}>
      <span className={styles.tag}>{card.tag}</span>
      <p className={styles.brand}>{card.brand}</p>
      <p className={styles.description}>{card.description}</p>
      <a className={styles.link} href={card.href} target="_blank" rel="noopener noreferrer">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M7 7l10 10M17 10v7h-7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>{card.linkLabel}</span>
      </a>
    </div>
  );
}
