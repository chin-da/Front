import { styled } from '@/styles/stitches.config';

export const FormRow = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 5fr',
  alignItems: 'center',

  position: 'relative',

  width: '100%',

  '&:not(:last-of-type)::after': {
    content: '',
    position: 'absolute',
    bottom: '-20px',

    width: '100%',
    height: '1px',

    backgroundColor: '#5C5C5C',
  },
});

export const Label = styled('label', {});

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '8px',
});

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',

  width: '100%',

  variants: {
    direction: {
      column: {},
      row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  },
});

export const BottomTextWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '8px',

  width: '100%',
});

export const BottomText = styled('span', {
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '16px',
  letterSpacing: '0.16px',

  color: '#CACACA',
});

export const ErrorMessage = styled('span', {
  fontVariantNumeric: 'lining-nums proportional-nums',
  fontFeatureSettings: 'dlig on',
  fontFamily: 'Pretendard Variable',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHheight: '14px',
  letterSpacing: '0.2px',

  color: '#E84B4B',
});
