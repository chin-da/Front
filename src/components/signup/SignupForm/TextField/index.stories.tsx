import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import Button from '@/components/common/Button';

import TextField from '.';

const meta: Meta<typeof TextField> = {
  component: TextField,
};

export default meta;

type Story = StoryFn<typeof TextField>;

export const Default: Story = () => {
  const [value, setValue] = useState('테스트');

  return <TextField value={value} onChange={e => setValue(e.target.value)} />;
};

export const TextFieldWithButton: Story = () => {
  const [value, setValue] = useState('테스트');

  return (
    <TextField
      value={value}
      onChange={e => setValue(e.target.value)}
      sideContent={<Button>중복 확인</Button>}
    />
  );
};

export const TextFieldWithUnit: Story = () => {
  const [value, setValue] = useState('테스트');

  return (
    <TextField
      value={value}
      onChange={e => setValue(e.target.value)}
      sideContent={<span style={{ color: '#CACACA' }}>CM</span>}
    />
  );
};
