import { forwardRef, memo } from 'react';

import { TitleWrapper } from './style';
import { TitleProps } from './type';

export const Title = memo(
  forwardRef<HTMLParagraphElement, TitleProps>(({ children, ...restProps }, ref) => {
    return (
      <TitleWrapper {...restProps} ref={ref}>
        {children}
      </TitleWrapper>
    );
  }),
);

Title.displayName = 'Title';
