import { ComponentPropsWithoutRef, ReactElement } from 'react';

import { ClickEffectWrapper } from './style';

export interface ClickEffectProps extends ComponentPropsWithoutRef<typeof ClickEffectWrapper> {
  children: ReactElement;
  effect?: 'spread'; //효과 종류
  bgColor?: string;
  duration?: string;
  timing?: string;
}

export interface getEffectProps {
  bgColor?: string;
  width?: number;
  height?: number;
}
