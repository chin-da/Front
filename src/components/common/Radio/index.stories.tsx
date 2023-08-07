import { useState } from 'react';

import { Text } from '../Text/Text';

import Radio from '.';

const storyMeta = {
  title: 'commons/Radio',
  component: Radio,
};

export default storyMeta;
export const Default = () => {
  const [value, setValue] = useState<string>('second');
  return (
    <>
      <Radio name={'test'} value={value} onValueChange={(e) => setValue(e)}>
        <Radio.Item value="first">
          <Text>Default1</Text>
        </Radio.Item>
        <Radio.Item value="second">
          <Text>Default2</Text>
        </Radio.Item>
      </Radio>
      <br />
      value is {value}
    </>
  );
};

Default.args = {
  align: 'vertical',
};
