import { ComponentProps, ReactNode } from 'react';

import { FormRow } from './style';

export interface FormRowProps extends ComponentProps<typeof FormRow> {
  id: string;
  label?: ReactNode;
  isRequired?: boolean;
  bottomText?: string;
  errorMessage?: string;
  direction?: 'column' | 'row';
}
