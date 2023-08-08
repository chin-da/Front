import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { useOverlayEffect } from '@/hooks';

import { StyledClose, StyledThumbnail, ThumbnailOverlayWrapper } from './style';

export type Overlay = ReturnType<typeof useOverlayEffect>;

export interface ThumbnailOverlayProps
  extends ComponentPropsWithoutRef<typeof ThumbnailOverlayWrapper> {
  children?: ReactNode;
  overlay: Overlay;
}
export interface ThumbnailThumbnailProps
  extends ComponentPropsWithoutRef<typeof StyledThumbnail> {
  src: string;
  currentTarget: HTMLElement;
}
export interface ThumbnailCloseProps
  extends ComponentPropsWithoutRef<typeof StyledClose> {
  children: ReactNode;
}

export interface ThumbnailOverlayContextProps {
  overlayState: [Overlay, React.Dispatch<React.SetStateAction<Overlay>>];
  isOpenState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}
