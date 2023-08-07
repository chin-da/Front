import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { styled } from '@/styles/stitches.config';

export const AccordionWrapper = styled('div', {
  boxShadow: '#cdcdcd 0px 1px 3px 1px',
  br: '.5rem',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'space-between',
  overflow: 'hidden',
});

export const StyledAccordionHeader = styled('button', {
  cursor: 'pointer',
  background: '#FFF',
  border: 'none',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '.75rem 1.5rem',
});

export const StyledAccordionBody = styled('div', {
  padding: '0rem 1.5rem .75rem',
  background: '#FFF',
  variants: {
    isOpen: {
      false: { display: 'none' },
    },
  },
});

export const StyledDownArrowIcon = styled(FontAwesomeIcon, {
  color: '$gray',
});

export const StyledIcon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  pointerEvents: 'none',
  transition: 'transform ease .2s',
  variants: {
    isOpen: {
      true: {
        transform: 'rotate(180deg)',
      },
      false: {
        transform: 'rotate(0deg)',
      },
    },
  },
});

export const StyledAccordionList = styled('div', {
  boxShadow: '#cdcdcd 0px 1px 3px 1px',
  br: '.5rem',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'space-between',
  overflow: 'hidden',
  //list로 accordian을 호출시 초기화
  '&>div': {
    boxShadow: 'none',
    br: 0,
    borderBottom: '1px solid #e5e7eb',
  },
  '&>div:last-child': {
    border: 'none',
  },
});
