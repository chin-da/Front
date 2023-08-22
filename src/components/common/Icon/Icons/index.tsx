import Google from './Google';
import Kakao from './Kakao';

const iconName = {
  kakao: Kakao,
  google: Google,
};

export type IconNames = keyof typeof iconName;

export default iconName;
