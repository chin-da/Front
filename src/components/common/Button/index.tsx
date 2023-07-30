import * as S from './style';
import { ButtonProps } from './type';

const Button = ({
  size = 'large',
  color = 'primary',
  ...props
}: ButtonProps) => {
  return <S.Button size={size} color={color} {...props} />;
};

export default Button;
