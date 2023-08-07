import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { styled, keyframes } from '@/styles/stitches.config';

export const scaleUp = keyframes({
  '0%': { transform: 'translate(0,0) scale(0)' },
  '100%': { transform: 'translate(0,0) scale(1)' },
});

export const TextInputWrapper = styled('div', {
  marginBottom: '5px',
});

export const StyledInputBox = styled('div', {
  display: 'flex',
  boxShadow: '#efefef 0px 1px 2x 0px',
  br: '.5rem',
  padding: '10px 15px',
  position: 'relative',
  alignItems: 'center',
  border: '1px solid #CDCDCD',
  variants: {
    status: {
      error: {
        border: '1px solid $rose',
        boxShadow: 'none',
        '& label': { color: '$rose' },
      },
      success: {
        border: '1px solid $blue',
        boxShadow: 'none',
        '& label': { color: '$blue' },
      },
      reset: {},
    },
    disabled: {
      true: { background: '$lightGray' },
    },
  },
});

export const StyledTextInput = styled('input', {
  all: 'unset',
  position: 'relative',
  top: '1px',
  width: '100%',
  '&::placeholder': { color: 'transprarent' },
  '&:placeholder-shown ~ label': { cursor: 'text' },
  '&:focus': {
    '& ~ label': {
      transition: '0.2s',
      fontWeight: 700,
    },
  },
  '&::-webkit-inner-spin-button': {
    appearance: 'none',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
  },
});
export const StyledMessage = styled('div', {
  position: 'absolute',
  paddingLeft: '5px',
  variants: {
    status: {
      error: {
        '& p': {
          fontSize: '11px',
          color: '$red',
        },
      },
      success: {
        '& p': {
          fontSize: '11px',
          color: '$blue',
        },
      },
      reset: {},
    },
  },
});

export const StyledCustomIcon = styled('div', {
  display: 'flex',
  marginRight: '10px',
});

export const StyledResetIcon = styled(FontAwesomeIcon, {
  color: '#C7CDD7',
  animation: `${scaleUp} .5s cubic-bezier(0.16, 1, 0.3, 1)`,
  marginLeft: '5px',
  cursor: 'pointer',
});

export const StyledErrorIcon = styled(FontAwesomeIcon, {
  color: '$red',
  animation: `${scaleUp} .5s cubic-bezier(0.16, 1, 0.3, 1)`,
  marginLeft: '5px',
});

export const StyledSuccessIcon = styled(FontAwesomeIcon, {
  color: '$blue',
  animation: `${scaleUp} .5s cubic-bezier(0.16, 1, 0.3, 1)`,
  marginLeft: '5px',
});

export const StyledLabel = styled('label', {
  position: 'absolute',
  top: '-22px',
  left: 0,
  display: 'block',
  transition: '0.2s',
  fontSize: '0.9rem',
  color: 'gray',
});
