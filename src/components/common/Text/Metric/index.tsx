import { forwardRef, memo } from 'react';

import { MetricWrapper } from './style';
import { MetricProps } from './type';

export const Metric = memo(
  forwardRef<HTMLParagraphElement, MetricProps>(({ children, ...restProps }, ref) => {
    return (
      <MetricWrapper {...restProps} ref={ref}>
        {children}
      </MetricWrapper>
    );
  }),
);

Metric.displayName = 'Metric';
