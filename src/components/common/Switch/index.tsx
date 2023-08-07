import { forwardRef, memo } from 'react';

import { StyledInput, StyledSpan, SwitchWrapper } from './style';
import { SwitchProps } from './type';

export const Switch = memo(
  forwardRef<HTMLLabelElement, SwitchProps>(({ value = false, onValueChange, ...restProps }, ref) => {
    return (
      <SwitchWrapper ref={ref} {...restProps}>
        <StyledInput
          type="checkbox"
          checked={value}
          onChange={() => {
            onValueChange && onValueChange(!value);
          }}
        />
        <StyledSpan></StyledSpan>
      </SwitchWrapper>
    );
  }),
);

Switch.displayName = 'Switch';
