import { createStitches } from '@stitches/react';
import { Noto_Sans_KR } from 'next/font/google';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const { globalCss, getCssText } = createStitches({
  theme: {
    fonts: {
      notoSansKr: `${notoSansKr.style.fontFamily}`,
    },
  },
});
