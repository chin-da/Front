import { ChangeEvent, ComponentPropsWithoutRef } from 'react';

import { StyledCheckboxBox } from './style';

export interface CheckboxGroupProps {
  checked?: string[];
  children: React.ReactNode;
  onValueChange?: (e: string[]) => void;
}

export interface CheckboxAllProps extends ComponentPropsWithoutRef<typeof StyledCheckboxBox> {
  childValues: string[];
  size?: number;
  children?: React.ReactNode;
}

export interface CheckboxProps extends ComponentPropsWithoutRef<typeof StyledCheckboxBox> {
  value?: string;
  size?: number;
  checked?: boolean;
  children?: React.ReactNode;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
