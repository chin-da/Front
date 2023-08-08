import {
  memo,
  forwardRef,
  createContext,
  useContext,
  ChangeEvent,
  useEffect,
  useState,
  useMemo,
  useRef,
} from 'react';
import { includes, intersection, isEmpty } from 'lodash';

import {
  CheckboxGroupWarpper,
  StyledCheckbox,
  StyledCheckboxAll,
  CheckboxWarpper,
  StyledCheckboxBox,
} from './style';
import { CheckboxAllProps, CheckboxGroupProps, CheckboxProps } from './type';
import useHandler from './handler';
import { CheckBoxInactive } from '../Icon/Checkbox/Inactive';
import { CheckBoxActive } from '../Icon/Checkbox/Active';
export const CheckboxContext = createContext<
  [string[], React.Dispatch<React.SetStateAction<string[]>>]
>([
  [''],
  () => {
    return;
  },
]);

const Checkbox = memo(
  forwardRef<HTMLDivElement, CheckboxGroupProps>(
    ({ checked = [], onValueChange, children, ...restProps }, ref) => {
      const checkState = useState<string[]>(checked);
      const [value] = checkState;
      const checkboxRef = useRef<HTMLDivElement | null>(null);
      useEffect(() => {
        const checkboxItemElements = checkboxRef.current?.querySelectorAll(
          '.Checkbox-CheckboxItem',
        );
        if (checkboxItemElements) {
          const result = Array.from(checkboxItemElements).map(
            e => (e as HTMLInputElement).value,
          );
          const validValue = intersection(result, value);
          onValueChange && onValueChange(validValue);
        }
      }, [value]);

      const context = useMemo(() => checkState, [checkState]);
      return (
        <CheckboxContext.Provider value={context}>
          <CheckboxGroupWarpper {...restProps} ref={ref || checkboxRef}>
            {children}
          </CheckboxGroupWarpper>
        </CheckboxContext.Provider>
      );
    },
  ),
);

const CheckboxAll = memo(
  forwardRef<HTMLDivElement, CheckboxAllProps>(
    ({ children, childValues, size, ...restProps }, ref) => {
      const checkedListState = useContext(CheckboxContext);
      const [checkedList] = checkedListState;
      const { handleCheckBoxAll } = useHandler(checkedListState);
      const checked =
        !isEmpty(checkedList) &&
        intersection(checkedList, childValues).length === childValues.length;
      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        return handleCheckBoxAll(e, checked, childValues);
      };
      return (
        <StyledCheckboxAll ref={ref}>
          <CheckboxItem
            handleChange={handleChange}
            checked={checked}
            size={size}
            {...restProps}
          >
            {children}
          </CheckboxItem>
        </StyledCheckboxAll>
      );
    },
  ),
);

const CheckboxItem = memo(
  forwardRef<HTMLDivElement, CheckboxProps>(
    ({ children, value, size, handleChange, ...restProps }, ref) => {
      const checkedListState = useContext(CheckboxContext);
      const { handleCheckBox } = useHandler(checkedListState);
      const [checkedList] = checkedListState;
      const checked = restProps.checked || includes(checkedList, value);
      const handleChangeBox = (e: ChangeEvent<HTMLInputElement>) =>
        handleCheckBox(e, checked);
      return (
        <CheckboxWarpper ref={ref}>
          <StyledCheckboxBox>
            <StyledCheckbox
              type="checkbox"
              value={value}
              onChange={handleChange || handleChangeBox}
              css={{ display: 'none' }}
              className="Checkbox-CheckboxItem"
            />
            {checked ? (
              <CheckBoxActive size={size} />
            ) : (
              <CheckBoxInactive size={size} />
            )}
            {children}
          </StyledCheckboxBox>
        </CheckboxWarpper>
      );
    },
  ),
);

Checkbox.displayName = 'Checkbox';

export default Object.assign(Checkbox, {
  Item: CheckboxItem,
  All: CheckboxAll,
});
