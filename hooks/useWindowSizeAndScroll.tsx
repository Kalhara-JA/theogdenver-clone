import { useState, useEffect } from 'react';

const useWindowSizeAndScroll = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const checkWindowSizeAndScroll = () => {
    setIsMobile(window.innerWidth < 1024);
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    checkWindowSizeAndScroll(); // Initial check

    window.addEventListener('resize', checkWindowSizeAndScroll);
    window.addEventListener('scroll', checkWindowSizeAndScroll);

    return () => {
      window.removeEventListener('resize', checkWindowSizeAndScroll);
      window.removeEventListener('scroll', checkWindowSizeAndScroll);
    };
  }, []);

  return { isMobile, isScrolled };
};

export default useWindowSizeAndScroll;
