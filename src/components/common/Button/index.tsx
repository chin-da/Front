import { ButtonHTMLAttributes } from 'react';
import * as S from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  S.ButtonVariantsType;

const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;

  return <S.ButtonStyled {...rest}>{children}</S.ButtonStyled>;
};

export default Button;
