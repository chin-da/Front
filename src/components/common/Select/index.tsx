import { faAngleDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import {
  createContext,
  forwardRef,
  memo,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  Children,
  ReactElement,
  ReactNode,
  isValidElement,
} from 'react';

import { Text } from '../Text/Text';
import {
  SelectItemWrapper,
  SelectWrapper,
  StyledSelect,
  StyledSelectItemBox,
  StyledIcon,
  StyledDownArrowIcon,
  StyledSelectedMarkerIcon,
  StyledDecorateFix,
  StyledSelectItem,
} from './style';
import { SelectContextProps, SelectItemProps, SelectProps } from './type';

const SelectContext = createContext<SelectContextProps | null>(null);

const Select = memo(
  forwardRef<HTMLDivElement, SelectProps>(({ value = '', onValueChange, placeholder, children, ...restProps }) => {
    const refs = useRef(null);
    const findValueOfTextObj = Children.toArray(children).find((e: ReactNode) => {
      //value에 해당하는 children obj 찾기
      if (isValidElement(e)) {
        const element = e as ReactElement;
        return element.props.value === value;
      }
      return false;
    }) as ReactElement;
    const initText = findValueOfTextObj?.props?.text; //찾은 obj의 text값
    const textState = useState<string>(initText || '');
    const valueState = useState<string>(initText ? value : ''); //초기 value가 children obj에 없으면 초기화시킨다.
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedValue] = valueState;
    const [text] = textState;
    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        const current = refs?.current as any;
        if (current && !current?.contains(e.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [refs]);

    useEffect(() => {
      onValueChange && onValueChange(selectedValue);
    }, [selectedValue]);
    const context = useMemo(() => ({ textState, valueState }), [textState, valueState]);

    return (
      <SelectContext.Provider value={context}>
        <SelectWrapper onClick={() => setIsOpen(!isOpen)} className="select-SelectWrapper" {...restProps} ref={refs}>
          <StyledSelect>{text || placeholder}</StyledSelect>
          {isOpen && <StyledSelectItemBox className="select-SelectItemBox">{children}</StyledSelectItemBox>}
          <StyledIcon>
            <StyledDownArrowIcon icon={faAngleDown} />
          </StyledIcon>
        </SelectWrapper>
      </SelectContext.Provider>
    );
  }),
);

const SelectItem = memo(
  forwardRef<HTMLButtonElement, SelectItemProps>(({ prefix, suffix, text, value, ...restProps }, ref) => {
    const context = useContext(SelectContext);
    if (context == null) {
      throw new Error('RadioContext is null.');
    }
    const { valueState, textState } = context;
    const [selectedVal, setValue] = valueState;
    const [, setText] = textState;
    const handleClick = () => {
      setValue(value);
      setText(text);
    };
    const isSelected = selectedVal === value;
    return (
      <SelectItemWrapper value={value} onClick={handleClick} isSelected={isSelected} {...restProps} ref={ref}>
        <StyledSelectItem className={`select-SelectItem ${isSelected ? 'selected' : ''}`}>
          {typeof prefix !== undefined && <StyledDecorateFix>{prefix}</StyledDecorateFix>}
          <Text>{text}</Text>
          {typeof suffix !== undefined && <StyledDecorateFix>{suffix}</StyledDecorateFix>}
          {isSelected && <StyledSelectedMarkerIcon icon={faCheck} />}
        </StyledSelectItem>
      </SelectItemWrapper>
    );
  }),
);

Select.displayName = 'Select';

export default Object.assign(Select, {
  Item: SelectItem,
});
