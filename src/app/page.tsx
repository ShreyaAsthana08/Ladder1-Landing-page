import ProjectsSection from '@/components/ProjectsSection';
import HeroSection  from '../components/HeroSection';
import RoadmapSection from '@/components/RoadmapSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { StepsSection } from '@/components/StepsSection';
import {TeamSection} from '@/components/TeamSection';
import CtaSection from '@/components/CtaSection';
import FooterSection from '@/components/FooterSection';
import FaqsSection from '@/components/FaqsSection';


export default function Home() {
  return (
    <div className="bg-white overflow-hidden w-full mx-auto relative">
      <HeroSection />
      <FeaturesSection />
      <StepsSection />
      <RoadmapSection />
      <ProjectsSection />
      <TeamSection />
      <br /><br /> <br /><br />
      <CtaSection />
     
      <FaqsSection />
      <FooterSection />
    </div>
  );
}