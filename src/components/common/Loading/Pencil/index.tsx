import { forwardRef, memo } from 'react';

import { PencilIconStyled, PencilLoadingStyled, RaninbowLoadingBarStyled, TitleStyled } from './style';
import { PencilLoadingProps } from './type';

export const PencilLoading = memo(
  forwardRef<HTMLDivElement, PencilLoadingProps>(({ ...restProps }, ref) => {
    return (
      <>
        <PencilLoadingStyled {...restProps} ref={ref}>
          <PencilIconStyled>
            <TitleStyled>Loading</TitleStyled>
            <RaninbowLoadingBarStyled />
          </PencilIconStyled>
        </PencilLoadingStyled>
      </>
    );
  }),
);

PencilLoading.displayName = 'PencilLoading';
