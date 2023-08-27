export const kakaoOAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${
  process.env.KAKAO_API_KEY
}&response_type=code&redirect_uri=${encodeURI(
  'http://localhost:3000/signup',
)}&prompt=login`;
