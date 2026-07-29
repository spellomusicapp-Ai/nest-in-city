import { asset } from '../../utils/asset';
import styles from './FinalCover.module.css';

export default function FinalCover() {
  return (
    <div className={styles.cover}>
      <img
        className={styles.image}
        src={asset('/assets/images/final-cover.jpg')}
        alt="Finished modular brick nesting habitats, cast in hamra soil, arranged like a small city"
      />
    </div>
  );
}
