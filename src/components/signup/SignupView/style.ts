import { styled } from '@/styles/stitches.config';

export const Layout = styled('main', {
  display: 'inline-flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',

  width: '100%',
  minHeight: '100dvh',

  margin: '0 auto',

  backgroundColor: '#323232',

  fontFamily: '$notoSansKr',
});

export const Wrapper = styled('section', {
  margin: '0 auto',

  maxWidth: '931px',
  minWidth: '736px',
  width: '100%',
  height: '100%',
});

export const HeaderWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',

  margin: '0 0 14px',
});

export const Title = styled('h1', {
  fontSize: '32px',
  fontStyle: 'normal',
  fontWeight: 500,
  letterSpacing: '0.32px',
  textAlign: 'left',

  color: '#FFFFFF',
});

export const SignupForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '40px',

  width: '100%',

  padding: '40px',
  margin: '0 0 24px',

  borderRadius: 4,

  backgroundColor: '#414141',
});

export const GridColumns = styled('div', {});

export const SideContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  position: 'absolute',
  right: '12px',
  top: '50%',

  transform: 'translateY(-50%)',
});

export const UnitText = styled('span', {
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '16px',
  letterSpacing: '0.18px',

  color: '#CACACA',
});
