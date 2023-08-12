import { ComponentProps } from 'react';

import { QRCodeCanvas } from './style';

export interface QRCodeCanvasProps extends ComponentProps<typeof QRCodeCanvas> {
  url: string;
  size?: number;
  color?: string;
}
