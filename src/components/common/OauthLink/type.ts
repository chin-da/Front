import { ComponentProps } from 'react';

import { Link } from './style';

export interface OauthLinkProps extends ComponentProps<typeof Link> {
  type: 'kakao' | 'google';
  href: string;
}
