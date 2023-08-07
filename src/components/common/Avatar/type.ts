import { ComponentPropsWithoutRef } from 'react';

import { AvatarWrapper } from './style';

export interface AvatarProps extends ComponentPropsWithoutRef<typeof AvatarWrapper> {
  imgSrc?: string;
  fallbackText?: string;
  delayMs?: number;
}
