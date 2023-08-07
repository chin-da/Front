import { styled } from '@/styles/stitches.config';

export const RadioGroupWrapper = styled('div', {
  display: 'flex',
  variants: {
    align: {
      vertical: { flexDirection: 'column' },
      horizontal: {},
    },
  },
});

export const RadioWrapper = styled('div', {
  '& :hover': {
    cursor: 'pointer',
  },
});
export const StyledLabel = styled('label', {
  display: 'flex',
  cursor: 'pointer',
  fontWeight: 500,
  position: 'relative',
  overflow: 'hidden',
  marginBottom: '0.375em',
});
export const StyledRadioItem = styled('input', {
  position: 'absolute',
  display: 'none',
  '&:checked + span': {
    '&:before': { boxShadow: 'inset 0 0 0 0.4375em #3b82f6' },
  },
});
export const StyledRadioText = styled('span', {
  display: 'flex',
  alignItems: 'center',
  padding: '0.375em 0.75em 0.375em 0.375em',
  transition: '0.25s ease',
  '&:before': {
    display: 'flex',
    flexShrink: 0,
    content: '',
    backgroundColor: '#fff',
    width: '1.5em',
    height: '1.5em',
    borderRadius: '50%',
    marginRight: '0.375em',
    transition: '0.25s ease',
    boxShadow: 'inset 0 0 0 0.125em #3b82f6',
  },
});
