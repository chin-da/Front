import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { PencilLoadingStyled } from './style';

export interface PencilLoadingProps extends ComponentPropsWithoutRef<typeof PencilLoadingStyled> {
  children?: ReactNode;
}
