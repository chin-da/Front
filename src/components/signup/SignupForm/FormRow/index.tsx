import { Children, ReactElement } from 'react';

import Text from '@/components/common/Text';

import * as S from './style';
import { FormRowProps } from './type';

const FormRow = ({
  id,
  label,
  isRequired = false,
  children,
  bottomText,
  errorMessage,
  direction = 'column',
  ...props
}: FormRowProps) => {
  const isError = Children.toArray(children).some(
    child => (child as ReactElement).props.error,
  );

  return (
    <S.FormRow {...props}>
      <S.Label htmlFor={id}>
        <Text isRequired={isRequired}>{label}</Text>
      </S.Label>
      <S.Container>
        <S.Content direction={direction}>{children}</S.Content>
        <S.BottomTextWrapper>
          {bottomText != null ? (
            <S.BottomText>{bottomText}</S.BottomText>
          ) : null}
          {isError ? <S.ErrorMessage>{errorMessage}</S.ErrorMessage> : null}
        </S.BottomTextWrapper>
      </S.Container>
    </S.FormRow>
  );
};

export default FormRow;
