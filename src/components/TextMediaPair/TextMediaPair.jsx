import styles from './TextMediaPair.module.css';

/**
 * A paragraph running alongside a fixed-width media frame (used once in
 * Research). Stacks vertically once the row can no longer fit both without
 * squeezing the text to nothing.
 */
export default function TextMediaPair({ children, media }) {
  return (
    <div className={styles.pair}>
      <p className={styles.text}>{children}</p>
      <div className={styles.media}>{media}</div>
    </div>
  );
}
