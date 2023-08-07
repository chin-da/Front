import { ComponentPropsWithoutRef } from 'react';

import { SubtitleWrapper } from './style';

export interface SubtitleProps extends ComponentPropsWithoutRef<typeof SubtitleWrapper> {
  children: React.ReactNode;
}
