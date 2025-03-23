import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Resetea el scroll a la parte superior al cambiar de ruta
  }, [pathname]);

  return null;
};

export default ScrollToTop;
