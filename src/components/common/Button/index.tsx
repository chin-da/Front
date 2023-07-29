import * as S from './style';
import { ButtonProps } from './type';

const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;

  return <S.ButtonStyled {...rest}>{children}</S.ButtonStyled>;
};

export default Button;
