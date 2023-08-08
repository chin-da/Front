import * as Avatar from '@radix-ui/react-avatar';

import { styled } from '@/styles/stitches.config';

export const AvatarWrapper = styled(Avatar.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 45,
  height: 45,
  borderRadius: '100%',
  backgroundColor: '#FFE7AB',
});

export const StyledAvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});
export const StyledAvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FFE7AB',
  color: '#231908',
  fontSize: '15px',
  lineHeight: 1,
  fontWeight: 500,
});
