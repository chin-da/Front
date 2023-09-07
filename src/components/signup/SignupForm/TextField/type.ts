import { ComponentProps, ReactElement } from 'react';

import { TextField } from './style';

export interface TextFieldProps extends ComponentProps<typeof TextField> {
  error?: boolean;
  sideContent?: ReactElement;
}
