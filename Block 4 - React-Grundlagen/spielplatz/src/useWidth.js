import { useState, useEffect } from 'react';

export function useWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    // clean up on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}
