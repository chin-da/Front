import { keyframes, styled } from '@/styles/stitches.config';

export const ScrollIndicatorWrapper = styled('div', {
  position: 'sticky',
  top: '0px',
  zIndex: 2,
  height: '0px',
});

export const ContainerWrapper = styled('div', {
  backgroundColor: '#1D2939',
  width: '100%',
  variants: {
    hide: {
      true: {
        visibility: 'hidden',
        width: '0%',
      },
    },
  },
  transition: 'all .5s ease',
});

export const StyledProgressBar = styled('div', { height: '15px', backgroundColor: 'blue' });
const shaking = keyframes({
  '0%:': { transform: 'rotate(30deg)' },
  '50%': { transform: 'rotate(-30deg)' },
  '100%': { transform: 'rotate(30deg)' },
});
const shakeEnd = keyframes({
  '0%:': { transform: 'rotate(30deg)' },
  '25%': { transform: 'rotate(-25deg)' },
  '50%': { transform: 'rotate(20deg)' },
  '75%': { transform: 'rotate(-10deg)' },
  '100%': { transform: 'rotate(0deg)' },
});

export const StyledBadgeImage = styled('img', {
  height: '50px !important',
  scale: 2,
  position: 'absolute',
  top: '2px',
  variants: {
    isMoving: {
      true: {
        transformOrigin: '50% 0%',
        animation: `${shaking} 400ms`,
        animationDelay: '100ms',
        transition: 'transform 100ms',
        transform: 'rotate(30deg)',
      },
      false: {
        transformOrigin: '50% 0%',
        animation: `${shakeEnd} 800ms`,
      },
    },
  },
  // variants: {
  //   isMoving: {
  //     true: {
  //       transformOrigin: '50% 0%',
  //       animationName: `${shake}`,
  //       animationDuration: '.8s',
  //       animationDelay: '-.05s',
  //     },
  //     false: {
  //       transformOrigin: '50% 0%',
  //       animationName: `${shake2}`,
  //       animationDuration: '.7s',
  //     },
  //   },
  // },
  '&:hover': {
    animationName: 'none',
  },
});

export const ChildrenWrapper = styled('div', {
  position: 'absolute',
  fontSize: '14px',
  color: '#ffffff',
});
