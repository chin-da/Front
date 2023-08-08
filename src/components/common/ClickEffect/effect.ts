import { max } from 'lodash';

import { keyframes } from '@/styles/stitches.config';

import { getEffectProps } from './type';

export const getEffect = ({ bgColor, height, width }: getEffectProps) => {
  const maxValue = max([width, height]) || 1;
  return {
    spread: {
      run: () => {
        return keyframes({
          '0%': {
            transform: 'translate(-50%, -50%)',
            width: '1px',
            height: '1px',
            opacity: 0,
            background: bgColor,
          },
          '100%': {
            transform: 'translate(-50%, -50%)',
            width: maxValue * 2,
            height: maxValue * 2,
            opacity: 0.8,
          },
        });
      },
    },
  };
};
