import { forwardRef, memo } from 'react';

import { Spinner } from '../Icon/Loading/Spinner';
import { Text } from '../Text/Text';
import { ButtonWrapper, StyledText, StyledIcon, StyledLoading } from './style';
import { ButtonProps } from './type';
export const Button = memo(
  forwardRef<HTMLButtonElement, ButtonProps>(
    (
      { icon, iconPosition = 'left', loading = false, size = 'sm', variant = 'primary', children, ...restProps },
      ref,
    ) => {
      return (
        <ButtonWrapper size={size} variant={variant} loading={loading} {...restProps} ref={ref}>
          {typeof icon !== 'undefined' && iconPosition === 'left' && (
            <StyledIcon variant={variant} size={size}>
              {icon}
            </StyledIcon>
          )}
          {loading && (
            <StyledLoading size={size}>
              <Spinner />
            </StyledLoading>
          )}
          <StyledText loading={loading}>
            <Text>{children}</Text>
          </StyledText>
          {typeof icon !== 'undefined' && iconPosition === 'right' && (
            <StyledIcon variant={variant} size={size}>
              {icon}
            </StyledIcon>
          )}
        </ButtonWrapper>
      );
    },
  ),
);

Button.displayName = 'Button';
