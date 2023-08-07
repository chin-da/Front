import { forwardRef, memo } from 'react';

import { DividerWrapper } from './style';
import { DividerProps } from './type';

export const Divider = memo(
  forwardRef<HTMLDivElement, DividerProps>(({ ...restProps }, ref) => {
    return <DividerWrapper ref={ref} {...restProps}></DividerWrapper>;
  }),
);

Divider.displayName = 'Divider';
