import AboutHero from './AboutHero';
import OurStory from './OurStory';
import MissionVision from './MissionVision';
import CoreValues from './CoreValues';
import OurCommitment from './OurCommitment';
import AboutFinalCTA from './AboutFinalCTA';

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <div aria-hidden className="h-12 sm:h-20" />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <div aria-hidden className="h-12 sm:h-20" />
      <OurCommitment />
      <AboutFinalCTA />
    </main>
  );
}
