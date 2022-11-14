import { useRef, useCallback, useEffect } from 'react';

import useMountedComponent from './mounted-component';

type FunctionType = (...args: any[]) => any;

interface DebouncedState<T extends FunctionType> {
  (...args: Parameters<T> | [undefined]): Promise<ReturnType<T>>;
}

function useDebouncedCallback<T extends FunctionType>(
  callback: T,
  delay: number
): DebouncedState<T> {
  const timeoutRef = useRef<undefined | number>();
  const callbackRef = useRef(callback);
  const isComponentMounted = useMountedComponent();

  useEffect(() => {
    callbackRef.current = callback;
  });

  return useCallback(
    (...args) =>
      new Promise(resolve => {
        window.clearTimeout(timeoutRef.current);

        timeoutRef.current = window.setTimeout(() => {
          if (isComponentMounted.current) {
            resolve(callbackRef.current.apply(this, args));
          }
        }, delay);
      }),
    [delay, isComponentMounted]
  );
}

export default useDebouncedCallback;

export type { DebouncedState };
