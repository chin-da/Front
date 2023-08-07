import { styled } from '@/styles/stitches.config';
export const ClickEffectWrapper = styled('div', {
  position: 'relative',
  '& .circle': {
    position: 'absolute',
    borderRadius: '50%',
    pointerEvents: 'none',
    width: '1px',
    height: '1px',
    zIndex: 1,
  },
});
