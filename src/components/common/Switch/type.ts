import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { SwitchWrapper } from './style';

export interface SwitchProps extends ComponentPropsWithoutRef<typeof SwitchWrapper> {
  children?: ReactNode;
  value?: boolean;
  onValueChange?: (e: boolean) => void;
}
