import GoogleIcon from './GoogleIcon';
import KakaoIcon from './KakaoIcon';

const iconName = {
  kakao: KakaoIcon,
  google: GoogleIcon,
};

export type IconNames = keyof typeof iconName;

export default iconName;
