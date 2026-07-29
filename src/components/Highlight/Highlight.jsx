import styles from './Highlight.module.css';

/**
 * Inline yellow-highlighter treatment for a phrase within running body
 * copy — same `.mark` styling as HighlightQuote, just without the
 * wrapping <p> so it can sit inside an existing paragraph.
 */
export function Highlight({ children }) {
  return <mark className={styles.mark}>{children}</mark>;
}

/** Yellow-highlighter text block, used for pull quotes. */
export function HighlightQuote({ children }) {
  return (
    <p className={styles.quote}>
      <mark className={styles.mark}>{children}</mark>
    </p>
  );
}

/**
 * Yellow-highlighter CTA. Renders a plain, visually-identical placeholder
 * when `href` is falsy so the real URL can be dropped in later with zero
 * markup changes.
 */
export function HighlightCTA({ href, children }) {
  if (!href) {
    return (
      <span className={styles.ctaPlaceholder} aria-disabled="true">
        {children}
      </span>
    );
  }
  return (
    <a className={styles.cta} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
