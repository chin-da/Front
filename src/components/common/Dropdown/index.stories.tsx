import { useState } from 'react';

import { DropdownProps } from './type';
import { Spinner } from '../Icon/Loading/Spinner';

import Dropdown from '.';

export default {
  title: 'commons/Dropdown',
  component: Dropdown,
};
export const Default = (args: DropdownProps) => {
  const [value, setValue] = useState<string>('');
  return (
    <>
      <Dropdown
        {...args}
        placeholder={'select...'}
        onValueChange={(e) => {
          setValue(e);
        }}
      >
        <Dropdown.Item value="test1" text="테스트1" />
        <Dropdown.Item icon={<Spinner />} value="test2" text="테스트2" />
      </Dropdown>
      <br />
      value is : {value || 'empty'}
    </>
  );
};
Default.args = {};
