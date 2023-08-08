import { TransitionGroup } from 'react-transition-group';

import { styled } from '@/styles/stitches.config';
export const TIMEOUT = 200;
const commonAbsolute = { position: 'absolute', width: '100%' };
export const ChildrenStyled = styled('div', {});
export const TransitionGroupStyled = styled(TransitionGroup, {
  position: 'relative',
  overflow: 'hidden',
  minHeight: 'calc(var(--vh, 1vh) * 100)',
  width: '100vw',

  '& .left-enter': {
    ...commonAbsolute,
    transform: 'translateX(100%)',
  },

  '& .left-enter-active': {
    ...commonAbsolute,
    transform: 'translateX(0)',
    transition: `transform ${TIMEOUT}ms ease`,
    zIndex: 1, //
  },

  '& .left-exit': {
    ...commonAbsolute,
    transform: 'translateX(0)',
  },

  '& .left-exit-active': {
    ...commonAbsolute,
    transform: 'translateX(0%)',
    // transform: 'translateX(-100%)',
    // transition: `transform ${TIMEOUT}ms ease`,
  },

  '& .right-enter': {
    ...commonAbsolute,
    // transform: 'translateX(-100%)',
    transform: 'translateX(0%)',
    zIndex: 2,
  },

  '& .right-enter-active': {
    ...commonAbsolute,
    transform: 'translateX(0)',
    transition: `transform ${TIMEOUT}ms ease`,
    zIndex: 2,
  },
  '& .right-exit': {
    ...commonAbsolute,
    transform: 'translateX(0)',
    zIndex: 2,
  },
  '& .right-exit-active': {
    ...commonAbsolute,
    transform: 'translateX(100%)',
    transition: `transform ${TIMEOUT}ms ease`,
    zIndex: 2,
  },

  '& .fade-enter': {
    ...commonAbsolute,
    opacity: 0,
    transition: `scale ${TIMEOUT}ms ease`,
  },
  '& .fade-enter-active': {
    ...commonAbsolute,
    transition: `opacity ${TIMEOUT}ms ease, scale ${TIMEOUT}ms ease`,
    opacity: 1,
  },
  '& .fade-exit': {
    ...commonAbsolute,
    transition: `opacity ${TIMEOUT}ms ease, scale ${TIMEOUT}ms ease`,
    opacity: 0,
  },
});
