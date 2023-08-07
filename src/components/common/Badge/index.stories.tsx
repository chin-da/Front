import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';

import { BadgeProps } from './type';

import { Badge } from '.';

export default {
  title: 'commons/Badge',
  component: Badge,
};

export const Default = (args: BadgeProps) => (
  <>
    <Badge {...args}>{args.children}</Badge>
    <br />
    <br />
    <Badge {...args} icon={<FontAwesomeIcon icon={faKeyboard} />}>
      {args.children}
    </Badge>
    <br />
    <br />
    <Badge {...args} icon={<FontAwesomeIcon icon={faKeyboard} />} iconPosition="right">
      {args.children}
    </Badge>
  </>
);
Default.args = {
  size: 'md',
  children: '기본 배송지',
  variant: 'primary',
};
