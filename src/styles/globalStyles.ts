import { globalCss } from '@stitches/react';
import { Noto_Sans_KR } from 'next/font/google';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
    fontFamily: `${notoSansKr.style.fontFamily}`,
  },

  'html, body': {
    maxWidth: '100vw',
    overflowX: 'hidden',
  },

  body: {
    height: '100vh',

    color: 'rgb(var(--foreground-rgb))',
    background:
      'linear-gradient(to bottom, transparent, rgb(255, 255, 255)) rgb(214, 219, 220)',
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
});
