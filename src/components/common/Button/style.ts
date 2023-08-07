import { styled } from '@/styles/stitches.config';

export const ButtonWrapper = styled('button', {
  position: 'relative',
  gap: '5px',
  display: 'inline-block',
  alignItems: 'center',
  cursor: 'pointer',
  br: '4px',
  variants: {
    size: {
      xs: { padding: '6px 10px' },
      sm: { padding: '8px 14px' },
      md: { padding: '10px 18px' },
      lg: { padding: '12px 22px' },
      xl: { padding: '12px 24px' },
    },
    variant: {
      primary: {
        background: '$blue',
        border: `1px solid $blue`,
        '& p': {
          color: '#FFF',
        },
      },
      secondary: {
        background: '#FFF',
        border: `1px solid $blue`,
        '& p': {
          color: '$blue',
        },
      },
      light: {
        background: '#FFF',
        border: `none`,
        '& p': {
          color: '$blue',
        },
      },
    },
    loading: {
      true: {
        opacity: 0.7,
        pointerEvents: 'none',
      },
    },
  },
});

export const StyledIcon = styled('div', {
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  variants: {
    size: {
      xs: { size: '14px' },
      sm: { size: '16px' },
      md: { size: '18px' },
      lg: { size: '20px' },
      xl: { size: '22px' },
    },
    variant: {
      primary: { color: '#FFF' },
      secondary: { color: '$blue' },
      light: { color: '$blue' },
    },
  },
});
export const StyledLoading = styled('div', {
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  variants: {
    size: {
      xs: { size: '14px' },
      sm: { size: '16px' },
      md: { size: '18px' },
      lg: { size: '20px' },
      xl: { size: '22px' },
    },
  },
});

export const StyledText = styled('div', {
  variants: {
    loading: {
      true: {
        visibility: 'hidden',
      },
    },
  },
});
