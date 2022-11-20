import { useEffect, useState } from 'react';
import { hasTouchScreen } from '../utils/device';

export const useDevice = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(hasTouchScreen());
  }, []);

  return { isMobile };
};
