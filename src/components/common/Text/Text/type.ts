import { ComponentPropsWithoutRef } from 'react';

import { TextWrapper } from './style';

export interface TextProps extends ComponentPropsWithoutRef<typeof TextWrapper> {
  children: React.ReactNode;
}
