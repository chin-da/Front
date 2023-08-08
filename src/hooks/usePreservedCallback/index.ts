import { useCallback, useEffect, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function usePreservedCallback<Callback extends (...args: any[]) => any>(
  callback: Callback,
) {
  const callbackRef = useRef<Callback>(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (...args: any[]) => {
      return callbackRef.current(...args);
    },
    [callbackRef],
  ) as Callback;
}
