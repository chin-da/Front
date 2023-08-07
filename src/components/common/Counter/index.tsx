import { forwardRef, memo, ChangeEvent } from 'react';

import { CounterWrapper, StyledButton, StyledInput } from './style';
import { CounterProps } from './type';

export const Counter = memo(
  forwardRef<HTMLDivElement, CounterProps>(({ value = 0, isPositive = true, onValueChange, ...restProps }, ref) => {
    const onDecrease = () => {
      if (isPositive && value === 0) return false;
      onValueChange && onValueChange(value - 1);
    };
    const onIncrease = () => {
      onValueChange && onValueChange(value + 1);
    };
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const target = e.target as HTMLInputElement;
      onValueChange && onValueChange(Number(target.value));
    };
    return (
      <CounterWrapper ref={ref} {...restProps}>
        <StyledButton onClick={onDecrease} />
        <StyledInput type="number" value={value} onChange={handleChange} />
        <StyledButton onClick={onIncrease} />
      </CounterWrapper>
    );
  }),
);

Counter.displayName = 'Counter';
