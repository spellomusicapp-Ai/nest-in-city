import { asset } from '../../utils/asset';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <video
        className={styles.video}
        src={asset('/assets/videos/hero-video.mp4')}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className={styles.content}>
        <h1 className={styles.title}>
          Nesting in the <br />
          city
        </h1>
        <p className={styles.subtitle}>
          A workshop for building modular nesting habitats for wild bees from
          biological research to installation in the community garden
        </p>
      </div>
    </section>
  );
}
