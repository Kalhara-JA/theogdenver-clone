import Header from '@/components/home/Header';
import MainContent from '@/components/home/MainContent';
import Footer from '@/components/home/Footer';
import HeroSection from '@/components/home/HeroSection';
import HeaderPrimary from '@/components/common/HeaderPrimary';

const Home = () => (
  <div>
    <HeaderPrimary />
    <HeroSection />
    <MainContent />
    <Footer />
  </div>
);

export default Home;