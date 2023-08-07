import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { styled } from '@/styles/stitches.config';
export const DropdownWrapper = styled('div', {
  boxShadow: '#cdcdcd 0px 1px 3px 1px',
  br: '.5rem',
  padding: '10px 20px',
  cursor: 'pointer',
  position: 'relative',
  width: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const StyledDropdown = styled('div', {
  color: '$lightBlack',
});

export const StyledDropdownItemBox = styled('div', {
  background: '#fff',
  left: '0px',
  top: `calc(100% + 2px)`,
  boxShadow: '#cdcdcd 0px 1px 3px 1px',
  br: '.5rem',
  position: 'absolute',
  width: '100%',
});

export const DropdownItemWrapper = styled('button', {
  gap: '10px',
  width: '100%',
  background: 'none',
  alignItems: 'center',
  border: 'none',
  borderBottom: '1px solid #cdcdcd',
  cursor: 'pointer',
  padding: '10px 20px',
  textAlign: 'left',
  display: 'flex',
  '&:last-child': {
    borderBottom: 'none',
  },
  '&:hover': {
    background: '#efefef',
  },
});

export const StyledDownArrowIcon = styled(FontAwesomeIcon, {
  color: '$gray',
});
export const StyledIcon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  size: '14px',
  pointerEvents: 'none',
});
