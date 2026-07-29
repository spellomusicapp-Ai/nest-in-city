import styles from './Caption.module.css';

export default function Caption({ children }) {
  return <p className={styles.caption}>{children}</p>;
}
