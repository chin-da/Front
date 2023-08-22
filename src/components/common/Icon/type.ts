import { ComponentProps } from 'react';

import { IconNames } from './Icons';
import { Icon } from './style';

export interface IconProps extends ComponentProps<typeof Icon> {
  iconName: IconNames;
}
