import CaseStudySection from '../components/CaseStudySection/CaseStudySection';
import SnapGallery from '../components/SnapGallery/SnapGallery';
import { Highlight } from '../components/Highlight/Highlight';

const kitImages = [
  { src: '/assets/images/solution-01.png', border: 'pink', alt: 'Rendered yellow parts of the modular brick kit: arch, ramp, flat panel and dome' },
  { src: '/assets/images/solution-02.png', border: 'pink', alt: 'A single rendered dome-shaped nesting module, branded nestINcity' },
  { src: '/assets/images/solution-03.jpg', border: 'pink', alt: 'Exploded technical diagram of the kit pieces with dimensions' },
  { src: '/assets/images/solution-04.jpg', border: 'pink', alt: 'A branded canvas tote bag printed with the nestincity logo' },
  { src: '/assets/images/solution-05.jpg', border: 'pink', alt: 'Closeup of a yellow silicone nesting module with branding' },
  { src: '/assets/images/solution-06.jpg', border: 'pink', alt: 'Two yellow modular kit pieces resting in their clear tray' },
  { src: '/assets/images/solution-07.png', border: 'pink', alt: '3D render of the full modular kit tray with all nesting holes' },
];

export default function SolutionSection() {
  return (
    <CaseStudySection id="solution" label="Solution">
      <p>
        The solution is a <Highlight>parametric, modular</Highlight> brick system.
        Each brick is perforated with different hole diameters and is
        designed, depending on its placement (ground level or elevated), for
        a specific type of nesting. Reeds, shade-creating arches, or tunnels
        can be added, based on the preferences of each bee species.
      </p>
      <p>
        The product is packaged in a guided, branded kit that includes all
        the raw materials and tools needed, so that anyone can build their
        own nesting habitat, with no prior professional knowledge required.
      </p>
      <SnapGallery images={kitImages} ratio={387 / 396} border="pink" />
    </CaseStudySection>
  );
}
