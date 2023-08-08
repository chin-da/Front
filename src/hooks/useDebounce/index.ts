import { debounce } from 'lodash';
import { useEffect, useMemo } from 'react';

import { usePreservedCallback } from '../usePreservedCallback';
import { usePreservedReference } from '../usePreservedReference';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useDebounce<F extends (...args: any[]) => any>(
  callback: F,
  wait: number,
  options: Parameters<typeof debounce>[2] = {},
) {
  const preservedCallback = usePreservedCallback(callback);
  const preservedOptions = usePreservedReference(options);

  const debounced = useMemo(() => {
    return debounce(preservedCallback, wait, preservedOptions);
  }, [preservedCallback, preservedOptions, wait]);

  useEffect(() => {
    return () => {
      debounced.cancel();
    };
  }, [debounced]);

  return debounced;
}
