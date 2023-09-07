import type { Meta, StoryFn } from '@storybook/react';
import { ChangeEvent, useState } from 'react';

import Select from '.';

const meta: Meta<typeof Select> = {
  component: Select,
  argTypes: {
    hasSideContent: {
      option: [true, false],
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryFn<typeof Select>;

export const Default: Story = args => {
  const [value, setValue] = useState({ test: '' });
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setValue(prev => ({ ...prev, [name]: value }));
  };

  const TEST_OPTIONS = ['테스트1', '테스트2', '테스트3', '테스트4', '테스트5'];
  const TEST_VALUES = ['test1', 'test2', 'test3', 'test4', 'test5'];

  return (
    <>
      <Select
        name="test"
        labels={TEST_OPTIONS}
        values={TEST_VALUES}
        onChange={onChange}
        placeholder="테스트 플레이스홀더"
        hasSideContent={args.hasSideContent}
      />
      <p style={{ color: '#CACACA' }}>
        선택된 항목은 {value.test || 'placeholder'}입니다.
      </p>
    </>
  );
};
