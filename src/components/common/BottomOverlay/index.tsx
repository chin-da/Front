import { forwardRef, memo, useRef, useEffect } from 'react';

import {
  BottomOverlayWrapper,
  StyledBottomLayout,
  StyledDimedLayout,
} from './style';
import { BottomOverlayProps } from './type';

export const BottomOverlay = memo(
  forwardRef<HTMLDivElement, BottomOverlayProps>(
    ({ overlay, children, isModal = false, ...restProps }) => {
      const refs = useRef(null);
      useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
          const current = refs?.current as HTMLElement | null;
          if (current && !current?.contains(e.target as Node)) {
            overlay.close();
          }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [overlay, refs]);

      return (
        <BottomOverlayWrapper ref={refs} {...restProps}>
          {isModal && (
            <StyledDimedLayout
              className="bottomOverlay-DimmedLayout"
              onClick={() => overlay.close()}
            />
          )}
          <StyledBottomLayout className="bottomOverlay-BottomLayout">
            {children}
          </StyledBottomLayout>
        </BottomOverlayWrapper>
      );
    },
  ),
);

BottomOverlay.displayName = 'BottomOverlay';
