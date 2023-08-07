import { createStitches, PropertyValue } from '@stitches/react';
import { Noto_Sans_KR } from 'next/font/google';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const { styled, globalCss, getCssText, keyframes } = createStitches({
  theme: {
    fonts: {
      notoSansKr: `${notoSansKr.style.fontFamily}`,
    },
    colors: {
      black: 'rgb(55, 65, 81)',
      lightBlack: 'rgb(107, 114, 128)',
      lightGray: 'rgb(249, 250, 251)',
      slate: '#64748b',
      gray: '#6b7280',
      zinc: '#71717a',
      neutral: '#737373',
      stone: '#78716c',
      red: '#ef4444',
      orange: '#f97316',
      amber: '#f59e0b',
      yellow: '#eab308',
      lime: '#84cc16',
      green: '#22c55e',
      emerald: '#10b981',
      teal: '#14b8a6',
      cyan: '#06b6d4',
      sky: '#0ea5e9',
      blue: '#3b82f6',
      indigo: '#6366f1',
      violet: '#8b5cf6',
      purple: '#a855f7',
      fuchsia: '#d946ef',
      pink: '#ec4899',
      rose: '#f43f5e',
      //https://www.tremor.so/docs/layout/color-palette
    },
  },
  utils: {
    // Abbreviated margin properties
    m: (value: PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    // A property for applying width/height together
    size: (value: PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),

    // A property to apply linear gradient
    linearGradient: (value: PropertyValue<'backgroundImage'>) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    radialGradient: (value: PropertyValue<'backgroundImage'>) => ({
      backgroundImage: `radial-gradient(${value})`,
    }),

    // An abbreviated property for border-radius
    br: (value: PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    bg: (value: PropertyValue<'background'>) => ({
      background: value,
    }),

    test: (value: PropertyValue<'background'>) => ({
      background: value,
    }),
  },
});
