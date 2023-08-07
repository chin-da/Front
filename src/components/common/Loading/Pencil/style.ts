import { styled, keyframes } from '@/styles/stitches.config';
const steps = 10;
const hueOffset = 320;
const saturation = '80%';
const lightness = '60%';
const duration = '5000ms';

/* generate some colors */
const color01 = `hsl( calc( 360 / ${steps} *  1 + ${hueOffset}), ${saturation}, ${lightness} )`;
const color02 = `hsl( calc( 360 / ${steps} *  2 + ${hueOffset}), ${saturation}, ${lightness} )`;
const color03 = `hsl( calc( 360 / ${steps} *  3 + ${hueOffset}), ${saturation}, ${lightness} )`;
const color04 = `hsl( calc( 360 / ${steps} *  4 + ${hueOffset}), ${saturation}, ${lightness} )`;
const color05 = `hsl( calc( 360 / ${steps} *  5 + ${hueOffset}), ${saturation}, ${lightness} )`;
const color06 = `hsl( calc( 360 / ${steps} *  6 + ${hueOffset}), ${saturation}, ${lightness} )`;
const color07 = `hsl( calc( 360 / ${steps} *  7 + ${hueOffset}), ${saturation}, ${lightness} )`;
const color08 = `hsl( calc( 360 / ${steps} *  8 + ${hueOffset}), ${saturation}, ${lightness} )`;
const color09 = `hsl( calc( 360 / ${steps} * 9 + ${hueOffset}), ${saturation}, ${lightness} )`;
const color10 = `hsl( calc( 360 / ${steps} * 10 + ${hueOffset}), ${saturation}, ${lightness} )`;
const color11 = `hsl( calc( 360 / ${steps} * 11 + ${hueOffset}), ${saturation}, ${lightness} )`;
const colorcrayon = '#202036';

/* build some backgrounds */
const bg01a = `no-repeat left       0% top    / 11%   0% linear-gradient(to right, ${color01}, ${color02})`;
const bg01b = `no-repeat left       0% top    / 11% 100% linear-gradient(to right, ${color01}, ${color02})`;
const bg02a = `no-repeat left   11.11% bottom / 11%   0% linear-gradient(to right, ${color02}, ${color03})`;
const bg02b = `no-repeat left   11.11% bottom / 11% 100% linear-gradient(to right, ${color02}, ${color03})`;
const bg03a = `no-repeat left   22.22% top    / 11%   0% linear-gradient(to right, ${color03}, ${color04})`;
const bg03b = `no-repeat left   22.22% top    / 11% 100% linear-gradient(to right, ${color03}, ${color04})`;
const bg04a = `no-repeat left   33.33% bottom / 11%   0% linear-gradient(to right, ${color04}, ${color05})`;
const bg04b = `no-repeat left   33.33% bottom / 11% 100% linear-gradient(to right, ${color04}, ${color05})`;
const bg05a = `no-repeat left   44.44% top    / 11%   0% linear-gradient(to right, ${color05}, ${color06})`;
const bg05b = `no-repeat left   44.44% top    / 11% 100% linear-gradient(to right, ${color05}, ${color06})`;
const bg06a = `no-repeat left   55.55% bottom / 11%   0% linear-gradient(to right, ${color06}, ${color07})`;
const bg06b = `no-repeat left   55.55% bottom / 11% 100% linear-gradient(to right, ${color06}, ${color07})`;
const bg07a = `no-repeat left   66.66% top    / 11%   0% linear-gradient(to right, ${color07}, ${color08})`;
const bg07b = `no-repeat left   66.66% top    / 11% 100% linear-gradient(to right, ${color07}, ${color08})`;
const bg08a = `no-repeat left   77.77% bottom / 11%   0% linear-gradient(to right, ${color08}, ${color09})`;
const bg08b = `no-repeat left   77.77% bottom / 11% 100% linear-gradient(to right, ${color08}, ${color09})`;
const bg09a = `no-repeat left   88.88% top    / 11%   0% linear-gradient(to right, ${color09}, ${color10})`;
const bg09b = `no-repeat left   88.88% top    / 11% 100% linear-gradient(to right, ${color09}, ${color10})`;
const bg10a = `no-repeat left   99.99% bottom / 11%   0% linear-gradient(to right, ${color10}, ${color11})`;
const bg10b = `no-repeat left   99.99% bottom / 12% 100% linear-gradient(to right, ${color10}, ${color11})`;

export const loadingFill = keyframes({
  '0%': {
    background: `${bg01a}, ${bg02a}, ${bg03a}, ${bg04a}, ${bg05a}, ${bg06a}, ${bg07a}, ${bg08a}, ${bg09a}, ${bg10a}`,
  },
  '10%': {
    background: `${bg01b}, ${bg02a}, ${bg03a}, ${bg04a}, ${bg05a}, ${bg06a}, ${bg07a}, ${bg08a},   ${bg09a},  ${bg10a}`,
  },
  '20%': {
    background: `
          ${bg01b},
          ${bg02b},
          ${bg03a},   
          ${bg04a},
          ${bg05a},
          ${bg06a},
          ${bg07a},  
          ${bg08a},
          ${bg09a},
          ${bg10a}`,
  },
  '30%': {
    background: `
          ${bg01b},
          ${bg02b},
          ${bg03b},
          ${bg04a},
          ${bg05a},
          ${bg06a},
          ${bg07a},  
          ${bg08a},
          ${bg09a},
          ${bg10a}`,
  },
  '40%': {
    background: `
          ${bg01b},
          ${bg02b},
          ${bg03b},
          ${bg04b}, 
          ${bg05a}, 
          ${bg06a}, 
          ${bg07a},  
          ${bg08a},
          ${bg09a},
          ${bg10a}`,
  },
  '50%': {
    background: `
          ${bg01b},
          ${bg02b},
          ${bg03b},
          ${bg04b}, 
          ${bg05b}, 
          ${bg06a},
          ${bg07a},   
          ${bg08a},
          ${bg09a},
          ${bg10a}`,
  },
  '60%': {
    background: `
          ${bg01b},
          ${bg02b},
          ${bg03b},
          ${bg04b}, 
          ${bg05b}, 
          ${bg06b}, 
          ${bg07a},   
          ${bg08a},
          ${bg09a},
          ${bg10a}`,
  },
  '70%': {
    background: `
          ${bg01b},
          ${bg02b},
          ${bg03b},
          ${bg04b}, 
          ${bg05b}, 
          ${bg06b}, 
          ${bg07b},  
          ${bg08a},
          ${bg09a},
          ${bg10a}`,
  },
  '80%': {
    background: `
          ${bg01b},
          ${bg02b},
          ${bg03b},
          ${bg04b}, 
          ${bg05b}, 
          ${bg06b}, 
          ${bg07b},  
          ${bg08b},
          ${bg09a},
          ${bg10a}`,
  },
  '90%': {
    background: `${bg01b},
          ${bg02b},
          ${bg03b},
          ${bg04b}, 
          ${bg05b}, 
          ${bg06b}, 
          ${bg07b},  
          ${bg08b},
          ${bg09b}, 
          ${bg10a}`,
  },
  '100%': {
    background: `${bg01b},
          ${bg02b},
          ${bg03b},
          ${bg04b}, 
          ${bg05b}, 
          ${bg06b}, 
          ${bg07b},  
          ${bg08b},
          ${bg09b}, 
          ${bg10b}`,
  },
});
export const moveMarker = keyframes({
  '10%': { transform: 'translate(5%, 100%) rotate(2.5deg)' },
  '20%': { transform: 'translate(20%, 0) rotate(-5deg)' },
  '30%': { transform: 'translate(30%, 100%) rotate(2.5deg)' },
  '40%': { transform: 'translate(40%, 0) rotate(-5deg)' },
  '50%': { transform: 'translate(50%, 100%) rotate(2.5deg)' },
  '60%': { transform: 'translate(60%, 0) rotate(-5deg)' },
  '70%': { transform: 'translate(70%, 100%) rotate(2.5deg)' },
  '80%': { transform: 'translate(80%, 0) rotate(-5deg)' },
  '90%': { transform: 'translate(90%, 100%) rotate(2.5deg)' },
  '100%': { transform: 'translate(100%, 0) rotate(-5deg)' },
});
export const PencilLoadingStyled = styled('div', {});
export const PencilIconStyled = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '1rem 1rem 2rem 1rem',
  boxSizing: 'border-box',
  overflow: 'hidden',
});
export const TitleStyled = styled('h1', {
  color: colorcrayon,
  fontSize: '1.5rem',
  fontFamily: 'M PLUS Rounded 1c, sans-serif',
  textTransform: 'uppercase',
  letterSpacing: '1px',
});
export const RaninbowLoadingBarStyled = styled('div', {
  height: '4rem',
  width: '20rem',
  maxWidth: '100%',
  border: `.5rem solid ${colorcrayon}`,
  borderRadius: '.5rem',
  animation: `infinite alternate ${loadingFill} ${duration} ease-in-out`,
  boxSizing: 'border-box',
  position: 'relative',
  margin: '1rem',
  background: `
    ${bg01a},
    ${bg02a},
    ${bg03a},
    ${bg04a},
    ${bg05a},
    ${bg06a},
    ${bg07a},
    ${bg08a},
    ${bg09a},
    ${bg10a}`,
  '&:after': {
    content: '',
    display: 'block',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    transformOrigin: 'left center',
    borderRadius: '.5rem',
    boxSizing: 'border-box',
    marginTop: '-7.5%',
    marginLeft: '-2.5%',
    animation: `infinite alternate ${moveMarker} ${duration} ease-in-out`,
    background: `no-repeat left   0% top    / 3rem  50% linear-gradient(to bottom right, transparent, transparent 40%, ${colorcrayon} 40%),
    no-repeat left   0% bottom / 3rem  50% linear-gradient(to top right, transparent, transparent 40%, ${colorcrayon} 40%),
    no-repeat left 3rem bottom / 100% 100% linear-gradient( ${colorcrayon}, ${colorcrayon})`,
  },
});
