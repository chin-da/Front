import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { BadgeWrapper } from './style';

export interface BadgeProps extends ComponentPropsWithoutRef<typeof BadgeWrapper> {
  children?: ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactElement;
  iconPosition?: 'left' | 'right';
  variant?: 'primary' | 'secondary' | 'light';
}
