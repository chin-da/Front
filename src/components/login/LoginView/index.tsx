import { kakaoOAuthURL } from '@/constants/kakaoUrl';
import OauthLink from '@/components/common/OauthLink';

import * as S from './style';

export default function LoginView() {
  return (
    <S.Layout>
      <S.Title>로그인 후 서비스를 이용해보세요</S.Title>
      <S.LoginWrapper>
        <S.LoginText>로그인</S.LoginText>
        <S.SocialLoginWrapper>
          <OauthLink type="kakao" href={kakaoOAuthURL}>
            카카오로 로그인하기
          </OauthLink>
          <OauthLink type="google" href={''}>
            구글으로 로그인하기
          </OauthLink>
        </S.SocialLoginWrapper>
        <S.InfoWrapper>
          <S.Info>문의하기</S.Info>
          <S.Info>아이디 · 비밀번호 찾기</S.Info>
        </S.InfoWrapper>
      </S.LoginWrapper>
    </S.Layout>
  );
}
