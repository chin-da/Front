import type { Meta, StoryFn } from '@storybook/react';
import { ChangeEvent, useState } from 'react';

import TextField from '../TextField';
import Select from '../Select';

import FormRow from '.';

const meta: Meta<typeof FormRow> = {
  component: FormRow,
  argTypes: {
    direction: {
      options: ['column', 'row'],
      control: { type: 'select' },
    },
  },
};

export default meta;

type Story = StoryFn<typeof FormRow>;

export const WrapperWithTextField: Story = args => {
  const [value, setValue] = useState({ test: '' });
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValue(prev => ({ ...prev, [name]: value }));
  };

  return (
    <FormRow {...args}>
      <TextField
        name="test"
        value={value.test}
        onChange={onChange}
        placeholder="테스트"
        error={value.test === ''}
      />
    </FormRow>
  );
};
WrapperWithTextField.args = {
  id: 'test',
  label: '텍스트필드 테스트',
  isRequired: false,
  bottomText: '텍스트필드 테스트 바텀 텍스트',
  errorMessage: '텍스트필드 테스트 문구를 입력해주세요',
};

export const WrapperWithSelect: Story = args => {
  const [value, setValue] = useState({ test: '' });
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setValue(prev => ({ ...prev, [name]: value }));
  };

  const TEST_OPTIONS = ['테스트1', '테스트2', '테스트3', '테스트4', '테스트5'];
  const TEST_VALUES = ['test1', 'test2', 'test3', 'test4', 'test5'];

  return (
    <FormRow {...args}>
      <Select
        name="test"
        labels={TEST_OPTIONS}
        values={TEST_VALUES}
        error={value.test === ''}
        onChange={onChange}
        placeholder="테스트 플레이스홀더"
      />
    </FormRow>
  );
};
WrapperWithSelect.args = {
  id: 'test',
  label: '셀렉트 테스트',
  isRequired: false,
  bottomText: '셀렉트 테스트 바텀 텍스트',
  errorMessage: '셀렉트 테스트 문구를 선택해주세요',
};

export const WrapperWithMultiContents: Story = args => {
  const [value, setValue] = useState({ test1: '', test2: '', test3: '' });
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setValue(prev => ({ ...prev, [name]: value }));
  };

  const TEST_OPTIONS = ['테스트1', '테스트2', '테스트3', '테스트4', '테스트5'];
  const TEST_VALUES = ['test1', 'test2', 'test3', 'test4', 'test5'];

  return (
    <FormRow {...args}>
      <Select
        name="test1"
        labels={TEST_OPTIONS}
        values={TEST_VALUES}
        error={value.test1 === ''}
        onChange={onChange}
        placeholder="테스트 플레이스홀더"
      />
      <Select
        name="test2"
        labels={TEST_OPTIONS}
        values={TEST_VALUES}
        error={value.test2 === ''}
        onChange={onChange}
        placeholder="테스트 플레이스홀더"
      />
      <Select
        name="test3"
        labels={TEST_OPTIONS}
        values={TEST_VALUES}
        error={value.test3 === ''}
        onChange={onChange}
        placeholder="테스트 플레이스홀더"
      />
    </FormRow>
  );
};
WrapperWithMultiContents.args = {
  id: 'test',
  label: '멀티컨텐츠 테스트',
  isRequired: false,
  bottomText: '멀티컨텐츠 테스트 바텀 텍스트',
  errorMessage: '멀티컨텐츠 테스트 문구를 선택해주세요',
};
