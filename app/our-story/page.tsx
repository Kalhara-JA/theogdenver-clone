"use client"

import Carousel from "@/components/common/Carousel";
import ComfortsClassicsCuriositiesSection from "@/components/our-story/ComfortsClassicsCuriositiesSection";
import IntroSection from "@/components/our-story/IntroSection";
import OGTeamSection from "@/components/our-story/OGTeamSection";
import OurStorySection from "@/components/our-story/OurStorySection";
import TheOGExperienceSection from "@/components/our-story/TheOGExperienceSection";


const HomePage: React.FC = () => {

  const images = [
    'images/44830237-From-the-Hip-Photo11d2.jpg',
    'images/226340073-From-the-Hip-Photo_111d2.jpg',
    'images/44830237-From-the-Hip-Photo11d2.jpg',
]

  return (
    <main className="site-content">
      <Carousel images={images}/>
      <IntroSection />
      <OurStorySection />
      <ComfortsClassicsCuriositiesSection />
      <TheOGExperienceSection />
      <OGTeamSection />
    </main>
  );
};

export default HomePage;