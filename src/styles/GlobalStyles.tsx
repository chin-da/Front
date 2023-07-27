import { globalCss } from '@stitches/react';

export const GlobalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  'html, body': {
    maxWidth: '100vw',
    overflowX: 'hidden',
  },

  body: {
    color: 'rgb(var(--foreground-rgb))',
    background:
      'linear-gradient(to bottom, transparent, rgb(255, 255, 255)) rgb(214, 219, 220)',
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
});
