import CaseStudySection from '../components/CaseStudySection/CaseStudySection';
import MediaFrame from '../components/MediaFrame/MediaFrame';
import TextMediaPair from '../components/TextMediaPair/TextMediaPair';
import SnapGallery from '../components/SnapGallery/SnapGallery';
import Caption from '../components/Caption/Caption';
import { Highlight } from '../components/Highlight/Highlight';

const ceramicHiveImages = [
  { src: '/assets/images/research-01.png', alt: 'Detail of the ceramic hive joint between its two vessels' },
  { src: '/assets/images/research-02.png', alt: 'A ceramic beehive product, standing on three wooden legs' },
  { src: '/assets/images/research003.png', alt: 'Closeup of the ceramic hive entrance opening' },
  {
    src: '/assets/images/research-004.png',
    alt: 'Closeup of the ridged lid on top of the ceramic hive',
    objectPosition: 'right center',
  },
];

export default function ResearchSection() {
  return (
    <CaseStudySection id="research" label="Research">
      <p>
        The collaboration with Sharon Assis began after she gave a lecture at
        Bezalel about wild bees and the challenges they face.
      </p>

      <p>
        During her talk, I remembered an earlier project of mine: a ceramic
        hive for honeybees, designed to allow people to keep bees safely at
        home. At that moment,{' '}
        <Highlight>
          I realized that I too had focused on the honeybee,
        </Highlight>{' '}
        the one species already supported commercially, while overlooking the
        real need to support wild bees.
      </p>

      <div className="stack-16">
        <SnapGallery images={ceramicHiveImages} ratio={800 / 539} border="pink" size="large" />
        <Caption>
          My previous project: a ceramic hive designed for honeybees.
        </Caption>
      </div>

      <p>
        That realization became the turning point that led me to continue
        researching alongside Sharon and search for a solution that could
        provide wild bees with both awareness and a physical habitat.
      </p>

      <p>
        As part of the research, I joined Sharon in field experiments
        conducted in avocado orchards. The findings were more nuanced than
        expected.
      </p>

      <div className="stack-16">
        <MediaFrame
          src="/assets/images/research-05.png"
          alt="A wooden nesting structure mounted on a post in an avocado orchard"
          ratio={800 / 343}
        />
        <Caption>
          Field experiment in an avocado orchard using the first wooden
          nesting structures.
        </Caption>
      </div>

      <p>
        Wild bees were not major pollinators of avocado flowers, but{' '}
        <Highlight>
          they were present in good numbers and successfully occupied the
          nesting structures
        </Highlight>{' '}
        I had designed and placed in the field. The structures included
        different tunnel diameters, natural reeds, and colors intended to
        attract a variety of species.
      </p>

      <div className="stack-16">
        <TextMediaPair
          media={
            <MediaFrame
              src="/assets/images/research-06.jpg"
              alt="Closeup of nesting tunnels marked with yellow paint to track occupancy"
              ratio={343 / 255}
            />
          }
        >
          The most important insight from the research was that wild bees
          have remarkably diverse nesting preferences. Some species nest
          underground in compacted soil, while others prefer wood, bamboo,
          hollow stems, or natural cavities. This became the foundation of
          the design challenge: creating a single system capable of
          supporting many different species.
        </TextMediaPair>
        <Caption>
          A wild bee sealing the entrance to its nest, one of several nesting
          tunnels observed occupied during the field experiment.
        </Caption>
      </div>
    </CaseStudySection>
  );
}
