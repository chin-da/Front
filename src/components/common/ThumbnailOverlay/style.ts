import { styled, keyframes } from '@/styles/stitches.config';
import { Card } from '@/components/common/Card';

const contentShow = keyframes({
  '0%': { opacity: 0, visibility: 'hidden' },
  '80%': { opacity: 0, visibility: 'hidden' },
  '100%': { opacity: 1, visibility: 'visible' },
});

export const ThumbnailOverlayWrapper = styled('div', {
  overflow: 'hidden',
  height: '100%',
  width: '100%',
  position: 'relative',
});

export const StyledCard = styled(Card, {
  background: '#efefef',
  textAlign: 'center',
});

export const StyledClose = styled('div', {});

export const StyledBox = styled('div', {
  animation: `${contentShow} 300ms linear`,
  variants: {
    isOpen: {
      false: { visibility: 'hidden' },
    },
  },
});

export const StyledThumbnail = styled('img', {
  width: '100%',
  display: 'block',
});
