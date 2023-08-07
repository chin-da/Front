import { useImpressionRef as tossUseImpressionRef } from '@toss/impression-area';

interface useImpressionRefProps {
  areaThreshold?: number;
  rootMargin?: string;
  timeThreshold?: number;
}

export function useImpressionRef(props?: useImpressionRefProps) {
  let startAction: () => void;
  let endAction: () => void;

  //추가 공통 트리거로 log 등을 적재하는데 사용하기 위해 확장
  const onStart = (callback: () => void) => {
    startAction = callback;
  };

  const onEnd = (callback: () => void) => {
    endAction = callback;
  };

  const result = tossUseImpressionRef({
    onImpressionStart: () => {
      startAction();
    },
    onImpressionEnd: () => {
      endAction();
    },
    areaThreshold: props?.areaThreshold || 0,
    rootMargin: props?.rootMargin || '',
    timeThreshold: props?.timeThreshold || 0,
  });

  return { ref: result, onStart: onStart, onEnd: onEnd };
}
