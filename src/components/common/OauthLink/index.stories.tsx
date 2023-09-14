import type { Meta, StoryObj } from '@storybook/react';

import OauthLink from '.';

const meta: Meta<typeof OauthLink> = {
  component: OauthLink,
};

export default meta;
type Story = StoryObj<typeof OauthLink>;

export const Default: Story = {
  args: {
    children: '카카오로 로그인하기',
    type: 'kakao',
    href: 'https://kakao.com',
  },
};
