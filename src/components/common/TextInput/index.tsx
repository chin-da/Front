import {
  faCircleCheck,
  faCircleExclamation,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { memo, forwardRef, useState, useEffect, ChangeEvent } from 'react';

import { Text } from '../Text/Text';
import {
  StyledCustomIcon,
  StyledErrorIcon,
  StyledInputBox,
  StyledLabel,
  StyledMessage,
  StyledResetIcon,
  StyledSuccessIcon,
  StyledTextInput,
  TextInputWrapper,
} from './style';
import { TextInputProps } from './type';

function omitStyle(obj: TextInputProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { style, ...otherProps } = obj;
  return otherProps;
}

export const TextInput = memo(
  forwardRef<HTMLInputElement, TextInputProps>(
    (
      {
        onChange,
        value = '',
        disabled = false,
        status,
        statusMessage = '',
        icon,
        label,
        ...restProps
      },
      ref,
    ) => {
      const [, setIsDirty] = useState<boolean>(false); //input이 한번이라도 변경되면 true
      useEffect(() => {
        setIsDirty(true);
      }, [value]);
      const otherProps = omitStyle(restProps); //input에 직접주입 style 제외
      const handleReset = () => {
        const syntheticEvent = {
          target: { value: '' },
        } as ChangeEvent<HTMLInputElement>;
        onChange && onChange(syntheticEvent);
      };
      return (
        <TextInputWrapper {...restProps}>
          <StyledInputBox status={status} disabled={disabled}>
            {icon && <StyledCustomIcon>{icon}</StyledCustomIcon>}
            <StyledTextInput
              ref={ref}
              value={value}
              disabled={disabled}
              onChange={e => onChange && onChange(e)}
              {...otherProps}
            />
            {status === 'reset' && value.length > 0 && (
              <StyledResetIcon icon={faCircleXmark} onClick={handleReset} />
            )}
            {status === 'error' && (
              <StyledErrorIcon icon={faCircleExclamation} />
            )}
            {status === 'success' && <StyledSuccessIcon icon={faCircleCheck} />}
            <StyledLabel>{label}</StyledLabel>
          </StyledInputBox>
          {typeof status !== undefined && (
            <StyledMessage status={status}>
              <Text>{statusMessage}</Text>
            </StyledMessage>
          )}
        </TextInputWrapper>
      );
    },
  ),
);

TextInput.displayName = 'TextInput';
