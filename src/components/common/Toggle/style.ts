import { styled } from '@/styles/stitches.config';
export const ToggleWrapper = styled('div', {
  display: 'inline-flex',
  br: '.5rem',
  padding: '0.25rem',
  background: '#F3F4F6',
  border: '1 solid #e5e7eb',
  justifyContent: 'flex-start',
  gap: '2px',
});
export const StyledToggleItem = styled('button', {
  display: 'inline-flex',
  br: '.375rem',
  border: 'none',
  background: 'transparent',
  padding: '0.375rem 0.75rem',
  cursor: 'pointer',
  color: '$gray',
  gap: '5px',
  variants: {
    selected: {
      true: {
        background: '#FFF',
        boxShadow: '#e5e7eb 0px 1px 3px 1px',
        color: '$blue',
      },
    },
  },
});

export const StyledIcon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '14px',
  height: '100%',
});
