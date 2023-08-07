import { useState } from 'react';

import { SelectProps } from './type';

import Select from '.';

export default {
  title: 'commons/Select',
  component: Select,
};
export const Default = (args: SelectProps) => {
  const [value, setValue] = useState<string>('test2');
  return (
    <>
      <Select
        {...args}
        placeholder={'select...'}
        value={value}
        onValueChange={(e) => {
          setValue(e);
        }}
      >
        <Select.Item value="test1" text="테스트1" />
        <Select.Item prefix={<span>앞</span>} value="test2" text="테스트2" suffix={<span>뒤</span>} />
        <Select.Item value="test3" text="테스트3" />
      </Select>
      <br />
      value is : {value || 'empty'}
    </>
  );
};
Default.args = {};
