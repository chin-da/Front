import { createStitches } from '@stitches/react';
import { Noto_Sans_KR } from 'next/font/google';
import 'pretendard/dist/web/static/pretendard.css';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const { styled, globalCss, getCssText, css } = createStitches({
  theme: {
    fonts: {
      notoSansKr: `${notoSansKr.style.fontFamily}`,
    },
  },
});
