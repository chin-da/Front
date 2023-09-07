import { styled } from '@/styles/stitches.config';

export const TextFieldWrapper = styled('div', {
  position: 'relative',

  width: '100%',
});

export const TextField = styled('input', {
  width: '100%',

  padding: '16px',

  borderRadius: '4px',
  backgroundColor: '#5C5C5C',

  '&[type="number"]::-webkit-outer-spin-button, &[type="number"]::-webkit-inner-spin-button':
    {
      WebkitAppearance: 'none',
      margin: 0,
    },

  '&::placeholder': {
    color: '#CACACA',
  },
});

export const SideContent = styled('div', {
  position: 'absolute',
  right: '12px',
  top: '50%',

  transform: 'translateY(-50%)',
});
