import { createContext, forwardRef, memo, useContext, useEffect, useMemo, useState } from 'react';

import { RadioGroupWrapper, RadioWrapper, StyledLabel, StyledRadioItem, StyledRadioText } from './style';
import { RadioProps, RadioGroupProps, RadioContextProps } from './type';

const RadioContext = createContext<RadioContextProps | null>(null);
const Radio = memo(
  forwardRef<HTMLDivElement, RadioGroupProps>(
    ({ align = 'horizontal', onValueChange, value, name, children, ...restProps }, ref) => {
      const nameState = useState<string>(name);
      const valueState = useState<string>(value);
      const [checkedValue] = valueState;
      useEffect(() => {
        onValueChange && onValueChange(checkedValue);
      }, [checkedValue, onValueChange]);
      const context = useMemo(() => ({ nameState, valueState }), [nameState, valueState]);
      return (
        <RadioContext.Provider value={context}>
          <RadioGroupWrapper align={align} {...restProps} ref={ref}>
            {children}
          </RadioGroupWrapper>
        </RadioContext.Provider>
      );
    },
  ),
);

const RadioItem = memo(
  forwardRef<HTMLDivElement, RadioProps>(({ children, value, ...restProps }, ref) => {
    const context = useContext(RadioContext);
    if (context == null) {
      throw new Error('RadioContext is null.');
    }
    const { nameState, valueState } = context;
    const [name] = nameState;
    const [checkedValue, setValue] = valueState;
    const handleChange = (e: React.MouseEvent<HTMLInputElement>) => {
      const target = e.target as HTMLInputElement;
      setValue(target.value);
    };
    return (
      <RadioWrapper ref={ref}>
        <StyledLabel>
          <StyledRadioItem
            onChange={handleChange}
            name={name}
            value={value}
            checked={value === checkedValue}
            type="radio"
            {...restProps}
          />
          <StyledRadioText>{children}</StyledRadioText>
        </StyledLabel>
      </RadioWrapper>
    );
  }),
);

Radio.displayName = 'Radio';

export default Object.assign(Radio, {
  Item: RadioItem,
});
