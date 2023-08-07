import { styled } from '@/styles/stitches.config';

export const Button = styled('button', {
  fontSize: 16,
  padding: '10px 20px',

  color: '#222',
  backgroundColor: '#bcabfc',

  border: 'none',
  borderRadius: 5,
  outline: 'none',

  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',

  cursor: 'pointer',

  '&:hover': {
    background: '#a792fc',
  },

  variants: {
    color: {
      primary: {},
      secondary: {
        backgroundColor: '#fff',
        color: '#a792fc',

        borderColor: '#a792fc',

        '&:hover': {
          background: '#e4defc',
        },
      },
    },
    size: {
      large: {},
      small: {
        fontSize: 14,
        padding: '5px 8px',
      },
    },
  },
});
