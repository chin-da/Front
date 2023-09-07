import type { Meta, StoryObj } from '@storybook/react';

import Text from '.';

const meta: Meta<typeof Text> = {
  component: Text,
  argTypes: {
    isRequired: {
      options: { type: 'toggle' },
    },
    children: {
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    isRequired: true,
    children: '테스트',
  },
};
