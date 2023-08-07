import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { RadioWrapper, RadioGroupWrapper } from './style';

export interface RadioContextProps {
  nameState: [string, React.Dispatch<React.SetStateAction<string>>];
  valueState: [string, React.Dispatch<React.SetStateAction<string>>];
}

export interface RadioGroupProps extends ComponentPropsWithoutRef<typeof RadioGroupWrapper> {
  children: ReactNode;
  name: string;
  value: string;
  align?: 'vertical' | 'horizontal';
  onValueChange?: (e: string) => void;
}

export interface RadioProps extends ComponentPropsWithoutRef<typeof RadioWrapper> {
  value: string;
  children?: React.ReactNode;
}
