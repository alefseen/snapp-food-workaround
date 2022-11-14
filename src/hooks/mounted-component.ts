import { useEffect, useRef } from 'react';

function useMountedComponent() {
  const isComponentMounted = useRef(false);

  useEffect(() => {
    isComponentMounted.current = true;

    return () => {
      isComponentMounted.current = false;
    };
  }, []);

  return isComponentMounted;
}

export default useMountedComponent;
