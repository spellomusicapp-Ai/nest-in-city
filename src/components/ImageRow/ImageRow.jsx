import styles from './ImageRow.module.css';

export default function ImageRow({ children, gap = 23 }) {
  return (
    <div className={styles.row} style={{ '--row-gap': `${gap}px` }}>
      {children}
    </div>
  );
}
