import { useState } from 'react';

import { useInterval } from '../useInterval';
interface useCountDownProps {
  second: number;
}
export function useCountDown({ second }: useCountDownProps) {
  const [count, setCount] = useState(second);
  const [isRun, setIsRun] = useState<boolean>(false);
  const runStart = () => setIsRun(true);
  const runStop = () => setIsRun(false);
  useInterval(() => isRun && setCount(count - 1), { delay: 1000, trailing: true });
  return { count, isRun, runStart, runStop };
}
