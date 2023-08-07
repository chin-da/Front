import { styled, keyframes } from '@/styles/stitches.config';

export const turn = keyframes({
  '100%': { transform: 'rotate(1turn)' },
});

export const SpinnerLoadingStyled = styled('div', {
  display: 'inline-block',
});
export const SpinnerIconStyled = styled('div', {
  aspectRatio: '1',
  borderRadius: '50%',
  border: '8px solid #0000',
  borderRightColor: '#ffa50097',
  position: 'relative',
  animation: `${turn} 1s infinite linear`,
  '&:before,:after': {
    content: '',
    position: 'absolute',
    inset: '-8px',
    borderRadius: '50%',
    border: 'inherit',
    animation: 'inherit',
    animationDuration: '2s',
  },
  '&:after': {
    animationDuration: '4s',
  },
});
