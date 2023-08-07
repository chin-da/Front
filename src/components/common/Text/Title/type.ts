import { ComponentPropsWithoutRef } from 'react';

import { TitleWrapper } from './style';

export interface TitleProps extends ComponentPropsWithoutRef<typeof TitleWrapper> {
  children: React.ReactNode;
}
