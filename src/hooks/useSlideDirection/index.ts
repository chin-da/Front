import { useEffect } from 'react';
import { findIndex } from 'lodash';

import { usePopState } from '../usePopState';

let slideDirection = 'fade';
export function useSlideDirection() {
  const { direction, historyList, pathKey, beforePathKey } = usePopState();
  function setSlideDirection(e: string) {
    if (e !== '') {
      slideDirection = e;
    }
  }

  useEffect(() => {
    const targetIdx = findIndex(historyList, ['key', pathKey]);
    if (targetIdx > 0 && typeof historyList[targetIdx]?.layout === 'undefined') {
      historyList[targetIdx].layout = slideDirection;
    }
  }, [historyList.length]);

  useEffect(() => {
    if (direction === 'forward') {
      setSlideDirection(historyList.find((e) => e.key === pathKey)?.layout);
    } else if (direction === 'back') {
      if (historyList.find((e) => e.key === beforePathKey)?.layout === 'left') {
        setSlideDirection('right');
      }
    } else {
      setSlideDirection('fade');
    }
  }, [direction]);

  return { slideDirection, setSlideDirection };
}
