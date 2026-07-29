import TopBar from './components/TopBar/TopBar';
import Hero from './components/Hero/Hero';
import IntroBlurb from './components/IntroBlurb/IntroBlurb';
import SectionNav from './components/SectionNav/SectionNav';
import FinalCover from './components/FinalCover/FinalCover';
import ProblemSection from './sections/ProblemSection';
import ResearchSection from './sections/ResearchSection';
import ProcessSection from './sections/ProcessSection';
import SolutionSection from './sections/SolutionSection';
import InTheFieldSection from './sections/InTheFieldSection';
import RecognitionSection from './sections/RecognitionSection';
import DigitalExtensionSection from './sections/DigitalExtensionSection';
import ReflectionSection from './sections/ReflectionSection';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.page}>
      <TopBar />
      <Hero />
      <IntroBlurb />
      <div className={styles.layout}>
        <SectionNav />
        <main className={styles.main}>
          <ProblemSection />
          <ResearchSection />
          <ProcessSection />
          <SolutionSection />
          <InTheFieldSection />
          <RecognitionSection />
          <DigitalExtensionSection />
          <ReflectionSection />
        </main>
      </div>
      <FinalCover />
    </div>
  );
}
