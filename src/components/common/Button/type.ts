import { ComponentPropsWithoutRef } from 'react';

import { ButtonWrapper } from './style';
export interface ButtonProps extends ComponentPropsWithoutRef<typeof ButtonWrapper> {
  children?: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactElement;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  color?: string;
  variant?: 'primary' | 'secondary' | 'light';
}
