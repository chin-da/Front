import Icons from './Icons';
import { IconProps } from './type';
import * as S from './style';

const Icon = ({ iconName, hasCursor = 'true' }: IconProps) => {
  const IconComponent = Icons[iconName];

  return (
    <S.Icon hasCursor={hasCursor}>
      <IconComponent />
    </S.Icon>
  );
};

export default Icon;
