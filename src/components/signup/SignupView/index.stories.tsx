import type { Meta, StoryObj } from '@storybook/react';

import SignupView from '.';

const meta: Meta<typeof SignupView> = {
  component: SignupView,
};

export default meta;

type Story = StoryObj<typeof SignupView>;

export const Default: Story = {};
