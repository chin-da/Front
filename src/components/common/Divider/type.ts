import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { DividerWrapper } from './style';

export interface DividerProps extends ComponentPropsWithoutRef<typeof DividerWrapper> {
  children?: ReactNode;
}
