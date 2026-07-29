import CaseStudySection from '../components/CaseStudySection/CaseStudySection';
import MediaFrame from '../components/MediaFrame/MediaFrame';
import { Highlight } from '../components/Highlight/Highlight';

export default function InTheFieldSection() {
  return (
    <CaseStudySection id="in-the-field" label="In the field">
      <p>
        The first workshop took place in a community garden in Jerusalem,
        with a group of children. It included a 30-minute talk about wild
        bees, followed by about two hours of hands-on building, during which
        the kids worked with the clay, made dozens of bricks, and built a
        small "city" for the bees together, ending with the final
        installation on-site
      </p>
      <p>
        About six months after the installation, on a return visit to the
        garden,{' '}
        <Highlight>
          I found that several of the tunnels were sealed, evidence that wild
          bees had indeed moved in and nested.
        </Highlight>{' '}
        This isn't a systematic scientific measurement, but it was a
        meaningful early sign.
      </p>
      <p>
        Following the first workshop, I was invited to lead another one, but
        the outbreak of the war brought the activity to a halt. Recently,
        I've returned to the project: I'm now part of a group working to
        support wild bees in Israel, placing additional nesting habitats in
        the field and exploring ways to bring this knowledge into schools.
      </p>
      <MediaFrame
        src="/assets/videos/workshop-video.mp4"
        alt="Children building modular nesting bricks at the community garden workshop"
        ratio={800 / 453}
        video
        controls
      />
    </CaseStudySection>
  );
}
