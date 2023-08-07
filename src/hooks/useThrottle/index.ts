import { throttle } from 'lodash';
import { useEffect, useMemo } from 'react';

import { usePreservedCallback } from '../usePreservedCallback';
import { usePreservedReference } from '../usePreservedReference';

export function useThrottle<F extends (...args: any[]) => any>(
  callback: F,
  wait: number,
  options: Parameters<typeof throttle>[2] = {},
) {
  const preservedCallback = usePreservedCallback(callback);
  const preservedOptions = usePreservedReference(options);

  const throttledCallback = useMemo(() => {
    return throttle(preservedCallback, wait, preservedOptions);
  }, [preservedCallback, wait, preservedOptions]);

  useEffect(
    () => () => {
      throttledCallback.cancel();
    },
    [throttledCallback],
  );

  return throttledCallback;
}
