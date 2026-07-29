import { useRef, useState } from 'react';
import styles from './ImageGallery.module.css';

/**
 * Single-image horizontal gallery: one slide fills the column at a time,
 * advanced by arrows, drag, or arrow keys. Never scrolls vertically — the
 * track only ever translates on the X axis.
 */
export default function ImageGallery({ images, ratio = 387 / 288, border = 'pink' }) {
  const [index, setIndex] = useState(0);
  const drag = useRef({ active: false, startX: 0, moved: false });
  const count = images.length;

  const goTo = (next) => setIndex(Math.min(count - 1, Math.max(0, next)));

  const onPointerDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    drag.current = { active: true, startX: e.clientX, moved: false };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!drag.current.active) return;
    if (Math.abs(e.clientX - drag.current.startX) > 5) drag.current.moved = true;
  };

  const onPointerUp = (e) => {
    if (!drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    drag.current.active = false;
    if (Math.abs(dx) > 40) {
      goTo(dx < 0 ? index + 1 : index - 1);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') goTo(index + 1);
    if (e.key === 'ArrowLeft') goTo(index - 1);
  };

  const borderClass =
    border === 'olive' ? styles.borderOlive : border === 'none' ? styles.borderNone : styles.borderPink;

  return (
    <div
      className={styles.gallery}
      role="group"
      aria-roledescription="carousel"
      aria-label="Building the modular brick city, photo gallery"
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div
        className={`${styles.viewport} ${borderClass}`}
        style={{ aspectRatio: ratio }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div
          className={styles.track}
          style={{
            width: `${count * 100}%`,
            transform: `translateX(-${(100 / count) * index}%)`,
          }}
        >
          {images.map((img) => (
            <div className={styles.slide} key={img.src} style={{ width: `${100 / count}%` }}>
              <img className={styles.media} src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>

        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          aria-label="Previous photo"
        >
          <ArrowIcon flip />
        </button>
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={() => goTo(index + 1)}
          disabled={index === count - 1}
          aria-label="Next photo"
        >
          <ArrowIcon />
        </button>
      </div>

      <div className={styles.dots}>
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to photo ${i + 1} of ${count}`}
            aria-current={i === index ? 'true' : undefined}
          />
        ))}
      </div>
    </div>
  );
}

function ArrowIcon({ flip = false }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
      aria-hidden="true"
    >
      <path
        d="M9 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
