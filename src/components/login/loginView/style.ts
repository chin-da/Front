import { styled } from '@/styles/stitches.config';

export const Layout = styled('main', {
  width: '100%',
  height: '100vh',

  margin: '0 auto',

  backgroundColor: '#323232',
});

export const Title = styled('h1', {
  marginBottom: '60px',

  fontSize: '36px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
  letterSpacing: '0.36px',
  textAlign: 'center',

  color: '#FFFFFF',
});

export const LoginWrapper = styled('div', {
  maxWidth: '480px',
  width: '100%',

  margin: '0 auto',
  padding: '24px 40px',

  borderRadius: 4,

  backgroundColor: '#414141',
});

export const LoginText = styled('p', {
  marginBottom: 30,

  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
  letterSpacing: '0.24px',

  color: '#FFFFFF',
});

export const SocialLoginWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 5,

  marginBottom: 24,
});

export const InfoWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '55px',
});

export const Info = styled('span', {
  position: 'relative',

  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
  letterSpacing: '0.18px',

  color: '#CACACA',

  '&:not(:last-of-type)::after': {
    content: '',
    position: 'absolute',
    right: -29,

    width: 1,
    height: '50%',

    backgroundColor: '#ECECEC',

    transform: 'translateY(50%)',
  },
});
