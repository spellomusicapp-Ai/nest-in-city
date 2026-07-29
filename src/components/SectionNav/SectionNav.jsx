import { useEffect, useRef, useState } from 'react';
import { NAV_SECTIONS } from '../../data/navSections';
import styles from './SectionNav.module.css';

export default function SectionNav() {
  const [activeId, setActiveId] = useState(NAV_SECTIONS[0].id);
  const linkRefs = useRef({});
  const navRef = useRef(null);

  useEffect(() => {
    const sections = NAV_SECTIONS.map((s) => document.getElementById(s.id)).filter(
      Boolean
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // The sticky sidebar is a flex sibling of <main>, so it stretches to
  // match main's full height by default — including the last section's
  // ~90px trailing bottom padding before FinalCover. That makes the
  // sticky nav's boundary run past the actual text into that empty gap.
  // Cap nav's own height at where the last section's real content ends
  // instead, so the sticky list stops level with the text, not the padding.
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const lastId = NAV_SECTIONS[NAV_SECTIONS.length - 1].id;

    const updateHeight = () => {
      // Below the tablet breakpoint the nav becomes a horizontal pill bar
      // (see SectionNav.module.css) — it must not get a tall height override.
      if (window.innerWidth <= 768) {
        nav.style.height = '';
        return;
      }
      const layout = nav.parentElement;
      const lastSection = document.getElementById(lastId);
      const lastBody = lastSection?.querySelector('[class*="_body_"]');
      if (!layout || !lastBody) return;
      const layoutTop = layout.getBoundingClientRect().top;
      const bodyBottom = lastBody.getBoundingClientRect().bottom;
      nav.style.height = `${Math.max(0, bodyBottom - layoutTop)}px`;
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    const id = window.setTimeout(updateHeight, 300);
    return () => {
      window.removeEventListener('resize', updateHeight);
      window.clearTimeout(id);
    };
  }, []);

  useEffect(() => {
    const el = linkRefs.current[activeId];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeId]);

  const handleClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav ref={navRef} className={styles.nav} aria-label="Case study sections">
      <ul className={styles.list}>
        {NAV_SECTIONS.map((section) => (
          <li key={section.id}>
            <a
              ref={(el) => {
                linkRefs.current[section.id] = el;
              }}
              href={`#${section.id}`}
              className={`${styles.link} ${
                activeId === section.id ? styles.active : ''
              }`}
              onClick={(e) => handleClick(e, section.id)}
              aria-current={activeId === section.id ? 'true' : undefined}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
