import { styled } from '@/styles/stitches.config';

export const BadgeWrapper = styled('div', {
  cursor: 'default',
  display: 'inline-flex',
  br: '.5rem',
  background: '#EAEAFF',
  color: '#9494FF',
  width: 'max-content',
  alignItems: 'center',
  fontWeight: '700',
  variants: {
    variant: {
      primary: {},
      secondary: {},
      light: {},
    },
    size: {
      xs: { padding: '.25rem .5rem' },
      sm: { padding: '.25rem .625rem' },
      md: { padding: '.25rem .75rem' },
      lg: { padding: '.25rem .875rem' },
      xl: { padding: '.375rem 1rem' },
    },
  },
});

export const StyledIcon = styled('div', {
  width: '1rem', //
  position: 'relative',
  top: '1px',
  variants: {
    iconPosition: {
      left: {
        marginRight: '.375rem',
        marginLeft: '-.25rem',
      },
      right: {
        marginLeft: '.375rem',
        marginRight: '-.25rem',
      },
    },
  },
});

export const StyledText = styled('p', {
  margin: 'unset',
  position: 'relative',
  top: '1px',
  fontSize: '.875rem !important',
  lineHeight: '1.25rem !important',
});
