import { keyframes, styled } from '@/styles/stitches.config';

export const rotate = keyframes({
  '100%': { transform: 'rotate(360deg)' },
});
export const dash = keyframes({
  '0%': { strokeDasharray: '1, 150', strokeDashoffset: 0 },
  '50%': { strokeDasharray: '90, 150', strokeDashoffset: -35 },
  '100%': { strokeDasharray: '90, 150', strokeDashoffset: -124 },
});
export const SpinnerWrapper = styled('svg', {
  animation: `${rotate} 2s linear infinite`,
});

export const CircleStyled = styled('circle', {
  stroke: 'hsl(210, 70%, 75%)',
  strokeLinecap: 'round',
  animation: `${dash} 1.5s ease-in-out infinite`,
});
