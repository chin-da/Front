import Icon from '@/components/common/Icon';

import * as S from './style';
import { OauthLinkProps } from './type';

const OauthLink = ({ children, type, ...rest }: OauthLinkProps) => {
  return (
    <S.Link type={type} {...rest}>
      <Icon iconName={type} />
      <S.InnerText>{children}</S.InnerText>
    </S.Link>
  );
};

export default OauthLink;
