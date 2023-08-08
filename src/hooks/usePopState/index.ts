import { isEmpty } from 'lodash';
import { useEffect, useState } from 'react';

import { HistoryProps } from './type';

const historyList: HistoryProps[] = []; //pushState list
let pathKey = ''; //history uniq key
let beforePathKey = '';
export function usePopState() {
  const [direction, setDirection] = useState<null | string>(null); //popState 이동 방향
  useEffect(() => {
    isEmpty(historyList) &&
      historyList.push({
        seq: historyList.length,
        key: window.history.state.key,
      });
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handlePushState = (e: any) => {
      historyList.push({ seq: historyList.length, key: e.state.key });
      pathKey = e.state.key;
      setDirection(null);
    };

    const handlePopState = (e: PopStateEvent) => {
      const from = historyList.find(o => o.key === pathKey);
      const to = historyList.find(o => o.key === e.state.key);
      beforePathKey = pathKey;
      if (from && to) {
        if (from.seq < to.seq) {
          setDirection('forward');
        } else {
          setDirection('back');
        }
        pathKey = e.state.key;
        setTimeout(() => setDirection(null), 20); //방향을 리셋해주는 이벤트 루프 강제 추가
      }
    };

    window.addEventListener('pushstate', handlePushState);
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('pushstate', handlePushState);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
  return { direction, historyList, pathKey, beforePathKey };
}
