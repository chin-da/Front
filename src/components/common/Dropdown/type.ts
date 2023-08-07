export interface DropdownProps {
  children: React.ReactNode;
  placeholder?: string;
  onValueChange?: (e: string) => void | undefined;
}
export interface DropdownItemProps {
  value: string;
  text: string;
  icon?: React.ReactElement;
}
