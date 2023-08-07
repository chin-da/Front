import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { BottomOverlayWrapper } from './style';

export interface BottomOverlayProps extends ComponentPropsWithoutRef<typeof BottomOverlayWrapper> {
  children?: ReactNode;
  isModal?: boolean;
  overlay: {
    close: () => void;
  };
}
