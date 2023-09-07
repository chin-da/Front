import { styled } from '@/styles/stitches.config';

export const SelectWrapper = styled('div', {
  position: 'relative',

  width: '100%',
});

export const Select = styled('select', {
  position: 'relative',

  width: '100%',

  padding: '16px',

  borderRadius: '4px',
  backgroundColor: '#5C5C5C',

  color: '#CACACA',

  '&::placeholder': {
    color: '#CACACA',
  },
});

export const Option = styled('option', {
  backgroundColor: '#fff',

  color: 'black',
});

export const SideContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  position: 'absolute',
  right: '12px',
  top: '50%',

  transform: 'translateY(-50%)',
});
