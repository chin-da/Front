import { styled } from '@/styles/stitches.config';

export const SwitchWrapper = styled('label', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  cursor: 'pointer',
});

export const StyledInput = styled('input', {
  cursor: 'pointer',
  appearance: 'none',
  position: 'relative',
  border: 'max(2px, 0.1em) solid darkgray',
  borderRadius: '1.25em',
  width: '2.5em',
  height: '1.25em',
  backgroundColor: 'darkgray',
  transition: 'background-color 150ms ease-in',
  '&:before': {
    content: '',
    position: 'absolute',
    left: '0',
    width: '1em',
    height: '1em',
    borderRadius: '50%',
    backgroundColor: '#FFF',
    top: '50%',
    transform: 'translateY(-50%)',
    transition: 'left 150ms ease-in',
  },
  '&:checked': {
    backgroundColor: 'dodgerblue',
    borderColor: 'dodgerblue',
    '&:before': {
      backgroundColor: 'white',
      left: '1.25em',
    },
  },
  '&:disabled': {
    borderColor: 'lightgray',
    opacity: 0.7,
    cursor: 'not-allowed',
    '&:before': {
      backgroundColor: 'lightgray',
    },
    '&:+span': {
      opacity: 0.7,
      cursor: 'not-allowed',
    },
  },
  '&:focus-visible': {
    outlineOffset: 'max(2px, 0.1em)',
    outline: 'max(2px, 0.1em) solid dodgerblue',
  },
  '&:enabled:hover': {
    boxShadow: '0 0 0 max(4px, 0.2em) lightgray',
  },
});

export const StyledSpan = styled('span', {
  position: 'absolute',
  opacity: 0,
  cursor: 'pointer',
  height: '0',
  width: '0',
});
