import { forwardRef, memo } from 'react';

import { AvatarWrapper, StyledAvatarFallback, StyledAvatarImage } from './style';
import { AvatarProps } from './type';

export const Avatar = memo(
  forwardRef<HTMLDivElement, AvatarProps>(({ imgSrc, delayMs = 500, fallbackText, ...restProps }, ref) => {
    return (
      <AvatarWrapper ref={ref} {...restProps}>
        <StyledAvatarImage src={imgSrc} />
        <StyledAvatarFallback delayMs={delayMs}>{fallbackText}</StyledAvatarFallback>
      </AvatarWrapper>
    );
  }),
);

Avatar.displayName = 'Avatar';
