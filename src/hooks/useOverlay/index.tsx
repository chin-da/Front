import {
  useOverlay as tossUseOverlay,
  OverlayProvider as TossOverlayProvider,
} from '@toss/use-overlay';
import { ReactNode } from 'react';

import { OverlayWrapper } from './style';
import { useOverlayProps } from './type';
export function useOverlay() {
  const overlay = tossUseOverlay();
  const open = (children: () => ReactNode) => {
    overlay.open(({ isOpen }) => (
      <>{isOpen && <OverlayWrapper>{children()}</OverlayWrapper>}</>
    ));
  };

  const close = () => overlay.close();
  const exit = () => overlay.exit();

  return { open: open, close: close, exit: exit };
}

export function OverlayProvider({ children }: useOverlayProps) {
  return <TossOverlayProvider>{children}</TossOverlayProvider>;
}
