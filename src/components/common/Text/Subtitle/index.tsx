import { memo, forwardRef } from 'react';

import { SubtitleWrapper } from './style';
import { SubtitleProps } from './type';

export const Subtitle = memo(
  forwardRef<HTMLParagraphElement, SubtitleProps>(({ children, ...restProps }, ref) => {
    return (
      <SubtitleWrapper {...restProps} ref={ref}>
        {children}
      </SubtitleWrapper>
    );
  }),
);

Subtitle.displayName = 'Subtitle';
