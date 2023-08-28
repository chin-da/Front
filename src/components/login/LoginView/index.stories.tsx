import type { Meta, StoryObj } from '@storybook/react';

import LoginView from '.';

const meta: Meta<typeof LoginView> = {
  component: LoginView,
};

export default meta;

type Story = StoryObj<typeof LoginView>;

export const Default: Story = {
  args: {},
};
