import { styled } from '@/styles/stitches.config';

export const CounterWrapper = styled('div', {
  display: 'inline-block',
  height: '34px',
  border: '1px solid #CDCDCD',
  borderRadius: '5px',
  overflow: 'hidden',
  '& button:last-child': {
    '&:after': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '2px',
      height: '10px',
      margin: '-5px 0 0 -1px',
      backgroundColor: '#000000',
      content: '',
    },
  },
});
export const StyledInput = styled('input', {
  appearance: 'none',
  border: 'none',
  width: '44px',
  height: '100%',
  textAlign: 'center',
  verticalAlign: 'top',
  fontWeight: 'bold',
  '&::-webkit-inner-spin-button': {
    appearance: 'none',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
  },
});

export const StyledButton = styled('button', {
  border: 'none',
  width: '34px',
  height: '100%',
  background: '#CDCDCD',
  position: 'relative',
  cursor: 'pointer',
  '&:before': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '10px',
    height: '2px',
    margin: '-1px 0 0 -5px',
    backgroundColor: '#000000',
    content: '',
  },
});
