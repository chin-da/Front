import { styled } from '@/styles/stitches.config';

export const Icon = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: 24,
  height: 24,

  variants: {
    hasCursor: {
      true: {
        cursor: 'pointer',
      },
    },
  },
});
