import { forwardRef, memo } from 'react';

import { CardWrapper } from './style';
import { CardProps } from './type';
export const Card = memo(
  forwardRef<HTMLDivElement, CardProps>(({ children, decoration, decorationColor = '$blue', ...restProps }, ref) => {
    return (
      <CardWrapper decoration={decoration} css={{ borderColor: decorationColor }} {...restProps} ref={ref}>
        {children}
      </CardWrapper>
    );
  }),
);

Card.displayName = 'Card';
