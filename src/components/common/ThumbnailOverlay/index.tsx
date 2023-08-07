import { keyframes } from '@/styles/stitches.config';
import { forwardRef, memo, useRef, useState, createContext, useMemo, useContext, useEffect } from 'react';

import { StyledBox, StyledClose, StyledThumbnail, ThumbnailOverlayWrapper } from './style';
import {
  ThumbnailCloseProps,
  ThumbnailOverlayContextProps,
  ThumbnailOverlayProps,
  ThumbnailThumbnailProps,
} from './type';

const ThumbnailOverlayContext = createContext<ThumbnailOverlayContextProps | null>(null);
const ThumbnailOverlay = memo(
  forwardRef<HTMLDivElement, ThumbnailOverlayProps>(({ overlay, children, ...restProps }, ref) => {
    const overlayState = useState(overlay);
    const isOpenState = useState(true); //초기 value가 children obj에 없으면 초기화시킨다.
    const context = useMemo(() => ({ overlayState, isOpenState }), [overlayState, isOpenState]);
    return (
      <ThumbnailOverlayContext.Provider value={context}>
        <ThumbnailOverlayWrapper ref={ref} {...restProps}>
          {children}
        </ThumbnailOverlayWrapper>
      </ThumbnailOverlayContext.Provider>
    );
  }),
);

const Thumbnail = memo(
  forwardRef<HTMLImageElement, ThumbnailThumbnailProps>(({ src, currentTarget, ...restProps }, ref) => {
    const context = useContext(ThumbnailOverlayContext);
    if (context == null) {
      throw new Error('ThumbnailOverlayContext is null.');
    }
    const { isOpenState } = context;
    const [isOpen] = isOpenState;
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const imgRef = ref as any;
    const refs = useRef(null);
    const wrapperTarget = currentTarget.getBoundingClientRect();
    const imgTarget = imgRef.current.getBoundingClientRect();
    useEffect(() => {
      const refTarget = refs.current as any;
      setX(Math.abs(imgTarget.x - wrapperTarget.x) - refTarget.offsetLeft);
      setY(Math.abs(imgTarget.y - wrapperTarget.y) - refTarget.offsetTop);
    }, [refs]);

    const contentShow = keyframes({
      '0%': { width: imgRef.current.clientWidth, transform: `translate(${x}px, ${y}px)` },
      '100%': { width: '100%', transform: 'translate(0px, 0px)' },
    });
    const contentHide = keyframes({
      '0%': { width: '100%', transform: 'translate(0px, 0px)' },
      '100%': { width: imgRef.current.clientWidth, transform: `translate(${x}px, ${y}px)` },
    });

    const show = { animation: `${contentShow} 200ms ease`, transform: 'translate(0px, 0px)' };
    const hide = { animation: `${contentHide} 200ms ease`, transform: `translate(${x}px, ${y}px)`, width: '180px' };
    return <StyledThumbnail className="ttt" src={src} {...restProps} style={isOpen ? show : hide} ref={refs} />;
  }),
);

const Close = memo(
  forwardRef<HTMLDivElement, ThumbnailCloseProps>(({ children, ...restProps }, ref) => {
    const context = useContext(ThumbnailOverlayContext);
    if (context == null) {
      throw new Error('ThumbnailOverlayContext is null.');
    }
    const { overlayState, isOpenState } = context;
    const [overlay] = overlayState;
    const [, setIsOpen] = isOpenState;
    const handleClose = () => {
      setIsOpen(false);
      overlay.close();
    };
    return (
      <StyledClose onClick={handleClose} {...restProps} ref={ref}>
        {children}
      </StyledClose>
    );
  }),
);
const Box = memo(
  forwardRef<HTMLDivElement, ThumbnailCloseProps>(({ children, ...restProps }, ref) => {
    const context = useContext(ThumbnailOverlayContext);
    if (context == null) {
      throw new Error('ThumbnailOverlayContext is null.');
    }
    const {
      isOpenState: [isOpen],
    } = context;
    return (
      <StyledBox isOpen={isOpen} {...restProps} ref={ref}>
        {children}
      </StyledBox>
    );
  }),
);

ThumbnailOverlay.displayName = 'ThumbnailOverlay';

export default Object.assign(ThumbnailOverlay, {
  Thumbnail: Thumbnail,
  Close: Close,
  Box: Box,
});
