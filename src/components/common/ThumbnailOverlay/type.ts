import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { StyledClose, StyledThumbnail, ThumbnailOverlayWrapper } from './style';

export interface ThumbnailOverlayProps extends ComponentPropsWithoutRef<typeof ThumbnailOverlayWrapper> {
  children?: ReactNode;
  overlay: any;
}
export interface ThumbnailThumbnailProps extends ComponentPropsWithoutRef<typeof StyledThumbnail> {
  src: string;
  currentTarget: any;
}
export interface ThumbnailCloseProps extends ComponentPropsWithoutRef<typeof StyledClose> {
  children: ReactNode;
}

export interface ThumbnailOverlayContextProps {
  overlayState: [any, React.Dispatch<React.SetStateAction<any>>];
  isOpenState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}
