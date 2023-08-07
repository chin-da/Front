import { ComponentPropsWithoutRef, ReactElement, ChangeEvent } from 'react';

import { StyledTextInput } from './style';

export interface TextInputProps extends ComponentPropsWithoutRef<typeof StyledTextInput> {
  value?: string;
  status?: 'error' | 'success' | 'reset';
  statusMessage?: string;
  disabled?: boolean;
  icon?: ReactElement;
  label?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
