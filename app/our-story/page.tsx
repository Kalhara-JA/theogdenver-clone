import ComfortsClassicsCuriositiesSection from "@/components/our-story/ComfortsClassicsCuriositiesSection";
import IntroSection from "@/components/our-story/IntroSection";
import OGTeamSection from "@/components/our-story/OGTeamSection";
import OurStorySection from "@/components/our-story/OurStorySection";
import TheOGExperienceSection from "@/components/our-story/TheOGExperienceSection";


const HomePage: React.FC = () => {
  return (
    <main className="site-content">
      <IntroSection />
      <OurStorySection />
      <ComfortsClassicsCuriositiesSection />
      <TheOGExperienceSection />
      <OGTeamSection />
    </main>
  );
};

export default HomePage;