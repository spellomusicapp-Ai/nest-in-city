import CaseStudySection from '../components/CaseStudySection/CaseStudySection';
import MediaFrame from '../components/MediaFrame/MediaFrame';
import ImageRow from '../components/ImageRow/ImageRow';
import Caption from '../components/Caption/Caption';
import { Highlight, HighlightQuote } from '../components/Highlight/Highlight';

export default function ProblemSection() {
  return (
    <CaseStudySection id="problem" label="Problem">
      <p>
        When we talk about bees, most of us picture the honeybee. In reality,
        honeybees make up only about{' '}
        <Highlight>1% of the more than 22,000 bee species in the world</Highlight>.
        In Israel alone, there are over <Highlight>1,250</Highlight> different bee
        species.
      </p>

      <p>
        Bees play a vital role in maintaining ecosystems and food security.
        Most bees are solitary wild bees that nest alone. Honeybees, by
        contrast, are a social species that live in hives and produce honey.
      </p>

      <div className="stack-16">
        <ImageRow>
          <MediaFrame
            src="/assets/images/problem-wild-bees01.png"
            alt="Rows of managed honeybee hive boxes in a forest apiary"
            ratio={343 / 255}
          />
          <MediaFrame
            src="/assets/images/problem-wild-bees02.png"
            alt="A honeycomb frame covered in honeybees"
            ratio={343 / 255}
          />
        </ImageRow>
        <Caption>
          Honeybee colonies are managed in hives, socially organized around
          producing honey.
        </Caption>
      </div>

      <p>
        Because honeybees are profitable for farmers, they are bred
        commercially, but they represent only a small fraction of the world's
        bee diversity, and we can't rely on a single species. Competition for
        nectar and pollen, habitat destruction, and pesticide use are pushing
        wild bees out and disrupting ecological balance.
      </p>

      <div className="stack-16">
        <ImageRow>
          <MediaFrame
            src="/assets/images/problem-wild-bees002.png"
            alt="A wild bee nesting inside an empty snail shell"
            ratio={179 / 225}
            border="olive"
            dim
          />
          <MediaFrame
            src="/assets/images/problem-wild-bees05.png"
            alt="Wild bee nesting holes in compacted soil"
            ratio={179 / 225}
            border="olive"
            dim
          />
          <MediaFrame
            src="/assets/images/problem-wild-bees03.png"
            alt="A wild bee emerging from a burrow in sand"
            ratio={179 / 225}
            border="none"
            dim
          />
          <MediaFrame
            src="/assets/images/problem-wild-bees04.png"
            alt="A wild bee entering a hollow reed tunnel"
            ratio={179 / 225}
            dim
          />
        </ImageRow>
        <Caption>
          Wild bees nest alone, each female building and provisioning her own
          nest, whether in soil, snail shells, or hollow stems.
        </Caption>
      </div>

      <p>
        This project sets out to give wild bees a place in the urban
        environment, raise awareness of their importance and survival, and
        show that everyone can play a part in protecting them.
      </p>

      <HighlightQuote>
        &ldquo;I believe that with a little awareness, we can all be part of
        the change.&rdquo;
      </HighlightQuote>
    </CaseStudySection>
  );
}
