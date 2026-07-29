import { useEffect, useRef, useState } from 'react';
import MediaFrame from '../MediaFrame/MediaFrame';
import styles from './ImageCarousel.module.css';

/**
 * Horizontally-scrollable row of fixed-size images — as many show at once
 * as naturally fit, the rest reachable via arrows, drag, trackpad, or
 * touch. Images never shrink to force everything into view; the row
 * scrolls instead. Mirrors PressCarousel's interaction model.
 */
export default function ImageCarousel({ images, ratio, itemWidth = 387, border = 'pink' }) {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

  const updateEdges = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
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
    el.scrollBy({ left: dir * (itemWidth + 23) * 2, behavior: 'smooth' });
  };

  const onPointerDown = (e) => {
    const el = trackRef.current;
    if (!el || e.pointerType !== 'mouse') return;
    drag.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
    try {
      el.setPointerCapture(e.pointerId);
    } catch {
      // Some environments report a pointerId setPointerCapture won't
      // recognize as active — dragging still works via move/up below,
      // it just won't keep tracking if the cursor leaves the element.
    }
  };

  const onPointerMove = (e) => {
    const el = trackRef.current;
    if (!el || !drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 3) drag.current.moved = true;
    el.scrollLeft = drag.current.startScroll - dx;
  };

  const endDrag = () => {
    drag.current.active = false;
  };

  const onClickCapture = (e) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  return (
    <div className={styles.wrap}>
      <div
        ref={trackRef}
        className={styles.track}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
      >
        {images.map((img) => (
          <div className={styles.item} key={img.src} style={{ width: itemWidth }}>
            <MediaFrame src={img.src} alt={img.alt} ratio={ratio} border={border} />
          </div>
        ))}
      </div>

      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={() => scrollByAmount(-1)}
        disabled={atStart}
        aria-label="Scroll images left"
      >
        <ArrowIcon flip />
      </button>
      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={() => scrollByAmount(1)}
        disabled={atEnd}
        aria-label="Scroll images right"
      >
        <ArrowIcon />
      </button>
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
