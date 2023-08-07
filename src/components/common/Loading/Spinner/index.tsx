import { forwardRef, memo } from 'react';

import { SpinnerLoadingStyled, SpinnerIconStyled } from './style';
import { SpinnerLoadingProps } from './type';

export const SpinnerLoading = memo(
  forwardRef<HTMLDivElement, SpinnerLoadingProps>(({ ...restProps }, ref) => {
    return (
      <SpinnerLoadingStyled {...restProps} ref={ref}>
        <SpinnerIconStyled />
      </SpinnerLoadingStyled>
    );
  }),
);

SpinnerLoading.displayName = 'SpinnerLoading';
