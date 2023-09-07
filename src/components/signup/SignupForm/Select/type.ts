import { ComponentProps } from 'react';

import { Select } from './style';

export interface SelectProps extends ComponentProps<typeof Select> {
  labels: string[];
  values: string[];
  error?: boolean;
  hasSideContent?: boolean;
}
