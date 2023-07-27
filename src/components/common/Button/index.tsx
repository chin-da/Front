import { ButtonHTMLAttributes } from 'react';
import { StyledButton, ButtonVariantsType } from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariantsType;

const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;

  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
