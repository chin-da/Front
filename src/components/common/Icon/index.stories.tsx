import type { Meta, StoryObj } from '@storybook/react';

import iconName from './Icons';

import Icon from '.';

const meta: Meta<typeof Icon> = {
  component: Icon,
  argTypes: {
    iconName: {
      options: Object.keys(iconName),
      control: { type: 'select' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    iconName: 'kakao',
  },
};
