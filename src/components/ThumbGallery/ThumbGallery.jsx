import { useEffect, useRef, useState } from 'react';
import styles from './ThumbGallery.module.css';

/**
 * Large main image with a horizontally-scrollable thumbnail strip below it.
 * Clicking (or arrowing to) a thumbnail swaps the main image. Thumbnails
 * keep a fixed size — when they don't all fit, the strip scrolls instead
 * of shrinking them.
 */
export default function ThumbGallery({
  images,
  mainRatio = 800 / 539,
  thumbSize = 120,
  border = 'pink',
}) {
  const [selected, setSelected] = useState(0);
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);

  const borderClass =
    border === 'olive' ? styles.borderOlive : border === 'none' ? styles.borderNone : styles.borderPink;

  const updateEdges = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  };

  useEffect(() => {
    updateEdges();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateEdges, { passive: true });
    window.addEventListener('resize', updateEdges);
    return () => {
      el.removeEventListener('scroll', updateEdges);
      window.removeEventListener('resize', updateEdges);
    };
  }, [images.length]);

  const scrollByAmount = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (thumbSize + 12) * 2, behavior: 'smooth' });
  };

  const selectThumb = (i) => {
    setSelected(i);
    const el = trackRef.current;
    const thumb = el?.children[i];
    thumb?.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
  };

  return (
    <div className={styles.wrap}>
      <div className={`${styles.main} ${borderClass}`} style={{ aspectRatio: mainRatio }}>
        <img className={styles.mainImage} src={images[selected].src} alt={images[selected].alt} />
      </div>

      <div className={styles.thumbRail}>
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={() => scrollByAmount(-1)}
          disabled={atStart}
          aria-label="Scroll thumbnails left"
        >
          <ArrowIcon flip />
        </button>

        <div className={styles.thumbTrack} ref={trackRef} role="tablist" aria-label="Photo thumbnails">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              role="tab"
              aria-selected={i === selected}
              aria-label={`Show photo ${i + 1} of ${images.length}`}
              className={`${styles.thumb} ${borderClass} ${i === selected ? styles.thumbSelected : ''}`}
              style={{ width: thumbSize, height: thumbSize }}
              onClick={() => selectThumb(i)}
            >
              <img className={styles.thumbImage} src={img.src} alt="" />
            </button>
          ))}
        </div>

        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={() => scrollByAmount(1)}
          disabled={atEnd}
          aria-label="Scroll thumbnails right"
        >
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
}

function ArrowIcon({ flip = false }) {
  return (
    <svg
      width="16"
      height="16"
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
