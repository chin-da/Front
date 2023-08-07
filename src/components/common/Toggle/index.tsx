import { forwardRef, memo, createContext, useState, useEffect, useMemo, useContext } from 'react';

import { StyledIcon, StyledToggleItem, ToggleWrapper } from './style';
import { ToggleContextProps, ToggleItemProps, ToggleProps } from './type';

const ToggleContext = createContext<ToggleContextProps | null>(null);
const Toggle = memo(
  forwardRef<HTMLDivElement, ToggleProps>(
    ({ value = [], onValueChange, multiple = false, children, ...restProps }, ref) => {
      const multipleState = useState<boolean>(multiple);
      const valueState = useState<string[]>(value);
      const [checkedValue] = valueState;

      useEffect(() => {
        onValueChange && onValueChange(checkedValue);
      }, [checkedValue, onValueChange]);

      const context = useMemo(() => ({ multipleState, valueState }), [multipleState, valueState]);
      return (
        <ToggleContext.Provider value={context}>
          <ToggleWrapper ref={ref} {...restProps}>
            {children}
          </ToggleWrapper>
        </ToggleContext.Provider>
      );
    },
  ),
);

const ToggleItem = memo(
  forwardRef<HTMLButtonElement, ToggleItemProps>(({ value, text, icon, ...restProps }, ref) => {
    const context = useContext(ToggleContext);
    if (context == null) throw new Error('ToggleContext is null.');

    const { valueState, multipleState } = context;
    const [selected, setSelected] = valueState;
    const [multiple] = multipleState;
    const handleClick = () => {
      if (multiple) {
        selected.includes(value) ? setSelected(selected.filter((e) => e !== value)) : setSelected([...selected, value]);
      } else {
        selected.includes(value) ? setSelected([]) : setSelected([value]);
      }
    };
    return (
      <StyledToggleItem
        ref={ref}
        onClick={handleClick}
        value={value}
        selected={selected.includes(value)}
        {...restProps}
      >
        {typeof icon !== 'undefined' && <StyledIcon>{icon}</StyledIcon>}
        {text}
      </StyledToggleItem>
    );
  }),
);

Toggle.displayName = 'Toggle';

export default Object.assign(Toggle, {
  Item: ToggleItem,
});
