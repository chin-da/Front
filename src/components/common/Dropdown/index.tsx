import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import {
  createContext,
  forwardRef,
  memo,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { Text } from '../Text/Text';
import {
  DropdownItemWrapper,
  DropdownWrapper,
  StyledDropdown,
  StyledDropdownItemBox,
  StyledIcon,
  StyledDownArrowIcon,
} from './style';
import { DropdownItemProps, DropdownProps } from './type';

export const DropdownContext = createContext<
  [string, React.Dispatch<React.SetStateAction<string>>]
>([
  '',
  () => {
    return;
  },
]);
const Dropdown = memo(
  forwardRef<HTMLDivElement, DropdownProps>(
    ({ onValueChange, placeholder, children, ...restProps }) => {
      const refs = useRef<HTMLDivElement | null>(null);
      const dropdownState = useState<string>('');
      const [value] = dropdownState;
      const [isOpen, setIsOpen] = useState<boolean>(false);
      const [text, setText] = useState<string>('');

      useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
          const current = refs?.current;
          if (current && !current?.contains(e.target as Node)) {
            setIsOpen(false);
          }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [refs]);

      useEffect(() => {
        onValueChange && onValueChange(value);
      }, [value]);

      const handleClick = (e: React.MouseEvent) => {
        const target = e.target as HTMLDivElement;
        setText(target.innerText);
        setIsOpen(!isOpen);
      };

      const context = useMemo(() => dropdownState, [dropdownState]);
      return (
        <DropdownContext.Provider value={context}>
          <DropdownWrapper
            onClick={() => setIsOpen(!isOpen)}
            {...restProps}
            ref={refs}
          >
            <StyledDropdown>{text || placeholder}</StyledDropdown>
            {isOpen && (
              <StyledDropdownItemBox onClick={handleClick}>
                {children}
              </StyledDropdownItemBox>
            )}
            <StyledIcon>
              <StyledDownArrowIcon icon={faAngleDown} />
            </StyledIcon>
          </DropdownWrapper>
        </DropdownContext.Provider>
      );
    },
  ),
);

const DropdownItem = memo(
  forwardRef<HTMLButtonElement, DropdownItemProps>(
    ({ icon, text, value, ...restProps }, ref) => {
      const dropdownState = useContext(DropdownContext);
      const [, setValue] = dropdownState;
      const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.currentTarget as HTMLButtonElement;
        setValue(target.value);
      };
      return (
        <DropdownItemWrapper
          value={value}
          onClick={handleClick}
          {...restProps}
          ref={ref}
        >
          {typeof icon !== 'undefined' && <StyledIcon>{icon}</StyledIcon>}
          <Text>{text}</Text>
        </DropdownItemWrapper>
      );
    },
  ),
);

Dropdown.displayName = 'Dropdown';

export default Object.assign(Dropdown, {
  Item: DropdownItem,
});
