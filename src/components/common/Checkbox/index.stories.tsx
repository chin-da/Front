import { useState } from 'react';

import { Text } from '../Text/Text';

import Checkbox from '.';

const storyMeta = {
  title: 'commons/Checkbox',
  component: Checkbox,
};

export default storyMeta;

export const Default = () => {
  const [value, setValue] = useState<string[]>(['check1']);
  return (
    <>
      <Checkbox
        checked={value}
        onValueChange={(e: string[]) => {
          setValue(e);
        }}
      >
        <Checkbox.All childValues={['check1', 'check2', 'check3']}>
          <Text>전체 선택</Text>
        </Checkbox.All>
        <Checkbox.Item value="check1">
          <Text>체크1</Text>
        </Checkbox.Item>
        <Checkbox.Item value="check2">
          <Text>체크2</Text>
        </Checkbox.Item>
        <Checkbox.Item value="check3">
          <Text>체크3</Text>
        </Checkbox.Item>
      </Checkbox>
      value is : {value.toString()}
    </>
  );
};
