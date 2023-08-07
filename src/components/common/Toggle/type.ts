import { ComponentPropsWithoutRef, ReactNode, ReactElement } from 'react';

import { StyledToggleItem, ToggleWrapper } from './style';

export interface ToggleContextProps {
  multipleState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  valueState: [string[], React.Dispatch<React.SetStateAction<string[]>>];
}

export interface ToggleProps extends ComponentPropsWithoutRef<typeof ToggleWrapper> {
  children?: ReactNode;
  multiple?: boolean;
  value?: string[];
  onValueChange?: (e: string[]) => void;
}
export interface ToggleItemProps extends ComponentPropsWithoutRef<typeof StyledToggleItem> {
  value: string;
  text?: string;
  icon?: ReactElement;
}
