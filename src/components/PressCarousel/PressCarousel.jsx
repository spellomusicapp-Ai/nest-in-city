import { useEffect, useRef, useState } from 'react';
import PressCard from '../PressCard/PressCard';
import styles from './PressCarousel.module.css';

/**
 * Press-card carousel matching the Process/Solution SnapGallery pattern:
 * scroll-snap, edge fades, centered pagination dots, no arrows. All cards
 * share one fixed height sized for the longest content, so the row stays
 * visually even regardless of per-card copy length.
 */
export default function PressCarousel({ cards }) {
  const trackRef = useRef(null);
  const itemRefs = useRef([]);
  const [active, setActive] = useState(0);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

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
  }, [cards.length]);

  const goTo = (i) => {
    const item = itemRefs.current[i];
    item?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  const onPointerDown = (e) => {
    const el = trackRef.current;
    if (!el || e.pointerType !== 'mouse') return;
    // A press starting directly on the "Read article" link should always
    // behave like a plain link click — never arm drag-tracking for it, so
    // no amount of incidental cursor jitter during the click can get
    // mistaken for a drag and swallow the navigation.
    if (e.target.closest('a')) return;
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
    <div className={styles.wrap}>
      <div className={styles.fadeLeft} aria-hidden="true" />
      <div className={styles.fadeRight} aria-hidden="true" />

      <div
        ref={trackRef}
        className={styles.track}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
      >
        {cards.map((card, i) => (
          <div
            className={styles.item}
            key={card.id}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
          >
            <PressCard card={card} />
          </div>
        ))}
      </div>

      <div className={styles.dots} role="tablist" aria-label="Press card pagination">
        {cards.map((card, i) => (
          <button
            key={card.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Show press card ${i + 1} of ${cards.length}`}
            className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
