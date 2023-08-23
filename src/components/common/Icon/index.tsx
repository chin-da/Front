import Icons from './Icons';
import { IconProps } from './type';

const Icon = ({ iconName }: IconProps) => {
  const IconComponent = Icons[iconName];

  return <IconComponent />;
};

export default Icon;
