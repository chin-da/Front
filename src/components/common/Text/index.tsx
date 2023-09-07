import * as S from './style';
import { TextProps } from './type';

const Text = ({ isRequired, ...props }: TextProps) => {
  return (
    <S.Wrapper>
      {isRequired ? <S.RequiredSymbol>* </S.RequiredSymbol> : null}
      <S.Text {...props} />
    </S.Wrapper>
  );
};

export default Text;
