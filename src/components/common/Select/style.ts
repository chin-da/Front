import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { styled } from '@/styles/stitches.config';
export const SelectWrapper = styled('div', {
  boxShadow: '#cdcdcd 0px 1px 3px 1px',
  br: '.5rem',
  padding: '10px 20px',
  cursor: 'pointer',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const StyledSelect = styled('div', {
  color: '$lightBlack',
});

export const StyledSelectItemBox = styled('div', {
  background: '#fff',
  left: '0px',
  top: `calc(100% + 2px)`,
  boxShadow: '#cdcdcd 0px 1px 3px 1px',
  br: '.5rem',
  position: 'absolute',
  width: '100%',
  overflow: 'hidden',
});

export const SelectItemWrapper = styled('button', {
  gap: '10px',
  width: '100%',
  background: 'none',
  border: 'none',
  borderBottom: '1px solid #cdcdcd',
  cursor: 'pointer',
  padding: '10px 20px',
  '&:last-child': {
    borderBottom: 'none',
  },
  '&:hover': {
    background: '#efefef',
  },
  variants: {
    isSelected: {
      true: {
        background: '#F5F5FF',
      },
    },
  },
});

export const StyledSelectItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});
export const StyledDownArrowIcon = styled(FontAwesomeIcon, {
  color: '$gray',
});

export const StyledSelectedMarkerIcon = styled(FontAwesomeIcon, {
  color: '#5C55F7',
  marginLeft: 'auto',
});

export const StyledIcon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  size: '14px',
  pointerEvents: 'none',
});

export const StyledDecorateFix = styled('div', {
  display: 'flex',
  alignItems: 'center',
  pointerEvents: 'none',
});
