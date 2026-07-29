import { Highlight } from '../Highlight/Highlight';
import styles from './IntroBlurb.module.css';

export default function IntroBlurb() {
  return (
    <div className={styles.wrap}>
      <div className={styles.row}>
        <span className={styles.kicker}>Case study</span>
        <p className={styles.text}>
          Nest in City is a final year project in Industrial Design at Bezalel
          Academy of Art and Design (2022-2023), developed over the course of{' '}
          <Highlight>a full year.</Highlight> I worked on the project independently,
          with professional guidance during the research phase from bee
          researcher <Highlight>Sharon Assis</Highlight> together, we carried out
          much of the biological research and field experiments involved in
          placing the nesting structures.
        </p>
      </div>
    </div>
  );
}
