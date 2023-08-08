import {
  styled,
  // keyframes
} from '@/styles/stitches.config';
// const fadeShow = keyframes({
//   '0%': { opacity: 0 },
//   '100%': { opacity: 1 },
// });
import { Card } from '@/components/common/Card';

export const OverlayEffectWrapper = styled('div', {});
export const StyledOverlay = styled('div', {
  zIndex: 1,
  width: '100%',
  display: 'flex',
  overflow: 'hidden',
  textAlign: 'center',
  margin: 'auto',
  justifyContent: 'center',
  background: '#FFF',
  variants: {
    isFullScreen: {
      true: { position: 'fixed', width: '100%', height: '100%' },
      false: { position: 'absolute' },
    },
    //fade animation 조건부 동작하게 변경
    isOpen: {
      true: {
        '& > div': {
          // animation: `${fadeShow} 300ms ease`,
        },
      },
      false: {
        '& > div': {
          // transition: 'opacity 300ms ease-in',
          // opacity: 0,
        },
        border: 'none !important',
      },
    },
    openDirection: {
      left: { top: 0, left: 0 },
      right: { top: 0, right: 0 },
      top: { top: 0, left: 0 },
      bottom: { bottom: 0, left: 0 },
      target: { top: 0, left: 0 },
    },
  },
});

export const StyledCard = styled(Card, {
  background: '#efefef',
  textAlign: 'center',
});

export const StyledRowBox = styled('div', {
  overflowX: 'hidden',
  height: '100%',
  width: '100%',
  padding: '24px',
});
export const StyledImg = styled('img', {
  width: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
  aspectRatio: '16/9',
  gridArea: '1/1',
  display: 'block',
  height: 'auto',
});
