import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { SpinnerLoadingStyled } from './style';

export interface SpinnerLoadingProps extends ComponentPropsWithoutRef<typeof SpinnerLoadingStyled> {
  children?: ReactNode;
}
