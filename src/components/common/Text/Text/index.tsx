import { forwardRef, memo } from 'react';

import { TextWrapper } from './style';
import { TextProps } from './type';

export const Text = memo(
  forwardRef<HTMLParagraphElement, TextProps>(({ children, ...restProps }, ref) => {
    return (
      <TextWrapper {...restProps} ref={ref}>
        {children}
      </TextWrapper>
    );
  }),
);

Text.displayName = 'Text';
