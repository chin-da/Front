import { CSSProperties, ReactNode } from 'react';
type motion =
  | 'stretch_diagonal'
  | 'slide_left'
  | 'slide_right'
  | 'stretch'
  | 'slide_bottom';
export interface useOverlayEffectProps {
  isFullScreen?: boolean; //fullscreen 여부
  isTargetHide?: boolean; //target animation 시작시 숨김 여부
  isBodyLocked?: boolean; //오버레이 호출시 body 잠금 여부
  style?: CSSProperties; //css style
  openMotion?: motion; //animation
  closeMotion?: motion; //animation
  duration?: string;
  delay?: number;
  timing?: string;
  //open close 따로?
  //slide - direction, stretch, fade
}
export interface MotionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  target?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  wrapper?: any;
}

export interface OpenProps {
  render: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  targetEvent?: any;
}
