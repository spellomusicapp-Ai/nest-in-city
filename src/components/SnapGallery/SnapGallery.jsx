import { useEffect, useRef, useState } from 'react';
import { asset } from '../../utils/asset';
import styles from './SnapGallery.module.css';

/**
 * Content-column-width horizontal gallery: scroll-snap, centered
 * pagination dots, and no arrows. Mouse drag + native trackpad/touch
 * scrolling both work; vertical page scroll is never hijacked
 * (touch-action: pan-x).
 */
export default function SnapGallery({ images, ratio = 387 / 396, border = 'pink', size = 'compact' }) {
  const trackRef = useRef(null);
  const itemRefs = useRef([]);
  const [active, setActive] = useState(0);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

  const borderClassFor = (b) =>
    b === 'olive' ? styles.borderOlive : b === 'none' ? styles.borderNone : styles.borderPink;

  const updateActive = () => {
    const el = trackRef.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let closest = 0;
    let closestDist = Infinity;
    itemRefs.current.forEach((item, i) => {
      if (!item) return;
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const dist = Math.abs(itemCenter - center);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    setActive(closest);
  };

  useEffect(() => {
    updateActive();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);
    return () => {
      el.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, [images.length]);

  const goTo = (i) => {
    const item = itemRefs.current[i];
    item?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  const onPointerDown = (e) => {
    const el = trackRef.current;
    if (!el || e.pointerType !== 'mouse') return;
    drag.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
    try {
      el.setPointerCapture(e.pointerId);
    } catch {
      // Not every environment reports a pointerId setPointerCapture accepts.
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
    <div className={`${styles.wrap} ${size === 'large' ? styles.large : ''}`}>
      <div
        ref={trackRef}
        className={styles.track}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
      >
        {images.map((img, i) => (
          <div
            className={styles.item}
            key={img.src}
            style={{ aspectRatio: ratio }}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
          >
            <div className={`${styles.frame} ${borderClassFor(img.border || border)}`}>
              <img
                className={styles.media}
                src={asset(img.src)}
                alt={img.alt}
                style={img.objectPosition ? { objectPosition: img.objectPosition } : undefined}
              />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.dots} role="tablist" aria-label="Gallery pagination">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Show photo ${i + 1} of ${images.length}`}
            className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
