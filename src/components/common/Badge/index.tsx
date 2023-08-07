import { forwardRef, memo } from 'react';

import { BadgeWrapper, StyledIcon, StyledText } from './style';
import { BadgeProps } from './type';

export const Badge = memo(
  forwardRef<HTMLDivElement, BadgeProps>(
    ({ variant = 'primary', size = 'md', icon, iconPosition = 'left', children, ...restProps }, ref) => {
      return (
        <BadgeWrapper size={size} variant={variant} ref={ref} {...restProps}>
          {typeof icon !== 'undefined' && iconPosition === 'left' && (
            <StyledIcon iconPosition={iconPosition}>{icon}</StyledIcon>
          )}
          <StyledText>{children}</StyledText>
          {typeof icon !== 'undefined' && iconPosition === 'right' && (
            <StyledIcon iconPosition={iconPosition}>{icon}</StyledIcon>
          )}
        </BadgeWrapper>
      );
    },
  ),
);

Badge.displayName = 'Badge';
