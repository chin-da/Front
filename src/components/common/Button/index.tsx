import { styled } from '@stitches/react';

export const Button = styled('button', {
  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',

  borderRadius: 5,
  outline: 'none',

  cursor: 'pointer',

  variants: {
    color: {
      primary: {
        backgroundColor: '#bcabfc',
        color: '#222',

        border: 'none',

        ['&:hover']: {
          background: '#a792fc',
        },
      },
      secondary: {
        backgroundColor: '#fff',
        color: '#a792fc',

        border: '1px solid #a792fc',

        ['&:hover']: {
          background: '#e4defc',
        },
      },
    },
    size: {
      sm: {
        fontSize: 14,
        padding: '5px 8px',
      },
      lg: {
        fontSize: 16,
        padding: '10px 20px',
      },
    },
  },

  defaultVariants: {
    color: 'primary',
    size: 'lg',
  },
});
