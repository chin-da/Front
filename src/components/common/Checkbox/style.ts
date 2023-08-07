import { styled } from '@/styles/stitches.config';

export const CheckboxGroupWarpper = styled('div', {});
export const CheckboxWarpper = styled('div', { display: 'flex' });
export const StyledCheckboxBox = styled('label', {
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  cursor: 'pointer',
});
export const StyledCheckbox = styled('input', {});
export const StyledCheckboxAll = styled('div', {
  '&~div': {
    paddingLeft: '15px',
  },
});
