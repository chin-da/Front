import React, { useEffect, useRef } from 'react';
import { toCanvas } from 'qrcode';

import { QRCodeCanvasProps } from './type';
import * as S from './style';

const QRCodeCanvas = ({
  url,
  size = 128,
  color = '#000000',
  ...props
}: QRCodeCanvasProps) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (canvas) {
      toCanvas(canvas, url, { color: { dark: color }, width: size }, error => {
        if (error) console.error(error);
      });
    }
  }, [url, size, color]);

  return <S.QRCodeCanvas ref={ref} {...props} />;
};

export default QRCodeCanvas;
