import { ComponentPropsWithoutRef } from 'react';

import { CounterWrapper } from './style';

export interface CounterProps extends ComponentPropsWithoutRef<typeof CounterWrapper> {
  value?: number;
  isPositive?: boolean; //양수만 입력받을때 true
  onValueChange?: (e: number) => void;
}
