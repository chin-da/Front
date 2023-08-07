import { ComponentPropsWithoutRef } from 'react';

import { CardWrapper } from './style';
export interface CardProps extends ComponentPropsWithoutRef<typeof CardWrapper> {
  children?: React.ReactNode;
  decoration?: 'top' | 'bottom' | 'left' | 'right';
  decorationColor?: string;
}
