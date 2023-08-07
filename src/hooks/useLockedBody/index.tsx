import { useIsomorphicLayoutEffect } from '@toss/react';
import { useEffect, useState } from 'react';

type UseLockedBodyOutput = [boolean, (locked: boolean) => void];

export function useLockedBody(
  initialLocked = false,
  rootId = '___gatsby', // Default to `___gatsby` to not introduce breaking change
): UseLockedBodyOutput {
  const [locked, setLocked] = useState(initialLocked);

  /*
    useIsomorphicLayoutEffect
    Client-side에서는 useLayoutEffect 방식을 쓰고, Server-side에서는 useEffect 방식을 쓰도록 하는 hook 입니다.
    Server-side에서는 useLayoutEffect 함수를 사용하면 warning 오류가 발생하기 때문에 사용하는 함수입니다.
  */
  useIsomorphicLayoutEffect(() => {
    if (!locked) {
      return;
    }

    // Save initial body style
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // Lock body scroll
    document.body.style.overflow = 'hidden';

    // Get the scrollBar width
    const root = document.getElementById(rootId); // or root
    const scrollBarWidth = root ? root.offsetWidth - root.scrollWidth : 0;

    // Avoid width reflow
    if (scrollBarWidth) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;

      if (scrollBarWidth) {
        document.body.style.paddingRight = originalPaddingRight;
      }
    };
  }, [locked]);

  // Update state if initialValue changes
  useEffect(() => {
    if (locked !== initialLocked) {
      setLocked(initialLocked);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialLocked]);

  return [locked, setLocked];
}
