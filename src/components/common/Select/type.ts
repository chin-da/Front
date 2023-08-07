export interface SelectContextProps {
  textState: [string, React.Dispatch<React.SetStateAction<string>>];
  valueState: [string, React.Dispatch<React.SetStateAction<string>>];
}

export interface SelectProps {
  children: React.ReactNode;
  placeholder?: string;
  value?: string;
  onValueChange?: (e: string) => void | undefined;
}
export interface SelectItemProps {
  value: string;
  text: string;
  prefix?: React.ReactElement;
  suffix?: React.ReactElement;
}
