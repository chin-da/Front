import { useOverlay as tossUseOverlay } from '@toss/use-overlay';
import { useRef, useMemo } from 'react';
import { isEmpty } from 'lodash';

import { OverlayEffectWrapper, StyledOverlay } from './style';
import { OpenProps, useOverlayEffectProps } from './type';
import { getMotion, getOpenDirection } from './motion';
import { useLockedBody } from '../useLockedBody';
export function useOverlayEffect({
  isFullScreen = true,
  isTargetHide = false,
  isBodyLocked = false,
  style,
  openMotion = 'stretch',
  closeMotion = 'stretch',
  duration = '600ms',
  delay = 0,
  timing = 'cubic-bezier(.8, .2, .3, 1)',
}: useOverlayEffectProps) {
  const overlay = tossUseOverlay({ exitOnUnmount: false });
  const wrapperRef = useRef(null);
  const [, setLocked] = useLockedBody(false, 'root');
  const open = useMemo(
    () =>
      ({ render: children, targetEvent: targetEvent }: OpenProps) => {
        try {
          //id로 대상을 특정하는게 좋을거같음.
          const motionParam = { target: targetEvent, wrapper: { ...style } };
          const overlayShow = getMotion(motionParam)[openMotion].open(); //오픈 애니메이션
          const overlayHide = getMotion(motionParam)[closeMotion].close(); //클로즈 애니메이션
          const openDirection = getOpenDirection(openMotion.split('_')[1]); //임시적으로 openMotion split 두번째 배열값으로 판독
          const openerTarget = targetEvent.currentTarget; //이벤트 발동 객체
          if (isTargetHide) openerTarget.style.visibility = 'hidden'; //플로팅 버튼처럼 시동시 객체 숨김
          if (isFullScreen || isBodyLocked) setLocked(true); //전체화면 scoll lock
          setTimeout(() => {
            overlay.open(({ isOpen, exit }) => {
              const isMount = !isEmpty(wrapperRef.current);
              const getHeight = () => {
                switch (isFullScreen) {
                  case true:
                    return isOpen ? '100vh' : 0;
                  case false:
                    return isOpen ? style?.height : 0;
                }
              };
              return (
                <OverlayEffectWrapper ref={wrapperRef}>
                  {isMount && (
                    <StyledOverlay
                      style={{
                        animation: `${
                          isOpen ? overlayShow : overlayHide
                        } ${duration} ${timing}`,
                        ...style,
                        height: `${getHeight()}`,
                      }}
                      isFullScreen={isFullScreen}
                      isOpen={isOpen}
                      openDirection={openDirection}
                      onAnimationEnd={() => {
                        if (!isOpen) {
                          exit();
                          if (isTargetHide)
                            openerTarget.style.visibility = 'visible';
                        }
                      }}
                    >
                      {children}
                    </StyledOverlay>
                  )}
                </OverlayEffectWrapper>
              );
            });
          }, delay);
        } catch (err) {
          console.warn(err);
        }
      },
    [
      isFullScreen,
      isTargetHide,
      isBodyLocked,
      style,
      openMotion,
      closeMotion,
      duration,
      delay,
      timing,
    ],
  );

  const memoizedOpen = useMemo(() => open, [open]);
  const close = () => {
    setLocked(false);
    overlay.close();
  };
  const exit = () => {
    overlay.exit();
  };
  return { open: memoizedOpen, close: close, exit: exit };
}
