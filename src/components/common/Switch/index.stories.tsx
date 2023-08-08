import { useState } from 'react';

import { Switch } from '.';

const storyMeta = {
  title: 'commons/Switch',
  component: Switch,
};

export default storyMeta;
export const Default = () => {
  const [value, setValue] = useState<boolean>(true);
  return (
    <>
      <Switch value={value} onValueChange={e => setValue(e)} />
      <br />
      value is : {value.toString()}
    </>
  );
};

Default.args = {
  align: 'vertical',
};
