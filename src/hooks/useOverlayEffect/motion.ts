import { keyframes } from '@/styles/stitches.config';

import { MotionProps } from './type';

export const getOpenDirection = (direction: string) => {
  switch (direction) {
    case 'left':
      return 'left';
    case 'right':
      return 'right';
    case 'top':
      return 'top';
    case 'bottom':
      return 'bottom';
    default:
      return 'target';
  }
};

export const getMotion: any = ({ target, wrapper }: MotionProps) => {
  const { top, left, height, width } = target.currentTarget.getBoundingClientRect();
  const bgColor = getComputedStyle(target.currentTarget).backgroundColor;
  const targetPosition = {
    //target이 되는 대상 객체의 크기, 위치에서 animation을 시작하거나 끝낼때 사용
    top: top,
    left: left,
    width: width,
    height: height,
    background: bgColor,
  };
  return {
    stretch: {
      open: () => {
        return keyframes({
          '0%': { ...targetPosition },
          '15%': {
            top: top,
            left: wrapper.left || 0,
            height: height,
            width: wrapper.width || '100%',
          },
          '100%': {
            height: wrapper.height || '100vh',
          },
        });
      },
      close: () => {
        return keyframes({
          '0%': { height: wrapper.height || '100vh' },
          '45%': {
            top: top,
            height: height,
          },
          '100%': { ...targetPosition },
        });
      },
    },
    stretch_diagonal: {
      open: () => {
        return keyframes({
          '0%': { ...targetPosition },
          '100%': {
            height: wrapper.height || '100vh',
            transform: 'translate3d(0px, 0px, -110px)',
          },
        });
      },
      close: () => {
        return keyframes({
          '0%': { height: wrapper.height || '100vh' },
          '100%': { ...targetPosition },
        });
      },
    },
    slide_left: {
      open: () => {
        return keyframes({
          '0%': {
            transform: 'translateX(-100%);',
            width: wrapper.width || '100%',
            height: wrapper.height || '100%',
          },
          '100%': {
            transform: 'translateX(0%)',
            width: wrapper.width || '100%',
            height: wrapper.height || '100%',
          },
        });
      },
      close: () => {
        return keyframes({
          '0%': {
            transform: 'translateX(0%);',
            width: wrapper.width || '100%',
            height: wrapper.height || '100vh',
          },
          '100%': {
            transform: 'translateX(-100%)',
            width: wrapper.width || '100%',
            height: wrapper.height || '100vh',
          },
        });
      },
    },
    slide_right: {
      open: () => {
        return keyframes({
          '0%': {
            transform: 'translateX(100%);',
            width: wrapper.width || '100%',
            height: wrapper.height || '100%',
          },
          '100%': {
            transform: 'translateX(0%)',
            width: wrapper.width || '100%',
            height: wrapper.height || '100%',
          },
        });
      },
      close: () => {
        return keyframes({
          '0%': {
            transform: 'translateX(0%)',
            width: wrapper.width || '100%',
            height: wrapper.height || '100vh',
          },
          '100%': {
            transform: 'translateX(100%);',
            width: wrapper.width || '100%',
            height: wrapper.height || '100vh',
          },
        });
      },
    },
    slide_bottom: {
      open: () => {
        return keyframes({
          '0%': {
            transform: 'translateY(100%);',
            width: wrapper.width || '100%',
            height: wrapper.height || '100%',
          },
          '100%': {
            transform: 'translateY(0%);',
            width: wrapper.width || '100%',
            height: wrapper.height || '100%',
          },
        });
      },
      close: () => {
        return keyframes({
          '0%': {
            transform: 'translateY(0%);',
            width: wrapper.width || '100%',
            height: wrapper.height || '100vh',
          },
          '100%': {
            transform: 'translateY(100%);',
            width: wrapper.width || '100%',
            height: wrapper.height || '100vh',
          },
        });
      },
    },
  };
};
