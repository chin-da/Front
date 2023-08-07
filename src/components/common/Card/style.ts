import { styled } from '@/styles/stitches.config';
export const CardWrapper = styled('div', {
  boxShadow: '#cdcdcd 0px 1px 3px 1px',
  br: '.5rem',
  padding: '24px',
  variants: {
    decoration: {
      top: {
        borderTop: '4px solid',
      },
      bottom: {
        borderBottom: '4px solid',
      },
      left: {
        borderLeft: '4px solid',
      },
      right: {
        borderRight: '4px solid',
      },
    },
  },
});
