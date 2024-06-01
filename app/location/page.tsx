import Carousel from '@/components/common/Carousel';
import HeroSection from '@/components/location/HeroSection';
import IntroSection from '@/components/location/IntroSection';

const images = [
  'images/44830237-From-the-Hip-Photo11d2.jpg',
  'images/226340073-From-the-Hip-Photo_111d2.jpg',
  'images/44830237-From-the-Hip-Photo11d2.jpg',
];

const HomePage = () => (
  <main className='site-content'>
    <Carousel images={images} />
    <IntroSection />
  </main>
);

export default HomePage;
