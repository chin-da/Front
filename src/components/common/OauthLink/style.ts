import NextLink from 'next/link';

import { styled } from '@/styles/stitches.config';

export const Link = styled(NextLink, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '24px',

  width: '100%',

  border: 'none',
  borderRadius: 4,

  variants: {
    type: {
      kakao: {
        backgroundColor: '#FAE300',
      },
      google: {
        backgroundColor: '#FFFFFF',
      },
    },
  },
});

export const InnerText = styled('span', {
  fontSize: '20px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '52.143px' /* 260.714% */,
  letterSpacing: '0.2px',
});
