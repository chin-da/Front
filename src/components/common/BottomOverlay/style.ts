import { styled, keyframes } from '@/styles/stitches.config';

export const slideUp = keyframes({
  '0%': { transform: 'translateY(100%)' },
  '100%': { transform: 'translateY(0)' },
});

export const BottomOverlayWrapper = styled('div', {
  position: 'relative',
});
export const StyledDimedLayout = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  width: '100vw',
  opacity: 0.5,
  background: 'black',
});
export const StyledBottomLayout = styled('div', {
  boxShadow: '#cdcdcd 0px 1px 6px 0px',
  padding: '1rem',
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100vw',
  background: '#FFF',
  br: '1rem 1rem 0px 0px',
  animation: `${slideUp} .2s ease-out`,
});
