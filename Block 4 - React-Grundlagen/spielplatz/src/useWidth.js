import { useState, useEffect } from 'react';

export function useWidth(initialValue) {
  const [width, setWidth] = useState(() => initialValue ?? window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}
