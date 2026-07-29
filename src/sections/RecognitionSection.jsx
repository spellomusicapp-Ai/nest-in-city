import CaseStudySection from '../components/CaseStudySection/CaseStudySection';
import PressCarousel from '../components/PressCarousel/PressCarousel';
import { PRESS_CARDS } from '../data/pressData';
import { Highlight } from '../components/Highlight/Highlight';

export default function RecognitionSection() {
  return (
    <CaseStudySection id="recognition" label="Recognition">
      <p>
        The project has been featured on eight international design and
        sustainability platforms, was exhibited at a design festival in
        Tallinn, and reached the finals of the Arts Thread competition. It
        was also mentioned by the project's mentor, Prof. Ido Bruno, in an
        article in The Jerusalem Post about Bezalel's graduation projects,
        where it was described as a "special kit for building homes for wild
        bees" and selected as one of{' '}
        <Highlight>five standout sustainability projects.</Highlight>
      </p>
      <PressCarousel cards={PRESS_CARDS} />
    </CaseStudySection>
  );
}
