import { ComponentProps } from 'react';

import { Text } from './style';

export interface TextProps extends ComponentProps<typeof Text> {
  isRequired: boolean;
}
