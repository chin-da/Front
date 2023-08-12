import type { Meta, StoryObj } from '@storybook/react';

import QRCodeCanvas from '.';

const meta: Meta<typeof QRCodeCanvas> = {
  component: QRCodeCanvas,
};

export default meta;

type Story = StoryObj<typeof QRCodeCanvas>;

export const Default: Story = {
  args: {
    url: 'https://www.google.com',
  },
};
