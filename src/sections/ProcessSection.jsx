import CaseStudySection from '../components/CaseStudySection/CaseStudySection';
import MediaFrame from '../components/MediaFrame/MediaFrame';
import ImageRow from '../components/ImageRow/ImageRow';
import SnapGallery from '../components/SnapGallery/SnapGallery';
import Caption from '../components/Caption/Caption';
import { Highlight } from '../components/Highlight/Highlight';

const cityGalleryImages = [
  {
    src: '/assets/images/process12/02.jpg',
    alt: 'Close angled view of the modular brick city with arches and holes',
  },
  {
    src: '/assets/images/process12/33.jpg',
    alt: 'Detail of stacked modular bricks with drilled nesting holes',
  },
  {
    src: '/assets/images/process12/4.jpg',
    alt: 'A hand placing an arched brick onto the modular structure',
  },
  {
    src: '/assets/images/process12/47.jpg',
    alt: 'A hand placing a modular brick into the growing city, seen up close',
  },
  {
    src: '/assets/images/process12/74.jpg',
    alt: 'A gap between stacked modular bricks revealing the structure behind',
  },
  {
    src: '/assets/images/process12/Screenshot%202026-07-29%20at%201.11.27.png',
    alt: 'Overhead view of the modular brick city arranged in red soil',
  },
  {
    src: '/assets/images/process12/Screenshot%202026-07-29%20at%201.11.36.png',
    alt: 'A hand placing a single brick into the ground, starting the modular structure',
  },
];

const materialCaption =
  "Rammed earth construction (left) and Israel's native hamra soil (right) served as key material references during the project's material exploration.";

function MaterialPair() {
  return (
    <ImageRow>
      <MediaFrame
        src="/assets/images/process-01.png.jpg"
        alt="Corner of a rammed-earth building, showing its layered construction"
        ratio={387 / 288}
      />
      <MediaFrame
        src="/assets/images/process-02.jpg"
        alt="Large bags of raw red hamra soil at a supply yard"
        ratio={390 / 288}
      />
    </ImageRow>
  );
}

export default function ProcessSection() {
  return (
    <CaseStudySection id="process" label="Process">
      <h3>First Prototype: Wood</h3>
      <p>
        The first nesting structure was built from wood as part of a research
        study conducted in an avocado orchard. It combined drilled tunnels of
        different diameters with natural reeds to attract a diverse range of
        wild bee species. The goal of the study was to explore how artificial
        nesting habitats could encourage wild bees in agricultural
        environments and demonstrate their contribution to avocado
        pollination. At this stage, my focus was on understanding the nesting
        needs of different species and evaluating the concept in the field,
        not yet on finding the project's final material.
      </p>

      <h3>A Turning Point: From Wood to Hamra</h3>
      <p>
        After the orchard study, I began asking a different question: how
        could this project evolve from a research tool into something
        communities could actively build and participate in?
      </p>
      <p>
        From the beginning, I knew that many wild bee species naturally nest
        in compacted soil (hamra). During the design process, I came across
        the traditional rammed earth construction technique, where compacted
        earth is used to create durable structures. That discovery made me
        realize that hamra could become much more than a nesting material: it
        could become a modular building block that people could use to build
        habitats together.
      </p>
      <p>
        It aligned with the bees' natural behavior while also being
        inexpensive, widely available, and easy for anyone to work with.{' '}
        <Highlight>This realization became the turning point of the project.</Highlight>
      </p>
      <div className="stack-16">
        <MaterialPair />
        <Caption>{materialCaption}</Caption>
      </div>

      <h3>Material Development</h3>
      <p>
        Developing the material required a series of experiments. The first
        prototype failed because the block was not structurally stable. I
        tested different methods of embedding reeds and reinforcing the
        mixture using natural additives. Straw, for example, created a rough
        interior surface that was unsuitable for the smooth nesting tunnels
        many bee species require.
      </p>
      <p>
        I eventually developed a mixture of hamra and gypsum. My initial
        formula contained approximately 50% gypsum, but after multiple
        iterations I found that only <strong>25%</strong> was needed to
        stabilize the block while preserving the material's breathability and
        natural moisture.
      </p>
      <div className="stack-16">
        <MediaFrame
          src="/assets/images/process-03.png"
          alt="Two early clay material experiments with drilled and molded nesting tunnels"
          ratio={800 / 301}
        />
        <Caption>
          Two early material experiments, testing different ways of forming
          and reinforcing the nesting tunnels.
        </Caption>
      </div>

      <h3>One Modular System for Many Species</h3>
      <p>
        Choosing hamra transformed ideas that had been difficult to realize
        in wood into a flexible and practical system. A single module could
        accommodate multiple nesting strategies, different tunnel diameters,
        embedded natural reeds, and architectural elements such as arches
        that provide shade and protection. Instead of designing separate
        nesting structures, I developed one modular system capable of
        supporting a wide diversity of wild bee species.
      </p>
      <div className="stack-16">
        <ImageRow>
          <MediaFrame
            src="/assets/images/process-04.png.JPG"
            alt="Two stacked modular hamra bricks forming an arched nesting tunnel"
            ratio={387 / 288}
          />
          <MediaFrame
            src="/assets/images/process-05.JPG"
            alt="A wide collection of modular hamra bricks arranged like a small city"
            ratio={390 / 288}
          />
        </ImageRow>
        <Caption>{materialCaption}</Caption>
      </div>

      <h3>From Building Blocks to a City for Bees</h3>
      <p>
        The modular system naturally led to the brick form. Rather than
        asking people to simply install nesting habitats, I wanted them to
        build an entire habitat together, one brick at a time. The
        inspiration came from familiar construction play such as LEGO, wooden
        blocks, and sandcastles, where complex structures emerge from simple
        modular units.
      </p>
      <p>
        This became the concept of <Highlight>a City for Bees</Highlight> a
        collaborative system that connects the biological needs of wild bees
        with an accessible, playful community building experience.
      </p>
      <SnapGallery images={cityGalleryImages} ratio={387 / 396} border="pink" />
    </CaseStudySection>
  );
}
