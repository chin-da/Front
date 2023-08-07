import { useState } from 'react';

import { CounterProps } from './type';

import { Counter } from '.';

const storyMeta = {
  title: 'commons/Counter',
  component: Counter,
};

export default storyMeta;
export const Default = (args: CounterProps) => {
  const [value, setValue] = useState<number>(0);
  return (
    <>
      <Counter value={value} onValueChange={(e) => setValue(e)} {...args} />
      <br />
      value is : {value.toString()}
    </>
  );
};

Default.args = {
  isPositive: true,
};
