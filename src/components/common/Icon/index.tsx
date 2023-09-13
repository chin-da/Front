import Icons from './Icons';
import { IconProps } from './type';

const Icon = ({ iconName, ...props }: IconProps) => {
  const IconComponent = Icons[iconName];

  return <IconComponent {...props} />;
};

export default Icon;
