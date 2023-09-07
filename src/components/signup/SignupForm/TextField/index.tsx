import { TextFieldProps } from './type';
import * as S from './style';

const TextField = ({ sideContent, ...props }: TextFieldProps) => {
  return (
    <S.TextFieldWrapper>
      <S.TextField {...props} />
      <S.SideContent>{sideContent != null ? sideContent : null}</S.SideContent>
    </S.TextFieldWrapper>
  );
};

export default TextField;
