import { asset } from '../../utils/asset';
import styles from './MediaFrame.module.css';

/**
 * Bordered, rounded image/video container matching the Figma "image" frames.
 * `ratio` is width/height (e.g. 343/255) and drives aspect-ratio, so layouts
 * reflow correctly at any column width instead of relying on fixed pixels.
 */
export default function MediaFrame({
  src,
  alt = '',
  ratio,
  border = 'pink',
  fit = 'cover',
  video = false,
  controls = false,
  dim = false,
  style,
}) {
  const borderClass =
    border === 'olive' ? styles.borderOlive : border === 'none' ? styles.borderNone : styles.borderPink;

  return (
    <div
      className={`${styles.frame} ${borderClass}`}
      style={{ aspectRatio: ratio, ...style }}
    >
      {video ? (
        <video
          className={styles.media}
          src={asset(src)}
          style={{ objectFit: fit }}
          controls={controls}
          playsInline
        />
      ) : (
        <img className={styles.media} src={asset(src)} alt={alt} style={{ objectFit: fit }} />
      )}
      {dim && <div className={styles.dim} />}
    </div>
  );
}
