"use client";

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const useIsHome = () => {
  const [isHome, setIsHome] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsHome(pathname === '/' || pathname === '');
  }, [pathname]);

  return isHome;
};

export default useIsHome;
